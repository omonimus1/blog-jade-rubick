---
title: How product engineering teams avoid dependencies -- the independent executor model
tags: ["coordination-models", "coordination-models-team", "org-design", "delivery", "velocity", "product-engineering"]
cover: independent.jpg
author: Jade Rubick
discussionId: "independent-executor"
description: "Produce engineering teams rely on dependencies heavily. They shouldn't. This post argues that product engineering teams (and all teams really) should instead operate using the 'independent executor model'."
---

<re-img src="independent.jpg"></re-img>

### What is the Independent Executor model?

It is natural to need things from other teams. It can be tempting to wait for them or depend on them to provide something for you. This happens because they own the area you need to do work in. 

For example, you might need a team to add a field into their API. Or you might need them to build a new API for you. Sometimes without these changes, you can't deliver what you need to. 

This is an organizational trap. It leads to pain and misery.


### Rules for Independent Executor teams

To avoid this pit of despair **ask, but _never expect_ other teams to do work for you.** Follow these rules:

* You can make _plans_ for other teams to do work for you. 
* Communicate what you want to other teams, and make sure they understand how important it is.
* But don’t ever _expect_ any other team to do work for you.
* _Always_ have backup plans when you depend on other teams. That way, you can proceed and provide value if their priorities don’t align with your own.
* Do whatever it takes to deliver your experience to the customer. 


### How should product engineering handle dependencies? 

Some organizations try to solve dependencies with tracking. This doesn't work, because the problem is dependencies, not tracking dependencies. Adding a system to track needs in Jira isn't going to help. Underlying everything is the fact that teams each have competing priorities. And those priorities shift, so you can't rely on them.

Any ambitious project will have dependencies. The more dependencies, the more you are in the danger zone. The more dependencies you have, the greater your risk. Multiply the odds of change by each dependencies. Soon it is an inevitability. Your plans are being built in the air.

Shift to a model where you insist on always having a plan that doesn't rely on others. When you do this, you always have a plan that will deliver value. Communicate your needs to the other teams, so they can maximize value for the whole company. But deliver the most value you can within your zone of control. 

This is the only way to stay sane in product engineering that I’m aware of.

Some will think they can avoid this trap by using experienced project managers. But the problem isn’t poor project management. Even if you manage dependencies and risks, you will have unacceptable risk. Plans with dependencies are risky. When you always have a fallback, you guarantee you can deliver a baseline of value. 


### When to use this model

* This should be the default for product engineering teams. Not operating in this way incurs higher risk of project failure.
* This is more widely applicable than product engineering. The basic principle can be applied to all engineering teams.  


### When using this model

* **Assess the cost of hacks and migrations**. Often working around other teams' priorities means you have to be messy. When you don't do the work in the right place, it can make your solutions less elegant. \
\
First, check if your team can do the work in the right place. You might use the Away Team model to do this. See below.\
\
If you must use a hack, your costs are to create the hack, maintain it, and migrate to the new solution when it is ready. Don’t ignore the cost of these things. You may decide the cost isn’t worth it, and you should work on something else instead. Be sure to communicate these costs to the team you’re making the request to. But you can decide based on the value you deliver and the costs you incur whether it is worth it. 

* **Don’t forget your power to influence**. Although you can’t control what other teams can do, you can influence them. Be sure to communicate your needs, and explain why it’s important. Give them the context they need to assess global priorities. 

* **Keep an eye on organizational structure**. If the org structure is incorrect, you may have excessive dependencies. The most common example of this a Frontend and Backend engineering team. Every Frontend project relies on the Backend team. While teams find ways to work around the dependencies, they aren't ideal. They might agree to an API contract, but miss things and have to iterate. It's usually better to work together. When you see these dependencies, usually your org design is incorrect. (I’ll write a longer piece on the Frontend and Backend team pattern later -- I have lots of thoughts about that).  

* **Good system-level prioritization is essential**. You won't decouple your teams without good product management. You need a product management (or Integrator) listening and prioritizing for global needs. If teams prioritize based on local needs, you need to strengthen your Integrators.


### Independent executor versus other coordination models

Independent Executor is a model for reducing unnecessary coordination. You should look at other coordination models when you need _increased_ coordination. When you need work from other teams, consider:

#### Program Managers coordinate large initiatives

* When you need to coordinate a large initiative, a Program Manager is ideal. But the large initiative needs to be a priority in the first place. I will write about Centralized/Cecentralized Prioritization soon. In that post, I'll share how to prioritize rationally. So a Program Manager isn't a help for getting other teams to do work for you.


#### Integrators listen and prioritize

* Integrators listen to people's needs and prioritize based on what they hear. Product managers usually fill this function. You need Integrators when you use the Independent Executor model. If you move to an Independent Executor model, you should add Integrators. Otherwise, you’ll end up with a lot of messy product engineering, and a platform that isn't useful. 

#### The Away Team model can be a way to do it yourself

* Instead of having another team do the work, why not do it yourself? Amazon has an approach called the Away Team model. You can't rely on other teams to do work for you, but you can do work in their area of responsibility. The basic idea is you send one or more people to the other team. They do the work in their codebase. It isn't true embedding because they do the work there for a limited time. The way they interact with the other team is also flexible. They can be completely independent or have someone from that team that helps.

* Developing norms for this in your organization will help Away Teams be successful. Having standards for contribution will also help. I've found that it is useful to have someone from the other team work with the Away Team members and guide them. But if you have strong norms and standards, that might not be necessary.

* It is important that the work be compatible with the other teams' goals. So usually this requires conversation. Sometimes the other team may not even have the bandwidth for these discussions. In those cases, you may be out of luck.

* I will write up a longer post on this model later. 

#### Assemble a task force for critical projects

* If the work is critical, a Task Force may be appropriate. With a Task Force, you assemble a temporary team to do the work across a few teams. Task forces have downsides and can be disruptive. So you should only use them in urgent situations. 

* Task forces don't help you get your work done by other teams. 

#### Convince a Tiger Team to do it for you

* If the other team is too busy, sometimes you can convince a Tiger Team to do the work instead. This is a messy way to do things, but it can work in some cases.

#### Enlist the Community of Practice if you can

* Some Communities of Practice develop ways to drive work. If the work you need aligns with the Community of Practice, you can take advantage of that. 

### Coordination models

The Independent Executor is just one of many [coordination models](/coordination-models). Coordination models give you many choices to solve your inter-team coordination issues.


### Feedback

See anything I missed? Disagree with this? Please let me know your thoughts! 

### Thank yous

I learned of this pattern from [Jim Shore](https://www.jamesshore.com). 

Image by <a href="https://pixabay.com/users/lechenie-narkomanii-3764644/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1886383">Лечение наркомании</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1886383">Pixabay</a>