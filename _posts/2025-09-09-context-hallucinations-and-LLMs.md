---
layout: post
comments: true
title : Context, Hallucinations, and How LLMs Are Changing Development
categories:
---
Taking advantage of this recent OpenAI post on hallucinations:

https://openai.com/index/why-language-models-hallucinate/

I will summarize my experience from the last six months using LLMs intensively in a development context. By “intensively,” I mean all day, multiple times a day, comparing different LLMs, and so on.

I will focus on two key concepts when working with LLMs: context and hallucinations, and how they change the way we work in development.

Most of what I share here is based on my own opinions and lessons learned during this period.

### Context size matters

In my view, the turning point for LLMs came in late March, when Gemini 2.5 Pro was released for free with a context size of 1M tokens.
For the first time, you could feed a large portion of an entire project to an LLM—not just fragments or chunks.
When the model has access to the full project, it can better infer overall behavior. Previously, the only option was to provide smaller parts to avoid filling the context, which forces the model into assumptions—and eventually, hallucinations. This leads to the second point.

### Trust no LLM completely

Right now, you cannot fully trust what an LLM produces. There’s no guaranteed way to know whether its responses are accurate or to what degree they are true. Ignoring this is a critical mistake.
You need independent methods to validate responses, and those methods should not be built by the LLM itself—at least not by the same instance.

### Change in the development process

In software development, the TDD (Test-Driven Development) methodology is well known.
It starts with defining validations—what you expect to get—and writing the tests. This forces the developer to clearly understand the requirements, because only someone with that clarity can define a validation scenario in words and translate it into an automated test.

The flow is:

Write a test → The test fails → Modify the code → The test passes → Iterate.

Earlier, I mentioned hallucinations. One way to reduce and catch them—adapting the TDD approach—is as follows (without going too deep into details):

* Be clear about what you need and precise in the description you give to the LLM, including scenario definitions. This requires human time and focus.
* Provide the information to the LLM and ask it to restate in its own words what you asked for, adding examples. Then you can verify, based on those examples, that you are aligned.
* Have or build ways to validate the LLM’s output; this is the only way to detect hallucinations. In particular, use the scenarios defined in the first step.

Leveraging LLMs with larger context windows is also important, as they rely less on assumptions and can use other parts of the project as reference.

### In summary
Yes, LLMs change and accelerate the way we work, but at this point, they are still like an assistant that needs a detailed and precise definition of what is expected, plus well-defined validation criteria for the results. Both require time and effort.

In my opinion, how seriously you take this last point will determine how reliable your solution will be. There are no magic solutions.
