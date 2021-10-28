---
title: Beware the service provider model - a recipe for engineering team failure
tags: ["coordination-models", "coordination-models-team"]
cover: service-provider.jpg
author: Jade Rubick
discussionId: "service-provider"
---

<re-img src="service-provider.jpg"></re-img>

One of the more common [coordination models](/coordination-models/) is the Service Provider model. When a team is a Service Provider, they...

* Have valuable skills they offer other teams.
* Are a dependency for those other teams. They do work for those teams. 
* Do their work per ticket, per project, or per initiative. When their work is over, they either do work for someone else, or work on their own priorities. 

**The Service Provider model is one of the least effective coordination models in software engineering teams**. There are some legitimate reasons to use this model, but you should avoid it unless you’re aware of the tradeoffs. 


### What types of teams commonly adopt this model?

* Design. 
* IT.
* Infrastructure and platform teams.
* You even see it in functionally organized product teams, where a backend team might work on various APIs depending on the requests and needs from other teams. Or a frontend team might do work for various projects.
* Even some cross-functional teams use this model, where they request things of each other in order to accomplish their own goals.


### Pros

* **High utilization and efficiency**. Allows you to have a specialist that can apply their skills across a group of teams that may not need those skills continually. 
* **Cost-effective**. You can often have less people serving a larger group of people than the alternatives.
* **Maps nicely to org structure**. It’s often what a manager will naturally think of, so it’s what you will end up with if you don’t design something different. 


### Cons

* **High latency**. This pattern always leads to poor flow through your company, because to avoid doing so would require you to have excess capacity, and there is almost no tolerance in companies for having people “without work to do”. But this results in problems. You’ll have projects that can’t be delivered because your infra team is busy on something more important. You’ll have projects without a design and it will either be built poorly or delayed. You’ll have people unable to work because their machine is having problems. Leaders tend to underestimate the cost of latency. A way to avoid some of this trap is to have something else valuable that the team focuses on, so being a service provider is only a part of what the team does. If it’s easy for them to swap out that other work, then they can have spare capacity and consume the queue of work.
* **Underfunded**. Funding for service providers tends to be treated as a cost, and often tends to get underfunded. So these teams will often struggle to keep ahead of a neverending queue of work. Scaling is typically done independently of other parts of the organization, which can lead to funding levels that are enough to avoid emergencies, but not enough to make your organization thrive. 
* **Long tail of request servicing can be quite high**. Service Providers focus on prioritization. They often have ranking systems, and ways to pull out the most important work to be done. This results in a long tail of request servicing that can be unpredictable and cause large amounts of downstream thrash. For example, an infrastructure team might not get to a lower priority request for a month, because they have more important things to do. But the downstream impact of that might be a team working less efficiently than it could. Because the impact of these downstream prioritization decisions can also cluster, they can cause certain parts of the organization to become ineffective. 
* **Hard dependencies scale poorly**. This model is a hard dependency, so it prevents teams from being able to deliver value independently. As the organization grows, complexity grows as well, and you’ll find you’re creating a lot of structure just to manage the dependencies. This can lead to excess process and people spending a lot of time just managing the unpredictability. You want to minimize complexity as your organization grows, and the Service Provider is a leaky abstraction, which allows complexity to dominate.
* **Urgency can have unpredictable impact**. If a new top priority comes in, it is usually a zero sum game, and some other priority will be cancelled. This can lead to unpredictable project performance across the organization, because the impact of these changes can ripple through. In some organizations I’ve been in, this results in “only the top priority project can ever be delivered on time”. If Kim the designer is working with a team, and something important comes along, then it will always be tempting to move Kim to a more important project. But this means a totally unrelated project is now in peril. So this structure can make product development more unpredictable.  
* **Experts can fail to develop context and depth in the areas they’re helping**. This pattern also results in service providers that can lack context for the areas they’re helping, so this model is more effective in homogeneous or simple environments. For example, design teams who work across multiple products, or across broad parts of the product, may not develop the deep technical understanding of their area that will help them be more effective and innovative. They also fail to develop deep working relationships which can produce more effective results over time.
* **A lack of slack can lower innovation**. Since you’re moving from task to task or project to project, you often don’t get to see the larger patterns in an area, and have the time to explore larger impact changes to improve in those areas. Your work will tend to be more low level and tactical.
* **Hard to manage incoming requests**. It can be hard to understand the context of the requesting teams, and understand how the work maps to the value delivered for the business. 


