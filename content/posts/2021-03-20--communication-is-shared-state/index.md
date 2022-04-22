---
title: Glue your happy brains together with shared state
tags: ["communication", "remote-work"]
cover: serialization.jpg
author: Jade Rubick
discussionId: "communication-is-shared-state"
description: "Communication is analogous to sharing state in computer systems. Describes how the same principles apply between both."
---

Operating under a shared reality is a competitive advantage, but most teams share state poorly. Let's talk about gluing brains together!

<re-img src="serialization.jpg"></re-img>

## Computers and people both have "state"

In computer systems, state is information that is remembered between interactions. A _stateful service_ is one that keeps track of things that have happened before. Databases are where we typically store state, and we try to design our services so they don’t keep track of state themselves, but keep it in a central place. 

People, as autonomous beings, require state. The way our thinking works literally requires it. So one of the great challenges of all organizations is distributing a shared understanding of reality: the organizations challenges, goals, and activities. 

## You don't copy state, you serialize it

With computer systems, and with people, you can’t just copy state around. I can’t clone my brain, or even a part of my brain, and give it to you for you to understand perfectly what I’m thinking. So in computer systems, we serialize information to put it in a format that can be transmitted between machines.

Human communication is also serialized. We have to put what is in our minds into words or writing to share it with others. This is necessarily imperfect. It is actually impossible for us to express our internal state to each other, so we have to choose what to serialize, and create a facsimile of what we have in our minds. 

## Human serialization is lossy, too

Our serialization is lossy -- people listen poorly, or use pre-existing state and biases as they listen. And we similarly are poor at serializing our thoughts to give to other people. The protocols we use for communication are ill-defined, and ambiguous. And just like computer systems, they require a lot of processing power to transfer even simple messages back and forth.

## Errors compound the more people you're dealing with

This is hard enough with two humans. But as we increase the number of people involved in any group of humans that need a common understanding of something, you multiply the number of people involved. Each is deserializing that information in a different way.

What you’ll often find is that people use error-correction algorithms to verify the messages we hear. After a meeting, you’ll talk over what you heard and double check your understanding. And then the two of you will try and figure out what you each thought about what you heard.

One of the reason one on one conversations can be inadequate in a remote setting is that when you’re trying to get ten people on the same page about something, and the state is changing as you problem-solve the situation, it’s impossible for those ten people to all have the same understanding of the problem, or proliferating and evolving solutions. 

## In-person teams share state more easily

It is easier for in-person teams to “share state”. When you sit next to someone, you are exposed to the same information, and it’s easier to build a shared understanding. This is a prime advantage of colocated teams, working in the same time zone, on the same project. 

## Distributed teams often struggle with sharing state

On distributed teams, we have to take extra care to share state. I’ve learned this the hard way -- we have to be incredibly explicit in our communication with each other. On distributed teams, it feels like things are the same, but the variance in deserializing information is much higher, so it requires a lot more explicit communication. One particularly bad example of this was when I was working at a company preparing an important project for our user conference. We got two months from the release and found out the engineers thought we were delivering “something” at the conference, even though the leadership had been talking about a GA release for months!

## When leaders don't share state, the results are devastating

One of the most common "state" problems on engineering teams is when the [engineering manager](/engineering-manager-vs-tech-lead/) and product manager aren't sharing state. They may each have their own version of the project plans. They might each have different ideas of what is being done or what's important. 

## How to merge squishy brains together!

There are a few solutions to sharing state. 

### Be explicit and build trust

One is to check in frequently and have a lot of explicit communication. The more trust you have with someone, the easier it is to share state, because your serialization protocols are better tuned for each other. 

### Use writing to share state

Another solution to sharing state is to emphasize writing. When we write something down and collaborate around that shared document, we are all participating more closely in a shared version of reality. While we may deserialize differently, we’re all interacting with the same “database” of information, and the changes are something we all participate in. 

Writing is less transitory than verbal communication, and it is more precise. I believe it’s one of the key skills for a successful remote company to master. 

I would pay _more_ to make Slack MORE transitory (all messages disappear after a day), because people could rely less on being able to look up previous conversations. Chat isn't a shared document, because usually the people involved aren't starting from a shared state. That's why chat is effective for solving simple problems together, but not complicated ones. I like the pattern of posting links to information in Slack, and having conversations and decisions made around documents. And to reply to things with links to where that information is being maintained. 

One of the best patterns I’ve seen for accelerating organizational leadership work is to write down your best thinking of what the problem is and what to do about it, and share it with a group of people. Ask them to make it better. You can go through a couple of rounds of sharing it more broadly, and getting feedback, but you can go through those rounds pretty quickly -- a day or two per round. Then just get started! Your plan likely is better than it would have been because you spent the time to write it down. And it’s much better still since your colleagues have improved on it. And everyone’s basically on the same page about the problem and what is to be done about it. 

In any case, the important thing is to be aware of state, and how you're ensuring your messages are being communicated. Think of it like a computer system, and it might help!

_Image by <a href="https://pixabay.com/users/wilhei-883152/">Willi Heidelbach</a> from <a href="https://pixabay.com/">Pixabay</a>_