---
title: Demo-driven development
tags: ["project-management", "delivery"]
cover: fast.jpg
author: Jade Rubick
discussionId: "demo-driven-development"
description: "Demo-driven development is a practice where you use regular demos, a standard week-by-week project plan, and value based user stories to plan the team's work."
---

<re-img src="fast.jpg"></re-img>

## Demo driven development

_This is part two of a two-part blog post on how software teams can effectively organize their projects. The first post listed [three common anti-patterns for managing software projects](/three-anti-patterns-for-project-management) on teams._

Over the years, I’ve copied and developed a set of practices that I’ve started calling “demo-driven development”. I believe it incentivizes the right things to both improve your planning, and take into account the chaos and change in product development. 

Demo-driven development is a practice where you use regular demos, a standard week-by-week project plan, and value-based user stories to plan the team’s work. You use these to drive meetings that encourage more active tweaking and improvement of the project. 

This approach works because you’re thinking backwards from the needs of customers, and focusing the team on the problems to be solved each week. People have an innate need to feel progress, and to connect their work to the value they’re delivering. They love to solve problems instead of checking off tasks. This approach is more aligned with how human beings find satisfaction.

Demo driven development also works because it introduces a structure that encourages conversations. Plans are simple and easy to play with. User stories are at a level of granularity that make it easy to control scope. This leads to more fluid and dynamic projects -- projects that are actually managed as opposed to projects that run on autopilot. 

So how do you go about implementing demo-driven development? And what is involved with this practice? 

### Start with demos

