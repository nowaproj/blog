---
title: How I Connected Airtable to Nowa
description: I recently set up Airtable with Nowa for one of my apps—here’s exactly how I did it.
slug: airtable
authors: [gellert]
date: 2025-10-09
tags: [api, backend]
keywords: [database, app development, Flutter AI, Nowa AI, Airtable integration, alpha testing, smart assistant]
hide_table_of_contents: false
---

# How I Connected Airtable to Nowa

A few days ago, I needed a quick way to pull dynamic data into one of my Nowa apps.  

I decided to give Airtable a try—and honestly, it turned out to be a smooth process.  

So in this post, I’ll walk you through how I personally connected Airtable to Nowa, step by step.

<!-- truncate -->

---

## 1. Creating (or Logging In to) Airtable

First, I headed over to [airtable.com](https://airtable.com).  
If you don’t have an account yet, it only takes a minute to sign up.  
I already had mine, so I just logged in.

---

## 2. Setting Up My First Table

Inside Airtable, I created a new table.  
You can:
- Let the AI helper generate a structure for you
- Or pick one of the suggested example prompts to get started

This table is basically the backbone of your app’s data.

<video controls width="850">
  <source src="/img/airtable/1.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## 3. Generating an API Key

Here’s the part where Airtable gives you the “key” to your data:

1. Go to [https://airtable.com/create/tokens](https://airtable.com/create/tokens)  
2. Click **Create Token** and follow the steps  
3. Copy the key (and **don’t** share it with anyone)

Example format:

```
patJjUF860iOoEVQD.ab4268eb84a6aff2050946cf82a949b2cdfba9e8fc5995acb151503f4b8e6035
```

<video controls width="850">
  <source src="/img/airtable/2.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

Keep this safe—it’s what connects your app to Airtable.

---

## 4. Finding the Airtable API URL

1. Head to [https://airtable.com/developers/web/api/introduction](https://airtable.com/developers/web/api/introduction)  
2. Pick your base  
3. Copy the generated request. It’ll look something like this:

```bash
curl "https://api.airtable.com/v0/appcMgOc7vcng2kOX/Experiments?maxRecords=3&view=Grid%20view"   -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"
```

Just replace `YOUR_SECRET_API_TOKEN` with the key from the previous step.

<video controls width="850">
  <source src="/img/airtable/3.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## 5. Adding the API to Nowa

Now comes the fun part—linking Airtable to your app:

1. In Nowa, go to **Data Connections**.  
2. Click **Create New API Collection**.  
3. Just **copy the `curl` command** from Airtable and paste it into Nowa.  
4. Nowa will automatically detect the URL and headers — no need to set them manually. 🙌

<video controls width="850">
  <source src="/img/airtable/4.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

That’s it. Your Airtable connection is live.

Here’s the official doc if you need a quick reference:  
[https://docs.nowa.dev/data-connections/api/createapi](https://docs.nowa.dev/data-connections/api/createapi)

---

## 6. Generating a Page with Nowa AI

Once the API was set up, I used Nowa AI to auto‑generate a page connected to the Airtable data.  
In just a few seconds, I had a live view of my table.

<video controls width="850">
  <source src="/img/airtable/6.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## 7. Play

I hit **Play**, and there it was: my Airtable data, live in the app.  
From here, I could easily tweak the layout, add buttons, or even pull in more tables.  

![](/img/airtable/6.png)

---

## 8. A Few Extra Tips

- If you update the data in Airtable, it automatically syncs in the app.  
- Keep your API keys secure.  
- You can connect multiple tables if you need to build something more advanced.

---

That’s it! Connecting Airtable to Nowa was way easier than I expected.  
If you’re just getting started with APIs, this is honestly a great first integration to try.
