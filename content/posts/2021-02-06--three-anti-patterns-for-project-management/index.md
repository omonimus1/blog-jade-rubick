---
title: The three most common anti-patterns for managing projects
tags: ["project-management", "delivery"]
cover: slow.jpg
author: Jade Rubick
discussionId: "three-anti-patterns-project-management"
description: "Three anti-patterns are ubiquitous: weak (task-based) agile, million-meeting agile, and Gantt-aholic project management. Describes them and links to better alternatives."
---

<re-img src="slow.jpg"></re-img>

## The three most common anti-patterns for managing projects

_This is part one of a two-part blog post on how software teams can effectively organize their projects._

One of the most common weaknesses I see in engineering organizations is how projects are managed. Poor project management leads to slow delivery, which can lead to the company failing. The purpose of an engineering organization is to produce things that are valuable for customers, so it’s surprising how little attention this gets in many startups.

I have two decades of experience managing engineering projects, and have written project management software. I talk with startups all the time, so I get to see what people are doing across many different companies. 

Today, I share the most common anti-patterns for managing projects. I call them “weak agile”, “million-meeting agile”, and “gantt-aholic”. 

I’ve done all these approaches, and they all have merits and risks. In this post, I critique these very common approaches, and in part two of this blog post, I present a lightweight alternative I’ve seen work on many teams, that I call “demo driven development”.

### Weak agile

This is one of the most common anti-patterns I see in startups today. The general approach is

1. Use Jira to store everything that people think about doing related to the team’s work.
2. Break projects down into a ton of technical tasks. 
3. The team works against those tasks
4. Each week you carry over the stuff that doesn’t get done. 
5. Ideally, at the end, you have the work completely finished.

If you use this approach with someone that is very detail oriented, and you break down your work completely, this can work. Typically I see it work only if a senior technical person breaks down all the stories completely, and the project is completely thought through. 

The reason I call this an anti-pattern, however, is that it’s very easy for this to fail, in a couple of ways: 

1. Working in this way is assembly-line work, instead of problem-solving work. This results in engineers disengaging from the customer problems they should be solving, and results in shallow and incomplete solutions. You’re finishing tasks, not solving problems. 
2. Working from tickets can discourage people from challenging the approach, or thinking about the work they’re doing, discouraging innovation and fresh thinking.
3. If you have any discovery at all as part of the project, or the project is subject to change (i.e., most product development work), your detailed breakdown has just become a liability -- you’ve accumulated a huge backlog of tickets that need to be reworked. 
4. Often, this approach is done without discipline behind the breakdown process, so you end up creating the tickets as you go. This results in having no idea how long everything will take, or how well you’re doing.
5. This approach also can tend to encourage the project manager to focus on “points completed” and mechanical estimates based on the stories in Jira. This works fine if the work is completely broken down, but there are often areas of risk or uncertainty that are not accounted for. Thus I think it often leads to overconfidence based on false measurements.
6. Another common failure I see is teams just don’t really plan out their work very much. They don’t think about what can go wrong. They don’t plan for learning. They don’t think through the contours of the project very much. 


### Million-meeting agile

Another common anti-pattern is to follow the form of agile, but to make it heavyweight. I call this approach “million-meeting agile”. 

The approach is:

1. Have a meeting for backlog grooming (with the whole team). Go over each item with the whole group.
2. Hold daily standups. Go through each item in the sprint, and have each person talk through a script. Usually this is talking about the work you’ve done and plan to do, and obstacles. 
3. Have a sprint planning meeting (with the whole team). Plan out the work for the sprint. Go through each item and make sure everyone understands it. 
4. Have a project estimation meeting. Typically this involves using agile poker to estimate each story, and discuss any points of disagreement.
5. Have a demo meeting. Each person demos their work. While these may be good demos, it is yet another meeting. 
6. Have a sprint retrospective after each sprint. A great practice, but oh my god another meeting?!

These practices are not in themselves terrible. A lot of them have good rationales behind them. But added up, they end up going off the rails in a couple of ways:

1. Almost everything the team does is sequential. This ends up taking a LOT of time. The argument for doing it this way is that it builds up context as a group. That sort of shared context is valuable! But often the meetings are so dull nobody is actually building context.
2. This works most effectively if the size of the stories you’re discussing is large enough that all this overhead doesn’t become a huge time sink. Yet I see most teams using a fine granularity of stories and tickets. This means the team is essentially wading through a huge queue of junk to determine what to work on each week. And they’re building context on things that aren’t actually that important. This works much better in practice if you are completing a couple of stories a week. If you have 10 or 20 stories that you’re managing in a week, it’s hard to make sense of what’s happening.
3. It is necessarily synchronous, which can be challenging in a remote or time-zone distributed organization. 

The inefficiency of this way of working can lead to disengagement, and engineers feeling like they go to a million meetings and don’t get to focus on solving problems. All the time spent in meetings could also be more productively spent solving problems together or writing code.


### Gantt-aholic project management

This is an approach that uses fine-grained planning to determine a schedule:

1. The project manager builds Gantt charts or PERT charts, and is using project management software or complicated spreadsheets to manage things. 
2. They spend a lot of time each week managing the project and maintaining their models.
3. They ask the team for estimates on everything, to build the information they need for their models. (This often goes hand in hand with heavy-weight estimation, like planning poker).
4. They often maintain a list of risks. And a decision-log.

This is typically used by either people with a lot of project management experience, or people new to project management who discover all of these tools for managing projects and want the certainty it seems to offer.

Typical failure modes include:

1. Most projects in product development have a high amount of change or uncertainty. This type of planning doesn’t map well to change. This type of project planning is precise, but it isn’t accurate. Discovery or changes in the project are hard to account for, because they’re not estimated in the same way. 
2. Because the plan is so complicated, it requires substantial effort to handle the inevitable changes. This can make the plan more rigid than it should be, because the cost of making changes is so high. This inflexibility can unnaturally contort the outcomes of your project, and also result in work that is hidden from the model or unaccounted for. Changes can take a while to estimate because the cycle time for building the new state can be expensive. It is usually difficult to experiment with variations to the plan, and since the project manager is a dependency for any alterations to the plan, and the plan requires a high cycle time to be updated, the agility of your planning is compromised. 
3. Because it’s based on a model, estimates are usually computed. This results in estimates that swing all over the place. 
4. The project manager has to spend a lot of time managing the model (sometimes even taking away from their management of the project itself). 
5. Usually the project manager is the only person who can update the model, as it’s too complex for anyone else to understand. This means they can’t go on vacation without losing your ability to manage the project.
6. The level of detail required means the team has to spend a lot of time estimating stories.

_So, how can we improve in the way we organize our projects? We cover that in our next blog post: [Demo Driven Development](/demo-driven-development)._


### Thank you

Many experienced engineering leaders give helpful feedback on drafts of this post. Thank you to [Seth Falcon](https://www.linkedin.com/in/sethfalcon/), [Bjorn Freeman-Benson](https://www.linkedin.com/in/bjornfreemanbenson/) and [Kenichi Nakamura](https://www.linkedin.com/in/kenichi/) for numerous structural and content suggestions that made this post stronger and more focused. And thank you to [Brent Miller](https://www.linkedin.com/in/foliosus/), [Davy Stevenson](https://www.linkedin.com/in/davystevenson/), and [Darin Swanson](https://www.linkedin.com/in/darinswanson/) for their improvements! 

_Image by <a href="https://pixabay.com/users/mhy-333962/">István Mihály</a> from <a href="https://pixabay.com/">Pixabay</a>_