The first thing to do, if you haven’t done it already, is to introduce weekly or biweekly demos (I'll use weekly during this post, but you can substitute biweekly if that makes more sense for you). You can structure them many different ways, but to start with:

* Have each team demo their work every week. 
* Rotate the person doing the demo, and have them demo the work for the team. This helps ensure that everyone gets recognized for the team’s work, and gives engineers practice with the valuable skill of showing their work. 
* The demos can be done in a meeting, or asynchronously recorded and posted in a room in Slack. If you do it asynchronously, copy what I learned from Bjorn Freeman-Benson: ask each team to do a two-minute video. Suggest to people that they ask questions in Slack threads, and use Slack react emoji to cheer on accomplishments. 

Be prepared to tweak the format until it feels good for the people involved. 

One thing to be careful of is that the demos are inclusive of all the work required to build functional software. Prepare the team to demo all the parts of their work: the APIs, the infrastructure, the reliability work, and the testing. If you're in an environment where there is less trust, or the leadership doesn't understand how software should be built, you may need to use the demos to educate and give context on the team's work. It's also important for you to cheerlead the work that isn't customer facing. 

### What are we going to demo this Friday?

The next step, once you have demos in place, is to kick off each week with a goal. The engineering manager and product manager should meet before the sprint kick-off meeting, and have a clear idea of what the goal for the next week or two is.

The product manager gives some context on where we’re going over the next couple of weeks, and reminds the team of what the value and tradeoffs are in the upcoming work.

Then the [engineering manager](/engineering-manager-vs-tech-lead/) says, “**what should we demo on Friday?**”.

The EM and PM should have prepared any bugs or usability issues that need to be addressed that week. They should have a clear idea of what they would like to accomplish during the period. So they briefly show the top couple of items they think might be worth considering for the week. But the main focus for the team is to talk through the demo plans -- what is realistic, and what the demo should look like. 

This is an immensely clarifying question. It forces the team to think through the week, the goal they’re working towards, and the concrete outcome they are moving towards. Instead of a bunch of tasks, they’re working towards something, and something meaningful and valuable. 

It’s important for this not to be a commitment, but a reasonable guess. Asking for certainty in a complex environment is asking for hedging, and can backfire. Product development is  uncertain, and it has to be safe for teams to miss their goals, as long as they do the work to understand why they missed them. Otherwise, they estimate overly conservatively and act defensive, instead of learning to be more effective. 

The team spends the rest of the time in the weekly kickoff meeting talking about how they’ll get this goal accomplished, and break down the high level demo goal into the technical work that needs to happen that week. They talk through how they’ll coordinate their work together, and any decisions or problems they might need to address. Collaboration!

### Move the team to milestones instead of projects

I have a whole post on this topic. The basic idea is to [replace projects with milestones](/milestones-not-projects/). This improves project breakdown, sequencing, and biases towards incremental design. 

### Move the team to using user stories

Either at the same time, or slightly after you start kicking off the week with questions about how to demo on Fridays, you then organize the work around a higher level of abstraction: user stories. 

These user stories represent things you might demo on a particular week. Their size should be about a couple of days to a week or two of work. They should be cross-functional in nature, as much as possible, focused on delivering something valuable for customers, or something you learn from. It can be an increment towards something bigger, but strive for the story to be valuable in some way. 

User stories should be understandable by a technical observer not on the project, and for sure by the Product Manager. For example, “reduce confusion by making chart colors consistent with labels”. If you have a particular approach in mind, you can say so, but the goal needs to be defined. For example, “Reduce confusion in charts by making chart colors consistent based on saved selection”.  

Teams tend to like to create todo items that correspond to _technical_ work. [Jim Shore](https://www.jamesshore.com) taught me to have two levels of breakdown: the user stories represent something a product manager or technical person outside the team can reason about. Then under that user story, you create tasks that represent the technical work you need to do to accomplish that user story. 

The task breakdown doesn’t need to happen until the week you get to it. That can be the activity in the kickoff meeting after you talk about what to demo. 

Ideally, the kickoff meeting then becomes the engineering manager saying: this is our next user story. What do we think we can demo this week? And the team decides if that’s a lot or a little, and if they have more bandwidth, you say, well, we have this next story, do we think we can demo progress towards that getting done? And the team agrees on what they can demo, and then the rest of the meeting is the logistics and coordination around delivering that, including creating the task breakdown and figuring out who will do what.

Contrast the way this weekly kickoff feels to “[weak agile](/three-anti-patterns-for-project-management)”, introduced in part one of this post. In those meetings, the engineering manager might pull up a list of 20 or 30 tickets, and go over the many things that are still in flight. They’ll have a bunch of things typically that are moving between weeks. They team spends the meeting talking about these tasks rather than the goal they’re trying to accomplish. The tasks don’t feel meaningful, they just feel like a list of things to do.

In a [million-meeting agile](/three-anti-patterns-for-project-management) format, they’ll spend all their time talking about these tasks, and making sure everyone understands them, and who will do what. Instead of talking about the goal and how to work together to achieve that goal, the team focuses on the reviewing tasks in the ticketing system. 

In a [Gantt-aholic](/three-anti-patterns-for-project-management) kickoff meeting, usually the focus is on the tasks and the points associated with everything. How many points did we accomplish, what are the estimates for the upcoming items, and how are we tracking. The focus is more on the timeline than the objective. 

Instead, focus the meeting on the goal you want to accomplish, and use your tooling to record things at the level of impact to your customers: user stories. 

### Create project plans or milestone plans

After you have user stories in place, the next step is to improve your planning. The way I like to do this is to have a week by week schedule which is just a list of a couple of things you think you would demo that week. You should also list risks or interesting things that might happen that week, like someone being out of the office, or someone needing to help onboard the new person on the team. 

This becomes the project plan: a week by week plan that helps you plan, and think through the sequencing of the project. It should be updated frequently (at least once a week), and used during meetings.

The project plan should be a tool for conversation. It should help expose risks (will this dependency be done in time?), things you should plan for (Maria will be on call that week), and other issues. It should prompt conversations like, “could we do this part earlier so we can validate things earlier?”, or “can we break this project in half and deliver this part to customers without this extra thingamajig?” “How are we feeling about the next few weeks, what could go wrong?”

Even though it’s okay to demo progress on incomplete work, teams should endeavor to keep their work always shippable. The project plan should reflect this -- it should be possible to pull scope out of a project plan and deliver things earlier. Or pull in additional scope based on customer feedback. A good project plan preserves this type of optionality, and delivers incrementally towards the end goal. This is incredibly valuable to delivering things on time, and balancing the need for that with customer feedback. If you’re not managing your project with this type of optionality, most of your projects will fail.

### Create technical plans

You should be creating a technical plan. 

The technical lead (or sometimes even better, other engineers on the team, with the technical lead editing and improving) writes down anything interesting about the technical work for this stage of the project (if your projects are months long, do it for milestones in the project). They should call out any technical bets they’re making, or anything new that will require future migration work. And highlight tradeoffs they’re making. If technical shortcuts are being made, they should be exposed and justified. 

The technical plan should also be a tool for conversation and coordination. It should help people understand and reason about the way technical decisions are made. And they should be shared for others to improve upon. 

The theme for both project plans and technical plans should be: “use the people around you to improve your thinking.”

There is an interplay between these plans. The technical plan surfaces technical tradeoffs and choices. The project plan sequences the work and breaks it down into increments.

### Project execution meetings

The project plans can then feed into project execution meetings. The aim of these meetings is for project managers (usually the engineering managers) to help each other problem-solve their projects together, and critique each other’s project plans. And to talk through how execution is going on projects and what can be improved in the organization to make projects work better.

It’s important for these meetings to be safe places to talk through problems, not a place for people to posture and show off. Alex Kroman taught me the value of kicking off these meetings with a frank acknowledgement that product development is hard, and unpredictable. We all know that we should expect challenges. We’ve all been part of horrible, messy projects. So let’s help each other out.

### Technical leadership meetings

You can use technical leadership meetings to offer a similar type of critique for technical plans. Your technical leaders can come together and share anything interesting about the technical tradeoffs they’re making. 

These meetings can be extraordinarily impactful. One of the most common causes of project failure is projects that take too many ambitious bets at the same time. And many of the challenges of engineering organizations result from technical decisions made in previous years. Having a group that can set technical standards will prevent painful migration projects from blossoming. And creating a culture of discussing the long-term implications of choices can avoid lots of pain in future years. 

### Conclusion

Demo-driven development organizes your practice at the right level of granularity to really manage your project. It provides goals and meaning in the work that help make the work more engaging, creative, and inspiring for the people involved. And it results in better innovation, more customer-focus, and better planned projects that alternative approaches. 

By gradually introducing the set of practices behind demo-driven development, you should improve your engineering organization, and the success of your company. Let me know how it goes for you, and I welcome any feedback or questions you have about it.

### Thank you

Many experienced engineering leaders give helpful feedback on drafts of this post. Thank you to [Seth Falcon](https://www.linkedin.com/in/sethfalcon/), [Bjorn Freeman-Benson](https://www.linkedin.com/in/bjornfreemanbenson/) and [Kenichi Nakamura](https://www.linkedin.com/in/kenichi/) for numerous structural and content suggestions that made this post stronger and more focused. And thank you to [Brent Miller](https://www.linkedin.com/in/foliosus/), [Davy Stevenson](https://www.linkedin.com/in/davystevenson/), and [Darin Swanson](https://www.linkedin.com/in/darinswanson/) for their improvements! Thank you to [davidkunz](https://news.ycombinator.com/user?id=davidkunz) for [pointing out potential failure modes](https://news.ycombinator.com/item?id=27417551). 

_Image by <a href="https://pixabay.com/users/sasint-3639875/">Sasin Tipchai</a> from <a href="https://pixabay.com/">Pixabay</a>_