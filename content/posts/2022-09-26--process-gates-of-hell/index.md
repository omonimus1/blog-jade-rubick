---
title: Why are process gates the hellish spawn of evil you should avoid at all costs?
tags: ["delivery", "scaling", "change-management", "design", "velocity", "complexity"]
cover: process-gates.jpg
author: Jade Rubick
discussionId: "process-gates"
description: "Describes the process gates, a common management trap. Managers use them to fix situations, but they often have the opposite of intended effect. Describes alternatives to process gates."
---

Today, I’d like to talk about a common mistake leaders make. Let’s see if you can spot the pattern:

* Engineering is shipping too many bugs, so you bring in a QA team that reviews everything before it goes out to production.
* There has been a history of making poor architectural decisions, so you put in place an architecture review. 
* The team keeps shipping completely unusable UIs, so you add a designer review step before anything can ship to production.
* The team keeps having cost overruns in AWS, so you have a central team that controls all infrastructure code. 
* People are doing a shitty job with code reviews, so you add a group of the most senior people who are the only people able to merge PRs, and they review everything before it goes out.

<re-img src="process-gates.jpg"></re-img>

As a leader, you are a designer. Many times you’ll face organizational challenges that will require you to design solutions. The name for what you’re doing in all of these examples is adding “process gates”. (If this was a TV show, I’d have scary music play every time you read the word “process gates”)

## What are the problems with process gates?

Like any management technique, process gates are a tool you can use. But they have consequences that tend to be much worse than most people imagine. 

The issues with process gates are many:

1. Process gates tend to persist over time
2. Process gates increase cycle time, and that is a very, very bad thing.
3. Process gates tend to proliferate into a death spiral (things aren’t working, add more)

### Process gates tend to persist over time

One of the dangers of process gates is that they’re difficult to remove. Because they’re usually done as a response to something bad happening, removing them feels scary. Removing a process gate is usually seen as reintroducing the original pain. So they persist, and tend to cause subtle damage over time. 

<re-img src="eternal-gate.png" width="50%"></re-img>

### Process gates increase cycle time, and that is very bad

Most engineering organizations focus on speed, but they should be focused on cycle time. Cycle time is the primary indicator of how successful your engineering organization will be. Or at least this is true for 99% of modern software-based product development. 

