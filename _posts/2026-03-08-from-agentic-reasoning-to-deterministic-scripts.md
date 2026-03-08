---
layout: post
comments: true
title : From Agentic Reasoning to Deterministic Scripts
categories:
---
Trying to make AI agents progressively cheaper, faster, and more auditable over time.

## The Overhead of Routine Tasks

AI agents like Claude, Codex, OpenClaw, or any of their derivatives are remarkably capable tools. They can explore a repository, diagnose a bug, write tests, execute commands, and produce results that previously required hours of human work. All of this is possible because every task goes through an LLM: the agent receives an instruction, reasons about it, chooses tools, executes them, observes the result, and repeats.

That loop is flexible and powerful. It is also inherently expensive: each step consumes tokens, introduces latency, and produces outputs that can vary between runs. For routine tasks- cleaning a build directory, updating dependencies according to a known policy, generating a report with a fixed format- this level of reasoning is overkill. The agent is "thinking from scratch" every single time.

The problem isn't that agents are bad. The problem is that we are using our most powerful- and most expensive- instrument for everything, indiscriminately.

## A developer before automating

There is a pattern any developer will recognize. Before writing a script:

1. You perform the task manually, paying attention, understanding each step and its edge cases.
2. You iterate, fix errors, and refine the process.
3. You identify the routine part: the steps that repeat without meaningful variation.
4. You automate that part, and reserve human judgment for the edge cases.

This pattern appears in other contexts outside programming- the way a process matures from deliberate effort to fluid execution. What I want to propose here is whether AI agents could follow a similar trajectory.

## A task maturation cycle

What I propose is an idea of how the lifecycle of a task could be structured within an agentic system:

Phase 1 - Deliberative Execution: The agent receives a new or ambiguous request. It solves it using full LLM reasoning. Unlike a script, the agent doesn't just execute steps: it reasons about them. The log it produces can be qualitatively richer than a standard structured log- it can include the explicit reasoning behind each decision, the tools considered and discarded, the observed conditions, and the ambiguities it resolved. That richness is not a byproduct; it is the most valuable raw material for the subsequent phases.

Phase 2 - History Analysis: A separate process analyzes the repository of logs or traces of tasks performed by agents. It looks for tasks that repeat with high similarity: same steps, same context, same expected outcome. It identifies stable execution patterns. This analysis- especially for detecting semantic equivalence between tasks described in different ways- might require an LLM. The irony is intentional: we invest LLM reasoning now to reduce LLM reasoning in the future. The hypothesis is that this cost, when run in batch and periodically, would amortize if the number of executions routed to the resulting script is high enough- something that depends on the volume of repetitive tasks in each specific context.

Phase 3 - Automation Generation: When a task crosses a certain threshold of recurrence and stability, the system can propose- or directly generate- a deterministic script that replaces the LLM loop for that specific case.

Phase 4 - Smart Routing: When a new request comes in, the system first evaluates if there is a validated automation that covers it. If so, it executes the script. If not, it falls back to the deliberative agent.

If the cycle works as proposed, over time the proportion of tasks requiring LLM reasoning would decrease. The system would trend toward being faster, cheaper, and more predictable, without losing the ability to handle the novel. The cost of the analysis in Phase 2 is the price of that improvement- not a contradiction to the argument, but a necessary part of it.

## Beyond cost

The reduction in token costs is the most obvious benefit, but not the most important one.

* Auditability: A deterministic script has verifiable behavior. You can read it, test it, and do code reviews on it. An LLM reasoning loop produces results that are hard to audit systematically.
* Operational Reliability: In production environments, variability is a risk. For known tasks, determinism is not a limitation: it is an advantage.
* Energy Footprint: Every call to an LLM has an energy cost. Replacing recurring calls with scripts that run locally or on lightweight infrastructure could reduce that footprint.
* Response Speed: A script runs in milliseconds. An LLM reasoning loop can take seconds or minutes depending on the complexity and the model's latency.

## grep is not enough

Detecting recurrence in text logs is relatively simple with tools like grep or ripgrep. But that only works for exact or near- exact matches. The interesting problem here is semantic similarity: two tasks might be described with different words, executed in slightly different contexts, and yet be functionally equivalent.

Reliably identifying that equivalence requires more than textual search: it requires a semantic indexing layer over the execution history. That is a non- trivial technical problem, and I am deliberately leaving it out of scope for this post. It is, in itself, the most interesting component of the proposed system, and deserves separate treatment.

Tools like LlamaIndex or PageIndex seem to be interesting alternatives to explore for what is described in Phase 2.

## What this is not

To avoid misunderstandings:

* This is not an agent that "learns" in the sense of retraining. I am not talking about fine- tuning or updating weights. The learning here is purely behavioral: the system observes what works and codifies it as a procedure.
* This is not about replacing LLM agents. Deliberative agents remain necessary for everything new, ambiguous, or exceptional. The proposal is complementary, not a substitute.

## Conclusion

Current AI agents are deliberative tools that solve almost everything through reasoning. That is powerful, but it might not be the desirable end state. A more mature system could recognize when a task no longer requires reasoning, and execute it more directly.

The path forward isn't just building better models for routine tasks. It is building the infrastructure that allows LLM reasoning to be the starting point, not the permanent destination.

The logs that agents already produce today are the raw material for this. The question is whether someone will build the pipeline that converts them into automations.

---

A brief note on sources: This text is the sum of several influences worth naming: the emergence and popularization of OpenClaw and its derivatives; the economic and energetic cost of tokens; the ideas from Kahneman's Thinking, Fast and Slow regarding deliberative and automatic processing modes; the way a developer builds automations by iterating manually first; the moment when a repeated request to an agent starts sounding exactly like a bash script.

The structure of this text was reorganized with the help of LLMs.
