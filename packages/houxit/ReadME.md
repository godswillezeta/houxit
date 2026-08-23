<p align="center">
  <h1 align="center">Houxit.js</h1>
  <p align="center">
    <strong>The Blueprint for Modern Web Apps.</strong><br>
    A next-generation JavaScript framework built on fine-grained reactivity and transparent architecture.
  </p>
  <p align="center">
    <a href="#quick-start">Quick Start</a> • 
    <a href="#core-concepts">Core Concepts</a> • 
    <a href="#ecosystem">Ecosystem</a> • 
    <a href="https://houxit-docs.com">Docs</a>
  </p>
</p>

---

## Overview

**Houxit** (pronounced *"HOW-zit"*) is a sleek, robust, and highly performant JavaScript framework designed for building dynamic, reactive, and component-based web applications. 

Unlike traditional virtual-DOM frameworks, Houxit utilizes a **hybrid rendering architecture** powered by a fine-grained reactive core. State changes are tracked at the property level and patch the DOM surgically in-place, delivering benchmark-level performance without the overhead of component-wide re-renders or hidden compiler magic.

Whether you are building a complex enterprise dashboard, a high-performance consumer app, or a cross-framework design system, Houxit provides a transparent, predictable, and deeply enjoyable developer experience.

## ✨ Key Features

- **⚡ Fine-Grained Reactivity:** Property-level tracking via `token` (scalars) and `stream` (deep proxies). Updates are surgical—only the exact DOM nodes bound to a changed property are patched.
- **📦 Widget Unit Files (WUF):** A clean, single-file format (`.houxit`) that co-locates logic, template, and scoped styles.
- **🔄 Dual Authoring Styles:** Choose between the structured **Options API** or the modern, script-first **Adapter API** (`<script build>`). Both compile to the exact same highly-optimized output.
- **🧩 First-Class Web Components:** Compile any widget to a standard Custom Element (`.ce.houxit`) for distribution across React, Vue, Angular, or plain HTML environments.
- **🚀 Built-in SSR & Streaming:** Universal rendering with `renderToString`, Node/Web Streams, and automatic client-side hydration.
- **🎭 Integrated Motion System:** A powerful, hybrid animation engine that intelligently routes transitions between CSS, WAAPI, and RAF based on your descriptor.
- **🔌 Pluggable Ecosystem:** Official support for Routing, I18n, and a robust plugin system for extending the framework's core.

---

## 🚀 Quick Start

The fastest way to start a new Houxit project is with our official Vite-powered scaffold:

```bash
npm create houxit@latest my-app
cd my-app
npm install
npm run dev
```

Open your browser to `http://localhost:5173` and start building.

### No-Build / CDN Usage
Houxit can also run directly in the browser without a build step, making it perfect for prototyping or embedding into existing CMS platforms:

```html
<div id="app"></div>
<script type="module">
  import { initBuild, token } from 'https://unpkg.com/houxit@latest/dist/houxit.esm.js'

  initBuild({
    build() {
      const count = token(0)
      return { count, increment: () => count.data++ }
    },
    template: `<button @click="increment">Clicked {{ count }} times</button>`
  }).mount('#app')
</script>
```

---

## 🧠 Core Concepts at a Glance

Houxit widgets are self-contained units of UI, state, and logic. Below is an example of a modern **Adapter API** widget using the WUF (`.houxit`) format:

```html
<!-- Counter.houxit -->
<script build>
  import { token, computed, defineParams, defineSignals } from 'houxit'

  // 1. Define the public interface
  const params = defineParams({ initial: { type: Number, default: 0 } })
  const signals = defineSignals(['change'])

  // 2. Declare reactive state
  let count = token(params.initial)
  const doubled = computed(() => count.data * 2)

  // 3. Define handlers
  function increment() {
    count.data++
    signals.change(count.data)
  }
</script>

<template>
  <div class="counter">
    <h2>Count: {{ count }}</h2>
    <p>Doubled: {{ doubled }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<style>
  .counter { padding: 1rem; border: 1px solid #ccc; border-radius: 8px; }
  button { margin-top: 0.5rem; padding: 0.5rem 1rem; cursor: pointer; }
</style>
```

### The Reactivity Model
* **`token(value)`**: Creates a scalar reactive value. Read and write via `.data` in JavaScript. (Auto-unwraps inside `{{ }}` template interpolations).
* **`stream(object)`**: Creates a deeply reactive Proxy. Read and mutate properties directly without an accessor.
* **`computed(fn)`**: Creates lazy, cached derived state that automatically tracks its dependencies.

### Template Syntax
Houxit templates are valid HTML extended with expressive, compile-time directives:
* **Interpolation:** `{{ user.name }}`
* **Attribute Binding:** `<img *src="user.avatar" />` (Shorthand for `$$bind:src`)
* **Event Listening:** `<button @click="save">` (Shorthand for `$$on:click`)
* **Two-Way Binding:** `<input $$model="query" />`
* **Conditionals:** `<p $$if="isActive">Active</p>`
* **List Rendering:** `<li $$for="item of items" *key="item.id">{{ item.name }}</li>`

---

## 🌍 Ecosystem & Tooling

Houxit is designed to be the foundation of your entire application stack.

| Package | Description |
| :--- | :--- |
| **Houxit Router** | File-based and config-based routing, dynamic segments, and nested layouts. |
| **Houxit I18n** | First-party internationalization with pluralization, RTL support, and lazy-loaded locales. |
| **Vite Plugin** | Seamless HMR, WUF compilation, and optimized production builds. |
| **VS Code Extension** | Syntax highlighting, embedded-language grammar, and template IntelliSense for `.houxit` files. |
| **StreamX** *(Planned)* | An upcoming official state-management framework built on top of `stream` for complex global stores. |

---

## 🛠️ Advanced Capabilities

### Server-Side Rendering (SSR)
Houxit supports universal rendering out of the box. Render your widget tree on the server and seamlessly hydrate it on the client.
```javascript
import { initSSRBuild, renderToString } from 'houxit'
import App from './App.houxit'

const app = initSSRBuild(App)
const html = await renderToString(app)
```

### Async Boundaries & Suspense
Handle asynchronous data fetching and code-splitting elegantly with `<hx:suspense>` and `<script async build>`.
```html
<script async build>
  // The widget waits for this to resolve before rendering
  const user = await fetch('/api/user').then(r => r.json())
</script>

<template>
  <h1>Welcome, {{ user.name }}</h1>
</template>
```

### Web Components Distribution
Compile any Houxit widget into a standards-compliant Custom Element. Ship your design system to consumers using React, Vue, Angular, or plain HTML—no Houxit runtime required on their end.
```javascript
import { createCustomElement } from 'houxit'
import PricingCard from './PricingCard.ce.houxit'

createCustomElement(PricingCard).define('pricing-card')
```

---

## 🤝 Contributing & Community

Houxit is an open-source project built for developers who care about performance, transparency, and clean architecture. 

* 📖 **Read the Docs:** [houxit-docs.com](https://houxit-docs.com)
* 💻 **GitHub:** [github.com/houxersoftwares/houxerjs](https://github.com/houxersoftwares/houxerjs)
* 💬 **Discord:** [Join the Community](https://community.houxit.com)
* 🐦 **Twitter/X:** [@HouxitJS](#)

## 📄 License

Houxit is open-source software licensed under the [MIT License](LICENSE).

---
<p align="center">
  <sub>Built with ❤️ by the Houxit Core Team. The Blueprint for Modern Web Apps.</sub>
</p>