This is an important concept, so if you don’t believe this already, please read my post on this topic: [What can air combat can teach us about software project failure](https://www.rubick.com/engineering-leaders-should-obsess-over-feedback-loops/)?

<re-img src="gate-of-slowing.png" width="50%"></re-img>

The reason process gates increase cycle time is that they’re adding steps to a process. Mathematically, there is no way they cannot increase cycle time. So what that means in practice is, they do something like the following:

* Increase the amount of time before a PR is merged.
* Increase the amount of time before a release goes out.
* Increase the amount of time before an infrastructure change can be made.
* Increase the amount of time before an architectural design can get approval.

The problem with these cycle times is that they’re also difficult to see. They tend to accumulate over time, and not be the obvious problem to why engineering is slowing down or delivering less. And they result in an overall less effective, less responsive organization.

Another way process gates increase cycle time is that they often increase the amount of passing back and forth between people. For example, if you add a QA step before work goes to production, you’re adding a whole set of work that needs to go back and forth before things can be released. While this may seem desirable, what it often accomplishes is to create a whole new category of work that bounces between teams. This work has its own latency, because it may only be reviewed once a day. This can add days and days of cycle time to releasing code. 

### Process gates tend to proliferate into a death spiral

When cycle time increases, the predictable result is that batch size increases. So this also means you have larger chunks of work moving through the system, instead of smaller chunks of work. This decreases the flow of your overall product development, and results in lower quality, less responsive work overall. 

So the thing you’re trying to do (improve quality, for example), _tends to actually get worse_ as a result of adding a process gate for quality. 

<re-img src="death-spiral.png" width="50%"></re-img>

There can also be [moral hazard](https://en.wikipedia.org/wiki/Moral_hazard) issues with process gates. If the development team is handing off their work for testing, then they are less on the hook for quality themselves. Again, this can result in things backfiring, and actually getting worse instead of better.

## What should you do instead of process gates?

So instead of process gates, you should reach for alternatives:

1. Temporary or narrowly focused process gates
2. Automation and alerting
3. Non-gated checks
4. Do it in the same cycle
5. Learn more from failure

### Make your process gates temporary or narrowly focused

It is possible to use process gates responsibly. The best way to do so, is to make them temporary or narrowly focused.

Temporary process gates are something you use to get people to pay attention to things. Or you can use them so you can be made aware of exceptions that might show your process changes are inadequate. 

My favorite example of this is as a method for moving to services. If you have a long-term initiative to move your organization to services, it can be quite painful at first to use services. The most elegant way to handle a servicification initiative is to spin up a team completely focused on eliminating the obstacles to services. Their job is to always work on the thing that is most standing in the way of people using services in new projects. The process gate to add is to say that all teams that are planning work need to share any pain points that are preventing them from doing work as services rather than in the monolith. 

Note that in this example, the process gate is very lightweight. You’re making people think about these things, and share some information with the team that is working on services. But you’re not truly making a process gate, because they’re not being blocked by this team. So in a lot of ways, it’s not even a real process gate. 

Also note that it is temporary in nature. Over the course of time, this process gate should become less and less necessary. As services become easier, this process gate becomes less relevant. 

And also note that this process gate is helping this team focus its efforts in reducing cycle time. So it’s counterbalancing a lot of the disadvantages of typical process gates. So this is a nice example of how to do it right.

<re-img src="narrow-gates.png" width="50%"></re-img>

You can also focus on making your process gate very narrowly scoped. If you have a high number of problematic PRs getting merged, you might want to have all PRs go through a set of experienced reviewers, for example. You can flip it around so it’s much more narrowly scoped: people go through a probationary period for a few months where other people review their PRs, and then they graduate to being able to merge them for peers. 

For example, you have people tag their PR based on the risk level that it will cause problems. High risk PRs can be reviewed by the most experienced team members. One of the advantages of doing this narrow scoping is that you avoid _some_ of the problems with process gates. If the most experienced team members have to review everything, they’ll be overwhelmed and everything will take much longer. If it’s narrowly scoped, they’ll have less overall burden, so the increase in cycle time will be more modest. 

A common way to scope down a process gate for PRs, for example, is for changes that involve a database migration to receive more scrutiny, because they can be more devastating when things go wrong.

### Use automation and alerting instead

One of the better ways to avoid process gates is to use alerting or automation instead of process gates.

<re-img src="alert-automation.png" width="40%"></re-img>

So instead of reviewing PRs for their impact on infrastructure costs, alert when the infrastructure costs spike. Run automated QA tests to make sure functionality isn’t breaking, instead of having a human do it. It can be helpful to consider: “how could I alert on this instead of have an extra step for it”.

### Use non-gated checks

Automation and alerting are two ways to make your checks non-gated. Non-gated checking is when the checks happen, but in a way that doesn’t block things from moving forward. 

<re-img src="non-gate.png" width="80%"></re-img>

For example, a security team might do automated security checks in production, instead of adding a step before things go out to production. This is a non-gated check. If the security checks find a problem, you can quickly roll things back to a safe checkpoint. Or have a well defined way to quickly resolve the issue within a certain SLA. 

This is basically pipelining, and it's why our computers are so fast. 

The challenge with non-gated checks is that they work best when you have low cycle times in your engineering organization. A team that can notice a significant problem and push out a fix within a few hours can use non-gated checks much easier than a team that takes a few weeks to push out a change. So moving to this tends to go hand in hand with other efforts to reduce cycle time.

### Do it in the same cycle

Another way to avoid process gates is to do it in at the same time as other work. So you can have a QA person that works side by side with engineering, instead of reviewing their work afterwards. You can have an SRE that is working like any other member of the team, but has the expertise on operational matters. Having them work side by side, they can often respond to requests quickly, or even be pairing on the same part of the code together. Embedding expertise so that the work is done side by side is often an effective way around process gates. 

<re-img src="do-it-together.png" width="50%"></re-img>

This type of working together at the same time is something that takes a while to get right. You’ll face resistance and it won’t feel natural at first. But it’s a competency worth building. Have your designers and QA and ops people working more closely with your engineering team. You may be surprised at the results!

You can also employ peer to peer options. So instead of having a centralized team reviewing PR requests, have their peers on the same team do so. 

### Learn more from failure

Finally, process gates are usually a response to failure. Something bad happens, so you add a process gate in response. 

This can be the result of a culture where mistakes and quality problems are to avoided. Sometimes, I’ve found that it can be useful in these cases to try and embrace the failure, because the avoidance is part of the problem. 

So when you encounter a problem, try to approach it with curiosity instead of blame. Why did this happen? Is it likely to happen again? How bad is it really? 

<re-img src="learn-from-failure.png" width="50%"></re-img>

Try to dig in and see if there are ways you can make this class of problem less prominent that don’t require process gates. Is it training for this individual? Is it better observability? 

Sometimes the thing to be learned from a failure is that you have a problem that shouldn't be solved with process. For example, you might find that you don't have enough senior engineers on your teams. 

Adding process gates is usually not the best solution to failure. But failure is often a good way to learn a lot about how your organization works, and with curiosity and imagination, you can often come up with ways it can improve your team. 

## Thank yous

Image by <a href="https://pixabay.com/users/ulleo-1834854/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3726995">Ulrike Leone</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3726995">Pixabay</a>.