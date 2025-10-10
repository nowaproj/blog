---
title: A Simple Example Using WordPress Data 
description: A Simple Example Using WordPress Data is a beginner-friendly guide that walks you through creating your first mobile app using Nowa
slug: wordpress
authors: [gellert]
date: 2025-10-10
tags: [wordpress, api]
keywords: [AI agent, app development, Flutter AI, Nowa AI, alpha testing, smart assistant]
hide_table_of_contents: false
---

# Build Your First App with Nowa: A Simple Example Using WordPress Data 

A few weeks ago, I was building a small side project in Nowa.

You know, it was one of those late-night ideas where I just wanted to get something working quickly — no complicated setup, no coding marathon

The app looked good, but it felt empty without real data. I needed something simple and fast to connect to — something I could use to make the UI come alive.  

That’s when I decided to try Wordpress.

I remembered it has a REST API built in, so I pointed my browser to a public demo site, tested a few endpoints… and within minutes, I was pulling categories straight into my Nowa project.  

Honestly, it surprised me how smooth it was. So in this post, I’ll walk you through exactly what I did — step by step — so you can try the same and get real content into your app fast.

<!-- truncate -->

---

## Why I Start with WordPress?

Many websites today are powered by **Wordpress** — and it has a built-in REST API that makes it easy to fetch content like posts, pages, or categories.  

We’ll use a **public demo site** so you can experiment freely without setting anything up:

👉 Demo site: [https://wpmovies.dev](https://wpmovies.dev)

👉 Demo API endpoint:  
```
https://wpmovies.dev/wp-json/wp/v2/categories
```

This API returns a list of movie categories in a clean, structured format. And that’s exactly what we’ll show in our app.

---

## Create a New Nowa Project

Log in to your Nowa dashboard and create a **New Cloud project**.  
No need to worry about code — Nowa gives you a **visual builder** and **AI assistant** to help with design and logic.

Once your project is ready, open the **API** section in the left panel. This is where we’ll connect to WordPress.

<video controls width="850">
  <source src="/img/WP/0.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## Connect the WordPress API 

1. Click **“New API Collection.”**  
2. Name it something like `WordPress`.  
3. Add a new API request and paste the demo URL:  
```
https://wpmovies.dev/wp-json/wp/v2/categories
```
4. Save the request.

Nowa will automatically **analyze the response** and **generate a model** for you. That means you don’t have to manually write code to handle the data — it’s already structured and ready to use in your app.

<video controls width="850">
  <source src="/img/WP/1.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## Let Nowa AI Build the Page 

Here’s the fun part.

1. Go to the **AI Assistant** inside Nowa.  
2. Ask it something like:  
> “Create a page that displays all categories from my WordPress API in a beautiful list.”

The AI will build a ready-to-use UI that fetches the category data and shows it on the screen. You can preview the app instantly and see the live data coming from the WordPress site.

<video controls width="850">
  <source src="/img/WP/2.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## Test, Preview, and Share 

Nowa lets you **preview the app live** in your browser or on your device.  
Once everything looks good, you can easily publish it or share it with your team for feedback.

![](/img/WP/3.png)

---

## Why This Example Works

Starting with a WordPress API is a great first step because:

-  It’s **easy to understand** and work with  
-  It connects your app to **real, dynamic data**  
-  You get hands-on experience with Nowa’s API tools and AI builder  
-  You can quickly expand this into a blog app, news app, or content hub

Once you’re comfortable with this, you can integrate more endpoints, build navigation flows, and add your own logic.

---

### ✨ Bonus Tip

You can replace the demo URL with your own WordPress site’s API. That means you can turn your personal blog or company website into a **mobile app** in just a few clicks.

---