---
title: Increase your impact with upstream thinking
tags: ["company-culture", "prioritization"]
cover: upstream.jpg
author: Jade Rubick
discussionId: "upstream-thinking"
description: "Upstream thinking helps you prevent future problems. Describes the patterns behind this style of thinking and how to identify what blocks it."
---

<re-img src="upstream.jpg"></re-img>


I was listening to a podcast where the host was interviewing Dan Heath, the author of [Upstream: the Quest to Solve Problems Before They Happen](https://heathbrothers.com/books/upstream/).

The author tells a story about Jeff and Marta, who are standing by the river. They see a child drowning, so they rescue him. As they're drying off, they see another child drowning, so they jump in and rescue her. As they get her to shore, they notice two more kids in the water, flailing around. After getting the two of them out of the water, Marta starts walking upstream. Jeff says, "where are you going, we've got to rescue these kids!" And Marta says, "I'm going to go find who's throwing them in the water."

In our daily jobs, there are a lot of factors that prevent this type of Upstream thinking. For example, when you're the person that is responsible for answering support issues from customers, or when you're handling lots of incidents, it is often rational to do what you need to to satisfy the current situation. You answer the ticket, you fix the bug, you tune the alert. 

<img src="https://imgs.xkcd.com/comics/is_it_worth_the_time.png" />

Yet far too often, this type of transactional approach doesn't really get at the heart of the problem, and prevent it from happening again:

* When someone asks you a question, how could they not have to ask it next time? 
* When the alert goes off, how could that not happen again? 
* When we "fix" what caused an incident, did we really solve it all the way down?

Doing this is often harder than solving each problem as it comes our way. The author outlines a couple of things that prevent us from doing this deeper work:

1. The first is "tunnel thinking". This is when you're focused on solving things in a transactional way. 
2. The second is distributed responsibilities — when it's not clear who is responsible for something, or nobody really owns it. 
3. And finally, an issue is when you don't have the time or space to stop and contemplate the situation and understand it deeply.

We always have to use our best judgment on how to invest our time, but a good rule of thumb is to weigh the costs and benefits of addressing things more deeply, and if you see something more than once, solve them more deeply. Here are a few ways we do that:

1. Reply with documentation. When someone asks you something, document the response in a place that a future person can look it up, and send them the link.
2. Automated testing. Prove that the bug can't reoccur, which prevents it from happening again.
3. Identifying "do not repeat incidents" work after an incident. Make sure you identify the minimum possible thing that would prevent or mitigate future examples of this problem.
4. Turn off an alert, or rethinking how we monitor something. Rather than just bumping up the threshold, think about whether the alert is something we even act on. Move the channel of the alert to an information channel instead of alerting channel, or rework it to be actionable.
5. Automate the steps of something into a script. Instead of going through a list of things, put it in a script, which is a step towards automating it.

If nothing else, it can be valuable to take a few moments when you're working on something to look at the big picture, and not let the rush prevent you from looking upstream to where the source of the problem may lie. 

_Image by <a href="https://pixabay.com/users/太上老天狼666-15950197/">德明 胡</a> from <a href="https://pixabay.com/">Pixabay</a>_