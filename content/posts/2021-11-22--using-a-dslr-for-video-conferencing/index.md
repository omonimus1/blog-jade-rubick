---
title: Using a DSLR for video conferencing
tags: ["remote-work"]
cover: dslr.jpg
author: Jade Rubick
discussionId: "dslr"
description: "You can dramatically improve your videoconferencing using a DSLR camera. This guide explains how I set it up and some of the challenges I face."
---

<re-img src="dslr.jpg"></re-img>

## Why set up a DSLR for videoconferencing?

Almost all of my professional life is done via meetings online. So I thought I should invest in things that make it easier to interact with me -- easier to hear and see. I saw two people who had invested in DSLR setups: [Jason Yee](https://www.linkedin.com/in/gitbisect/), and [Derek Steer](https://www.linkedin.com/in/dereksteer/). They stood out in Zoom meetings, because they were very clear and the camera was tight in on their face. 

## How is it using a DSLR as a webcam?

I've gotten it to a pretty good state, but in the past it has been really fiddly. It stopped working occasionally, and I wasn't sure why until I spent a lot of time on it. I still have some issues with Google Meet. 

The results are worth it to me, but the frustration is real. These are issues I have had:

* (Solved) For a number of months, my video feed would sometimes just cut out. It seemed to take a restart or two to get it working again. I believe this was due to the cheap video capture device I was using. After going back to the Camlink (as I describe below), things began being reliable again. 
* (Solved) Sometimes the video feed looks distorted. Like I’m really skinny. This seemed to be another issue with the video capture device. 
* (Solved) Up until recently I was having near daily kernel panics. They seem to have stopped when I started plugging in two USB-C connections to my laptop instead of one. Maybe having a large monitor, DSLR video, and a few other devices plugged in to the same connection was the cause? I have no idea. I do know it happened across three different computers, and with clean installs of Mac OS, and the kernel panics are all in Apple code. I'm not even sure this is related to the DSLR. 
* When I use the camera with most web browser based videoconferencing solutions, I get an echo in the sound, because Zoom seems to be the only solution out there that can use a microphone as both a speaker and microphone. 
* If I leave the camera on for a very long time, it needs to be cooled down or restarted. 

So all of this is to say the cost of having a DSLR setup is that it is more complex. It can result in having to do things like restart you computer right before an important meeting. Diagnosing these problems can be hard, because there can be so many places the problem can be. 

## What does it look like? 

These aren't the best examples, but give you an idea of what the difference is. This is the view from my Macbook, sitting in a corner:

![Macbook webcam](macbook.png)

For a while I used a Logitech webcam. It was ... fine. 

![Logitech webcam](logitech.png)

And this is the view from the Sony a6000.

![Sony SLR webcam](sony.png)

I do some comparisons below to the Lumina webcam as well, and added what it looks like now that I've added a lens.

## Choosing a camera

I initially purchased a [Sony a5100](https://www.amazon.com/gp/product/B00MHPAFAG/ref=as_li_tl?ie=UTF8&tag=rubick-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00MHPAFAG&linkId=f674c8fdb42ca9d0c31a84a758eaea84). It’s smaller than many alternatives, and has a handy flip up screen, so you can see what you’re shooting from the front. However, the external battery seemed to not power it forever — it would need to be removed and reinserted every time I used the camera. 

So I instead went with a [Sony a6000](https://www.amazon.com/gp/product/B07BYZ5YB7/ref=as_li_tl?ie=UTF8&tag=rubick-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07BYZ5YB7&linkId=ae5ecdf669c9fdefa942169bd0804133). It seems like Sony cameras are some of the best supported for webcams, so if I were purchasing today, that’s probably what I would start with. But anything with clean video that can take a dummy battery and stay on for a long time is fine. Some DSLRs won't stay in video mode for long periods of time, so be sure to search for overheating and using it as a webcam. Here are a couple of sources that list cameras that should work (but you should search a bit before using it):

* [List of camera you can use](https://www.elgato.com/en/cam-link/camera-check) with Elgato Camlink
* This is another [list of cameras with clean video from Atmos](https://www.atomos.com/compatible-cameras)

I started out using the lens that came with my Sony, which has a 16-50mm, f/3.5-5.6 lens. It worked fine, but in retrospect I should have upgraded it much sooner. You can see what a difference it made if you look later in this article. 

## You’ll need a dummy battery

You’ll need your DSLR to stay on while you’re using it. So for whatever type of camera you get, you’ll also need a power adapter that allows you to plug a power cord into the battery compartment so it runs off A/C power instead of a battery.

These are called "dummy batteries". I don’t believe mine is still available. But search for one that corresponds to your DSLR. 

## Video capture

You’ll need something that can take the raw video and get it into your camera with low latency. To learn more about this, Jason Yee [has a great explanation](https://docs.google.com/document/d/1PjocFpojp771gmmn22JcApPj-Sc_RqAKWvpXTIhz-aU/edit). 

* [Elgato Camlink 4k](https://www.amazon.com/gp/product/B07K3FN5MR/ref=as_li_tl?ie=UTF8&tag=rubick-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07K3FN5MR&linkId=54c5381236996362db5fe541f4f8dd80). I'm on my second or third Camlink. The first time I tried it, it stopped working after a short while. In December 2021, I purchased it again, and it seems to have addressed two of the main issues I was having (with the video feeds cutting out). The whole setup is more reliable again. Crossing fingers it won't stop working again like it did before.
* For two years, I used a cheap HDMI video capture device Jason Yee recommended. It was only $10 and worked fine. It did give a slight red tint to the image. However, it’s no longer available on Amazon, so you’ll need to find some other option. 

## Cables and such

It would be nice if things just plugged into USB-C on my laptop. Most cameras output Micro-HDMI, so you’ll need: 

* [Micro-HDMI to HDMI cable](https://www.amazon.com/gp/product/B06WW3LPWL/ref=as_li_tl?ie=UTF8&tag=rubick-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B06WW3LPWL&linkId=a172bb0b67d2e582a4faff0f0fed3ced) ($10)

So from the camera, I have a this cable plugged in to the video capture device. That in turn is plugged in to a [CalDigit Thunderbolt dock](https://www.amazon.com/gp/product/B07CZPV8DF/ref=as_li_tl?ie=UTF8&tag=rubick-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07CZPV8DF&linkId=20a1f3959c4a6e2a77c3f000630fa940). That is plugged in to the USB-C on my laptop. The CalDigit is not a necessary purchase -- I did this because I was trying to diagnose some VERY annoying USB problems and I read it might be a solution. Somewhere in this is a weakness in my setup, I suspect.

## Setting the DSLR above your screen: get a mount

I use this mount to put the DSLR right above my screen. It’s easy to figure out when you receive it. It basically clamps onto the back of my desk.

* [Elgato Multi-mount](https://www.elgato.com/en/multi-mount-system) - this seems to be the best one, but when I was buying it, it was impossible to get in the US. I couldn’t find a better alternative. I ordered this from the UK, and it took a month to get here. 

## Bathe my face in light

Some people may not like the light in their face. I live in a climate where we yearn for sunshine and only see it for fleeting moments in the summer. The light does look good on camera. But I also like that it makes me feel like I’m in a bright space. I have two of these. You can set the color temperature and brightness. Weirdly they are controlled via an app or menu bar on the Mac. They work, but it’s weird that it’s always digitally controlled. 

* [Elgato Key Light Air](https://www.amazon.com/gp/product/B082QHRZFW/ref=as_li_tl?ie=UTF8&tag=rubick-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B082QHRZFW&linkId=60141e268c84ab0e4d1d2f2823fe8cac)

Here's the difference between light and no light. Before:

![Face without lighting](no-lighting.png)

And after, with the lighting:

![Face with lighting](with-lighting.png)

## I want to talk without a headset: get a microphone

I got a Blue Yeti microphone. It’s been fine. One challenge nobody told me about (but I should have anticipated) is that if you have an external microphone, it will get feedback from any other speaker. However, some microphones (like the Blue Yeti) have an output for speakers. If you plug in your speaker to this output, apparently it helps reduce feedback. It seemed to for me. I purchased some Bose mini-speakers, and this setup ended up feeling great. I can talk without a headset on, and people hear me well. And I can hear them great, and control the volume with a volume nob. It's a real pleasure to not need a headset during meetings all day.

The challenge with this is that I’ve found some applications don’t handle the input and output device being the same device correctly. Zoom recognizes it fine on a Mac. Google Meet does not. 

I use [Krisp.ai](https://krisp.ai) to reduce echo, since my office has wood floors and echoes. Zoom now has some echo reduction, but I haven’t yet compared the two. Krisp isn't perfect -- I've had it just turn off (and require a restart). But it's been good enough I haven't ditched it.

## Make it sound good with shock mounts and pop filters

A pop filter reduces extra noises on high quality microphones. They’re easy to install. A shock mount isolates the microphone from physical bumps and such. I never got one. But I did get a mount for my microphone. 

* [Aokeo pop filter](https://www.amazon.com/gp/product/B01N21H9WY/ref=as_li_tl?ie=UTF8&tag=rubick-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01N21H9WY&linkId=6352aac8ce3eeb55d7246363d95b8951). 

## Lumina webcam vs DSLR review

In December 2021, I purchased a [Lumina webcam](https://getlumina.com). It has a great form factor, and I love that it's USB-C. It also attaches nicely to the monitor. The dream is that it would offer the same quality as a DSLR -- then you wouldn't need the expensive DSLR, the mount, the capture device. And it would just plug in to your computer. The Lumina even features a nice little privacy cap.

The Lumina is a very fine device, but it's not for me. It doesn't have the same detail and quality of the DSLR. 

I set it up in the evening. Sometimes I start work in when it's still dark out, so this is a realistic situation for me. Here's the Lumina device:

![Lumina at night](lumina-night-w-light.png)

Here's my DSLR:

![Sony at night](sony-night-w-light.png)

So comparing those two, the Lumina tries to balance the brightness more, but the image looks pretty poor. And it does a nice thing where it tracks your face, and keeps it in the picture, but the DSLR makes it easier to control what is in your background (I don't like to show my window as I think it's distracting). You can override these things with the Lumina. The DSLR image clarity is much better. Still, the Lumina isn't terrible, and it's possible as they improve their software, it will be a better option. I'm using beta software after all.

The next morning, I did another comparison. The Lumina actually offers two different camera inputs. The "raw" input, which shows what it does before all their software intervenes, and the "plus" input, which shows the input after the software has done its work. This is the raw input, with lighting:

![Lumina during the day, with light, raw mode](lumina-day-raw.png)

Oh my god that is kind of terrible. Let's see if their "plus" mode, after software does it's magic, helps:

![Lumina during the day, plus mode, with light](lumina-day-plus.png)

So that doesn't really help. Maybe it's being over-sensitive to my bright lighting? I tried turning off the front light, and the results look pretty good. 

![Lumina during the day, plus mode, without light](lumina-plus-without-lights.png)

But I still prefer my Sony a6000 DSLR setup. Here's the Sony view, With light: 

![Sony DSLR, during the day, with light](sony-day.png)

When there is better ambient light, it looks even better. It does make me think it might be worth investing in a higher speed lens, as the Lumina is a picking up a lot more light from the environment. I like that companies like Lumina are starting to produce webcams that are intended to compete with DSLR setups. But they still have a lot of work ahead of them. Still, for people that don't want to hassle with a DSLR setup, the Lumina is a decent option. I will be returning the Lumina. 

## Upgrading the camera lens

After evaluating the Lumina, I realized the reason my picture was so dark is that my camera wasn't letting in very much light. So I purchased a [Meike 28mm f/2.8 camera lens](https://www.amazon.com/gp/product/B01DZ5URFY?ie=UTF8&psc=1&linkCode=ll1&tag=rubick-20&linkId=b1a0917af9598d78394ab87063641aef&language=en_US&ref_=as_li_ss_tl). 

Here's the original Sony 16-50mm f/3.5-5.6 lens that came with the camera:
![Original Sony zoom lens](sony35to56_16-50lens.png)

Here's the view from Meike camera lens.
![Meike manual focus 28mm lens](meike28mmf28.png)

Some things to note:
* The Meike is a manual focus, fixed lenth lens. When using as a webcam, that means you set the focus and leave it there. If you move around a lot, that's not a good option for you.
* You can manually set the focal length on the Meike lens, to decide how much light and depth of field you want. 
* One annoyance with a zoom lens is when you turn it on, you have to zoom in and frame it each time. The Meike is easier because it starts always at the same Zoom level. However, you better be happy with how it frames the scene -- it isn't something you can adjust. 
* I'm amazed how much more light it brought in. It significantly improves the view.
* The Meike lens cap is also easier to put over the lens, as a privacy cap. The Sony cap is less satisfying to put over the lens.

## What does your desk look like?

There are the aethetic aspects of the decision as well. It definitely adds a lot of cords to my desk. This is a minimally straightened out view of my desk (pretty close to how it looks most of the time, except I usually have a few more things on it):

![Picture of desk](desk-photo.jpg)

## Further reading

* Besides the articles by Jason Yee, I found one of the most helpful posts was this one by [Matt Stauffer](https://mattstauffer.com/blog/setting-up-your-webcam-lights-and-audio-for-remote-work-podcasting-videos-and-streaming/)

## What's next

I'll probably experiment with my video capture and see if that improves things. I've also heard of webcams that try to achieve DSLR quality recommended to me, so I plan to try one of them out and see if it's equivalent. If it is, I might use it to replace a lot of the things I've purchased. I'll report back here what I find.

## Feedback

I'm far from an expert on all this, so if you have any ideas on things I'm doing wrong, let me know! Also happy to answer questions on it. 

Also, be sure to [subscribe](/subscribe/) if you’d like to be notified of future posts.

## Thank you

Big thanks to [Jason Yee](https://www.linkedin.com/in/gitbisect/) for sharing his [setup notes](https://docs.google.com/document/d/1PjocFpojp771gmmn22JcApPj-Sc_RqAKWvpXTIhz-aU/edit). Thank you to [Drew Stokes](https://www.linkedin.com/in/drewstokes/) for pointing out the challenges of overheating. Thank you to [Adam Larson](https://www.linkedin.com/in/adam-larson-seattle/) for getting me to post a photo of my desk. 

Image by <a href="https://pixabay.com/photos/sony-a6000-ilce-6000-camera-4808408/">Farbsynthese</a> from <a href="https://pixabay.com/">Pixabay</a>