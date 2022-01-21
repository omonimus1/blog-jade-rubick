---
title: How security, reliability, and design teams can get other teams to do work for them -- the Objective Expert Model
tags: ["prioritization", "coordination-models", "coordination-models-team", "org-design", "scaling", "platform-engineering", "design"]
cover: objective.jpg
author: Jade Rubick
discussionId: "objective-expert"
description: "Security, reliability, and design teams can use the objective expert model to get other teams to do work for them, in a scalable way that encourages good relationships with other teams."
---

<re-img src="objective.jpg"></re-img>

Today I’m going to share my favorite way to organize specialist teams that want other teams to do work for them. I recommend this [coordination model](/coordination-models/) for security, reliability, and design teams. Non-specialist teams can also use it for some projects!

This approach gives your team leverage.

## What is an objective expert team?

* Your team has some sort of expertise. For example, they might be site reliability engineers (SREs), security engineers, or designers. 
* You want people in the organization to do work you identify as important. 
* You produce reports that help other people decide to do that work. 

## Example: a security team that partnered with engineering

The best example I’ve seen was the security team at [New Relic](https://newrelic.com). 

* The security team recorded vulnerabilities in Jira. They were assigned to teams. The security engineer categorized the ticket by severity. More severe vulnerabilities needed to be done faster than less severe vulnerabilities (according to a service level agreement).
* The security team emailed all managers, directors, and VPs a security report each week. 
* The report included a list of all the teams in engineering. Next to each team was a count of overdue security vulnerabilities. You could click on the count to see the vulnerabilities. 

Security team leaders told everyone they were responsible for acting on this information. They would escalate urgent issues. Everything else depended on engineering and product prioritization. 

Their weekly report became an easy way for leaders to measure themselves. It also became an easy way to measure each other. Local teams had the autonomy to prioritize security concerns against their own roadmap. And it gave leaders a way to see how their part of the organization was doing. 

This social engineering resulted in leaders taking ownership for security issues. 


### Handling security vulnerabilities as a front-line manager

When I was a front-line manager, I would get the report each week. I would make sure my team didn’t have any overdue vulnerabilities. If we did, that meant something had broken down in our team process. Usually it meant we hadn’t prioritized the work to complete it ahead of the security team SLA. I would dig into the issue and see what happened. 

Notice that the security team was a passive participant at this point. They did all the analysis to determine the severity of incidents. Their SLAs communicated their expectations. It was clear what a reasonable time was to address vulnerabilities. But they mostly left managing prioritization to the teams. 


### Handling security vulnerabilities as a director or VP

When I became a manager of managers, I interacted with the report in a new way. I was now responsible for my organization's security vulnerabilities. The report listed the teams in my organization. And it showed how each of them were doing. 

When one of my teams had a lot of overdue vulnerabilities, I would talk with the engineering manager. I wanted to make sure they had made a conscious decision about prioritization. If they hadn’t made a decision about it, it was often a sign that their team needed help. They might be under water, or they might have poor process. I would talk with the manager and make sure we put together a plan to improve things.

Thus the security team not only outsourced prioritization, they also outsourced accountability. They created some pressure and visibility around vulnerabilities. But they didn’t have to muck around in every team to get the work done. It was a very nice contract between teams, and worked quite well.


## Site reliability engineering teams can use the objective expert model

[New Relic](https://www.newrelic.com) went through tremendous growth during my time there. We confronted scaling and reliability every day. Monitoring companies receive insane levels of data from their customers. So the demands on our systems were high. 

One of the best things we did was to create a repository for incident information. Nowadays, you can buy incident management tools from [Blameless](https://www.blameless.com), [Jeli](https://www.jeli.io), [Fire Hydrant](https://firehydrant.io), or [Incident.io](https://incident.io). But at the time, we didn’t have such options, so we built a tool we called Upboard. (Blameless was built with the lessons from Upboard).

Initially, we used it to store all of the incidents we had, and the followup items. But over time, we developed a team by team metric for reliability. 

Although there was a lot of discussion about the metrics we used, they helped people make the case for doing reliability work. And they helped the entire organization focus more effectively on pain points. It also helped us realize what parts of our efforts were making a difference. 

Upboard also had a weekly report. It showed (on a team by team, and org by org basis), how teams were doing with reliability. The report transferred the responsibility for reliability to the teams that could do something about it. The reliability team then became the team that helped teams improve. They acted as [Consultants](/coordination-models/). 

This made for a healthy relationship. I always appreciated my interactions with the reliability part of the org. They were experts that had wonderful advice on how to make things better for my teams. Their reports showed me the experience I was offering customers.

## Design teams can also use the objective expert model

Companies often neglect usability. It can be frustrating to see customers offer experiences that people can’t navigate. Design is often iterative, but companies fail to iterate.

Ideally, your designers are working with local teams to prioritize usability work. When that fails, consider the Objective Expert Model. It gives more leverage for design teams.

Here’s how it can work:

1. I assume your designers [embed](/embedded-model/) on product engineering teams. They identify issues that need attention. 
2. The designers would grade the issues by some sort of severity. This would correspond to an SLA for addressing it.
3. You produce a weekly report: “Top product usability issues”. 
4. Product managers then use the report as input into their prioritization decisions.

See later in this post for how to put this in place. 


## Non-specialist teams can use this model for projects

Platform teams can steal this approach for non-specialist teams. If you have something you need others to adopt, you can make it visible who has done the work to adopt it. 

For example, let’s say your team is responsible for permissions, and you have created a way to do Role Based Access Controls (RBAC). Your work has to be integrated into the code of every product team in the organization. 

There are many ways to solve that problem: 



* You can do the work across all the engineering teams. ([I’m a fan of this approach](/should-platform-teams-deprecate/))
* You can create documentation on what needs to be done to integrate, and work through product management to get the work prioritized on each team. 
* You can create documentation on what needs to be done to integrate, and create tickets for each team to request them to do the work (I don’t recommend this approach)
* If you have the right prioritization, you can have a [Program Manager](/coordination-models/) coordinate all the parties involved. 

Another approach you can take is similar to the approach we described for specialist teams:


1. Make sure the prioritization is agreed upon. (Perhaps a deadline or stack ranking of priorities).
2. Tell every product manager it is up to them to decide, and ask them to surface risks of not achieving it on time.
3. Automate a report that shows progress by team. 
4. Share that report. 

What’s nice about this approach is you make it easy for the product managers to do their own prioritization. They might have other urgent work scheduled. You don’t have to know about their local details. You then focus your team on making it as easy as possible for every team to take part.

This again is a way to outsource the prioritization to the teams involved. 


## When to use the objective expert model

The Object Expert Model is one of the most scalable [coordination models](/coordination-models/). One team can produce a report that affects every other team in engineering. The main consideration is the cost required to produce the report. Coordination costs are low once you have set it up. The process and SLA combine to make it lightweight. 

If your team wants other teams to prioritize work from you, use this model. 

you can take this too far. It isn’t a model that every team should be using. Think about what it would look like if every team tried this model. Your organization would generate too many prioritization artifacts. It would be unwieldy. So if you see more than a couple teams using this model, think twice before adding another one.


## When using this model

The general approach is:

1. Make this part of a larger partnership effort, and consider the human incentives
2. Get buy-in and establish service level agreements or standards.
3. Send out a weekly report to managers, directors, and VPs. Ideally automated.
4. Be patient and look for opportunities for reinforcement.


### Make this part of a larger partnership effort, and consider the human incentives

You won’t be effective if you do this as a mechanical change. [Rebecca Campbell](https://www.linkedin.com/in/rebecca--campbell/): “Security [at New Relic] wasn't successful because they emailed me a report. They were successful with me and my team because they met with me when I first started, explained how things worked, and checked in with me regularly. They were _happy_ when I asked questions or reached out to them and delightful to work with. They saw themselves as enablers rather than blockers.”

She’s right. The security team used the Objective Expert Model. But they weren't just sending a report. They were doing many things to make their team approachable. And they aimed to make it easy to do the right thing with security. 

Think about how your team interacts with the rest of the organization. How would other teams welcome your report? You are successful if people view your report as _helpful_. I looked forward to the reliability and security team reports. They helped me create a better product. 

I have an example of a project that got it right. The Role Based Access Controls (RBAC) projects was initially a "disaster project". Everything seemed to be going wrong. But the team turned that around, mostly because of how they approached other teams. It became a known as a model project. 

Rebecca Campbell said: “The thing that was most successful about RBAC was the roadshow we did prior to asking teams to do anything. We met with every team, had their PM lead a portion of the meeting (very important to demonstrate priority and buy-in), shared sample code, and told engineers what was needed and where to get help.” Pay attention to what will make people think your team is helpful. 

You’ll likely need to do some work with your team to prepare them for how to interact with the rest of the organization. I interacted with several security team members at New Relic. They all told me the same thing. If I asked, "do I have to work on this vulnerability", they all said, "this is our assessment of the level of risk, and when it should be worked on. But it's up to you to prioritize it". They spoke with one voice. This requires a lot of work within your team. 

### Get buy-in and establish service level agreements or standards

After you've thought about the human side, you'll need to get agreement that the work is important. You then can codify this as a set of standards of a Service Level Agreement (SLA).

Start out by working with leadership. [Socialize](https://hyperbo.la/w/nemawashi/) the idea so that the SLA seem like a natural next step. Talk through the problems you’re seeing, and share the SLAs for feedback. 

It’s important to make your SLAs easy to consume. When you approach teams with work, you need to be using the SLAs to simplify the decision-space for them. They’re going to ignore your report unless it’s easy to consume.

A few considerations as you develop these SLAs:

* Some things are urgent. They may need a different process. For example, security teams may need to do this for remote code exploits that are live in the wild.
* Balance the timelines with the capabilities of the company. You can start with something achievable, ratchet up responsiveness over time.
* See below for an example to start from. You can vary the description and SLA turnaround, according to the needs of your product. This is a design example.

<table cellpadding="0" cellspacing="0">
  <tr>
   <td>
Priority
   </td>
   <td>Description
   </td>
   <td>SLA (report to close)
   </td>
  </tr>
  <tr>
   <td>P1
   </td>
   <td>&lt;criteria for most urgent usability issues. Should be severe enough that a team should interrupt its work.>
   </td>
   <td>1 day
   </td>
  </tr>
  <tr>
   <td>P2
   </td>
   <td>&lt;criteria for next class of usability issues. Should be severe enough that it should be addressed in the next body of work>
   </td>
   <td>14 days
   </td>
  </tr>
  <tr>
   <td>P3
   </td>
   <td>&lt;criteria for next class of usability issues. Essential to user experience, but people can work around it>
   </td>
   <td>45 days
   </td>
  </tr>
  <tr>
   <td>P4
   </td>
   <td>&lt;criteria for next class of usability issues. Things that are important for a good experience, but can be deferred.>
   </td>
   <td>6 months
   </td>
  </tr>
</table>


After you have priorities and SLAs, ask your team to start categorizing issues with them. You can use them to build your report.


### Send out a weekly report to managers, directors, and VPs 

As you craft the report, make sure teams are receiving a report that is actionable. Scope the issues to team's areas of responsibility. 

Sending it to directors and VPs adds an accountability layer to it. So having a rollup by organization is helpful.

Send it out weekly, and monitor how it is being received.


### Be patient and look for opportunities for reinforcement

It may take a while for the report to get traction. Many teams will ignore the report. And others will follow it. You should expect that to happen. 

Focus on how to make your team helpful. And look for patterns in the data that you can use to drive further improvements. For example, if you are a design organization, you can look for patterns in usability issues. This can lead you to making more proactive improvements.

Also, be on the lookout for opportunities to reinforce the importance of the report. For a design example: when a VP complains about the usability of the product, show them the report is the solution. It might be a moment where they realize the report they are ignoring is the thing that solves their frustration. Resist the urge to point out they are responsible for the problem!


## Objective expert versus other coordination models

This is one of many ways to handle team coordination. Other patterns to consider with specialist teams trying to outsource prioritization:

**[Controller](/coordination-models/)** or **[Work Demander](/coordination-models/)**: Traditional security teams use the Controller or Work Demander models. They dictate what needs to happen. Like a legal team, the product development group feels compelled to do what they say. This can be effective but has some downsides. The chief downsides are that security team member incentives aren’t always aligned with the company, and it can create an adversarial relationship. They can become the “team of no”. 

**[Consultant](/coordination-models/)**: acting as an Objective Expert team almost always goes hand in hand with acting as a Consultant. Your team aims to provide a service to the organization: your expertise. 

**[Embedded](/embedded-model/)**: specialist teams often act as embeds. The ideal is if you can have those embeds work with leadership in those local teams to make good prioritization decisions.


## Coordination models

Liaisons are just one of many [coordination models](/coordination-models/). Coordination models give you a menu of choices to choose from when solving your leadership coordination issues.

## Feedback

Any points I missed? Anything you wanted to hear more about? I love [feedback](/contact/).

If you liked this post, [subscribe](/subscribe/) to hear about future posts!


## Thank you

[Rebecca Campbell](https://www.linkedin.com/in/rebecca--campbell/), [Kelsey Yocum](https://www.linkedin.com/in/kelseyyocum/), [Stephen Weber](https://www.linkedin.com/in/stephentweber/), and [Eric Dobbs](https://www.linkedin.com/in/dobbse/) reviewed drafts of this post. Rebecca, as always, helped point out some areas I missed, especially around the human side of using this model. Kelsey had helpful feedback on how this works with design teams. Stephen contributed some discussion about team level metrics and helped refresh my memory of how the reliability metrics were adopted at New Relic. Eric also brought up some very interesting points about how costly it was to implement aspects of the reliability program, and a lot more interesting context. 


Image by <a href="https://pixabay.com/users/qimono-1962238/">qimono</a> from <a href="https://pixabay.com/">Pixabay</a>