### If you use this model

* **Evaluate how realistic it is to service the needs of the organization**. You can often use measurements to keep an eye on things -- turnaround time for requests, or 95 percentile for turnaround time. If your engagements are longer-lasting, interview people and make sure you’re aware of the impact of projects that don’t get prioritization. Try to be conscious of the impact of latency, and of shifting priorities. If the team isn’t set up in a realistic way, it’s time to have some serious discussions about its future.
* **Use automation projects to give your team higher leverage**. This is a balancing act, because you have to balance the need to help people with the need to get automation work completed. Sometimes the only way to dig your way out of the hole you’re in when using the service provider pattern is to make your customers less happy while you automate the improvements.
* **Communicate prioritization and tradeoffs**. You want people to understand what they can expect from you and what they can’t. A big source of frustration dealing with service provider teams 
* **Switch to another model**. There are often better [coordination models](/coordination-models/) you can use, that you can gradually transition to.


### Service provider versus other coordination models

* I try to avoid this pattern whenever possible. I prefer [embedded](/embedded-model/) and consulting patterns with designers, [self-service](/platform-teams-and-the-self-service-model/) and consulting patterns with infrastructure, and a centralized liaison pattern with architecture. For software teams, I tend to prefer cross-functional independent executor teams, or self-service models. For IT, I’m not an expert on what makes sense -- let me know if you’ve seen alternative patterns that are more effective, or if a service provider model really is the best fit.
* If you can move from being a hard dependency to a soft dependency, that will make the organization more effective. You can sometimes do this by switching to a consultant model. For example, having teams do their own infrastructure work, but having an infrastructure team there to help with hard problems, can be a better model than having one team do infrastructure work for everyone. Ideally, with the consultant model you’re not actually doing the work, just guiding people on what needs to be done and best practices. There is a lot of nuance to this, we’ll discuss more in the Consultant post (soon).
* One way to make other teams’ dependencies on you softer is to give them a default approach when you’re not able to help them. For example, designers might have a design library, and encourage people to “do their best” when design isn’t available to help. (A design library can be automation for designers). You can tell people not to plan on your team being able to do work for them unless they’re a “top 3 priority”. This is not at all ideal, but it’s better than the alternative of them planning for your help when it’s not realistic.
* It’s often best to have a long-term goal in mind which is a different coordination model, like [self-service](/platform-teams-and-the-self-service-model/). You can often scare up investment by selling that vision and showing progress towards it. This can take a long time to transition to, but be a highly valuable improvement. Combining [self-service](/platform-teams-and-the-self-service-model/) and a consultant approach can actually work pretty effectively. You get customer awareness by being a consultant, but continually aim to make your work product [self-service](/platform-teams-and-the-self-service-model/). This can also ease some of the transition pain to getting to a [self-service](/platform-teams-and-the-self-service-model/) model.
* Functionally designed teams tend to move towards the service provider pattern. Sometimes this makes sense: if you have a lot of code that isn’t worked on frequently, or something that requires deep expertise or has highly demanding reliability requirements, or a different form of engineering. But barring those exceptional cases, I tend to make teams cross-functional in nature, to eliminate the need for a service provider pattern, and improve the coordination within a team.

### Coordination models

Service providers are just one of many [coordination models](/coordination-models/). Coordination models give you a menu of choices to choose from when solving your leadership coordination issues. 

### Feedback

See anything I missed? Disagree with this? Please let me know your thoughts!


Image by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2654004">Gerd Altmann</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2654004">Pixabay</a>