---
title: Unusual tips to keep Slack from becoming a nightmare
tags: ["communication", "remote-work", "scaling"]
cover: nightmare.jpg
author: Jade Rubick
discussionId: "unusual-tips-slack"
---

Many people offer advice for getting the best out of Slack: use threads, post things in public channels, and use a naming convention for your channels. This post contains some  controversial or unusual recommendations about managing Slack or other chat platforms. 

<re-img src="nightmare.jpg"></re-img>

### Humans don’t naturally manage their limits

Human beings have natural limits. We can only focus on so much at a time, and thus can only manage a certain amount of communication in Slack.

Without real design and structure, communication in a growing company will naturally grow to each human’s limits. People will naturally have more and more communication thrown their way: more channels, more people messaging them, more posts from the increasing number of people in their orbit. They’ll do their best to adapt to this, and take on more and more communication until they reach a limit. 

This isn’t desirable, because humans operating at the limit of their capabilities are less effective. 

Thus organizations are systems where communication will naturally degrade. The result is noisy and disorganized Slack communication, and problems with alignment, communication, and focus. Countering that requires design, and an awareness of the underlying principles governing how humans work. 

Below are a few rules I’ve found useful to keep in mind as you’re designing how people communicate over chat: 

1. Answers to questions should take longer than it takes to look it up yourself.
2. Notifications should go to one or two people.
3. The more people in a room, the more structured the room should be


### Rule: answers to questions should take longer than the time to look it up yourself

By default, it’s easier to ask a question in Slack and get a quick response than it is to look it up in the documentation. This is like designing a computer system where your cache is slower than the thing you’re trying to look up -- it’s just fundamentally broken to expect that to scale: the cost of looking it up yourself needs to be less than the cost of asking. 

Introducing a delay to the time before you answer a question is actually a desirable way to make a more efficient, scalable communication system. Being overly helpful may feel good, but it’s not serving the long-term interests of the company. 

The best way to have effective communication in a company is for the communication to be future-proof: reduce the need for future questions. The best way to do that is to write things down and organize them to make them easy to navigate. Every time you answer a question, you should know that someone six months from now should be able to find the answer to that question themselves. 

A useful pattern to apply everywhere is: **I'll document the answer to this question, in exchange for you providing the answer to this question**. 

Socialize this within your company. For the questioner, it can help reduce their hesitation in asking questions to things that are blocking them. To the person being asked, it shows that the questioner has already looked for the information, and that they’re willing to make it easier for future people to answer this question for themselves. 

You could even go so far as to tell people they don’t have to answer questions unless people agree to document the answers! Bake this into the way people think about their role, and you’ll find that it drives a lot of automation and organization of information. 

If you’re not in a position where you can demand this of the people asking the questions, then you can still do it unilaterally. Whenever someone asks you a question, document it somewhere, and point them to that document. This helps train people to look things up first, and know where the source of information is. 

So how does this play out in practice?

Let’s say your support team is asking questions of engineering, because they need that information to serve customers well. They might, for example, ask whether a certain browser is supported or not. Here are ways to respond to that, in increasing order of effectiveness:



1. Answer their question.
2. Write up a document on the internal wiki or external documentation, document the answer, and give the link to that documentation back to that person.
3. Wait an hour, then do #2. 
4. Have customer support and engineering meet. Write down an agreed upon way to get support the answers they need in a timely fashion that is future proof and “cached” in documentation:
    1. Customer support person asks in channel X, after looking at &lt;internal docs> and &lt;external docs>
    2. A designated person from engineering responds within a certain SLA of time.
    3. The Customer support person documents the response and provides the link back to the answerer to show it’s been done. Next time, they’ll use that to look it up.

How far down that list is your organization? Do you agree it would be better lower on that list? Some things to think about are: how easy is it to onboard a new customer support person? How many times will they ask questions that have been answered before? 


### Rule: Notifications should go to one or two people

If you have Slack messages like this, you have a problem:

