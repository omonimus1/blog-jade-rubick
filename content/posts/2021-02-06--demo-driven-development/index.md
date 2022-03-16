---
title: Demo-driven development
tags: ["project-management", "delivery"]
cover: fast.jpg
author: Jade Rubick
discussionId: "demo-driven-development"
description: "Demo-driven development is a practice where you use regular demos, a standard week-by-week project plan, and value based user stories to plan the team's work."
---

<re-img src="fast.jpg"></re-img>

Over the years, I’ve developed a set of practices that I’ve started calling “demo-driven development”. I believe it incentivizes the right things to both improve your planning, and take into account the chaos and change in product development. 

## What is demo-driven developoment?

Demo-driven development is a practice where you use 
1. regular demos, 
2. a standard week-by-week project plan, and 
3. value-based user stories. 

You use this as a lightweight and flexible structure for planning the team's work. These then drive meetings that encourage more active tweaking and improvement of the project. 

## Why demo-driven development?

Some advantages of demo-driven development over [other approaches](/three-anti-patterns-for-project-management/) are:

* You think backwards from the needs of customers. This connects the team with the business impact, yielding better results. 

* Goals for the week are more clear, leading to better focus and collaboration within the team. 

* Team members feel more satisfaction. Why? People have an innate need to feel progress, and to connect their work to the value they’re delivering. They love to solve problems and understand why it is important. 

* Demo-driven development provides a structure to improve the quality of conversations around projects. Plans are simple and easy to play with. User stories are at a level of granularity that make it easy to control scope. This leads to more fluid and dynamic projects -- projects that are actually managed as opposed to projects that run on autopilot. 

## Step 1: Demos on Fridays

So how do you go about implementing demo-driven development? 

