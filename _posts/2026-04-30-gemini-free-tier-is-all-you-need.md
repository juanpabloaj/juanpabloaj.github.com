---
layout: post
comments: true
title : Gemini free tier is all you need
categories:
---

## TL;DR

> If your project makes a small number of LLM calls per day and can tolerate failures, Gemini's free tier is probably enough.

I say this after using it for a few weeks in some personal automations, not as a general recommendation.

The title is deliberately exaggerated. For a specific class of problems: personal scripts, low-volume prototypes, and LLM steps inside a mostly deterministic pipeline, the free plan is enough, and it has one valuable property: it lets you test without turning every experiment into another recurring cost.

## Where I use Gemini free tier

Before the theory, the concrete examples. These are two automations I have been testing with the free tier:

* [hacker-news-summary](https://github.com/juanpabloaj/hacker-news-summary): checks the Hacker News front page, filters posts by score, summarizes the article and the discussion, and publishes the result to Telegram. The comment-thread summary, when a thread has dozens or hundreds of comments, is the part I use the most.
* [youtube-feed](https://github.com/juanpabloaj/youtube-feed): reads YouTube channel RSS feeds, retrieves transcripts, summarizes and classifies them, and sends to Telegram only the videos that seem valuable enough. I use it to avoid watching 10+ minute videos that can be summarized in a couple of sentences.

Both share the same pattern: the LLM handles one bounded step, usually summarization or classification. Everything else (fetching, persistence, scoring, duplicate control, retries, message limits) lives in normal code. That is how a free quota becomes enough.

## Assumptions

The free tier can be enough if:

* you are in the prototype stage;
* you do not expect thousands of users soon;
* you are not building a critical service;
* you want to automate a repeated task for yourself;
* you have a small budget;
* you do not have a machine suitable for running local models;
* you prefer a good-enough answer over spending time training, tuning, or deploying your own infrastructure.

In my case, the day-to-day of a fairly normal life makes many tasks routine enough that I do not see much value in an autonomous agent reinterpreting the whole flow on every execution. I also do not want to burn thousands of tokens per day if the actually ambiguous part of the process fits in one or two calls.

Under those assumptions, Gemini free tier is useful because the starting path is short: open Google AI Studio, create an API key, write a minimal script, and measure whether the use case is worth keeping.

## What the free tier is and is not

To use Gemini for free, go to [Google AI Studio](https://aistudio.google.com/), create an API key, and export it as `GEMINI_API_KEY`. The key is associated with a Google Cloud project. As long as you do not enable billing, the project stays on the free tier. You do not need to enter a credit card to start.

The important part is quota. Google mainly measures limits in:

* RPM: requests per minute.
* TPM: tokens per minute.
* RPD: requests per day.

The numbers depend on the model, the project, and the tier. Public documentation is useful as a reference, but the source that matters for your case is the project's rate-limit dashboard:

[https://aistudio.google.com/rate-limit](https://aistudio.google.com/rate-limit)

As of April 30, 2026, in my project with billing disabled, the AI Studio dashboard shows this for Gemini 3.1 Flash Lite preview: 15 RPM, 250 TPM, 500 RPD. My practical recommendation is simple: choose the cheapest or most available model that solves your task, and write the program so it still works when Gemini occasionally fails.

During the first tests, validate in the dashboard that you are using the right project and that it is still on the free tier, to avoid unexpected costs.

## The non-monetary cost

Sometimes you will get quota errors, timeouts, or messages saying the model is under heavy load.

For the use cases described above, in my opinion those errors are acceptable; you just need to account for them in the design: backoff, a hard limit on calls per execution, and fallback.

## The pattern that makes the quota enough

The most expensive way to use an LLM is to ask it to own the whole flow on every execution. The cheapest way is the opposite:

1. Identify a repeated task.
2. Write it as a mini design document before touching code.
3. Separate deterministic steps like fetch, parse, retries, persistence, and formatting from ambiguous steps like summarizing, classifying, or extracting.
4. Solve all deterministic parts locally.
5. Leave the LLM only the stages where it actually helps.
6. Log enough information to reconstruct what happened when something fails (descriptive logs, persisted intermediate states, etc.).

Limited quota naturally pushes in that direction. When every call consumes part of a small budget, it stops making sense to ask the LLM to do what an `if` handles better.

This is related to an idea I wrote about before in [From Agentic Reasoning to Deterministic Scripts](/2026/03/08/from-agentic-reasoning-to-deterministic-scripts/): agents and LLMs are useful for discovering or implementing processes, but once the process is clear, it is better to replace as much as possible with deterministic code.

## When I would not use it

I would not use Gemini free tier for:

* services or tasks with paying users;
* tasks with latency or availability requirements;
* sensitive data, proprietary code, or customer information;
* processes that need a stable and predictable daily quota;
* products where a summarization, classification, or extraction error has serious consequences;
* systems where the cost of an interruption is higher than paying for an API with better guarantees.

## Conclusion

"Gemini free tier is all you need" is not true in general. It is true for a fairly common category of problems: personal automations, small prototypes, low-volume scripts, and mostly deterministic pipelines where the LLM covers one bounded step.

This post is a practical note about something that has worked for me. If it is useful to you, leave a comment in the Hacker News thread where I will publish it; that feedback helps me decide whether it is worth writing more short notes like this.

## References

* [Gemini API rate limits](https://ai.google.dev/gemini-api/docs/rate-limits)
* [Using Gemini API keys](https://ai.google.dev/gemini-api/docs/api-key)
