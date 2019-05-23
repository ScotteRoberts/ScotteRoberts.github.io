---
title: 'Agile and API'
date: '2019-02-27'
description: 'At Talent Path we are jumping into Node and Express development on servers. For technology, I have been interested in making Server APIs.'
thumbnail: 'https://code.org/images/social-media/code-2018-creativity.png'
---

## Talent Path

We worked on getting our projects in order. The need for cohesion is getting stronger. However, the agile workflow is much more effective at getting tasks done quickly without having to worry about the bigger picture; you put your head down to work and get your tasks done as quickly as possible. I finished my "sample data" task and left it off to Ervin, Kevin, and Jon to use some of that data for the UI.

Besides project work, we had a wonderful lesson on how to make our own server APIs using Express. We took our message board app and made CRUD (Create, Read, Update, Delete) endpoints using HTTP verbs (POST, GET, PATCH, DELETE) respectively. We almost have all the tools to make a fully fledge full-stack application. All we need is the ability to store data in some persistant way (Mongo DB most likely).

## Technology

Article: [How To Build Evolvable APIs](https://levelup.gitconnected.com/to-create-an-evolvable-api-stop-thinking-about-urls-2ad8b4cc208e)

This article focuses on how to make an evolvable API that grows with the business. The focus is on the business requirements side, ignoring security and other processes / standards around APIs.

An issue that most API start to have are rigid, specific endpoints that do not follow the flow of user interaction and break when the business logic starts to change. [Explanation](https://levelup.gitconnected.com/to-create-an-evolvable-api-stop-thinking-about-urls-2ad8b4cc208e#dafd)

So, to make an evolvable API, we should first analyze the business flow and change the API endpoints to match that flow.

To be completely honest, when the article discussed networks deciding how request / responses should communicate, I was lost. It seems like they are describing the REST network architecture where the client and server must be in agreeance on the data format being passed back and forth. The implementation detail of the "url" is just an implmentation, not how we should structure our logic around making APIs. One key sentence that I picked up on was,

"Neither the client or the server needs to be the permanent canonical source for the state. The state is in the conversation."

If we use the conversation of the client and server as the complete interaction, we can create "strategies" (from the strategy pattern) to solve our problems and have an extensible system of strategies to plug in whenever business logic changes.

Thanks again for reading!!
