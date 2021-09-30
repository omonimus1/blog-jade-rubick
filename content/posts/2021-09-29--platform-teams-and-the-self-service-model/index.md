---
title: Platform teams and the self-service model
tags: ["coordination-models", "coordination-models-team"]
cover: self-service.jpg
author: Jade Rubick
discussionId: "self-service"
---

<re-img src="self-service.jpg"></re-img>

Self-service is arguably the most important team [coordination model](/coordination-models/) you can use. If you are a leader in any moderately complex engineering organization, you should be actively pushing for self-service. Otherwise, you’re making a problem for someone else to clean up.

### What is the self-service model

In a team that adopts self-service:

* **The goal is for people to be able to use the team’s work products without talking with the team**.
* The team treats their work like a product, and provides high-quality documentation, APIs, and tutorials. 
* Every interaction with other teams is used as a learning opportunity. While they may not refuse to talk with other teams, the goal is to not need to do so. 
* The team continually reduces the complexity of interacting with their work, with the aim to make it so easy to use it’s preferable to any alternative. 

My favorite example of a team adopting this pattern was from New Relic. The database team started out as a [service provider](https://www.rubick.com/service-provider-model/) team, spinning up databases and setting up replication and backups for teams within New Relic. When they realized the value of self-service, they made a long-term commitment to move to a self-service model. They gradually automated and streamlined spinning up databases, and provided self-service documentation and tooling. Eventually, they were able to offer databases as a service within the company. They effectively removed themself as a bottleneck, which improved the efficiency of every team. This also reduced the communication needs for the team, so they were able to focus more and more on other high leverage work.

Self-service teams can provide a variety of offerings:

* Services, with APIs. 
* Tooling, like deploy or testing tools.
* Configuration and defaults that make security, linting, monitoring or costs easier to manage. 
* Libraries or components.
* Infrastructure. 


### When to use this model

I generally recommend to start using self-service as soon as you have platform teams. Product teams can have a self-serve approach too, but it’s something really to emphasize with platform teams.


### Pros


* **Highly scalable**. There isn’t a better [coordination model](/coordination-models/) that I’m aware of for decoupling the teams within an organization than self-service. It dramatically reduces the coordination requirements between teams. It’s one of the few things a company can do to get a “compounded interest” type of productivity out of engineering. 
* **Customer-focused**. Using self-service requires teams to think about and listen to their internal stakeholders. This can be rewarding for engineers who like to see the impact of their work. And this can often mean the overall Platform organization will be more focused and effective.


### Cons



* **It takes a lot of effort**. Getting something to be truly self-service can often be a long journey. And the team’s existing fires and “service provider” work can compete with the efforts to build self-service tooling. 
* **It’s more expensive**. The short-term costs of building self-service are greater than the alternatives. You’re trading off long-term scalability for a greater initial expense per capability. Switching to self-service can often require significant architectural changes, or require work from other teams to enable it.
* **It requires long-term thinking**. Because it can take a while for a team to make the journey to self-service, it can require long-term thinking. And in many environments, long-term thinking isn’t rewarded, or can be scarce. 
* **It can require wider skills from the team**. As [Merlyn Albery-Speyer](https://github.com/curious-attempt-bunny) put it: “Engineers more towards the ‘I built the thing I was told to build’ end of the spectrum will struggle on such a team or worse hold the team back.” This can require changing the way you hire and the skills you look for.


### When using this model

**Treat your offering as a product**

“My advice is to treat the platform like a product. What you want is the platform to be so useful that people onboard without having to make it a mandate. Too many times, I see people building platforms and not doing the user interview work required to make sure it is actually solving a problem for the internal customer it serves.”  
-- [Aaron Erickson](https://www.linkedin.com/in/aaronerickson/)

When you treat your offering as a product, you engage in a different focus than when you focus on “building a platform”. You focus on solving your customer’s problems. This implies your team...



* Spends time with the teams using your offering, understanding their needs. 
* Can accurately represent the relative value of requests they hear. Merlyn Albery-Speyer: “My first lesson was to not build anything for any single team’s needs. A test question to ask your customers is: if your team had to build/fix this yourselves, how much engineering effort would you be willing to invest in it? If the response is: ‘well, none of course!’ Then they’ve indirectly answered how valuable the need was to them.”
* Uses adoption and usage metrics to learn how people are using your work. Like a team launching a product, you carefully watch adoption, and think about the entire experience using your product.

**Don’t just create great documentation**

“Too many folks think good self-service is all about extensive documentation. While it can be true that great self-service offerings have a lot of documentation, designing a thing intentionally to eliminate questions and doubt is the high art here.”  
-- [Merlyn Albery-Speyer](https://github.com/curious-attempt-bunny)

How do you do this? You need to radically reduce complexity in the user experience. When exploring a solution, [John Hyland](https://www.linkedin.com/in/jhyland/) has a wonderful talk (“So Simple A Well Trained Artichoke Could Do It”) on an approach to building out a solution that minimizes the number of steps it takes to accomplish your goals -- I’ll post it here when it’s publicly available. In this talk, he advocates for an iterative approach where you create an implementation and then refine it multiple times, each time removing steps you have to go through to use your API or tooling, and reducing the amount of outside knowledge required. You need to actually go through the steps the user will go through. The user experience isn’t adornment -- it’s actually most of the value you’re providing, so spend a lot of time on that.

**Create a place to find platform capabilities**

How will people know about and take advantage of the capabilities of the platform? 

If this doesn’t already exist, bootstrap a place where platform capabilities can be listed. You can start with a central place in the wiki, or in Github. Include things like how the build and deploy system works, create a place for APIs and libraries available to you. And include links to your design system and component library. These are things that should improve over time, so reward people who spend time improving them.

When that is in place, you should also find a way to broadcast new capabilities, and for customers of a capability to hear about updates. Mailing lists or Slack groups can work for this.

**Move to self-service incrementally (consider a Wizard of Oz or Scripting approach)**

Moving to self-service often takes a very long time. One thing to evaluate is how you’ll get there incrementally. Two approaches to consider:


* **Wizard of Oz**: if your team offers a service that can theoretically be automated someday, consider a Wizard of Oz approach. The database team at New Relic took this approach, I believe. Teams used to come to them and ask them to spin up a database for them. They knew that their end goal was to make that automatic. So they created a webform that people could use to request a new database, and gradually automated the steps behind it. To their customers, it took less and less time. After a year it still took manual work for the database team, but only a 5 minute process to create most new databases. The idea with this is to gradually fill it in, but start out with a [service provider](/service-provider-model/) approach. The Wizard of Oz approach is similar to the [Facade design pattern](https://en.wikipedia.org/wiki/Facade_pattern) in object-oriented software design. 
* **Script it all**: if you have a bunch of steps that people take, that you believe can eventually become automated, then you can create a script that basically walks people through the steps they need to do. For each step, they can do what they’re supposed to, even if it’s not automated. Over time, you can eliminate and automate steps, making it more efficient over time. [Ada Cohen](https://www.linkedin.com/in/ada-cohen-75176a93/) used this approach at Gremlin to improve a deploy process. She started with a list of steps in the wiki, and turned that into a script which told you step by step what to do. Then, she began automating and reducing steps in the script. This allowed her to roll out improvements incrementally and improve the deploy process significantly! 

**Minimize or even outlaw deprecation**

This is probably going to be controversial, but Platform teams should not be in the business of deprecating their offerings, except when strictly necessary. Why?

A platform team’s natural incentives don’t match the needs of the wider organization. The team will want to keep their code orderly and easy to work in. They will want to eliminate complexity and improve things. Sometimes these deprecations can cause a lot of internal pain for a team.

Yet one of the dangers in a platform organization is that they can push a lot of work out to the broader organization. Platform teams exist to accelerate organizations, not to slow them down. This type of “fan-out” work is dangerous, because it is expensive and hidden. Platform teams should do go out of their way to provide simple upgrade paths and support legacy approaches for as long as they possibly can. I remember a time at New Relic when most of the work happening in Product Engineering was fan-out work from the Platform teams.

On an organizational level, two ways to solve this are:

1. Make it harder to deprecate things (require approval for an architect, for example).
2. (My favorite) Make Platform teams responsible for doing their own deprecation work, even if the work is in other codebases. Doing this requires funding Platform teams at higher levels, because they’re expected to do a lot more work across codebases. One nice benefit to doing things this way is it eliminates the need to keep Platform teams from deprecating things, because the cost of doing this work isn’t externalized, so it is prioritized rationally. Platform teams will often say they’re not equipped to do this type of work -- if you hear that, I think the Platform org should be responsible for correcting that. If they are truly unable to do the work, they should at least organize or work closely with teams doing the deprecation work. Externalizing costs is a [moral hazard](https://en.wikipedia.org/wiki/Moral_hazard). 

**Consider extending your offering to internal and external customers**

One of the more interesting things about how Amazon operates is that they don’t distinguish much between internal and external offerings. For example, they offer the same trainings to internal employees and customers. 

A useful exercise can be to imagine your team’s capabilities as a product that also goes to external customers. Would people pay for it? How would they interact differently with it? Conversely, imagine if you could replace your team’s offering with something that is available externally. 

Thinking through these things can help you solidify your thinking of what you’re offering, and help you make sure that your team’s offering is essential and valuable to the company.

**Mandate as little as possible**

Self-service teams often focus on creating a “paved road” or “golden path” that makes doing the right thing the easy thing:

* When you mandate everyone use something, you distort your ability to measure if you’re being useful to your teams. And you can get poorer signals of where the problems are.
* Perhaps more importantly, mandates can be a form of coupling. They introduce harder dependencies, and force your team to be on the critical path for more. 

Sometimes it is necessary to mandate the use of an offering. For example, you don’t want to have multiple SSO implementations, and it’s legitimate to require security in implementations. 

One way to handle this is to have layers to your abstractions, and let your customers go into deeper layers if necessary. Aaron Erickson: “One painful lesson we learned was that if you are too opaque with your abstractions and can't break them when needed, it becomes very easy to box yourself into a corner.”

**It shouldn’t feel like it’s imposed**

If you’re seeing teams resisting your offerings, this is usually a sign something is wrong. The ideal reaction when you announce a newly available or upgraded offering is, “thank you, this is going to make my life so much better!”. When you’re not seeing that, dig into why.

**Consider a plugin approach, and make it easy to contribute**

One person I worked with at Gremlin, [Ben Bernard](https://www.linkedin.com/in/bernardben/), had a huge impact on the internal tooling at Amazon. What he did was he made a set of developer command line tools that were really handy. But more importantly, he made it easy to contribute to these tools and add new ones. When he came to Gremlin, he used this pattern to quickly spin up a set of incredibly useful tooling. But the developers found it helpful because they could contribute to and improve these tools themselves. 

Plugins can be important with self-service because plugging something into an existing model requires less centralized work than doing the work in that centralized thing. For example, imagine a service that does A, B, and C versus a service that you can plug in the behavior for A, B, and C. The latter model will be easier to extend without involving the central team. So think carefully about anything you provide which will require you to make updates for other teams to use it.

### Self-service versus other coordination models

The natural pair for self-service is the independent execution model, which I’ll write about in more detail later. In this model, teams don’t make plans for work that depends on non-existent capabilities. Or more precisely, they can make those plans, but they expect those plans to be high risk, and always plan for fallbacks where those things don’t occur. 

Two other coordination models that are natural fits with self-service are embedded and consulting models. With self-service, you have a strong need to stay connected to the needs of your customers. So having team members embedded in other teams can be a useful way to see what their pain-points are. And if you provide a way for people to consult with your team when they have problems while using your work, you gain a valuable source of information on where your offering is falling short of the self-service ideal. So embedded and consulting models can be good complements to the self-service model.

### Coordination models

Self-service is just one of many [coordination models](/coordination-models/). Coordination models give you a menu of choices to choose from when solving your leadership coordination issues. 

### Feedback

See anything I missed? Disagree with this? Please let me know your thoughts!


### Thank you

This post benefited heavily from the feedback and thinking of many people with deep experience building Platforms. [Jim Shore](https://www.jamesshore.com) introduced self-service to me. I’d like to thank [Merlyn Albery-Speyer](https://github.com/curious-attempt-bunny) for offering a huge list of things he’s learned over the years building self-service teams, many of which became key points in this article. [Aaron Erickson](https://www.linkedin.com/in/aaronerickson/) shared his experiences with platforms as well, which helped cover some points I wouldn’t have thought to include. [Gus Shaffer](https://www.linkedin.com/in/gusshaffer/) had a lot of wisdom to share on things to watch out for and in particular some of the challenges of moving to self-service. [Marty Matheny](https://www.linkedin.com/in/martymatheny/) double-checked my memory about the database team at New Relic and helped me see how they had gone about moving to self-service, which helped flesh out the Wizard of Oz pattern. [John Hyland](https://www.linkedin.com/in/jhyland/) has taught me a lot about building platforms (as we built them together!), and provided valuable feedback on this article. I learned about the importance of the plug-in model from [Bjorn Freeman-Benson](https://www.linkedin.com/in/bjornfreemanbenson/) and [Kevin McGuire](https://www.linkedin.com/in/mcgui/). [Ben Bernard](https://www.linkedin.com/in/bernardben/) and [Ada Cohen](https://www.linkedin.com/in/ada-cohen-75176a93/) were some of the most effective people I’ve seen at being both customer focused and building developer experience tooling, so watching them in action helped me see some of the patterns I’ve mentioned in this post. 


Image by <a href="https://pixabay.com/users/bertomic-2406133/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1576893">Michel Bertolotti</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1576893">Pixabay</a>
