---
layout: post
comments: true
title : A lightweight way to make agents talk without paying for API usage
categories:
---
For the past few weeks I have been testing a simple workflow for making coding agents interact with each other without using APIs, SDKs, or extra dependencies.

The main constraint is this: use the subscription plans you already have, avoid paying for API usage, and keep the setup simple enough that you can try it in a few minutes.

This became useful to me for two reasons:

* I sometimes want to extend a Claude session by asking Codex or Gemini to review or continue part of the work.
* I also want to delegate work and get different model perspectives on the same draft, spec, or implementation, instead of relying on a single vendor's subagents.

This is not a polished framework. It is just a practical pattern that works well enough to test multi-agent workflows with very little setup.

To keep the examples simple, the rest of this post uses a draft as the running example, but the same pattern applies to specs, code changes, and review tasks.

### The basic idea

Instead of integrating models through APIs, you let one agent invoke another through the CLI in a way that preserves the previous conversation.

For the non-interactive pattern, the key is to resume the previous session instead of starting a new one every time.

The commands the agent should use are:

```bash
codex exec resume --last "prompt"
gemini -r latest -p "prompt"
```

The important part is that the agent resumes the previous interaction so it can keep iterating on the same topic instead of starting from zero on every call. In the Codex example, `--last` tells the CLI to continue the most recent session instead of opening a new one.

I keep the conventions for this pattern in this Claude memory file:

[external agent conventions](https://github.com/juanpabloaj/dotclaude/blob/main/memory/feedback_external_agents.md)

It contains the exact invocation rules and can be read and reused by other agents so they know how to keep the interaction going consistently.

That gives you a very lightweight loop:

1. One agent produces or reviews a draft.
2. That agent invokes another agent to critique it using resume mode.
3. The orchestrating agent reads the critique and decides the next step.
4. The agents keep iterating until the draft is good enough or the discussion stops adding value.

In practice, this lets you do things like:

* ask Codex to review a draft produced in Claude
* ask Gemini for an alternative reading of the same draft
* use one agent as the writer and another as the reviewer
* act as the human orchestrator, or delegate orchestration to one of the agents
* avoid manually copy-pasting each interaction between agents

One reason to do this across vendors is to get a different perspective, not just another pass from the same model family.

At a high level, the non-interactive flow looks like this:

```text
Claude writes a draft
-> Codex reviews it using resume mode
-> Claude revises the draft
-> Claude or Codex summarizes the disagreements
-> Repeat until the output is stable enough
```

This pattern is good when:

* you want the smallest possible setup
* you do not want extra dependencies
* you care more about fast experimentation than about observability

Its biggest limitation is visibility. You can make agents talk, but it is not always easy to inspect the interaction history, monitor progress, or understand what happened at each step.

It is also worth paying attention to permissions, especially if one agent is invoking another autonomously.

### The more visible pattern: tmux

If you want better visibility, `tmux` is the better option.

This version depends on having `tmux` installed, but in exchange you can see what each agent is doing in separate panes or sessions and capture their output more easily.

A few commands the agent can use in that workflow are:

```bash
# Create a dedicated tmux socket and start an isolated session
SOCKET="${TMPDIR:-/tmp}/claude-tmux-sockets/claude.sock"
mkdir -p "${TMPDIR:-/tmp}/claude-tmux-sockets"
tmux -S "$SOCKET" new -d -s "descriptive-name"
```

```bash
# Send a prompt literally, then submit it with Enter
tmux -S "$SOCKET" send-keys -t target -l -- "$cmd"
sleep 1
tmux -S "$SOCKET" send-keys -t target Enter
```

```bash
# Capture recent pane output without line wrapping artifacts
tmux -S "$SOCKET" capture-pane -p -J -t target -S -200
```

```bash
# Attach to the running session to monitor the agents directly
tmux -S "$SOCKET" attach -t session-name
```

I keep the conventions for this pattern in this Claude memory file:

[tmux multi-agent patterns](https://github.com/juanpabloaj/dotclaude/blob/main/memory/feedback_tmux_agents.md)

It describes the socket, monitoring, and pane-management conventions, and other agents can read it as a reusable reference.

This pattern is better when:

* you want to watch the interaction as it happens
* you want to run two or more agents in parallel
* you want easier debugging when the workflow becomes messy

### The main caveat

I think there is real value in getting multiple perspectives from different models, but I am still not fully convinced that more agent-to-agent interaction always pays off.

LLMs are very good at producing plausible, well-written text. When they start talking to each other, they can produce a lot of it.

So the open question is not whether they can reach consensus. They can.

The harder question is whether the final result is actually better, or whether it is just a more polished hallucination produced after a longer chain of interactions.

That is why I currently see this as a useful workflow to test, not as a universal solution.

### In summary

If you already use subscription-based coding agents, the simplest way I have found to make them collaborate without paying for API usage is:

* use non-interactive calls with resume when you want simplicity
* use `tmux` when you want visibility and tighter control

That is enough to build small multi-agent workflows across tools like Claude, Codex, and Gemini without much setup.
