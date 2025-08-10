---
title: Mastering Nowa AI — How to Write Prompts That Builds Better
description: Learn how to write effective prompts for Nowa AI to get better results when building apps.
slug: nowa-ai-prompting-guide
authors: [anas]
date: 2025-08-10
tags: [ai, prompt-engineering, tutorial]
keywords: [Nowa AI, prompt writing, AI agent, Flutter app builder, prompt sandwich, Nowa tips]
image: https://storage.googleapis.com/nowa-downloads/assets/images/nowa-ai-prompting-guide-banner.png
hide_table_of_contents: false
---

**Hey builders,**

Nowa AI is powerful — it can design, code, and integrate your Flutter app with just a few prompts. But like any great teammate, the better you guide it, the better your results will be.

In this guide, we’ll share **practical tips** for writing prompts that help Nowa AI work faster, avoid mistakes, and give you exactly what you want.

<!-- truncate -->

---

## 1️⃣ Keep it small — one step at a time

Big, vague prompts can lead to unexpected results.  
Break your requests into **smaller, clear steps** so the AI can focus and you can quickly review and adjust.

✅ *Good*: “Add a search bar to my product list screen.”  
❌ *Risky*: “Build me a full shopping app with everything.”

---

## 2️⃣ Attach when it matters

When modifying something specific, attach that file, screen, or widget to your prompt.  
This gives the AI:
- A **precise starting point**
- Faster focus on the relevant code
- Less chance of unrelated changes

You don’t need to attach all dependencies — just the main element you’re working on. If the AI needs more, it will fetch it.

---

## 3️⃣ Make attachments as focused as possible

If you want to update **a specific widget**, select **only that widget** — not the entire screen.  
If Nowa AI needs more context from the surrounding screen, it will go find it.  
Focused attachments help the AI make better decisions and avoid unnecessary edits.

---

## 4️⃣ Give context — reduce assumptions

AI works best when it understands the bigger picture.  
Context could include:
- The purpose of the screen or feature
- Key design or functional elements
- Relevant background or user flow

The more context you give, the fewer assumptions the AI has to make.

---

## 5️⃣ Master the Sandwich Technique (Intent → Context → Task → Constraints)

The “prompt sandwich” is a simple but powerful structure:

1. **Intent** — State what you want to achieve  
2. **Context** — Add relevant background info (bullet points work great)  
3. **Task** — Tell the AI exactly what to do  
4. **Constraints** — Any rules or limits the AI must follow

**Example:**
```
#Intent
I want to build a modern homepage for my shoe store app. 

#Context
• Show main promotion at the top
• Display products in a grid with price and image
• Mobile-first approach 

#Task
Build the homepage as described above. ← Task

#Constraints
Keep the design clean and modern, and the implementation simple. 

```

---

## 6️⃣ Be clear with style & function

Avoid vague words like “nice” or “beautiful.” Instead, be specific:
- “Use a dark theme with high-contrast text”
- “Rounded card corners with subtle shadows”
- “Responsive layout for mobile and web”

---

## 7️⃣ Fixing errors? Just ask!

Nowa AI can **detect and fix errors in your project**.  
Simply prompt it:
> “There’s a build error in `homepage_screen.dart`; please fix it.”

Or you can simply ask it to fix all issues by
> Fix issues in my project

:::tip
Note: Use it when the total issues number are small, otherwise divide it into many prompts
:::

It will locate the issue and apply the fix automatically.

---

## 8️⃣ Report issues — earn free AI credits

If you find a bug, let us know!  
1. Click the **Feedback** button → **Report**  
2. Include your **Project** and **AI history**  
3. Clearly describe the issue

:::tip[Get AI credits for reported issues]
We reward **valid reports** with free AI credits. [Full details here](./report-bugs.md)
:::
---

## 9️⃣ Use the community

Join our [Discord community](https://discord.gg/ByKfn3H7gX) to:
- Get help from the Nowa team and other users
- Share your prompts and learn new techniques
- Improve your results together

---

## 🔟 Bonus tip — Think like a pair programmer

Treat Nowa AI as a collaborator, not just a code generator.  
Explain your thought process, review outputs, and iterate together for the best results.

---

## 💡 **Final thought**

Great prompts aren’t long — they’re **clear, contextual, and well-structured**. Use the sandwich technique, keep attachments focused, and let Nowa AI do the heavy lifting.

Thanks for building with us — we can’t wait to see what you create. 💙
