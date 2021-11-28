---
title: Should platform teams deprecate or does that cause massive problems?
tags: ["platform", "communication", "scaling", "org-design", "delivery", "velocity", "platform-engineering"]
cover: fan.jpg
author: Jade Rubick
discussionId: "platform-deprecation"
description: "Deprecation is a common thing with platform technologies: libraries, APIs, and components. But it causes huge problems. This outlines the hidden costs of deprecation and suggests other ways to handle deprecation."
---

<re-img src="fan.jpg"></re-img>

Platform teams underestimate how much pain they cause when they deprecate their offerings. You should make deprecation rare and go through a process. Or the team should do the deprecation work itself.

### Deprecation improves life for a team, but at an organization cost

A platform team’s natural incentives don’t match the needs of the wider organization. 

The team will want to keep their code orderly and easy to work in. They will want to reduce complexity and improve things. Deprecation make life better for the platform team. 

Yet, this is dangerous. It is easy for a platform team to create work for the rest of the organization. When they deprecate something, they are creating work on many teams. This type of “fan-out” work is dangerous, because it is expensive and hidden. I have seen product engineering focused 100% on platform projects. I've seen  company-critical product work delayed due to lower priority platform work.

This is not because the platform teams are dumb or bad. Their incentives aren't set up right. Platform teams exist to speed up organizations, not to slow them down. So their incentives need to align. Externalizing costs is a [moral hazard](https://en.wikipedia.org/wiki/Moral_hazard). 

### Deprecation is not customer centric

Deprecation is the illusion of communication. It appears to be a kind warning of upcoming changes. But it transfers responsibility for your internal problems to your customers (other teams). 

Shifting problems to your customers is the opposite of customer centric. You are requiring them to do work for you. 

When you deprecate, you prioritize your work over the whole organization's work. This is also not customer-centric, because the company's customers may lose out. You are making a choice with an unknown opportunity cost. For all you know, you could be making a decision that will kill the company.

### Sometimes deprecation is necessary

So this may sound like a rant against deprecation, but it is true that deprecation is often necessary. Sometimes technical choices paint you into a corner, and deprecation is your only way out. The more a team has to maintain, the larger the surface area for vulnerabilities. And you do want to provide a consistent experience for a platform. And sometimes your team struggles to maintain legacy services that nobody understands. Having an unsustainable team load isn't realistic either.

Start with taking this as an opportunity to learn. What decision did we make that required deprecation later? Even if someone else made those decisions, you can learn from them. 

And when you do deprecate, you should take great care to minimize the cost on others. Provide simple upgrade paths. Support legacy approaches for as long as you can. 

### How to handle deprecation

You want to have a system where you can be rational and discuss the impact of deprecation. You also want to minimize externalizing costs.

The two ways I see to solve this are:

**Make it hard to deprecate things**. Architects or engineering leaders can approve deprecation, for example. 

**Make platform teams responsible for doing their own deprecation work**. This is my favorite approach. 

With this approach, if a team deprecates an internal API, they do the work to eliminate all use of that API. If they upgrade a library in a breaking way, they do all the upgrades in their clients. 

If you do this, platform teams can deprecate all they want. They're aware of the cost of deprecation, and they decide when it makes sense. They'll desire inexpensive and easy upgrade paths. This results in rational prioritization.

Doing this requires funding platform teams at higher levels. They will complain they lack the skills to work across codebases. When you hear that, ask how they can address that problem. Long term, that will be better for the organization.

If the platform team is unable to do the work, they should at least organize and work with the teams doing the work.

### Feedback

See anything I missed? Disagree with this? Please let me know your thoughts!

## Thank you

[Ben Bernard](https://www.linkedin.com/in/bernardben/) provided feedback on an earlier version of this article, and gave me insight into what he's seen at Amazon and Google and other places around deprecation. At Amazon they called this "owning your clients". [Ralph Bodenner](https://www.linkedin.com/in/ralphbodenner/) and I talked through the incentivizes and challenges of getting companies to work this way, and some of the failure modes we've seen in the past. He provided feedback on an earlier version of this post. [Marcos Wright-Kuhns](https://www.linkedin.com/in/marcoswk/) pointed out some other aspects of deprecation, like security and consistency, that helped me flesh out the "sometimes deprecation is necessary" section. [Eric Dobbs](https://www.linkedin.com/in/dobbse/) shared a helpful talk from [Laura Nolan](https://www.linkedin.com/in/laura-nolan-bb7429/) on [how to choose to kill or migrate something in place](https://leaddev.com/leaddev-live/kill-it-fire-or-not-kill-it-fire) (registration required). 

Image by <a href="https://pixabay.com/users/zhuwei06191973-11952162/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5409293">wei zhu</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5409293">Pixabay</a>