# Houxit

**«The blueprint for modern web apps.»**

Houxit is a modern JavaScript framework for building fast, reactive, and maintainable user interfaces. It combines an intuitive developer experience with a powerful reactive engine, giving you the flexibility to build anything from small widgets to large applications.

If you know HTML, CSS, and JavaScript, you're ready to build with Houxit.

---

Quick Start

Create a new project:

```bash
npm create houxit@latest my-app
```

Or install it into an existing project:

```bash
npm install houxit
```

---

A Simple Reactive Widget

```html
<template>
  <button @click="increment">
    Count: {{ count }}
  </button>
</template>

<script>
export default {
  model() {
    this.count = 0
  },

  handlers: {
    increment() {
      this.count++
    }
  }
}
</script>
```

Mount your application:

```js
import { initBuild } from "houxit"
import App from "./App.houxit"

initBuild(App).mount("#app")
```

That's it. Reactive state, declarative templates, and automatic UI updates.

---

Why Houxit?

- ⚡ Fine-grained reactivity
- 🧩 Reusable Widgets
- 📄 Widget Unit Files (".houxit")
- 🎨 Flexible Options API and Adapter API
- 🌐 Works with or without a build step
- 🛣️ Official Houxit Router
- 💙 Built for clarity, performance, and developer happiness

---

Documentation

Whether you're just getting started or exploring advanced features, the complete documentation is available at:

`🌐 https://houxit.vercel.app`

You'll find guides, tutorials, API references, examples, and everything you need to build with Houxit.

---

Roadmap

Houxit is only the beginning. The ecosystem is actively growing.

Available Today

- ✅ Houxit Framework
- ✅ Houxit Router — the official routing solution

In Development

- 🌊 Wave — the official meta-framework for full-stack Houxit applications.
- 🌊 streamX — a dedicated state management library built for large-scale applications.
- ⚒️ Forge — a Rust-powered runtime for building high-performance native mobile applications using the Houxit programming model.

These projects are part of the long-term vision for a complete, modern development ecosystem.

---

Community

Houxit is open source and welcomes contributions of every kind—from bug reports and documentation improvements to feature proposals and pull requests.

If you're excited about the future of the framework, we'd love to have you involved.

---

License

Released under the MIT License.

---

<p align="center">
  <strong>Build modern web apps with confidence.</strong><br>
  <em>The blueprint starts here.</em>
</p>