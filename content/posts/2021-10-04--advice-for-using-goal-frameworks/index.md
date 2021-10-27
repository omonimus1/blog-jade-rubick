---
title: Don’t use goal frameworks to manage projects
tags: ["coordination-models", "coordination-models-centralized", "okrs", "goal-setting", "project-management"]
cover: goal.jpg
author: Jade Rubick
discussionId: "goal-frameworks"
---

<re-img src="goal.jpg"></re-img>

Goal frameworks are a way to create a set of goals within the organization that attempt to be coherent across all the groups that need to contribute to that goal. The most common framework is [OKRs](https://en.wikipedia.org/wiki/OKR), but you also see [V2MOM](https://www.salesforce.com/blog/how-to-create-alignment-within-your-company/) and homegrown goal frameworks. You can even just track a list of goals across all departments. The military has a system called Commander’s Intent that you might be interested in, as well. 

In this post, I talk about some general advice for frameworks, and in particular cover why not to use them for managing projects.  

### When to use goal frameworks

Goal frameworks are useful when you see a lot of confusion or a lack of coherence in what people are working towards. They allow local goals to be aligned more with the central goals of the organization, and can help rationalize conflicting objectives and align parts of the organization that need to coordinate their work together. 

### Plan for about half a quarter, not a full quarter

The biggest error people make with goals is they overcommit and underfocus. A good rule of thumb is to choose a few things that represent about <span style="text-decoration:underline;">half</span> a quarter’s work, and make those your goals. You’ll have other stuff you have to focus on too, and you’ll have emergencies. You’re probably not accounting for that, so this helps you think critically about what you can accomplish. 

### Is it theater, or is it real?

When you’re using a goal framework, it’s usually a good idea to take it at face value. If you feel like you’re in an organization that is political, then you should bias towards goals that are more conservative -- after all, you’re making your own grading rubric. 

In a higher trust organization, or when you have the privilege to not worry about your position, make goals that think backwards -- what should be true? I like to ask what the situation calls for long term, and work backwards to what needs to be true in the next quarter.

### Reconcile priorities with sister organizations and teams

All of these systems can be useful because they force conversations about priorities and what you’re trying to accomplish. A lot of the value comes from improving coordination across separate parts of the organization. For example, you can make sure that the marketing organization and the engineering organization are preparing for the same big changes. So be sure that when you use goal frameworks, there is some sort of review of what other people in neighboring organizations and teams are doing. You’ll often find misalignment, and you can fix it early.

### Don’t use goal frameworks to manage projects

There can be tremendous pressure on engineering organizations to use OKRs to run projects, and in general I think that’s a bad idea. My favorite way to use these systems is to drive improvements in the way engineering is operating, rather than to drive the work itself. 

The way it typically works when you use OKRs to run projects is you ask each group what they commit to delivering in the quarter. Then these become OKRs for the quarter. What could be wrong with that?



* Listening to new information and changing your mind is penalized, while executing on the plan is rewarded.
* Projects that cross quarter boundaries are penalized, while projects that don’t aren’t. 
* Projects that are new are penalized (even if they’re 100x more valuable), while projects that are the current plan are rewarded.
* Projects that are higher risk are penalized, even if they’re more valuable. 
* Projects that learn from customers and incorporate feedback are penalized, while safe projects that are predictable are rewarded.
* Projects that do novel discovery and innovative work are penalized, while projects that lack innovation are rewarded.

Like a lot of management challenges, you’re creating incentives that can backfire. When you incentivize these things in a goal framework, you’re removing flexibility because you’re tilting the cost of change in one direction. Priorities change, and most product development work is variable enough that OKRs aren’t the most effective way to manage the work. You can manage projects better [with other methods](https://www.rubick.com/demo-driven-development/). 

Instead, I like to use goal frameworks to improve the way engineering functions. Instead of an OKR on Project A, l might focus an OKR on reliability or testing or improving our hiring process. 

You’ll often find this isn’t negotiable (the CEO might insist on it or there might be a need to coordinate across departments), so I just try to minimize it to the extent possible. One trick I have found useful here is when someone is pushing for a specific deliverable to be a part of the goals for the quarter, I ask what the outcome the project is intending to drive. That can provide some flexibility in how you reach that outcome.

I’ve found you don’t get out of projects in OKRs for free. Unless you provide your own [system for tracking and communicating](https://www.rubick.com/demo-driven-development/) the status of projects, people's information needs won't be met. Then, the goal system will seem like a solution to fill the void. 

### Make goals fluid

If things change, should you update the goal, or leave it? I believe it’s a common mistake to focus on accountability more than having the goals make sense. If you don’t change the goals, then every meeting you’re reviewing something stale. My advice? Update your goals as you have new information.

The alternative to this results in a situation where people are reporting on the same dead goal every week. It becomes ridiculous -- but I see this all the time.


### Consider trying “2-up” for organizational awareness 

One goal framework you may not be familiar with is the military’s use of [commander’s intents](https://en.wikipedia.org/wiki/Intent_(military)) (abbreviated CSI for some reason). The military is a surprisingly good source of information on management, and this is no exception.

Commander’s Intents are expressions of the desired end state and key tasks that, along with the mission, are the basis of the subordinates work. “CSI acts as a basis for staff and subordinates to develop their own plans and orders..., while maintaining the overall intention of their commander. [CSI] is also a concise expression of the purpose of the operation. CSI may also include the commander's assessment of the adversary commander's intent and an assessment of where and how much risk is acceptable during the operation.” 

One thing I particularly like about this approach is every **subordinate is expected to understand the intent of the organization two levels up**. I’ve never used this “2-up” system, but it seems like a potentially better system than OKRs or V2MOMs -- I’d be curious to hear from anyone that has experience with it. I like that people aren’t expected to internalize the goals from every level of the organization. 


### Reality is complex, goals are simplistic

One of the bigger challenges with goal frameworks is that they simplify the situation. This is both desirable (as they simplify what to focus on, and get people aligned on that), and a curse (if you look back with a critical eye, you’ll see most goals are trash). 

Bjorn Freeman-Benson: “One of the problems of these goal frameworks is that they are used to be over-precise and that over-precision then limits the decisions that the lower levels of the organization can/should make. And thus you end up with a suboptimal overall result. [You want to] set goals without overly constraining how the lower levels of the organization should reach them.”

He gives this as a hypothetical example:

If team A's goal is 100 widgets then team A will work really hard to build 100 widgets. But if the real higher goal is 12 happy customers and the higher level just decided that 100 widgets delivered will create 12 happy customers, that constrains the lower level from doing something different to create the 12 happy customers. For example, maybe we can actually get happier customers with 50 widgets and then help the customers install the widgets? But if I was measured by an OKR, I couldn't do that because I'd miss my numbers.

Ideally, you want the local team using their local domain expertise to come up with an optimal solution. If you find your local teams aren’t able to do this, you may want to be more proscriptive. But you may also want to consider how to develop that capability on your local teams, as command and control isn’t scalable or effective.


### Have a cadence for information sharing against the goals

All of these goal frameworks are intended to get people to understand what the organization is doing and why. And typically there is some cadence of sharing information on how everyone is doing against those goals, to get people to coordinate their activities better.

I’ve also found it useful to use goal systems to improve information flow within the company -- it can be really good to know what is going on in other departments, and be able to see if everyone is coordinating or not. Having a single place where you can see what everyone is up to is genuinely useful.

Typically the format for this is to report on how we’re doing against the goals, every week. This can be in a written location, and sometimes also done verbally. Sometimes leaders will only talk about things that aren’t green, if you’re using a “green/yellow/red” system.


### Messy is fine

Goal systems tend to be frustrating and never feel perfect. Many organizations struggle to complete them on time, and they require a lot of planning and investment. My general advice is to expect it to be messy, but focus on the conversations that it will generate. You’re aiming to improve the conversations and decision-making, and that’s actually probably more important than the goal-setting framework itself.

### Consider starting lightweight

It can be tempting to start right in with OKRs or another framework. But you might get a lot of the same value, without as much process involved, by just writing down what everyone’s goals are and talking through them each week in a leadership meeting.

### Feedback

Any important advice I missed? Let me know!

### Coordination models

Goal frameworks are just one of many [coordination models](/coordination-models/). Coordination models give you a menu of choices to choose from when solving your leadership coordination issues. 

### Thank you

Thank you to [Bjorn Freeman-Benson](https://www.linkedin.com/in/bjornfreemanbenson/) for pointing out the problem of over-specificity as a challenge with goal frameworks. And to [Gus Shaffer](https://www.linkedin.com/in/gusshaffer/) for suggesting I add an example to the “don’t use goal frameworks to manage projects” section. And to [Gustavo Aguiar](https://www.linkedin.com/in/gustavo-aguiar/) for edits and feedback. [Alex Kroman](https://www.linkedin.com/in/alexkroman/) taught me some of the rules of thumb here. [Merlyn Albery-Speyer](https://github.com/curious-attempt-bunny) gave me feedback, suggested a different (and better) title, and pointed out typos. [Ian H Main](https://www.linkedin.com/in/ianmain/) pointed out some awkward language, and provided some helpful feedback.

### Feedback

See anything I missed? Disagree with this? Please let me know your thoughts!

Image by <a href="https://pixabay.com/users/sasint-3639875/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1822688">Sasin Tipchai</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1822688">Pixabay</a>