_@Engineering-team I just tried to access the site and got this error._

_@here Wanted to celebrate a huge success in Engineering. We just shipped super widgets!_

Notifications are designed to interrupt attention. We are giving a group of networked individuals tools that allow them to interrupt a large number of people at a time and get them to pay attention to something. 

When you have a small number of people in a company, it’s not that big of a deal, but again growing complexity will kill you. Going from 10 people to 50 people results in a lot more notifications, and each of them triggers that horrible Slack notification sound, and a red notification to pay attention to (by the way you should turn those off). For many roles, a single interruption can prevent them from doing complex work for a couple of hours. You would never let someone in an office broadcast a question to 50 people, so why do we allow it in the digital domain? 

So how do we improve on this? Let’s take the first example: you have a room where people ask the engineering team questions like this: 

_@Engineering-team I just tried to access the site and got this error._

The **pattern to apply here is a rotating position** to field these questions. Notifications should go to a rotation, not to an individual. You can use chat, tickets, triage bots, or something like Pagerduty for it, but the role should be a rotation. 

The person in this role is doing interrupt driven work, so that should be their main focus. They can do any other interrupt driven or small work as well, and try to help keep their team focused. At New Relic, we called this role the Support Hero, and they were also the person that was on call for that team. 

A **second pattern is to discourage or disable @here and @channel usage**. Turn off @here and @channel and @everyone usage in large rooms ([here's how](https://slack.com/help/articles/115004855143-Manage-who-can-notify-a-channel-or-workspace)). If you don't have the ability to do this yourself, you can introduce use emoji reactions and cultural reinforcement to make using these more rare. Make it part of your onboarding!


### Rule: the more people in a room, the more structured the room should be

One of the challenges with chat-based communication is that it is conversational. It’s very easy to post something out to a group of people. The cost of saying something is almost zero, so people say a lot. But the cost of reading what everyone else is saying is high, and gets worse the more people there are. So if you’re in a company with 50 people, the complexity and time to navigate Slack is worse than it is if you have 25 people. This is a problem -- you don’t want it to get harder and harder for people to do their jobs as the company grows. 

The larger the chat room, the more you should optimize for things being read-only and scanable. Make it as concise and easy to consume for other people as possible. 

Posts to #general should be pre-approved or restricted to predefined types of messages. Large rooms shouldn’t have much conversation and should be more notification based (because a [large group of people usually doesn’t make decisions](/the-rule-of-eight-for-strong-decision-making-meetings/)). 

A couple of patterns that fall out of this:

* **Write things down outside of Slack, post links in Slack** - A good pattern to encourage is to write up documents in your standard tool (a wiki or Google Docs), and share the writeup with a short summary in Slack. This moves the communication around the document to the place it belongs (the document). The summary should give the person enough context so they can decide whether or not to engage with the document, what timeline they should do so, what actions are being requested of them, and the gist of what the document is saying. 

* **Use threaded replies**. This makes it easy for someone to follow the conversation, and not be notified on threads they don’t care about. This keeps conversations distinct from each other, making it easier to scan a room and decide if you need to look deeper at a conversation or not.

* **But beware long threads!** Long threads are often a sign of poor communication. Why should someone be engaged in a 75 message thread on Slack? Usually there are better ways to decide or communicate on things. I think of Slack and other chat based tools as a good way to make shallow decisions, but not to engage in complex discussions or share context.

* **Use emoji and formatting to ease scannability** - Busy slack channels should be easy to read. Post your topic with a relevant emoji and the subject in bold. This helps people visually separate the various topics and scan them quicker.



Let me know if you find these tips useful!


Thanks to [Chris McCraw](https://www.linkedin.com/in/chrismccraw/) for pointing out you can disable @here and @everyone usage. 

_Image by <a href="https://pixabay.com/users/kellepics-4893063/">Stefan Keller</a> from <a href="https://pixabay.com/">Pixabay</a>_