The first thing to do, if you haven’t done it already, is to introduce weekly or biweekly demos (I'll use weekly during this post, but you can substitute biweekly if that makes more sense for you). You can structure them many different ways, but to start with:

* Have each team demo their work every week. 
* Rotate the person doing the demo, and have them demo the work for the team. This helps ensure that everyone gets recognized for the team’s work, and gives engineers practice with the valuable skill of showing their work. You can also have each person demo their own work or the work of the people working on something.
* The demos can be done in a meeting, or asynchronously recorded and posted in a room in Slack. If you do it asynchronously, copy what I learned from Bjorn Freeman-Benson: ask each team to do a two-minute video. Suggest to people that they ask questions in Slack threads, and use Slack react emoji to cheer on accomplishments. I like to tell people to spend 10 minutes on a 2 minute video, to prevent the recordings from being too large of a time suck to produce. 

Be prepared to tweak the format until it feels good for the people involved. Here are a few things to be careful of, or that you might want to tweak after you've gotten demos set up:

**Include all the work**. One thing to be careful of is that the demos are inclusive of all the work required to build functional software. Prepare the team to demo all the parts of their work: the APIs, the infrastructure, the reliability work, and the testing. It's important for you to cheerlead the work that isn't customer facing. 

**Focus on customer**. You can use demos to make teams more customer centric. One thing I like to do after a couple of weeks is to introduce a standard format for the demos:

1. Today, I'm going to demo XYZ.
2. [Thank anyone that contributed or helped you out]
3. The reason we're doing this work is... [explain the customer or business value in a couple of sentences]
4. [Show your work in 2-3 minutes]

**Use demos to educate**. If you're in an environment where there is less trust, or the leadership doesn't understand how software should be built, you may need to use the demos to educate and give context on the team's work. You absolutely don't want people to feel scared to demo, so don't make it a scary thing to do.

**Critique during demos**. When you do have a high trust environment, you can start to nudge the demos to involve a little critique from fellow team members. The ideal is if people are excited about each other's work, and looking for feedback from their teammates. And their teammates are thinking about the customer or business value of the work, and suggesting ways to do it better, or to make it simpler. You want a little of this, not a ton of it, so it can be a delicate balance, and is often something to introduce later.

## Step 2: What are we going to demo this Friday?

Once you have demos in place, you can use the demos to focus the team's attention each week. Later, we'll show how this also helps with project planning.

### Prep before the sprint kick-off meeting

* The engineering manager and product manager meet before the sprint kick-off meeting, and decide on goals for the next couple of weeks. 

* You two come up with what a good demo for the next couple of weeks _might_ look like. You may not be sure what is reasonable, but think about the goals you're trying to accomplish, and what might be a good thing to move towards. Keep in mind this is not set in stone. 

* The EM and PM should prepare a list of bugs or usability issues that need to be addressed that week. 

### At the sprint kick-off meeting

* In the team's weekly kick-off meeting, the product manager gives some context on where we’re going over the next couple of weeks, and reminds the team of what the value and tradeoffs are in the upcoming work.

* You, the [engineering manager](/engineering-manager-vs-tech-lead/) say, “**what should we demo on Friday?**”. Depending on your team, you might be able to leave it at that, and let them come up with the items that meet the goals the PM talked about. Likely, they will need more direction than that. So you can share the things you're thinking the team might work on the next two weeks, and ask them what's reasonable to demo this week. 

* Part of the discussion should be about other work that needs to happen. What bugs and usability issues should be addressed this week. 

* The main focus of discussion, however, should be to talk through the demo plans -- what is realistic, and what the demo should look like. 

* The team spends the rest of the time in the weekly kickoff meeting talking about how they’ll get this goal accomplished, and break down the high level demo goal into the technical work that needs to happen that week. They talk through how they’ll coordinate their work together, and any decisions or problems they might need to address. Collaboration!

### Why "what should we demo on Friday"?

It is a clarifying question. It forces the team to think through the week, the goal they’re working towards, and the concrete outcome they are moving towards. Instead of a bunch of tasks, they’re working towards something, and something meaningful and valuable. 

### Anything to be careful about?

* It’s important for the demo goals to not to be a commitment. They should be a reasonable guess. Asking for certainty in a complex environment is asking for hedging, and will backfire. Product development is uncertain, and it has to be safe for teams to miss their goals, as long as they do the work to understand why they missed them. Otherwise, they estimate overly conservatively and act defensive, instead of learning to be more effective. This also makes the planning meetings lower stakes, which improves feedback and participation.

## Step 3: Move the team to milestones instead of projects

I have a whole post on this topic. The basic idea is to [replace projects with milestones](/milestones-not-projects/). This improves project breakdown, sequencing, and biases towards incremental design. 

You might do this later if you're a new manager, as it is something that some teams might resist or not understand. 

## Step 4: Move the team's work to using user stories

Your next step is to move to using user stories, instead of tasks. 

### What are user stories?

* User stories represent things you might demo on a particular week. For example, "a user can select a color for the chart in a dashboard". "A user can save the selected color for the chart". 

* User stories should be something a product manager, or an engineer from another team could understand. (This gives the product manager a lot more power to control scope by moving around user stories). If you have a particular approach in mind, you can say so, but the user story should mostly communicate what capability you're offering the business or your customer.

* Ideally, their size should be a couple of days of work. 

* They should be cross-functional in nature. They should mention the user and what they are able to do. Even reliability user stories can be high level. For example, "decrease paging for the team by tuning our alerts".

* User stories can be an increment towards something bigger, but if it is possible, they should try to be valuable in some way. 

### How does the team break user stories down to technical work?

Teams tend to like to create todo items that correspond to _technical_ work. 

If your team feels a need to do so, [Jim Shore](https://www.jamesshore.com) taught me an approach that works quite well. Use subtasks underneath the user stories to represent the technical work. 

When you do this: 
* User stories represent something a product manager or technical person outside the team can reason about. 
* Then under that user story, you create tasks that represent the technical work you need to do to accomplish that user story. 

The task breakdown doesn’t need to happen until the week you get to it. That can be the activity in the kickoff meeting after you talk about what to demo. Or it can be done after that meeting by the people involved.

Ideally, the kickoff meeting then becomes the engineering manager saying: "these are the next couple of user stories. What do you think we can demo this week?" 

The team decides what they think is reasonable to accomplish that week, and talks through the approach they might take. Then the rest of the meeting is the logistics and coordination around delivering that, including creating the task breakdown and figuring out who will do what.

### How does this compare to other common ways of doing it?

Contrast the way this weekly kickoff feels to the [task treadmill approach](/three-anti-patterns-for-project-management). In those meetings, the engineering manager might pull up a list of 20 or 30 tickets, and go over the many things that are still in flight. They’ll have a bunch of things typically that are moving between weeks. They team spends the meeting talking about these tasks rather than the goal they’re trying to accomplish. The tasks don’t feel meaningful, they just feel like a list of things to do.

In a [million-meeting agile](/three-anti-patterns-for-project-management) format, they’ll spend all their time talking about these tasks, and making sure everyone understands them, and who will do what. Instead of talking about the goal and how to work together to achieve that goal, the team focuses on the reviewing tasks in the ticketing system. 

In a [Gantt-aholic](/three-anti-patterns-for-project-management) kickoff meeting, usually the focus is on the tasks and the points associated with everything. How many points did we accomplish, what are the estimates for the upcoming items, and how are we tracking. The focus is more on the timeline than the objective. 

Instead, focus the meeting on the goal you want to accomplish, and use your tooling to record things at the level of impact to your customers: user stories. 

## Step 5: Create project plans or milestone plans

After you have user stories in place, the next step is to improve your planning. The way I like to do this is to have a week by week schedule which is just a list of a couple of user stories per week. You should also list risks or interesting things that might happen that week, like someone being out of the office, or someone needing to help onboard the new person on the team. 

This becomes the project plan: a week by week plan that helps you plan, and think through the sequencing of the project. It should be updated frequently (at least once a week), and used during meetings.

The project plan should be a tool for conversation. It should help expose risks (will this dependency be done in time?), things you should plan for (Maria will be on call that week), and other issues. 

It should prompt conversations like, “could we do this part earlier so we can validate things earlier?”, or “can we break this project in half and deliver this part to customers without this extra thingamajig?” “How are we feeling about the next few weeks, what could go wrong?”

Even though it’s okay to demo progress on incomplete work, teams should try to keep their work always shippable. The project plan should reflect this -- it should be possible to pull scope out of a project plan and deliver things earlier. Or pull in additional scope based on customer feedback. A good project plan preserves this type of optionality, and delivers incrementally towards the end goal. This is incredibly valuable to delivering things on time, and balancing the need for that with customer feedback. If you’re not managing your project with this type of optionality, most of your projects will fail.

I usually recommend you only do milestone planning, not project planning. If you're planning out an entire project, you're investing a lot of time to product estimates on work you may never get to. 

## Step 6: Create technical plans

You should be creating a technical plan. 

The technical lead (or sometimes even better, other engineers on the team, with the technical lead editing and improving) writes down anything interesting about the technical work for this stage of the project (if your projects are months long, do it for milestones in the project). They should call out any technical bets they’re making, or anything new that will require future migration work. And highlight tradeoffs they’re making. If technical shortcuts are being made, they should be exposed and justified. 

The technical plan should be a tool for conversation and coordination. It should help people understand and reason about the way technical decisions are made. And they should be shared for others to improve upon. 

The theme for both project plans and technical plans should be: “use the people around you to improve your thinking.”

There is an interplay between these plans. The technical plan surfaces technical tradeoffs and choices. The project plan sequences the work and breaks it down into increments.

## Step 7: Project execution meetings

The project plans can then feed into project execution meetings. The aim of these meetings is for project managers (usually the engineering managers) to help each other problem-solve their projects together, and critique each other’s project plans. And to talk through how execution is going on projects and what can be improved in the organization to make projects work better.

It’s important for these meetings to be safe places to talk through problems, not a place for people to posture and show off. Alex Kroman taught me the value of kicking off these meetings with a frank acknowledgement that product development is hard, and unpredictable. We all know that we should expect challenges. We’ve all been part of horrible, messy projects. So let’s help each other out.

## Step 8: Technical leadership meetings

You can use technical leadership meetings to offer a similar type of critique for technical plans. Your technical leaders can come together and share anything interesting about the technical tradeoffs they’re making. 

These meetings can be extraordinarily impactful. One of the most common causes of project failure is projects that take too many ambitious bets at the same time. And many of the challenges of engineering organizations result from technical decisions made in previous years. Having a group that can set technical standards will prevent painful migration projects from blossoming. And creating a culture of discussing the long-term implications of choices can avoid lots of pain in future years. 

## Demo driven development

Demo-driven development organizes your practice at the right level of granularity to really manage your project. It provides goals and meaning in the work that help make the work more engaging, creative, and inspiring for the people involved. And it results in better innovation, more customer-focus, and better planned projects that alternative approaches. 

By gradually introducing the set of practices behind demo-driven development, you should improve your engineering organization, and the success of your company. Let me know how it goes for you, and I welcome any feedback or questions you have about it.

## Thank you

Many experienced engineering leaders give helpful feedback on drafts of this post. Thank you to [Seth Falcon](https://www.linkedin.com/in/sethfalcon/), [Bjorn Freeman-Benson](https://www.linkedin.com/in/bjornfreemanbenson/) and [Kenichi Nakamura](https://www.linkedin.com/in/kenichi/) for numerous structural and content suggestions that made this post stronger and more focused. And thank you to [Brent Miller](https://www.linkedin.com/in/foliosus/), [Davy Stevenson](https://www.linkedin.com/in/davystevenson/), and [Darin Swanson](https://www.linkedin.com/in/darinswanson/) for their improvements! Thank you to [davidkunz](https://news.ycombinator.com/user?id=davidkunz) for [pointing out potential failure modes](https://news.ycombinator.com/item?id=27417551). I learned a lot of these approaches from [Alex Kroman](https://www.linkedin.com/in/alexkroman/). 

_Image by <a href="https://pixabay.com/users/sasint-3639875/">Sasin Tipchai</a> from <a href="https://pixabay.com/">Pixabay</a>_