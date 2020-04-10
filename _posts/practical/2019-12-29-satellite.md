---
title: Bitcoin Satellite Nodes 🛰️
layout: page-fullwidth
teaser: Blockstream Satellite broadcasts the Bitcoin blockchain to the entire planet via satellite, reducing Bitcoin’s dependency on internet access. Everyone in the world now has an opportunity to use Bitcoin.
subheadline: Practical
permalink: /practical/satellite/
categories: ["Practical"]
tags: ["Tech Info"]
header: no
image: 
    title: "grubles_build-own-satellite-node.png"
    caption: "Building Your Own Bitcoin Satellite Node - Grubles"
    caption_url: "https://hackernoon.com/building-your-own-bitcoin-satellite-node-6061d3c93e7"
---


{% include _improve_content.html %}

* [blockstream.com/satellite/](https://blockstream.com/satellite/)
  > The Blockstream Satellite network broadcasts the Bitcoin blockchain around the world 24/7 for free, protecting against network interruptions and providing anyone in the world with the opportunity to use Bitcoin.
* [blockstream.com/satellite-api/](https://blockstream.com/satellite-api/)
  > Blockstream Satellite API provides developers with an easy-to-use RESTful API that can be used to create applications that broadcast messages globally using the Blockstream Satellite network.
* [blockstream.com/satellite-api-documentation/](https://blockstream.com/satellite-api-documentation/)
  > Each call to an API endpoint responds with a JSON object, whether the call is successful or results in an error.
  > 
  > The code samples below assume that you've set SATELLITE_API in your shell to: https://api.blockstream.space
* [Blockstream/satellite](https://github.com/Blockstream/satellite)
  > This repository contains the development sources of the GNU Radio-based receiver for the Blockstream Satellite network.
  > 
  > In order to set up your receiver system, please read the following information carefully. For additional help, go to the #blockstream-satellite IRC channel on freenode.
* [blockstream.com/satellite-queue/](https://blockstream.com/satellite-queue/)
  > This page displays the current transmissions being processed by Blockstream Satellite. Users can make transmission status checks programmatically using our API or via the table below.
* [Blockstream Satellite API: Pay with BTC via Lightning to Broadcast Data Globally](https://blockstream.com/2019/01/16/en-satellite_api_beta_live/) - [news.ycombinator.com](https://news.ycombinator.com/item?id=18925136)
* [Building Your Own Bitcoin Satellite Node: Part 1 - Hardware Assembly](https://medium.com/blockstream/building-your-own-bitcoin-satellite-node-6061d3c93e7)
  > Note: It is now possible to run the Satellite receiver software on a Raspberry Pi or similar device! If using Ubuntu or another Debian-based distro, you can just add the PPA and apt install satellite !
* [Building Your Own Bitcoin Satellite Node: Part 2 — Software Installation](https://medium.com/blockstream/building-your-own-bitcoin-satellite-node-part-2-software-installation-a94a0b85d089)
  > Note: While there is a Part 1 — Hardware Assembly, it is not required for Part 2 — Software Installation. You can skip over Part 1 if you are waiting for your parts to arrive.
* [Building Your Own Bitcoin Satellite Node: Part 3 — Dish Alignment](https://medium.com/blockstream/building-your-own-bitcoin-satellite-node-part-3-dish-alignment-1306b4c21326)
  > At this point you should have your dish assembled and the required software installed. You can, and should, copy over an already-synced Bitcoin blockchain to your Sat Node. Blockstream Satellites rebroadcast the last 24 hours of blocks, so don’t worry about having to hurry. Time to align your dish!
* [Completely Offline Bitcoin Transactions](https://medium.com/hackernoon/completely-offline-bitcoin-transactions-4e58324637bd)
  > With the advent of Blockstream Satellite and widely broadcasted, passively-receivable Bitcoin data, a new era of Bitcoin adoption can occur. Areas without access to fast broadband connections can now trustlessly verify Bitcoin blocks and transactions, and receive BTC discreetly with common cheap hardware. With the Satellite API, those same areas can now receive arbitrary data — current market data, private messages, and data from exciting new use cases not thought of yet. All free. The broadcasts are free and the software is free with code available for auditing and improvement by the community.
* [Build Your Own Wireless Bitcoin Service Provider — Complete With Blockstream Satellite Backhaul](https://medium.com/blockstream/build-your-own-wireless-bitcoin-service-provider-complete-with-blockstream-satellite-backhaul-165469036658)
  > Because there is a technical barrier to setting up the satellite hardware, some people may be unable to utilize the satellite feed to keep a fully validating Bitcoin node up to date. There is a way to allow them to sync though — use WiFi to re-transmit the Bitcoin data! Since practically every device has a WiFi radio in it, all one needs is to be within range of a WiFi access point to be able to sync a full node. A single Blockstream Satellite receiver can potentially connect entire neighborhoods, or even larger areas, with Bitcoin data. All without the need for traditional internet infrastructure.
* [Jeff Garzik: Metronome – Of Bitcoin Satellites and Built-to-Last Chain-Hopping Tokens](https://podcasts.apple.com/us/podcast/epicenter-learn-about-blockchain-ethereum-bitcoin-distributed/id792338939?i=1000437367000)
  > Metronome is cryptocurrency that sits on top of existing blockchains and aims to allow tokens to easily move from one network to the other. A series of standard blockchain contracts allow for daily descending price auctions to occur automatically, and for users to buy and sell the tokens using a Bancor-like system with built-in liquidity.


