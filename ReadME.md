
# Houxit.js — The Complete Framework Guide

> **Houxit** *(pronounced "HOW-zit")* — The Blueprint for Modern Web Apps.
>
> A next-generation JavaScript framework designed to streamline the creation of dynamic, reactive, and widget-based web applications with unparalleled ease.

---

## Table of Contents

- [Part I — Getting Started](#part-i--getting-started)
  - [1. Introduction](#1-introduction)
  - [2. Installation & Setup](#2-installation--setup)
  - [3. Understanding Houxit](#3-understanding-houxit)
  - [4. Introducing Widgets](#4-introducing-widgets)
  - [5. The Entry Point — `initBuild`](#5-the-entry-point--initbuild)
- [Part II — Core Concepts](#part-ii--core-concepts)
  - [6. Template Syntax](#6-template-syntax)
  - [7. Data Binding](#7-data-binding)
  - [8. Directives](#8-directives)
  - [9. Custom Directives](#9-custom-directives)
  - [10. Event Handling & Handlers](#10-event-handling--handlers)
  - [11. Reactivity — `token`, `stream`, and `computed`](#11-reactivity--token-stream-and-computed)
  - [12. Rendering Styles — Templates, Hyperscript, JSX, and the Adapter API](#12-rendering-styles)
  - [13. Widget Unit Files (WUF)](#13-widget-unit-files-wuf)
- [Part III — Widget Communication](#part-iii--widget-communication)
  - [14. Params](#14-params)
  - [15. Signals & Events](#15-signals--events)
  - [16. Slots](#16-slots)
  - [17. Context & `$$provide`](#17-context--provide)
  - [18. Transmit & Receive](#18-transmit--receive)
- [Part IV — Advanced Patterns](#part-iv--advanced-patterns)
  - [19. The `build` Function](#19-the-build-function)
  - [20. Widget Type System](#20-widget-type-system)
  - [21. Lifecycle Hooks](#21-lifecycle-hooks)
  - [22. Dynamic Widgets](#22-dynamic-widgets)
  - [23. Data Observation](#23-data-observation)
  - [24. Computed Properties](#24-computed-properties)
  - [25. Filters](#25-filters)
  - [26. Template Blocks](#26-template-blocks)
  - [27. Template Classes](#27-template-classes)
  - [28. Async Widgets & Suspense](#28-async-widgets--suspense)
- [Part V — Styling & Animation](#part-v--styling--animation)
  - [29. Style & Class Binding](#29-style--class-binding)
  - [30. Scoped Styles & `@g()`](#30-scoped-styles--g)
  - [31. Animation & Transition System](#31-animation--transition-system)
- [Part VI — Ecosystem & Extension](#part-vi--ecosystem--extension)
  - [32. Plugin System](#32-plugin-system)
  - [33. Built-in Widgets](#33-built-in-widgets)
  - [34. Utility Functions](#34-utility-functions)
  - [35. Custom Elements & Web Components](#35-custom-elements--web-components)
  - [36. Server-Side Rendering (SSR)](#36-server-side-rendering-ssr)
  - [37. Routing](#37-routing)
  - [38. Internationalization (I18n)](#38-internationalization-i18n)
  - [39. Global State Management](#39-global-state-management)
  - [40. Mixins](#40-mixins)
- [Part VII — API Reference](#part-vii--api-reference)
  - [41. Widget Options Reference](#41-widget-options-reference)
  - [42. `buildConfig` Settings](#42-buildconfig-settings)
  - [43. App Instance API](#43-app-instance-api)
  - [44. Adapter API Reference](#44-adapter-api-reference)
  - [45. Widget Instance (`this.$`) API](#45-widget-instance-this-api)
  - [46. Directives Quick Reference](#46-directives-quick-reference)
  - [47. Best Practices](#47-best-practices)
- [Additional Resources](#additional-resources)

---

# Part I — Getting Started

## 1. Introduction

Welcome to Houxit, a modern, sleek, and robust web framework that empowers creative and productive development while building web apps.

Houxit is a next-generation JavaScript framework, partly inspired by the elegance and success of Vue.js, designed to streamline the creation of dynamic, reactive, and widget-based web applications with unparalleled ease.

With its intuitive API and clean architecture, Houxit empowers developers to craft interactive and complex UIs with simplicity, making it a framework of choice for modern web development.

Here is a minimal Houxit widget to illustrate the core structure:

**`HelloWorld.houxit`:**

```html
<script>
export default {
  model() {
    this.message = "Hello World";
    this.count = 0;
  }
}
</script>

<template>
  <h1>{{ message }}</h1>
  <button @click="count++">click me {{ count }}</button>
</template>

<style>
h1 {
  color: teal;
  text-align: center;
  margin: 15px;
}
</style>
```

### Why Houxit?

Houxit is built around a few simple ideas:

- **Widgets first:** Every piece of UI is a reusable widget.
- **Transparent reactivity:** State changes are explicit and predictable.
- **One runtime, two authoring styles:** Choose between the Options API and the Adapter API without affecting runtime behaviour.
- **Flexible tooling:** Use a modern build tool for development, or run Houxit directly in the browser when appropriate.

Houxit does not replace JavaScript — it builds on top of it.

### Prerequisites

A basic understanding of HTML, CSS, and JavaScript is essential before continuing. If you are new to programming, take a moment to acquaint yourself with these fundamentals first, then return here.

> **Note:** You do not need to be an advanced developer to get started with Houxit. This guide is designed for both beginners and experienced developers alike.

---

## 2. Installation & Setup

### Quick Start — Browser (No Build Step)

Houxit is a dependency-free, browser-oriented, open-source JavaScript library. Using it can be as simple as adding a `<script>` tag to your document.

**Global script tag:**

```html
<head>
  <script src="https://unpkg.com/houxit@latest/dist/houxit.global.js"></script>
</head>
<body>
  <div id="root">
    <button>Hello</button>
  </div>
  <script>
    Houxit.initBuild({
      /* widget options */
    }).mount("#root");
  </script>
</body>
```

The global build attaches everything to `window.Houxit`.

**ES Module:**

```html
<script type="module">
  import { token, initBuild } from "https://unpkg.com/houxit@latest/dist/houxit.esm.js";
  initBuild({
    // widget options
  }).mount("#root");
</script>
```

> **Note:** Make sure the `<script>` tag has `type="module"` specified.

**Import Maps:**

You can simplify imports using an import map:

```html
<script type="importmap">
{
  "imports": {
    "houxit": "https://unpkg.com/houxit@latest/dist/houxit.esm.js"
  }
}
</script>
<script type="module">
  import { token, initBuild } from "houxit";
  initBuild({
    // widget options
  }).mount("#root");
</script>
```

> **Note:** The `type="importmap"` feature is relatively new. Currently supported on Safari 16.40+. Use sparingly considering browser support.

**Local hosting:**

You can also download the file from any CDN host (`unpkg`, `cdnjs`, `jsdelivr`) and host it locally:

```html
<script src="path/to/houxit.global.js"></script>
```

### CLI / Build-Step Installation

For production and scalable apps, use a build setup to achieve maximum Houxit performance.

**Using npm:**

```bash
npm install houxit
```

**Using yarn:**

```bash
yarn add --save houxit
```

**Scaffolding with Vite (recommended):**

```bash
npm create houxit@latest
```

This scaffolds a Vite-powered Houxit project. Make sure you have Node.js installed.

Once installed, Houxit becomes your creative companion for building efficient, reactive web applications.

> ✅ Great for experimenting without setup.
> 🔄 Use a build setup for production and scalable apps to achieve the maximum Houxit strength.

### Editor Support

The official VSCode extension, `houxit-official`, adds syntax highlighting and language support for `.houxit` / `.hx` files. Search "Houxit" in the Extensions view inside VSCode and install the one published under that identifier.

> **Note:** The extension is under active development and not yet feature-complete. Syntax highlighting and basic language recognition work today; deeper IntelliSense, template-expression type-checking, and refactoring support are still being built out.

---

## 3. Understanding Houxit

Houxit is a flexible framework that provides a way — similar to and partly inspired by the Vue.js Options API, React Hooks, and other giants in the web development field — where you define your componentized fragments and pages of your application, known as **widgets**, using options, functions, or classes.

You only need to provide appropriate options/values to an object while concentrating on your business logic, and letting Houxit handle the complexity of your project structure and reactive rendering.

A simple object can denote a widget, fragment, or a full page.

Houxit provides:

- A concise template syntax.
- A robust and well-groomed reactivity system that takes adequate measures to ensure there are no performance faults during drawing and redrawing of the template.
- The template manages **real DOM nodes** while granularly updating only the DOM nodes that change.
- Efficient rendering built for scalability, reusability, and performance.
- Easy handling of slots, params, and handlers as options of an object.

Data flow is easier to reason about, especially when using the `token` macro, which isolates reactive dependencies while helping Houxit track and register active watchers.

The `model` method option of a widget object is an independent behavioral entity that establishes a state-based control flow between a widget instance and the template.

If you are already aware of Houxit but seeking more advanced steps and ways of using it, you can check out the **Houxit How-To** guide for more information.

---

## 4. Introducing Widgets

Houxit widgets are independent entities encapsulating UI components, providing reusability of tasks and template components, resulting in faster and enhanced productivity and workflow.

A widget can range from a full page to a simple component block within your application. Every widget has its own state, structure, and behavior, and takes care of how its model reactivity system is managed.

### Why Do We Need Widgets?

Consider building a complex project. You cannot produce the entire thing at a glance — you break the project into smaller pieces of tasks and components, taking on each one after the other, and merging them into larger component frames. That is exactly how you should reason about Houxit widgets.

For instance, you might have a nail component merged into a toe, then other toes merged with the feet, producing a nested composition of descendants and ancestors. This results in widgets consisting of other nested tasks and sub-components under the hood.

### Creating a Widget

We define a widget by creating a simple plain JavaScript object and providing requirements as its options.

Houxit supports the use of both classes and functions as valid widgets for simplicity and completeness. You can learn how to use them in their dedicated sections.

Envision a widget as the fundamental building block of your web application — a way to create a self-defined tag that can only be used in a Houxit-compiled environment.

Widgets help you decompose your UI structure into smaller functions and components, which helps reduce the complexity of project management.

```js
export default {
  model() {
    this.greeting = "Hello Houxit";
  },
  template: `<h1> {{ greeting }} </h1>`
}
// This is a valid simple Houxit widget
```

In the example above, we created an object containing widget options that make up our widget build. Let us go through the options:

### The `model` Option

Expects a **function**. The `model` option is used to define initial stateful properties that are to be exposed to the public instances.

You assign properties to `this` with property names of your choosing. The `this` object values are exposed to the widget instance and are used in building and encapsulating the widget model and reactive data. This means the widget UI and template will be provided direct access to the model-defined properties.

```js
model() {
  this.count = 0;
  this.info = [];
  this.greeting = 'Hello';
}
```

> **Note:** The `model` method does not utilize a return value. Returned content will be ignored. All initial data instances are expected to be defined and exposed using the `model` method. This also helps you reason about a widget as a self-contained component.

### The `template` Option

A string-based option used to define your widget markup. It is recommended to use backticks to leverage multiline string support.

You can parse any valid HTML markup into the template option. Houxit provides additional compile-time semantics to help you build efficiently.

> **Note:** Model-defined properties are accessed directly within the template using the Houxit interpolation syntax `{{ greeting }}` — you do **not** need to access them through `this`.

> **Warning:** Without using the Houxit interpolation syntax, JavaScript provides a string interpolation system within backtick multiline strings. However, accessing `this` in the template option will point to the wrapping object, not the widget model. The same fault occurs if you are using a class-based widget type — it will point to the class object. Houxit's reactive dependency tracker will not be notified if you use a non-model-defined property, since the widget UI build updates whenever the model-returned properties change or are mutated.

---

## 5. The Entry Point — `initBuild`

When building with Houxit, there must be an entry point for your app build. This is a fundamental concept.

The `initBuild` method is used to create an initial entry point widget. Other child widgets can be passed here as components, pages, or building blocks.

`initBuild` is passed a widget as its first parameter — this is the initial entry point widget of the app.

```js
const { initBuild } = Houxit;

let build = initBuild({
  model() {
    this.greeting = 'Hello Houxit';
  },
  template: `<h1> {{ greeting }} </h1>`
});

build.mount(/* root element instance or selector */);
```

After creating an initial build using `initBuild`, the DOM will still not display your template until it is mounted. You must use the `build.mount` prototype method of the `initBuild()` return value to inject the widget template into the DOM by providing a selector or a DOM node as the first parameter.

There should be a root DOM node in the HTML where an `initBuild` instance would be mounted.

> **Note:** The `innerHTML` of the mount node target will be used as a fallback widget template if both the `build` and `template` options are not provided or both return `null` or `undefined`.

> **Note:** The in-DOM template parsing caveat will apply when using the mount root content as template in `initBuild`, since Houxit will not be able to take responsibility for processing the `innerHTML` content before resolving.

> **Warning:** More than one `initBuild` instance **cannot** be mounted into the same DOM node. However, you can have more than one `initBuild` in your project or in the same DOM, provided they are not mounted into the same element.

### Building Blocks — Component-Based Architecture

Houxit encourages a component-based architecture, allowing you to create modular and reusable UI elements.

Let's create a simple header widget and compose it into a larger application structure:

```js
const { initBuild } = Houxit;

// Component
let Header = {
  model() {
    this.title = 'Houxit World';
  },
  template: `<h1>{{ title }}</h1>`
};

// Compose into a larger structure
let build = initBuild({
  template: `
    <div>
      <Header/>
      <p>Welcome to the {{ title }}</p>
    </div>`,
  widgets: {
    Header
  }
});

build.mount(/* root element instance or selector */);
```

Here, we created a simple header widget (`Header`) and seamlessly integrated it into a larger application structure (`build`). Widgets enhance the modularity and manageability of your application.

Widgets can be nested down the tree as much as you wish, by composing a widget into another that is composed into a larger widget.

> **Note:** Before a widget can be used in another widget as a tag, it must be registered in the `widgets` object option. Many widgets as possible can be used within a widget, provided they are registered.

### Widget Naming Rules

During widget registration, be sure it follows the Houxit widget naming rules:

- Must not conflict with any built-in Houxit widgets.
- Widget registration names must pass **at least one** of these tests — contains: a hyphen (`-`), an underscore (`_`), a number, or an uppercase letter.
- Must **not** contain HTML tag characters (`<`, `>`, `=`, `"`, `'`).
- Must **not** start with a number or a hyphen.

If it possesses none of these requirements, Houxit will raise a **Widget Registration Warn**.

**Supported widget naming constructs:**

| ✓ Valid | ✗ Invalid |
|---|---|
| `Card` | `card` (all lowercase) |
| `UserCard` | `2Chart` (starts with number) |
| `my-button` | `-button` (starts with hyphen) |
| `data_view` | |
| `Chart2` | |

---

# Part II — Core Concepts

## 6. Template Syntax

Houxit introduces a powerful templating language for expressing your UI elements using simple HTML markup syntax. It provides efficient semantics for encapsulating complex logic into your Houxit template without imposing performance loopholes.

### Interpolation

You can interpolate model instances into the template using double curly braces: `{{ count }}`.

Data values exposed through the `model` option can directly be referenced from inside the mustache tags.

```js
export default {
  model() {
    this.message = "Houxit Explorer";
  },
  template: `<h1>This is the {{ message }} message</h1>`
}
```

`{{` and `}}` denote the opening and closing tags by default. Any text within these tags will be parsed as a JavaScript expression with the model instances in scope.

### Expression Rules

Mustache tags can only accept **single expressions**. Parsing statements or more than one expression will raise a Houxit Template Error.

**Expressions** are syntax that can be passed to a JavaScript function's `return` keyword. For instance, a method call `value()` or an in-scope variable reference `count`.

**Statements** are variable declarations using `let`, `var`, `const` keywords, reassignments, iteration using `for` loops, control flow using `if/else-if/else`, or deleting an object property using the `delete` keyword.

Just make sure any expression passed can be received by a function's `return` statement.

A method call `{{ func() }}` or ternary operations like `{{ count ? count : 0 }}` can be valid template expressions, provided they do not consist of a statement or more than a single expression.

Many JavaScript keywords will not be accepted if found within the template tags: `switch`, `delete`, `for`, `if`, `else`, `else-if`, `const`, `var`, `let`, `case`.

> **Note:** The mustache tags cannot be used in attributes.

### Template Parsing Caveats

**Self-closing tags:** Tags can be immediately closed if they expect no children nodes by adding a forward slash before the closing of the opening tag: `<h2 />`. This helps you omit a closing tag for non-void tags when there are no children elements.

```html
<element attr="value" />
<p/>
```

If this is a non-void tag, HTML requires that a closing tag be provided, or it will annex the following tags until the parent closing tag as its children nodes.

**Attribute parsing:** Attribute names and value case sensitivity are maintained, except in cases where an `initBuild` mount node is used as template.

If an attribute value does not contain a space or special characters that may conflict with HTML tags (`<`, `>`, `=`, `"`, `'`), you can pass them without quoting:

```html
<!-- Bad: "Value" will be compiled as a different attribute -->
<element attr=my Value />

<!-- Good: properly quoted -->
<element attr="my Value" />
```

The same applies to arrow functions and expressions containing `>`:

```html
<!-- Bad: the > will be misinterpreted as the end of the opening tag -->
<element onclick=()=>count++ />

<!-- Good: properly quoted -->
<element onclick="()=>count++" />
```

For simple values without spaces: `<element attr=myValue />` works perfectly fine. Houxit accepts non-quoted attribute values once they follow the attribute passing caveats.

**Shorthand binding omission:** When a bound attribute name matches your attribute value text, you can pass the attribute while omitting the value part. This works like native JavaScript object shorthand:

```html
<!-- These are equivalent when binding -->
<element *name=name />
<element *name />
<element $$bind:name />
```

> **Warning:** Without binding, `<element name />` will result in `<element name="">`. With binding, Houxit will force the attribute name into a model prop and will raise an exception when the path is not defined on the model.

This also works in direct use of directives:

```js
export default {
  model() {
    this.text = 'Houxit Explorer';
  },
  template: `<h1 $$text />`
}
```

In the above example, `text` will be mapped as the value of the `$$text` directive and passed to the context of the model instances, resulting in: `<h1 innerText="Houxit Explorer"></h1>`.

### Token Auto-Unwrapping in Templates

Inside `{{ }}`, tokens unwrap automatically. You do not need `.data`:

```html
<!-- token created as: let count = token(0) -->
<p>{{ count }}</p>        <!-- ✓ works -->
<p>{{ count.data }}</p>   <!-- ✓ also works, but unnecessary here -->
```

Auto-unwrapping applies everywhere you access the state data through the `this` keyword of the public model instance — in directives, event handlers, and JavaScript expressions outside the template.

> **Important:** `.data` is only explicitly required when you have a direct access to the token reference instance (e.g., inside a `<script build>` closure or a plain function).

When a token is encountered inside a stream reactive proxy, Houxit performs an auto-unwrap. Both reading and writing will be directed on the token instance. The same applies to the model instance since they share the same underlying API:

```html
<script>
export default {
  model() {
    this.count = token(0);
  }
}
</script>
<template>
  <button @click="count++">Add</button>
</template>
```

---

## 7. Data Binding

To bind an attribute value to a widget model instance data scope, use the `$$bind` directive.

The `$$bind` directive is passed an argument of the attribute value separated by a colon (`:`):

```html
<input $$bind:value=inputValue >
```

The `inputValue` text will be resolved to the model properties. A `propValue is not defined` exception will be logged to the console if no model property with this value exists.

Since the `$$bind` directive may be needed more often, Houxit provides a shorthand by prepending an asterisk (`*`) sign to an attribute:

```html
<element *value=inputValue ></element>
```

> **Note:** The `$$bind` form remains more self-explanatory and easier to reason about, but the asterisk method is shorter and easier to write.

For example, `*class='color'` will bind the class attribute to the value of the `color` expression, meaning the text value `color` will be evaluated as a JavaScript expression with the model state instances in scope.

### Binding Dynamic Attribute Names and Values

Use square brackets `[]` to specify dynamic attribute names or values. You do not need to use the `$$bind` directive on this attribute for this feature to work.

Once an attribute name is enclosed within square brackets, the text within the enclosed bracket will be bound to the model public instances.

```js
const { token } = Houxit;
export default {
  model() {
    this.name = 'class';
  },
  template: `<p [name]='alert alert-primary'>Dynamic Attribute</p>`
  // The attribute value is not bound in this case.
};
```

Using the `$$bind` directive binds the attribute **value**, not the attribute name. If you do not wish to bind the attribute value, you can omit the `$$bind` directive.

---

## 8. Directives

Houxit directives are special transformed attributes and modifiers that perform useful manipulation on elements while working with Houxit. They allow you to conditionally display elements, bind reactive data to an input element during compilation, reference an element, or skip the compilation of an element's children.

A directive is a special attribute used in manipulating a node or widget before, during, or after compilation.

### `$$raw`

To skip the compilation of an element's children and inner content, use the `$$raw` attribute. Compilation of all children of the element will be skipped while building this element.

The `$$raw` directive does not need to be passed a value. Its presence on an element is considered and defaults to truthy. It considers only boolean values; other values are ignored and fall back to `true`.

Scoped to HTML element nodes only. It will be consumed by a root element when passed as a widget prop if there is a single root element within the widget.

### Conditional Rendering Directives

To render elements/widgets based on some evaluated result of an expression or value, Houxit provides condition-based directives.

**`$$if`:**

```js
export default {
  template: `<button $$if='false'></button>`
}
```

This element will not render since the condition render result is falsy.

**`$$else-if`:**

Checks if the previous element/widget has a `$$if` / `$$else-if` directive. If not found, it will raise a **Houxit Error**.

The `$$else-if` directive, if available on the next element or widget following a `$$if` or other `$$else-if` element/widget, will be processed if the `$$if` or `$$else-if` on the previous element/widget evaluates to false.

In order to make it effective, it should be passed to the next element or widget after the previous relative conditioned element/widget. If unable to find a relative conditional directive on the previous element/widget, it will raise a Houxit Conditional Directive Error.

**`$$else`:**

The `$$else` directive displays its element if the previous `$$if` or `$$else-if` statements are falsy.

> **Tip:** It is always a gotcha to pass a `$$if` alongside the `$$for` directive. If possible, avoid `$$if` with `$$for` on the same element/widget.

### List Rendering — `$$for`

List rendering helps you render a widget or an element from an iterable value. The resulting value will be available in the element or widget rendering scope.

```js
import { token, stream } from 'houxit';

export default {
  model() {
    this.fruits = stream({
      orange: { id: 223, color: 'yellow', shape: 'circle', count: 56 },
      mango: { id: 3570, color: 'green', shape: 'rect', count: 911 },
      pearl: { id: 67, color: 'navy-blue', shape: 'rectangle', count: 2 },
    });
  },
  template: `
  <div $$for="( value, key, index ) of fruits">
    <h1>{{ key }}</h1>
    <h3>COLOR: {{ value.color }}</h3>
    <h3>SHAPE: {{ value.shape }}</h3>
    <p>It's over {{ value.count }} pieces</p>
  </div>
  `
}
```

`$$for` encapsulates element data, creates the relative data based on the evaluated loop data, then passes the positional arguments to the element/widget context. It follows the common JavaScript for-loop structure. Destructuring of arrays and objects is also allowed. Array destructuring extends to `Set`, `Array`, and the Houxit built-in `Tuple`.

**Accepted constructs:**

| Syntax | Description |
|---|---|
| `item of iterable` | Just the value key name and the iteration syntax |
| `( value, key ) of iterable` | Value and key provided within parentheses |
| `( value ) in iterable` | First argument in parentheses always remains the item value |
| `( count ) of number` | If a number is used, the first will be the number count from 1 to number |
| `3` | Number passed directly — element compiled to the number of count |
| `( count ) in 5` | Same as above, with a value getter prop |
| `` `iterable` `` | Just the iterable value property |
| `{ item:[], value:'' }` | Iterable passed directly rather than props |
| `{ id, name } of arrayProfiles` | Value is an object, destructured into template context |
| `[ value ] of values` | Array destructuring |
| `( [ value ], key, index ) of iterable` | Destructuring syntax with key and index definition |

The `$$for` directive can iterate over any iterable object or number value type. Parentheses `()` and greater-than/lesser-than characters `<>` can all be used in enclosing the key-value pairs.

> **Note:** It is recommended to use `for...of` when iterating through an object over the `for...in` iterator protocol, except when iterating over a non-object data type (e.g., a number). The `for...in` iterator at times may produce unexpected results when used on an object data type, especially in cases where key/value pairs are required. We do not recommend the use of key-value pairs in `for...in` loops, since the value of the value path reference will remain `undefined`. Both `for...of` and `for...in` can be used interchangeably. It is included in Houxit's support for completeness.

If a single reference is passed, it references the value data. If the iterated data is a Number, it will reference the number count. Can be enclosed within brackets or standalone: `value of iterable` works as well as `( value ) of iterable`. In cases where key/value pairs are required, the enclosing brackets are required.

An iterable or a number can just be passed without a looping format, like key or value mapping. The widget or element will be evaluated to the count of the iterable or number value:

```html
<input $$for="iterable">
```

> **Note:** No value of key/index or value is passed to the context in this case.

### `$$model`

Data instances defined and exposed from the `model` method option can be two-way bound efficiently using the `$$model` directive.

```js
const { token } = Houxit;

export default {
  model() {
    this.value = token("Houxit Explorer");
  },
  template: `
    <input $$model='value.data'>
    <h3> {{ value.data }} </h3>
  `
}
```

By using the `$$model` directive, the input element is now bound to and from the value state data. The input is populated with the data from the `value` property, and any update to the input will also update the `value` property, thereby triggering a state re-rendering.

Scoped to `input`, `textarea`, and `select` elements only.

**`$$model` on Native Inputs — by element type:**

| Element | Bound Property | Event |
|---|---|---|
| `input[type=text]`, `textarea` | `value` | `input` |
| `input[type=checkbox]` | `checked` | `change` |
| `input[type=radio]` | `checked` | `change` |
| `select` | `value` | `change` |
| Widget | specified key | corresponding signal |

**`$$model` Modifiers:**

Modifiers alter how `$$model` reads from or writes to the bound value.

- `.lazy` — Defers the update from the `input` event to the `change` event. Fires on blur or Enter rather than on every keystroke.
- `.trim` — Trims leading and trailing whitespace from the value before writing.
- `.number` — Coerces the value to a number before writing.

```html
<input $$model|lazy="description" />
<input $$model|trim="username" />
<input $$model|number="price" />
<input $$model|lazy.trim="query" />
```

**`$$model` on Widgets — Custom Two-Way Binding:**

`$$model` is not limited to native form elements. It works on any widget that follows Houxit's two-way binding contract. By convention, the param is `modelValue` and the signal is `update`:

```html
<MyInput $$model="formField" />
```

Houxit expands this to:

```html
<MyInput *modelValue="formField" @update="formField = $event" />
```

**Named `$$model` — Multiple Bindings:**

```html
<DateRangePicker
  $$model:startDate="range.start"
  $$model:endDate="range.end"
/>
```

**`bindDrivers` Option:**

For brevity, Houxit provides the `bindDrivers` option to reduce repetition:

```js
export default {
  bindDrivers: ['modelValue', 'startDate']
}
```

No need for explicit params and signals definition. In the Adapter API, use the `useBindDriver` method:

```html
<script build>
import { useBindDriver } from 'houxit';
const modelValue = useBindDriver();       // for default 'modelValue'
const startDate = useBindDriver('startDate');
</script>
```

`useBindDriver` returns an object of `{ value, update }` shape. `value` is the actual model value, and `update` is the signal callback.

### `$$ref`

Accessing a node object from inside a widget and side-effect manipulation on DOM objects can be achieved using the `ref` attribute.

```js
export default {
  model() {
    this.value = "";
  },
  template: `
    <input ref="value" >
  `,
  handlers: {
    doSomething() {
      console.log(this.$refs.value); // <input> — populated with the element instance
    }
  }
}
```

The value of the `value` property will be populated with the element or widget instance if passed to a widget tag.

> **Note:** Refs are available on `this.$refs` after `postMount`. Declare ref names in `tokenRefs`.

### `$$text`

Injecting an `innerText` content into a DOM node is achieved using the `$$text` directive. This directive uses the `element.innerText` method to populate an element's innerText with the provided string value.

```js
const { html } = Houxit;
export default {
  model() {
    this.text = "Houxit Explorer";
  },
  template: `<p $$text=text ></p>`
}
```

### `$$html`

Same as `$$text`, but used for inserting `innerHTML` into an element.

> **Warning:** `$$html` bypasses Houxit's automatic HTML escaping. Only use with trusted content.

### `$$bind`

Used in binding attributes to the reactive data instance.

```js
export default {
  model() {
    this.value = 'm-5 primary btn';
  },
  template: `<button $$bind:class='value'> Hello Houxit</button>`
}
```

The `$$bind` directive can be chained with other attributes, with the exception of directives. You cannot chain more than one attribute to `$$bind`.

Since `$$bind` is used too frequently, Houxit provides a shorthand using the asterisk (`*`):

```html
<button $$bind:class='value'> Hello Houxit</button>
<!-- can just be written as -->
<button *class='value'> Hello Houxit</button>
```

`$$bind` can also be used to parse an object of element attributes and values without passing an argument to `$$bind`:

```html
<button $$bind="{ class: value + ' btn', innerText: 'click me' }" />
```

This works like the Houxit spread syntax. You can declare the object within the model instance and reference it from the binding attribute value:

```html
<button $$bind=buttonProps />
```

Or more preferably, you can use the Houxit attribute spread syntax binding:

```html
<button ...buttonProps />
```

> **Note:** The spread syntax cannot be used on a non-plain JavaScript object.

### `$$scoped`

Applies Houxit's automatic style scoping to an inline `<style>` element found inside a template. Top-level WUF `<style>` blocks and the `styles` option are scoped automatically — `$$scoped` is only needed for inline template styles:

```html
<template>
  <div class="card">
    <style $$scoped>
      .card { padding: 1rem; border-radius: 8px; }
    </style>
    <p>Content</p>
  </div>
</template>
```

### Custom Directive Overview

Houxit provides way more useful directives and an API on how to build custom directives on both widget and HTML elements. Contact the Houxit built-in directives API for more about Houxit directives.

---

## 9. Custom Directives

Houxit provides a declarative interface for building customized directives. This is useful when you want to incorporate useful and self-defined functionality into a Houxit DOM instance.

You can create a fully functional directive using a **function** or an **object** consisting of lifecycle hook callbacks. Directives must be registered using the `directives` option.

### Function Form

The simplest custom directive is a plain function. It is treated as the `mounted` hook:

```js
export default {
  directives: {
    autoFocus(el, value, modifiers) {
      // receives the element/widget instance, value being passed, and array modifiers
      el.focus();
    }
  },
  template: `
    <input placeholder='Write your content' $$autoFocus >
  `
}
```

A function directive behaves as the `created` hook.

### Object Form

For full lifecycle control, use an object with named hook methods:

```js
export default {
  directives: {
    beautify: {
      created(vnode, value, modifiers) {
        // called just before the widget's preMount — element exists, not yet in DOM
        vnode.$element.style.background = '#0a3039';
      },
      mounted(vnode, value, modifiers) {
        // called just after the widget's postMount — element is in the DOM
      },
      updated(element, value, modifiers) {
        // called when the directive's bound value changes
      },
      destroyed(element, value, modifiers) {
        // called when the element is removed from the DOM
      },
      init(build, value, modifiers) {
        // receives the nodeObjectValue as passed to the defineVNodeElement module
      }
    }
  }
}
```

**Arguments:**

Every hook receives the same three arguments:

- `element` — the raw DOM element the directive is attached to.
- `value` — the already-evaluated value of the directive's expression. For `$$focus="isActive"`, `value` is the current value of `isActive`, not the string `'isActive'`.
- `bindings` — an object describing the directive's key structure:

```js
{
  key: 'someKey',        // the segment immediately after $$directiveName:
  deepKeys: ['a', 'b']   // segments chained with . after the key
}
```

For example, `$$focus:input.deep.path="val"` produces:

```js
{
  key: 'input',
  deepKeys: ['deep', 'path']
}
```

Custom directives can also be used the same way as built-in directives. Beware of Houxit built-in directive names while registering your custom directive in order not to conflict.

> Read the directives API docs for more details on using directives.

---

## 10. Event Handling & Handlers

### Handlers

Houxit provides an intuitive way of defining stateful method handlers. Handlers help you perform stateful logic or functions on model data.

To define methods on your widget, define a `handlers` object option in the widget options:

```js
export default {
  model() {
    this.count = 0;
  },
  handlers: {
    increment() {
      this.count++;
    }
  },
  template: `
    <button $$on:click='increment'>Clicked me {{ count }} times</button>
  `
}
```

Example using hyperscript:

```js
const { h } = Houxit;

export default {
  model() {
    this.count = 0;
  },
  handlers: {
    increment() {
      this.count++;
    }
  },
  build() {
    return () => h('button', { onClick: this.increment }, 'Clicked me ' + this.count + ' times');
  }
}
```

Handlers defined here are automatically exposed to the template instances directly and can be accessed within both the template and attribute scope.

### Event Callers

For calling a handler, Houxit provides you with the `$$on:event` event caller, or the `@event` shortcut pattern.

Houxit supports all non-deprecated event calls through the `$$on:xxx` or `@xxx` event triggering directives.

```html
<button @click="increment">+</button>
<input @input="handleInput" />
```

### Event Modifiers

You can parse modifiers to your handlers when they are called. They are separated using the pipe character (`|`) after the eventName:

```html
<button $$on:click|once='increment' />
```

Modifiers can be chained:

```html
<button $$on:click|once|stop|trusted='increment' />
```

For passing modifiers to handlers when using a hyperscript-powered UI, you need the array syntax

```js

export default {
  model() {
    this.count = 0;
  },
  handlers: {
    increment() {
      this.count++;
    }
  },
  render() {
    return h('button', {
      onClick: [this.increment, 'prevent', 'trusted', 'nonpassive']
    }, 'Clicked me ' + this.count + ' times');
  }
}
```

Accepts a first argument of the handler, and an array of modifier string names.

**Houxit supported event modifiers:**

| Modifier | Effect |
|---|---|
| `once` | Prevents the handler from being called more than once |
| `capture` | Sets the capture modifier to true |
| `trusted` | Checks if the `Node.isTrusted` is truthy |
| `prevent` | Calls `event.preventDefault` on the handler |
| `stop` | Calls `event.stopPropagation` on the handler |
| `self` | Checks if the present node is the same node with the target node |
| `passive` | Sets the passive modifier to true |
| `nonpassive` | Explicitly sets the passive modifier to false |

### Key Modifiers

For keyboard events, filter by specific key using Houxit's key aliases:

| Alias | Key(s) |
|---|---|
| `.enter` | Enter |
| `.tab` | Tab |
| `.delete` | Delete and Backspace |
| `.esc` | Escape |
| `.space` | Space |
| `.up` | ArrowUp |
| `.down` | ArrowDown |
| `.left` | ArrowLeft |
| `.right` | ArrowRight |

For any key not covered by an alias, use the exact `KeyboardEvent.key` value in kebab-case:

```html
<input @keydown.page-down="scrollDown" />
<input @keydown.caps-lock="warnCaps" />
```

### Event Chaining

Events can be chained when you wish to incorporate the same handler to more than one event. Houxit provides stress-saving semantics that stop you from writing different attributes and directives for each event when they have to use the same handler and maybe share the same modifiers:

```html
<button $$on:click.hover.keydown='increment' />
```

Using the dot separator, you can chain as many events as possible:

```html
<button $$on:click.hover|prevent|trusted|capture='increment' />
```

They all share from the modifiers being passed.

### Reactivity in Action

Let's create a button that increments a counter each time it is clicked:

```js
const { initBuild } = Houxit;

export default initBuild({
  model() {
    this.count = 0;
  },
  template: `
    <button $$on:click='increment'>
      Clicked {{ count }} times
    </button>`,
  handlers: {
    increment() {
      this.count++;
    },
  },
}).mount('#root');
```

Notice how changes in the data (`count`) automatically update the UI. This reactivity system may not be effective when a data being mutated is accessed from an object-based dataType like a Set, Map, Array, or a plain object. Utilize the `token` macro for deep reactive object dataType reactivity hydration.

---

## 11. Reactivity — `token`, `stream`, and `computed`

### `token`

The `token` macro is used for scalar reactive values. Its returned data is exposed to the template instances directly as `<propName>.data`.

```js
const { token, stream } = Houxit;

let widget = {
  model() {
    // initialized widget instances
    this.obj = stream({
      message: "Exploring Houxit",
      count: 0
    });
    this.num = token(34);
  },
  build() {
    // accessed in the widget through the ***this*** keyword
    this.obj.count += 70;
    // to access them in template, they will be exposed as data.count — these data objects are reactive
    return htx`
      <h1>{{ obj.message }}</h1>
      <p>{{ obj.count }}</p>
      <h5> {{ num.data }}</h5>
    `;
  }
}
```

By utilizing the `token` macro, this helps us handle dependency tracking for nested and deep data properties.

### `stream`

A `stream` is a deeply reactive Proxy of an object or array. Created with the `stream()` function call:

```js
import { stream } from 'houxit';

let user = stream({
  name: 'Ada',
  address: {
    city: 'London'
  }
});
```

Access and mutate properties directly — no accessor needed:

```js
console.log(user.name);          // 'Ada'
user.address.city = 'Lagos';
```

Houxit tracks at the property level. Changing `user.address.city` notifies only the subscribers that read `user.address.city` — not subscribers that read `user.name`, not the whole stream object or widget instance.

### `computed`

A computed value derives from other reactive sources and is itself reactive:

```js
import { computed } from 'houxit';

let count = token(0);
let doubled = computed(() => count.data * 2);

console.log(doubled.data);  // 0
count.data = 3;
console.log(doubled.data);  // 6
```

Passing a function produces a readonly computed token. To make it writable, pass a descriptor object:

```js
let doubled = computed({
  get: () => count.data * 2,
  set: (val) => { count.data = val / 2 }
});

doubled.data = 10;
console.log(count.data);    // 5
```

Computed values are lazy — they only evaluate when read for the first time or re-evaluate when read after a dependency has changed. They cache their last result and skip re-computation if nothing they depend on has changed.

### Shallow Reactivity

By default, `token` and `stream` are deeply reactive — nested objects inside a stream are also wrapped in Proxies, and every property at every depth is tracked.

For cases where you want only the top-level properties to be reactive, use the shallow variants:

```js
import { shallow, shallowStream } from 'houxit';

let config = shallow({ theme: 'dark', nested: { value: 1 } });
// config.data is reactive, but config.data.nested.value is NOT tracked

let list = shallowStream({ items: [1, 2, 3], meta: { count: 3 } });
// list.items is reactive, but list.items[0] is NOT tracked
```

### Readonly Reactivity

Produce a readonly view of a token or stream that warns (or throws in development) on attempted writes:

```js
import { readonly, readonlyStream } from 'houxit';

let count = token(0);
let locked = readonly(count);
locked.data = 5;   // ⚠ Houxit warns: attempted write to readonly token

let user = stream({ name: 'Ada' });
let frozenUser = readonlyStream(user);
frozenUser.name = 'Grace';   // ⚠ Houxit warns: attempted write to readonly stream
```

### Value Utilities

- `toToken(value)` — Converts a raw value into a token. If already a token, returns it unchanged.
- `unToken(value)` / `unwrap(value)` — Extracts the current value from a token.
- `read(value)` — The most flexible extractor. Tries: if function, calls it; tries `unwrap`; returns final value.
- `markRaw(value)` / `isRaw(value)` — Marks an object as permanently non-reactive.
- `memMove(value, deep?)` — Creates a copy of a non-primitive value. Deep by default.

### `agent()` API

The `agent` API is a reactive scalar that returns a `getter` & `setter` pair:

```js
import { agent } from "houxit";

const [count, setCount] = agent(0);

// Usage
console.log(count());      // 0
setCount(count() + 1);
console.log(count());      // 1
```

The `setter` function accepts a config method for advanced non-primitive deep mutations:

```js
let [user, setUser] = agent({ name: 'Ada', scores: [] });

setUser(({ value, write }) => {
  write(value.scores.push(100));
});
```

### `factoryToken` — Custom Reactive Primitives

`factoryToken` lets you construct a completely custom token with full control over tracking, effect triggering, the accessor name, and lifecycle callbacks:

```js
import { factoryToken } from 'houxit';

function vault(value, config) {
  return factoryToken(function(track, effect, deepTransform) {
    value = config.shallow ? value : deepTransform(value);
    return {
      get() {
        track();          // registers this read in the active tracking context
        return value;
      },
      set(newValue) {
        value = config.shallow ? newValue : deepTransform(newValue);
        effect();         // triggers all subscribers of this token
        return true;
      },
      accessor: 'value',  // overrides the default .data accessor to .value
      onTrack() {
        config.tracked?.();
      },
      onEffect() {
        config.updated?.();
      }
    };
  });
}
```

`factoryToken` is the foundation that `token`, `shallow`, `readonly`, and `computed` are all built on internally.

---

## 12. Rendering Styles

Houxit offers flexibility in rendering your UI widgets. You have multiple options: template strings, the `h` Hyperscript function through render, JSX, `htx` tagged templates, and the Adapter API. Choose the rendering option that best suits your coding style and project requirements.

### Native HTML Templating System

Define your UI structure directly using template strings. Widgets have to be registered through the `widgets` option for accessibility:

```js
export default {
  widgets: {
    MyWidget,
  },
  template: `
    <div>
      <p>Header</p>
      <input type="text">
    </div>
    <MyWidget/>
  `,
};
```

### The Hyperscript Function — `h()`

The `h` function is a hyperscript function for creating virtual DOM nodes, offering a programmatic approach to widget definition — just an alternative to React's JSX.

It takes the element name or a widget instance as the first argument, followed by attributes and children. Children can be plain texts or other `h` objects.

The `h` function can only be used or returned with a render function from the `build` function.

```js
export default {
  build() {
    return () => h('p', { class: 'name' }, /* more children like texts or more h objects */ h('input'));
  }
}
```

`h` macro can accept as many child `h` instances as possible by wrapping them in an array:

```js
export default {
  build() {
    return () => h('div', [
      h('p', 'Header'),
      h('input', { type: 'text' }),
    ]);
  },
};
```

For multiple root nodes, you can wrap them in array square brackets separated by comma:

```js
return () => [h('p', 'Header'), h('input')];
```

The first argument is required and must be a string value of a valid HTML/SVG/resolved Custom `createCustomElement` tag name, an unresolved `createCustomElement` instance, or an instance of a valid widget dataType. The other two arguments can be dynamically passed as children `h` nodes or attributes.

The `h` function accepts only three arguments, whereas the 2nd and 3rd arguments can be passed dynamically. If there is no need for any, its absence does not matter as there is no contextual defined position for any of the both, unlike other frameworks where you have to pass positional arguments or `null` to the hyperscript function.

```js
import MyWidget from 'widgets/pages.js';

export default {
  build() {
    return () => h('div',
      [
        h('h1', 'Header'),                    // only a text node child
        h('input', { type: 'text' }),         // only an object of attributes or params
        h(MyWidget),                          // only widget definition
        h('p', ['A child text node', h('br')], { class: 'm-5 text-primary' }),
        h('createCustomElement'),             // registered customElements
        h('input')                            // just an element name
      ]
    );
  },
};
```

> **Note:** Widgets do not need to be registered before being used in `h()` — they only need to be in scope.

#### Reactive Values in Render Functions — The Function Wrapper Rule

In render functions, reactive values **must** be wrapped in functions for reactive tracking:

```js
// ✗ static — evaluated once at render time, never updates
h('p', count.data)

// ✓ reactive — Houxit evaluates inside a tracking context on each update
h('p', () => count.data)
```

This applies to props too:

```js
// ✗ props read once
h('button', { disabled: count.data > 10 }, 'Submit')

// ✓ props tracked
h('button', { disabled: () => count.data > 10 }, 'Submit')
```

#### Force DOM Property / Attribute

Force a value to be set as a DOM property with the `.` prefix:

```js
h('input', { '.value': 'initial text' });
```

Force a value to be set as an HTML attribute with the `^` prefix:

```js
h('div', { '^data-custom': 'value' });
```

### JSX

JSX is an XML-like JavaScript extension that lets you write UI structure inline with logic. It requires a build step:

```jsx
const vnode = <div id="card">Hello</div>;
const card = <div id={dynamicId}>{userName}</div>;
const button = <button onClick={() => count.data++}>{count.data}</button>;
```

Widgets in JSX use PascalCase tags:

```jsx
import Avatar from './Avatar.houxit';
import Card from './Card.houxit';

const ui = (
  <Card title="Profile">
    <Avatar name={user.name} role={user.role} />
  </Card>
);
```

Unlike raw `h()`, Houxit's JSX compiler instruments reactive reads via AST analysis — wrapping them in getter functions automatically. You write natural JSX; Houxit handles tracking.

**`<If>` and `<For>` in JSX:**

```jsx
import { For, If, Else, ElseIf } from 'houxit';

<If test={() => isLoggedIn}>
  <Dashboard />
  <ElseIf test={() => isPending} />
  <Spinner />
  <Else />
  <LoginForm />
</If>

<For each={() => items}>
  {(item, key) => (
    <li key={key}>{item.name}</li>
  )}
</For>
```

**Fragments in JSX:**

```jsx
import { Fragment } from 'houxit';

return (
  <>
    <h2>{title}</h2>
    <p>{body}</p>
  </>
);
```

### `htx` Tagged Template — No-Build Alternative

When a build step is not available, Houxit provides the `htx` tagged template literal as a JSX alternative:

```js
import { htx, token } from 'houxit';

let count = token(0);

const render = () => htx`
  <div>
    <p innerText=${() => count.data}></p>
    <button onclick=${() => count.data++}>+</button>
  </div>
`;
```

Widget tags in `htx` use `<${Widget}>` syntax. Close dynamic tags with `<//>`:

```js
htx`
  <div>
    <${Clock} time=${() => new Date()}>
      <span>Tick</span>
    <//>
  </div>
`;
```

Self-closing form:

```js
htx`<${Clock} time=${() => new Date()} />`;
```

### `scaffold` Function

Renders a template string with a plain context object — an alternative for simple, non-reactive string templates:

```js
import { scaffold } from 'houxit';

const output = scaffold(
  `<div class="card"><h2>{{ name }}</h2><p>{{ role }}</p></div>`,
  { name: 'Ada Lovelace', role: 'Engineer' }
);
// '<div class="card"><h2>Ada Lovelace</h2><p>Engineer</p></div>'
```

Unlike `htx`, `scaffold` does not establish reactive tracking — it is a one-time evaluation.

### VNode Uniqueness

All vnodes in a render tree must be unique objects. Do not reuse the same vnode instance in multiple positions:

```js
// ✗ invalid — same vnode object used twice
function render() {
  const item = h('li', 'Shared');
  return h('ul', [item, item]);
}

// ✓ valid — each vnode is a fresh object
function render() {
  return h('ul', [
    h('li', 'First'),
    h('li', 'Second')
  ]);
}
```

### The Adapter API — `<script build>`

The Adapter API is Houxit's script-first authoring style. Everything declared at the top level of `<script build>` is automatically available in the template:

```html
<script build>
  import { token, computed, observe, postMount } from 'houxit';

  const params = defineParams({
    initialQuantity: { type: Number, default: 1 },
    unitPrice: { type: Number, required: true },
    max: { type: Number, default: 10 }
  });

  const signals = defineSignals(['change']);

  let quantity = token(params.initialQuantity);

  const total = computed(() => (quantity.data * params.unitPrice).toFixed(2));

  observe(() => quantity.data, (newQty) => {
    signals.change(newQty);
  });

  function increment() {
    if (quantity.data < params.max) quantity.data++;
  }

  function decrement() {
    if (quantity.data > 1) quantity.data--;
  }

  postMount(() => {
    console.log(`Stepper mounted at quantity ${quantity.data}`);
  });
</script>

<template>
  <div class="stepper">
    <button @click="decrement" *disabled="quantity <= 1">−</button>
    <span>{{ quantity }}</span>
    <button @click="increment" *disabled="quantity >= params.max">+</button>
    <p>Total: ${{ total }}</p>
  </div>
</template>
```

> **Important:** `.data` is only required where you are touching the raw token variable directly through a closure — exactly what `increment()`, `decrement()`, and the `observe` / `computed` callbacks do. Anywhere the template reaches that same value through the widget — interpolation, a `*binding`, a handler accessed via `this` — Houxit unwraps it automatically.

### Options API vs Adapter API — Comparison

| Concern | Options API | Adapter API |
|---|---|---|
| Declare props | `params: {...}` | `defineParams({...})` |
| Declare emitted events | `signals: [...]` | `defineSignals([...])` |
| Reactive state | `model() { this.x = ... }` | `let x = token(...)` / `stream(...)` |
| Derived value | `computed: { name() {...} }` | `const name = computed(() => ...)` |
| Watch a value | `observers: { prop(v) {...} }` | `observe(() => expr, (v) => {...})` |
| Methods | `handlers: { name() {...} }` | plain functions |
| Emit a signal | `this.$signals.name(...)` | `signals.name(...)` |
| Lifecycle hooks | named methods (`postMount() {...}`) | imported + called (`postMount(() => {...})`) |
| Template access to state | `this.x`, direct, no accessor | direct for instance access; `.data` for raw closure access |
| Imports required | none, for pure `model()` widgets | `token` / `stream` / `computed` etc. as needed |

> **Important:** There is **no performance difference** between the two styles. Both compile down to the identical widget representation — the same reactive graph, the same DOM bindings, the same patch behavior.

---

## 13. Widget Unit Files (WUF)

WUF — Widget Unit File — is Houxit's single-file widget format. Every `.houxit` file is a WUF. It collects everything a widget needs — logic, template, styles, and optionally a render function — into one coherent file.

### File Extensions

`.houxit` — the primary extension, preferred for widget files. `.hx` is also recognized identically by the compiler, the VSCode extension, and all Houxit tooling.

### Block Overview

| Block | Purpose |
|---|---|
| `<template>` | Widget template markup |
| `<script>` | Options API widget definition |
| `<script build>` | Adapter API build scope |
| `<script async build>` | Async Adapter API build scope |
| `<script render>` | Render function |
| `<style>` | Widget styles |
| `<markdown>` | Markdown content |
| `<i18n>` | Colocated translations |

### Render Source Priority

When multiple render sources are present, Houxit follows this priority order:

1. `<script render>` block or `render` option — **highest priority**
2. `<template>` block or `template` option
3. `<markdown>` block or `markdown` option
4. `innerHTML` of the mount root element (`initBuild` instances only) — **lowest priority**

### Complete WUF Example — Adapter API

```html
<script build>
  import { token, stream, observe } from 'houxit';
  import SearchResult from './SearchResult.houxit';

  const params = defineParams({ placeholder: String });
  const signals = defineSignals(['search']);

  let query = token('');
  let results = stream([]);
  let isSearching = token(false);

  observe(
    () => query.data,
    async (q) => {
      if (!q.trim()) { results.splice(0); return; }
      isSearching.data = true;
      const data = await fetch(`/api/search?q=${encodeURIComponent(q)}`).then(r => r.json());
      results.splice(0, results.length, ...data);
      isSearching.data = false;
      signals.search(q);
    },
    { flushType: 'post' }
  );
</script>

<template>
  <div class="search">
    <input
      type="search"
      $$model="query"
      *placeholder="params.placeholder || 'Search...'"
      *aria-busy="isSearching"
    />
    <ul $$if="results.length" aria-label="Search results">
      <SearchResult
        $$for="result of results"
        *key="result.id"
        *result="result"
      />
    </ul>
    <p $$if="!results.length && !isSearching && query">
      No results for "{{ query }}"
    </p>
  </div>
</template>

<style>
  .search { position: relative; }
  input[type=search] { width: 100%; padding: 0.75rem 1rem; }
</style>
```

### WUF vs Plain JS Widgets

WUF is a convenience format — everything it provides can be expressed in plain JavaScript. The compiler transforms WUF into a standard JS module. Plain JS widgets are fully supported alongside WUF widgets in the same project:

```js
// PlainWidget.js — identical to a compiled WUF
import Houxit from 'houxit';

export default {
  name: 'PlainWidget',
  template: `<p>{{ message }}</p>`,
  build() {
    let message = Houxit.token('Hello from plain JS');
    return Houxit.useModel({ message });
  }
}
```

---

# Part III — Widget Communication

## 14. Params

Params are the declared interface through which a parent widget passes data into a child. They form a widget's public interface.

You can pass parameters to your widgets to make them more dynamic and reusable. Params provide a consistent way of passing model-based data from the parent down to the child widget.

### Defining Params

Define the `params` option in the widget's options object and access them in the template as `$params.xxx`.

Validation can be a type function, or an object consisting of `type`, a `validator` method which should conditionally return a boolean value, and `default` or `required` properties:

```js
export default {
  params: {
    color: String,   // a String prototype function, used to check against params data
    seed: {
      type: Object,
      required: true,  // required may not co-exist with the default option
      default: {},
    },
    name: {
      type: String,
      default: 'Prince',
      validator(value) {
        if (!typeof value === "string") return false;
        else return true;
      }
    }
  },
  template: `<h2> My name is {{ $params.name }} </h2>`
}
```

**Usage:**

```html
<widget name="John" *seed="{}" />
```

> **Note:** Widget properties / JavaScript expressions or attribute names can also be bound using the `*` asterisk flag. When passing in-template expressions like objects/arrays/functions or other special data types, they must be quoted, especially in cases where inner quoting might be involved. Double quoting is recommended so single quoting can be used internally. In cases where complex expressions might be involved, it is recommended to define the data in the model data method, then reference it from the template.

Params will be exposed to the template instance as `$params.xxx` within the child widget. Validations will raise a Houxit Error or warning if failed or when a validator function returns false.

Params can also be passed an array of param name strings. This is useful when there is no use case for validations:

```js
params: ['color', 'seed']
```

### Params Validation Options

| Option | Type | Default |
|---|---|---|
| `required` | Boolean | `false` |
| `validator` | Function | — |
| `default` | Any | — |
| `type` | Function | — |

### Custom Data Types Prototyping

Houxit supports the production of custom dataTypes using class objects:

```js
class PersonType {}

let App = {
  params: {
    person: {
      type: PersonType
    }
  }
}
```

**Usage:**

```html
<App *person=PersonTypeInstance />
```

Can be used the same way as other normal dataTypes.

### One-Way Data Flow

Params flow downward only. A child widget cannot mutate the param values it receives — doing so logs a warning in development.

When the parent updates, the child's params refresh automatically with the latest values.

### Using a Param as Initial State

To use a param as the starting value for local mutable state, copy it into a token or model property at setup time:

```js
const params = defineParams(['initialCount']);
const count = token(params.initialCount);
// count is now disconnected from future param updates
```

### Transforming a Param

To derive a transformed value that stays in sync with the param, use `computed`:

```js
const params = defineParams(['size']);
const normalizedSize = computed(() => params.size.trim().toLowerCase());
```

### Reactive Params Destructuring Warning

Houxit tracks reactivity through property access. Destructuring a param breaks the tracking chain:

```js
const { foo } = defineParams(['foo']);
effectHook(() => {
  console.log(foo);   // ⚠ foo is a constant — not tracked
});
```

Access through the params object to maintain reactivity:

```js
const params = defineParams(['foo']);
effectHook(() => {
  console.log(params.foo);   // ✓ tracked
});
```

### Boolean Casting

Params declared as `Boolean` follow HTML boolean attribute conventions:

```html
<MyWidget disabled />         <!-- disabled === true -->
<MyWidget />                  <!-- disabled === false -->
<MyWidget *disabled="false" /> <!-- disabled === false -->
```

---

## 15. Signals & Events

### Declaring Signals

Signals are the declared events a widget emits. Declare them with `signals` or `defineSignals`:

```js
export default {
  signals: ['change', 'reset', 'submit'],
  build(params, { signals }) {
    function handleClick() {
      signals.change(newValue);
    }
    return useModel({ handleClick });
  }
}
```

### Emitting Signals

In templates, emit via `$signals`:

```html
<button @click="$signals.reset()">Reset</button>
<input @input="$signals.change($event.target.value)" />
```

In lifecycle hooks or render:

```js
this.$signals.change(value);
```

### Listening to Signals

A parent listens to a widget's signals exactly as it would a DOM event:

```html
<SearchInput @change="handleSearch" onReset="clearResults" />
```

### Events (Undeclared)

Events are the undeclared counterpart to signals. Any `@eventName` binding on a widget that does not match a declared signal is treated as an event — it arrives in the `events` context object in `build`, and is accessible via `$events` in templates and `this.$events` in lifecycle and render contexts.

### Signal and Event Fallthrough

Like attrs, signals and events that are not consumed by a widget fall through to its root element automatically — unless the widget has no single root, or fallthrough is disabled.

Control this behavior with `buildConfig`:

```js
export default {
  buildConfig: {
    forwardEvents: false   // disable event fallthrough
  }
}
```

### The `onXxx` Event Convention

Any prop whose name starts with `on` followed by a capitalized letter at the third position — `onClick`, `onChange`, `onMouseover` — is treated as an event binding. Houxit strips the `on` prefix, lowercases the remainder, and attaches the listener:

```html
<button *onClick="handler">Click me</button>
```

**Multi-Event Chaining with `onXxx`:**

To attach one handler to multiple events in the `onXxx` convention, concatenate the event names in PascalCase after `on`:

```html
<div *onHoverClickMouseover="handler">Multi-event</div>
```

> **Note:** Because of how the DOM passes attributes, `onXx` event props cannot be used directly in inlined DOM template strings (the `template` option in no-build environments). In those contexts, use `$$on` directives or the `dispatch` prop instead.

### `dispatch` — Render Function Event Binding

For render functions and JSX, `dispatch` is the declarative event binding prop:

```js
h('button', {
  dispatch: ['click', handleClick, 'prevent|once']
});
```

Both event names and modifiers can themselves be arrays of strings.

### `attach` — Imperative Event Binding

`attach` provides full imperative control over event binding in render functions and JSX:

```js
h('div', {
  attach({ on, element, mounted, updated, destroyed, addProp, use }) {
    on('click', handleClick, 'prevent');
    on(['focus', 'blur'], handleFocusChange);
    on('keydown.enter.esc', handleKey, 'stop');
    mounted(() => {
      element.setAttribute('data-ready', 'true');
    });
    destroyed(() => { /* cleanup on element removal */ });
    addProp('aria-label', 'Interactive area');
    use(tooltipDirective, { content: 'Click to select' });
  }
});
```

---

## 16. Slots

Slots provide a way to pass content to your child widget from the parent widget.

You can define slots on your widget's template using the `<slot>` tag. The passed content will be used to replace the slot element.

Slot tags with no `name` attribute will specifically be rendered as a default slot. You can also specifically set a default slot by setting the name attribute to `default`:

```html
<div>
  <h1>My widget heading</h1>
  <slot/>
</div>
<slot name=default />
```

Slot tags can also be named or dynamically named using binding to model data properties:

```html
<slot name='header'/>
<slot *name='dataProp'/><!-- dynamic slot naming -->
```

### Passing Slot Content

To parse slot contents for slot elements, Houxit provides you with the `$$slot` directive on elements/widgets:

```html
<Widget>
  <template $$slot:header>
    <!-- Slot contents goes here -->
  </template>
  <input>
</Widget>
```

Any element/widget can be passed as slot content by specifying the slot to which it belongs through the `$$slot` directive. The `#` shorthand is also available:

```html
<Card>
  <h2 #header>My Title</h2>
</Card>
```

Slot elements can be passed default contents by providing inner content to it. When no slot is specified for it, the default slot will be rendered:

```html
<slot name=header> <h2>A default slot content</h2></slot>
```

### Houxit Slots Passing Caveats

Slots work the same as in other frameworks that use the slot system, with slight differences in Houxit.

If a child widget has only a single root element, Houxit will try to parse all default slots to its `innerHTML` if there is no default slot provided and it has no `innerHTML` content. To disable this action, you can set the `forwardSlot` setting to `false` in your `buildConfig` settings option, as it defaults to `true`.

All widget instances of the parent are available within the child widget scope, but not the other way around. But if need be to access a child widget's data within the scope it is defined in the parent, Houxit provides you with the `context` option in the child widget.

Elements with no specified slot mapping will be rendered into the default slot, if any default slot element is provided or the child element has a single root element with no innerHtml contents or childNodes.

Slot contents are merged and replace the matching slot element within the child widget template.

### Scoped Slots

A scoped slot passes data from the widget outward to the content provided by the parent. The widget exposes a value through the `*context` prop on the slot outlet:

```html
<!-- Card.houxit -->
<template>
  <slot name="header" />
  <p>I love Houxit</p>
  <slot />
  <input />
  <slot name="footer" *context="this.obj.fruit" />
</template>
```

Consuming a scoped slot:

```html
<Card>
  <h1 #header>Hello Houxit</h1>
  <h5 #footer="fruits">
    Well done — {{ fruits.name }}
  </h5>
</Card>
```

Destructuring the scope inline is supported:

```html
<Card>
  <h5 #footer="{ name, color }">
    {{ name }} — {{ color }}
  </h5>
</Card>
```

### Declaring Slots in the Options API

Use the `slots` option to declare which named slots a widget accepts:

```js
export default {
  slots: ['header', 'footer'],
  build(params, { slots }) {
    return () => (
      <div class="card">
        {slots.header()}
        <p>I love Houxit</p>
        {slots.default()}
        {slots.footer()}
      </div>
    );
  }
}
```

Each entry in `slots` is a function that renders the slot's content. `slots` is not part of the model instance — slot context is not available via `this` in lifecycle hooks, observers, or handlers.

---

## 17. Context & `$$provide`

The `context` option allows passing of model data props in a reversed manner, from a child widget to its scope within the consumer parent's widget.

A method with its `this` keyword model public instance. Access to model instances are to be exposed directly. The `this` keyword will be available in the scope, and its returned value will be exposed as a state within its consumer scope:

```js
export default {
  context() {
    return {
      count: this.count.data,  // direct access to widget instance data
      name: this.$params.name,
      msg: this.messages       // namespace variable
    }
  }
}
```

Any value can be returned from the context. This will be exposed to the scope of the child widget tag through the `$$provide` directive:

```html
<Widget $$provide=prop>
  <!-- context attributes of this child widget will only be available within this scope of Widget instance as $provide -->
  <h1>{{ prop.<xxx> }}</h1>
</Widget>
```

If `$$provide` omits a value, `provide` will be used instead. Destructuring is supported:

```html
<Avatar $$provide="{ fruit: { name, color }, count }">
  <p>{{ name }} — {{ color }}</p>
</Avatar>
```

### `useContext` in Adapter API

The Adapter API equivalent of the `context` option:

```js
import { useContext } from 'houxit';

useContext(() => ({
  selectedItem: this.selected,
  count: this.count
}));
```

---

## 18. Transmit & Receive

Transmit and receive are Houxit's dependency injection system — a way to pass data from an ancestor widget down to any descendant in the tree, without threading props through every level in between.

### Transmitting Values

**Options API — `transmit` option:**

```js
export default {
  model() {
    this.theme = 'dark';
    this.locale = 'en-US';
  },
  transmit() {
    return {
      theme: this.theme,
      locale: this.locale
    };
  }
}
```

**Adapter API — `useTransmit`:**

```html
<script build>
  import { token, useTransmit } from 'houxit';
  let theme = token('dark');
  let locale = token('en-US');
  useTransmit({ theme, locale });
</script>
```

### Receiving Values

**Options API — `receive` option:**

```js
export default {
  receive: {
    theme: 'theme',          // key: local name on this
    locale: 'locale'
  },
  postMount() {
    console.log(this.theme);  // 'dark'
  }
}
```

**Adapter API — `useReceiver`:**

```js
import { useReceiver } from 'houxit';

const theme = useReceiver('theme');
const { theme, locale } = useReceiver(['theme', 'locale']);
const { appLocale } = useReceiver({
  theme: 'dark',
  locale: { alias: 'appLocale', default: 'en-US' }
});
```

### App-Level Transmission

```js
app.transmit({
  appName: 'Houxit App',
  config: globalConfig
});
```

### Transmit vs `context` / `$$provide`

|  | Transmit / Receive | `context` / `$$provide` |
|---|---|---|
| Scope | Entire descendant subtree | Only the widget's slot content |
| Consumer | Any descendant widget | Only content passed into the widget's slots |
| Setup | `transmit` option / `useTransmit` | `context()` option on widget |
| Consumption | `receive` option / `useReceiver` | `$$provide="{ key }"` on the consumer element |
| Best for | App-wide or tree-wide shared state | Widget-to-slot-content data passing |

---

# Part IV — Advanced Patterns

## 19. The `build` Function

The `build` function is the widget's major building compilation engine.

The `build` function has access to some useful widget options data as parameters, through two arguments: `[params, context]`.

The `params` parameter is a reference to `this.$params` data object, while the `context` is an object with access to `signals`, `slots`, `attrs`, and `utils`.

This is useful when utilizing the hyperscript pattern:

```js
export default {
  build(params, context) {
    return; //...
  }
}
```

These properties can be accessed from the use of the `this` keyword, with the exception of the slots and utils, but are provided here for simplicity. They can be accessed by appending the `$` character to the `signals` and `attrs` data instances:

```js
const { log } = Houxit;

export default {
  postMount() {
    log(this.$attrs);
    log(this.$signals);
  }
}
```

### `useModel`

When using the `build` method, you must expose values via `useModel`:

```js
import { useModel } from 'houxit';

export default {
  build() {
    let count = token(0);
    function increment() { count.data++; }
    return Houxit.useModel({ count, increment });
  }
}
```

Call without arguments when there is nothing to expose:

```js
return useModel();
```

---

## 20. Widget Type System

Houxit also accepts the use of functions and class objects as valid widgets, but with slight edge cases.

### Function Widgets

Function widgets work as the scope of the `build` function, with no data state of their own.

The `htx` macro is provided to help the functional widget access the Houxit rich templating syntax:

```js
const { html } = Houxit;

function FW() {
  return () => h('input');
}
```

Can be registered and used as other normal widgets.

> **Note:** The Houxit style guide recommends against the use of arrow function widgets as an `initBuild` widget. Nevertheless, function widgets are a perfect Houxit widget provided with Houxit utilities.

### Class Widgets

Class widgets are perfect for stateful widget encapsulation. In short, they were used in building the Houxit built-in widgets.

Houxit does not utilize the `model` function when working with class-based widgets. Instead, Houxit takes its defined props to `this.model` as Houxit options.

A Houxit class widget must extend the base `Widget` class:

```js
const { Widget } = Houxit;

class myCW extends Widget {
  constructor() {
    super();
    this.model.count = 56;  // props assignment to this.model
  }
  template: `<button> {{ count }} </button>`
}
```

> **Note:** Houxit recommends the use of object widgets for declarative syntax.

---

## 21. Lifecycle Hooks

Houxit provides you with some useful callback functions that run at some specific stage of the life of a widget.

| Hook | Timing | Async? | `this` bound? |
|---|---|---|---|
| `preBuild` | Before widget instances are instantiated or any build process is started | Synchronous | No (`$attrs` and `$slots` only) |
| `postBuild` | After all widget instances are instantiated and after running the build function | Synchronous | Yes |
| `preMount` | Before inserting the widget UI into the DOM | Promise-based | Yes |
| `postMount` | After inserting the widget UI build into the DOM | Promise-based | Yes |
| `preUpdate` | Before starting an update on any change on stateful data | Promise-based | Yes |
| `postUpdate` | After updating the DOM of changes to the reactive data | Promise-based | Yes |
| `preDestroy` | Before destroying the widget instances and unmounting from the DOM | Promise-based | Yes |
| `postDestroy` | After destroying all widget instances and unmounted from the DOM | Promise-based | Yes |

Lifecycle hooks have their `this` keyword bound to the widget model instances, with the exception of the `preBuild` hook.

### Event-Driven Hooks

**`onCatch`:**

Registers an error boundary callback for the current widget. Called when any error is thrown inside this widget or any of its descendants. Return `true` to suppress the error; return `false` or nothing to propagate:

```js
export default {
  onCatch(error) {
    console.error('Caught:', error);
    this.hasError = true;
    return true;   // suppress — parent never sees it
  }
}
```

> **Warning:** Forgetting the `return true` is the most common mistake — logging the error and doing nothing else still lets it propagate.

**`onSlotRender`:**

Fires whenever a slot in this widget renders. Receives an object of slot names mapping to their rendered context values.

**`onSlotEffect`:**

Fires after a slot's reactive dependencies update and the slot re-renders.

---

## 22. Dynamic Widgets

Widgets can be dynamically rendered, especially when resorting to in-DOM templates. This can be achieved using the `hx:build` built-in widget.

It accepts one required property, `self`, which can be any registered widget instance or a valid HTML/SVG tag name.

Attributes or params for the widget passed to `self` can be passed alongside the `self` params, with `self` as first param. Children are passed as children to `hx:build`.

```html
<hx:build *self="isActive ? Avatar : PlaceholderBox" />
```

### `<::Server.Component>` Shorthand

When the dynamic widget is a simple reactive reference — a state value or exposed name with no logic — use the `<::Server.Component>` shorthand:

```html
<::obj.Clock />
```

This transpiles to:

```html
<hx:build *self="obj.Clock" />
```

### Recursive Widgets — `<hx:self>`

A widget can render itself recursively using the `Self` built-in:

```html
<!-- TreeNode.houxit -->
<template>
  <div class="node">
    <p>{{ node.label }}</p>
    <hx:self
      $$for="child of node.children"
      :key="child.id"
      *node="child"
    />
  </div>
</template>
```

> **Note:** Props must be passed explicitly — `<hx:self>` does not forward the parent's props automatically.

---

## 23. Data Observation

### The `observers` Option

To perform data observation within the widget instance data, the `observers` option can be used.

Within the `observers` object option, Houxit accepts only objects with names that reference the widget-defined model instance data. It can accept nested property accessors as method names:

```js
export default {
  observers: {
    'value.data': function() {
    }
  }
}
```

Houxit will raise an observer error on access to a property that cannot be found on the model instance while naming an `observers` property.

To set up an observer method for the property of `value.data`, inasmuch as the target data is a `token` data or would not require nested property accessing, you can specifically set the method name to `value`:

```js
export default {
  model() {
    this.count = 2;
    this.value = token(77);
  },
  observers: {
    count(newV, oldV) {
      // this method observes the count property of the widget instance
      // with parameter values of the new assigned value and its former value
    },
    value() {
      // here is an observer method for the 'value.data' model instance
    }
  }
}
```

Observer methods get triggered each time the select prop calls its setter function.

### `this._observe` Macro

For observation of multiple and complex data, you can accomplish such tasks within the `postMount` or any lifecycle hook or the `build` method by using the `this._observe` macro:

```js
const { token } = Houxit;

export default {
  model() {
    this.obj = stream({ num: 56, info: { name: 'Houxit Explorer', age: 43 } });
  },
  postMount() {
    // We are targeting to watch the age property of obj.data.info
    this._observe('obj.data.info.age', () => {
      // a callback function
    });
    // observe accepts three arguments: the path to the reactive object to watch,
    // a callback function, and a config object.
    // Recommended to be an arrow function, so to be able to access the postMount scope this keyword.
  }
}
```

### The `observe` Function

Precisely, you can watch more than one property using the `observe` function, by passing a getter function that returns the value of the live properties you wish to observe:

```js
const { token, observe, stream } = Houxit;

export default {
  model() {
    this.obj = stream({ num: 56, info: { name: 'Houxit Explorer', age: 43 } });
    this.count = 45;
  },
  postMount() {
    // We are targeting to watch the age property of obj.data.info
    observe(() => this.obj.info.age + this.count, (newV, oldV) => {
      // a callback function
    });

    // if both properties may not be concatenated, you may use an array to parse
    // in the strings of the props path, or getters
    observe(['obj.info.age', () => this.count], ([newAge, oldAge], [newCount, oldCount]) => {
      // a callback function
      // Notice how we received arrays of two values, old and new, from this callback parameter arguments
    });

    // NOTE: this must be omitted, and you must not return it from a function.
  }
}
```

Houxit watches the value of these properties and reacts when their values change on re-evaluation, instead of the data properties directly.

### `_effectHook`

`_effectHook` is the instance-level auto-tracking side effect mechanism. It runs a callback immediately, tracks every reactive read inside it, and re-runs whenever any dependency changes.

---

## 24. Computed Properties

In the Options API, declare computed properties under the `computed` option:

```js
export default {
  model() {
    this.price = 100;
    this.quantity = 3;
  },
  computed: {
    // getter only — readonly
    total() {
      return this.price * this.quantity;
    },
    // getter and setter
    displayPrice: {
      get() {
        return `$${this.price.toFixed(2)}`;
      },
      set(value) {
        this.price = parseFloat(value.replace('$', ''));
      }
    }
  }
}
```

Computed values are directly available on `this`. They are lazy and cached — they only re-evaluate when a reactive dependency changes.

---

## 25. Filters

Filters transform an interpolated value before it renders. Apply a filter with the `%` operator:

```html
<p>{{ name % capitalize }}</p>
```

Filters are chainable:

```html
<p>{{ title % trim % uppercase }}</p>
```

Filters can also accept additional arguments:

```html
<p>{{ price % currency('USD', 2) }}</p>
```

### Writing a Custom Filter

A filter is a plain function whose first argument is the incoming value:

```js
function currency(value, symbol, decimals) {
  return `${symbol}${value.toFixed(decimals)}`;
}
```

Alternatively, a filter can be an object with a `filter` method:

```js
const currency = {
  filter(value, symbol, decimals) {
    return `${symbol}${value.toFixed(decimals)}`;
  }
};
```

### Registering Filters

**Options API:**

```js
export default {
  filters: {
    currency,
    uppercase: (val) => val.toUpperCase(),
    trim: (val) => val.trim()
  }
}
```

**Adapter API:** Filters imported or defined at the top level of `<script build>` are available automatically.

### Built-in Filters

Import from `'houxit/filters'`:

| Filter | Purpose |
|---|---|
| `upper` / `uppercase` | Converts string to uppercase |
| `lower` / `lowercase` | Converts string to lowercase |
| `shortener` | Converts large number to compact form (1000 → '1k') |
| `currency` | Formats number as currency |
| `percent` | Calculates percentage |

---

## 26. Template Blocks

Template blocks are Houxit's structural building blocks — special `{{ @tag }}` expressions that control rendering flow, manage scope, handle async content, and provide debugging utilities. Unlike directives, which attach behavior to existing HTML elements, blocks stand on their own as template-level constructs.

### `@if` — Conditional Rendering

```html
{{@if num === 5}}
  <p>Exactly five.</p>
{{/if}}
```

`@else-if` and `@else` are void tags:

```html
{{@if status === 'active'}}
  <p>Active</p>
{{@else-if status === 'pending'}}
  <p>Pending approval</p>
{{@else}}
  <p>Inactive</p>
{{/if}}
```

### `@const` — Block-Scoped Variables

```html
{{@const total = items.length * price}}
<p>Total: {{ total }}</p>
```

### `@html` — Raw HTML Rendering

```html
{{@html article.bodyHtml}}
```

> **Warning:** Only use with trusted content.

### `@await` — Async Content ⚠️ Deprecated

```html
{{@await fetchUser(userId)}}
  {{@then user}}
    <p>Welcome, {{ user.name }}!</p>
  {{@catch error}}
    <p>Something went wrong: {{ error.message }}</p>
{{/await}}
```

> ⚠️ **Deprecated:** Prefer `<hx:suspense>` for all async boundary use cases.

### `@class` and `@new` — Template Classes

See [Template Classes](#27-template-classes) section.

### `@debugger` — Template Breakpoint

```html
{{@debugger}}
```

Inserts a debugging breakpoint into the template's render execution.

> **Warning:** Remove `@debugger` tags before shipping to production.

### Custom Blocks

A custom block is a function — or an object with a `block` method — that receives the block's children and parsed value, and returns vnodes:

```js
function list_guard(vnodes, value, factory) {
  if (!Array.isArray(value) || value.length === 0) return null;
  return factory(vnodes);
}
```

**Object form:**

```js
const my_block = {
  block(vnodes, value, factory) {
    return factory(vnodes);
  },
  setup: {
    isVoid: true   // block takes no children
  }
};
```

**Registering:**

```js
// Options API
export default {
  blocks: {
    list_guard,
    my_block
  }
}
```

**Usage:**

```html
{{@list_guard items}}
  <ul>
    <li $$for="item of items" :key="item.id">{{ item.name }}</li>
  </ul>
{{/list_guard}}
```

### Mustache Block Helpers

Houxit provides mustache tag configuration setup while compiling mustache tag expressions:

```html
{{ %foo >> model_based_expressions }}
```

A template block helper is recognized by appending the `%` character before the block name and separating the block name from the actual expression using double greater-than character `>>`.

Block helpers can be passed modifiers just like passing modifiers to directives:

```html
{{ %safe|mod|once >> stringValues }}
```

Block helpers can be chained, separating each block with the dot `.` character:

```html
{{ %safe.html|mod|once >> stringValues }}
```

You can pass multiple parameters by separating them with the `>>` character:

```html
<p> {{ %myBlock >> firstValue >> 890 }}</p>
```

---

## 27. Template Classes

Template Class is a Houxit feature for defining reusable, stateless template fragments that are scoped to a single widget instance. It is the cheapest way to repeat or parameterize a chunk of markup without paying the cost of a full widget.

### Quick Example

```html
<template>
  {{ @class my_button=props }}
    <button>click me {{ props.count }}</button>
  {{ /class }}
  {{ @new my_button({ count: clickCount }) }}
  {{ @new my_button({ count: clickCount * 2 }) }}
</template>
```

### Defining a Template Class

```html
{{ @class <name>=<propsExpression> }}
  <!-- template content -->
{{ /class }}
```

### Prop Values: Pass-Through vs Destructured

**Pass-through:**

```html
{{ @class my_button=props }}
  <button>{{ props.label }} — {{ props.count }}</button>
{{ /class }}
{{ @new my_button({ label: 'Save', count: 3 }) }}
```

**Destructured:**

```html
{{ @class my_button={ name, age } }}
  <p>{{ name }} is {{ age }} years old</p>
{{ /class }}
```

### Prop Validation

```html
{{ @class my_button=validatorFn::(props) }}
  <button>{{ props.count }}</button>
{{ /class }}
```

Validating a destructured shape:

```html
{{ @class my_button=validatorFn::({ name, age }) }}
  <p>{{ name }} is {{ age }}</p>
{{ /class }}
```

### Manual Creation

**Functional API:**

```js
let MyButton = Houxit.createTemplateClass(function(props) {
  return (<Button>{props.count}</Button>);
});
```

**Class-Based API:**

```js
class MyButton extends Houxit.TemplateClass {
  class(props) {
    return (<button>{this.props.count}</button>);
  }
}
```

### Registering with Options API

```js
export default {
  templateClasses: {
    MyButton
  }
}
```

### Using in Render Functions & JSX

```jsx
<h2>{ new MyButton(props) }</h2>
```

### Template Class vs Widget

|  | Template Class | Widget |
|---|---|---|
| Own reactive state | No — reads parent state only | Yes |
| Lifecycle hooks | None | Full lifecycle |
| Instantiation cost | Very low — function call | Higher — full instance setup |
| Reusable across files | Yes, via `createTemplateClass` | Yes, via normal imports |
| Best for | Repeating markup fragments | Anything needing independent state |

---

## 28. Async Widgets & Suspense

### Async Widget Files

Mark a widget's build phase as asynchronous with `<script async build>`:

```html
<script async build>
  import { stream } from 'houxit';
  let data = await fetchDashboardData();
  let state = stream(data);
</script>
<template>
  <Dashboard *stats="state.stats" />
</template>
```

The Options API equivalent:

```js
export default {
  async build(params) {
    let data = await fetchUser(params.id);
    return Houxit.useModel({ data });
  }
}
```

### `asyncWidget` — On-Demand Loading

```js
import { asyncWidget } from 'houxit';

const AsyncAvatar = asyncWidget(() => import('./Avatar.houxit'), {
  fallback: <LoadingSpinner />,
  delay: 200,
  timeout: 3000,
  error: <h1 class="alert">Failed to load</h1>
});
```

### `<hx:suspense>` — Async Boundaries

```html
<hx:suspense>
  <template #fallback>
    <LoadingScreen />
  </template>
  <AsyncDashboard />
</hx:suspense>
```

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `await` | Function / Promise | — | An async function or Promise to await before rendering |
| `delay` | number (ms) | 200 | Wait before showing fallback |
| `timeout` | number (ms) | 300 | Maximum wait before error slot is shown |

| Slot | Purpose |
|---|---|
| `default` | Content to render once resolved |
| `#fallback` | Shown while pending |
| `#error` | Shown if timeout is exceeded or a dependency throws |

---

# Part V — Styling & Animation

## 29. Style & Class Binding

### Class Binding

**Object syntax:**

```html
<div $$bind:class="{ active: isActive, disabled: isDisabled }"></div>
```

**Array syntax:**

```html
<button *class="[ btn, m-5, w-70 ]"> Click me </button>
```

When a class binding receives an object, Houxit evaluates the property values as a condition on passing the property keys as the class names:

```html
<button *class="{ largeBtn: true, 'bg-dark': false, btn: true }">Click me</button>
<!-- Results in: <button class="largeBtn btn">Click me</button> -->
```

An array of class objects or arrays can also be received:

```html
<button *class="[ classObjects, { largeBtn: true, 'bg-dark': false, btn: true }, otherModelRefs ]" />
```

**Dot-notation shorthand:**

```html
<!-- static -->
<div class.card.elevated="true"></div>
<!-- reactive -->
<div *class.card.elevated="isElevated"></div>
```

### Style Binding

**Object syntax:**

```html
<h1 *style="{ color: red, 'font-size': '18hx', borderRadius: '10hx' }">My heading</h1>
```

> **Note:** Single-quote property names containing special characters like hyphens, and values containing a mix of numbers and alphabets.

You can use the JavaScript CSS style property semantics by capitalizing a letter whenever there occurs a hyphen-replaced space, like `borderRadius`.

**Array syntax:**

```html
<element *style="[styleObj, { margin: '10hx', background: '#0a3039' }, elementStyles]" />
```

**Dot-notation shorthand:**

```html
<!-- static -->
<p style.color="red"></p>
<!-- reactive -->
<p *style.color="primaryColor"></p>
<!-- multiple properties, one expression -->
<p *style.color.background="isDark ? 'white' : 'black'"></p>
```

---

## 30. Scoped Styles & `@g()`

### The `styles` Option

Styles defined here are scoped to the widget template only by default:

```js
export default {
  styles: `
    #btn {
      height: 40hx;
      width: 70%;
      border-radius: 10hx;
    }
    .beautify {
      border-color: #179d97;
      color: lightblue;
      background-color: #0a3039;
    }
  `,
  template: `<button id='btn' class='beautify'> Houxit button styles Example</button>`
}
```

### Global Styles — `@g()`

If you wish to make a particular style global, to go beyond the scope of the present widget, prepend the `@g` directive to an independent style sheet selector:

```css
@g .btn {
  color: blue;
}

.btn {
  color: #0a3039;
}
```

The first `.btn` block will be a global style during processing. It will affect all elements matching the selector in the DOM. The second sheet is scoped only to the widget template.

In WUF `<style>` blocks:

```css
<style>
  .card { padding: 1rem; }  /* scoped */
  @g(.third-party-widget) {
    margin: 0;              /* global — not scoped */
  }
</style>
```

### Opting Out of Auto-Scoping

```js
// Options API
buildConfig: { scopedStyle: false }

// Adapter API
defineConfig({ scopedStyle: false });
```

---

## 31. Animation & Transition System

Houxit has a first-class motion system built into the framework.

### Two Kinds of Motion

- **Transition** — triggered when an element enters or leaves the DOM. Runs once on mount and once on destroy.
- **Animation** — a continuous or looping motion applied to an element that already exists.

### Using Motion in Templates

```html
<!-- named transition -->
<div $$transite:fade="{ duration: 400 }"></div>

<!-- named animation -->
<div $$animate:pulse="{ speed: 1.5 }"></div>

<!-- dynamic name -->
<div $$transite:[activeTransition]="motionParams"></div>
```

### Registering Motions

```js
app
  .animation('pulse', pulseAnimation)
  .transition('fade', fadeTransition);
```

Or locally:

```js
export default {
  animations: { pulse },
  transitions: { fade }
};
```

### Authoring Custom Motion Functions

**Transition function:**

```js
function signature(element, params) {
  return {
    // descriptor
  }
}
```

**Animation function:**

```js
function signature(element, { velocity, to, from, direction, delta }, params) {
  return {
    // descriptor
  }
}
```

### The Descriptor Object

```js
function fade(element, params) {
  const { from = 0, to = 1, duration = 400, easing = easings.easeInOut } = params;

  return {
    duration,
    easing,
    keyframes: {
      '0%':   { opacity: from },
      '100%': { opacity: to }
    },
    styles(t, u) {
      const value = from + (to - from) * t;
      return `opacity: ${value};`;
    },
    frame(t, u) {
      element.style.opacity = from + (to - from) * t;
    }
  };
}
```

`t` — progress from `0` to `1`. `u` — the inverse: `1 - t`.

### The Hybrid Motion Engine

| Descriptor content | Engine selected |
|---|---|
| `keyframes` only (array or object) | WAAPI (`element.animate()`) |
| `styles` only (returns CSS string) | CSS — Houxit injects a `@keyframes` rule |
| `frame` present | RAF — mandatory, regardless of other options |
| `keyframes` (object) + `styles` (CSS string) | Houxit attempts CSS conversion; falls back to RAF |
| Mixed, unresolvable | RAF as final fallback |

### `<hx:motion>` — Multi-Element Motion

```html
<hx:motion *transite="fade" *params="{ duration: 300 }">
  <h2>Title</h2>
  <p>Body text</p>
  Raw text here
</hx:motion>
```

### Built-in Transitions

`fade`, `blur`, `slide`, `fly`, `scale`, `draw`, `morph`, `collapse`, `stagger`, `crossfade`, `shake`, `pulse`, `ripple`, `reveal`, `pop`, `drift`

### Built-in Animations

`flip` — FLIP animation for list reordering.

### Easing

Import from `'houxit/easings'`: `linear`, `ease`, `easeIn`, `easeOut`, `easeInOut`, `cubicIn`, `cubicOut`, `cubicInOut`, `quartIn`, `quartOut`, `quartInOut`, `quintIn`, `quintOut`, `quintInOut`, `sineIn`, `sineOut`, `sineInOut`, `expoIn`, `expoOut`, `expoInOut`, `circIn`, `circOut`, `circInOut`, `backIn`, `backOut`, `backInOut`, `bounceIn`, `bounceOut`, `bounceInOut`, `elasticIn`, `elasticOut`, `elasticInOut`, `spring`, `springSoft`, `springHeavy`, `anticipate`, `overshoot`, `recoil`, `snap`, `smoothstep`, `smootherstep`, `stepStart`, `stepEnd`.

**`cubicBezier`:**

```js
import { cubicBezier } from 'houxit';
const ease = cubicBezier(0.55, 0.085, 0.68, 0.53);
const ease = cubicBezier('cubic-bezier(0.55, 0.085, 0.68, 0.53)');
```

**`createEasing`:**

```js
import { createEasing } from 'houxit';

const awakeIn = createEasing({
  name: 'awakeIn',
  css: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  fn(t) { /* custom function */ }
});
```

---

# Part VI — Ecosystem & Extension

## 32. Plugin System

A plugin is an interface that reduces repeating of some global implementation on a build and helps create code that improves reusability.

A plugin can be defined using an object with just a `plugin` method, or a function which acts as the plugin method itself.

A plugin is installed by calling the `install` method on the `initBuild` instance:

```js
import { initBuild } from 'houxit';
import buttonCounter from './widgets/buttonCounter.houxit';

const my_plugin = {
  plugin(build, options) {
    build.widget('buttonCounter', buttonCounter);
    // a plugin can also contain other complex computations on the widget instance
  }
};

function FuncPlugin(build, options) {
  // plugin scope
}

initBuild(app)
  .install(my_plugin, { /* config options */ })
  .install(FuncPlugin);
```

Plugin installation can be chained alongside other global methods, since they still return an instance of the build, with the exception of the `mount` method which must be called last.

### Custom Options with `app.controller`

```js
app.controller({
  optionsRegistry: {
    permissions: Array,
    onReady: Function
  },
  setupAdapter(app, optionsHook) {
    optionsHook('permissions', function(instance, permissions) {
      instance.$can = (action) => permissions.includes(action);
    });
  }
});
```

---

## 33. Built-in Widgets

All built-in widgets use the `hx:` namespace in templates (`<hx:if>`) or their PascalCase name in JSX (`<If>`).

### `<hx:build />`

**Global NameSpace:** `Build`

**Params:** `self` (required)

A built-in widget useful for rendering widgets dynamically. Accepts one required param, the `self` param, which describes a native/resolved custom element tag name or an internally registered widget name.

If bound to a model property from the template or accessed using the hyperscript `this`, it will raise a Houxit warning since the Houxit model instances are proxied objects/data — except the data was parsed using the `rawData` function or the `shallowToken` macro:

```js
import { raw } from 'houxit';

export default {
  model() {
    this.inModelWidget = raw({
      template: `<h1>Hello Houxit!</h1>`
    });
  },
  template: `
    <hx:build *self=inModelWidget />
  `
}
```

> **Note:** Does not require binding if the name being passed is not an in-model instance property.

The widget can be accessed from the template as `hx:build` but can be imported from Houxit itself as `Build` while using the hyperscript building system.

Other properties/attributes passed to the `hx:build` widget, except the `self` param, will be resolved as attributes/properties of the returned element. Children passed to `hx:build` will be passed to the resolved element/widget, including the defined slots within the defined widget template.

### `<hx:fragment />`

**Global NameSpace:** `Fragment`

`hx:fragment` is a built-in widget used to render a set of elements without having to wrap them within an enclosing tag/element. This is technically useful, especially when rendering slot content and you do not want to get them wrapped within an enclosing wrapper element:

```html
<ButtonCounter>
  <hx:fragment $$slot='content'>
    <h1>This is a counter button</h1>
    <p>Click on me</p>
    Thanks
  </hx:fragment>
</ButtonCounter>
```

The `hx:fragment` expects/requires no params. Available from the global Houxit as `Fragment` if need be of compiling it using the `h` render and hyperscript functions.

### `<hx:if />` / `<hx:else-if />` / `<hx:else />`

**Props:** `test` — the condition. Must be lazy in `h()`: `{ test: () => isReady }`.

```html
<hx:if *test="isReady">
  <Dashboard />
  <hx:else-if *test="isLoading" />
  <Spinner />
  <hx:else />
  <ErrorView />
</hx:if>
```

### `<hx:for />`

Widget-level list rendering. Child is a render function receiving `(value, key, index)`.

### `<hx:suspense />`

**Global NameSpace:** `Suspense`

Async boundary widget. Tracks all async dependencies in its default slot.

### `<hx:memo />`

**Global NameSpace:** `Memo`

Keeps a single widget instance alive across conditional renders.

### `<hx:portal />`

**Global NameSpace:** `Portal`

Renders children into a different DOM location while keeping them logically part of the current widget tree.

### `<hx:motion />`

**Global NameSpace:** `Motion`

Applies a transition or animation to each root HTML element found among its children independently.

### `<hx:provider />`

**Global NameSpace:** `Provider`

A headless context boundary widget. Transmits values to its entire subtree without rendering a DOM element of its own.

### `<hx:self />`

Renders the current widget recursively.

### `<hx:markup />`

**Global NameSpace:** `Markup`

---

## 34. Utility Functions

### `withDirectives()`

```js
function withDirectives(Attributes, Directives)
```

Helpers function that provides the use of directives within the hyperscript interface.
.

### `token()`

```js
function token(DataValue)
```

Creates a reactive reference.

### `deferTick()`

```js
function deferTick(Callback, TimeOut)
```

`deferTick` waits for the DOM to re-render after mutating a model property before being called:

```js
let { deferTick } = Houxit;

export default {
  model() {
    this.count = 34;
  },
  postMount() {
    this.count += 34;
    deferTick(() => {
      // this callback will wait till the above mutation is done
      // with its DOM re-rendering before being triggered
    });
  }
}
```

### `html<BackTicks>`

```js
function htx`BacktickString`
```

### `AsyncWidget()`

```js
function AsyncWidget(Widget)
```

This functionality can be achieved by setting the async setting to false in the `buildConfig` option.

### `defineWidget()`

```js
function defineWidget(Widget)
```

Used in resolving and officially defining a widget.

### `createCustomElement()`

```js
function createCustomElement(Options)
```

Component used in defining custom elements. Accepts only an object parameter with options.

### Other Utilities

| Function | Purpose |
|---|---|
| `VNode()` | VNode creation |
| `mapFor()` | Mapping utility |
| `h()` | Hyperscript |
| `initBuild()` | App entry point |
| `initSSRBuild()` | SSR entry point |
| `ref()` | Ref utility |
| `initAsyncBuild()` | Async build init |
| `defineElement()` | Element definition |
| `markup()` | Markup utility |
| `extend()` | Extension utility |
| `$scarfold()` | Scaffold utility |
| `renderSlots()` | Slot rendering |
| `$expose()` | Exposure utility |
| `postBuild()` | Lifecycle macro |
| `postMount()` | Lifecycle macro |
| `preMount()` | Lifecycle macro |
| `postDestroy()` | Lifecycle macro |
| `preDestroy()` | Lifecycle macro |
| `preUpdate()` | Lifecycle macro |
| `postUpdate()` | Lifecycle macro |

### `tick(callback?)`

```js
import { tick } from 'houxit';

async function updateAndRead() {
  count.data++;
  await tick();
  // DOM is now up to date
  console.log(this.$refs.counterEl.textContent);
}
```

### `escapeDecoder(string)` / `escapeReverseDecoder(string)`

Escapes/unescapes HTML entities.

### `mergeProps(...propsObjects)`

Merges multiple props objects with Houxit's merge semantics.

### `HTMLPropsParser(attributeString)`

Parses a raw HTML attribute string into a plain JavaScript object.

### `markRaw(value)` / `isRaw(value)`

Marks an object as permanently non-reactive.

### `memMove(value, deep?)`

Creates a copy of a non-primitive value.

### `validateType(value, type)`

The type validation function used internally by Houxit's params system.

### `Type`

Base class for creating custom type validators.

### `Tuple`

A unique data structure combining Set uniqueness with Array ordered indexing.

### `tokenGENERATOR(options?, validator?)` / `generateUUID(options?)`

Generates unique UUID strings.

### `to_kebab_case(string)` / `toCamelCase(string)` / `ToPascalCase(string)`

String case conversion utilities.

### `scaffold(templateString, context)`

Renders a template string with a plain context object.

### `createVNode(descriptor)`

Object-based alternative to `h()`.

### `cloneVElement(vnode, extraProps?)`

Creates a shallow copy of an existing VNode.

### `isNativeElement(value)`

Returns `true` if the value is a native DOM node.

### `cubicBezier(...)` / `createEasing(descriptor)`

Animation easing utilities.

### `HTMLParser(templateString)` / `MKDParser(markdownString)`

Internal parsers for template and Markdown processing.

---

## 35. Custom Elements & Web Components

### The Case for Web Components

Web Components are the right distribution format when the consumer is unknown. When you are building a UI widget kit for a bank, a design system for a multi-team enterprise, or a reusable component for the open web, Web Components give your output a longer shelf life than any framework-specific format.

Houxit's position is that you should author in the style that gives you the best experience — Houxit widgets, full API, full reactive system — and let the compiler determine the output format. `createCustomElement` is that compiler step.

### Creating a Custom Element

```js
import { createCustomElement } from 'houxit';
import MyButton from './MyButton.houxit';

const Element = createCustomElement(MyButton);

// register with Houxit's helper
Element.define('my-button');

// or use the native Custom Elements API directly
customElements.define('my-button', Element);
```

### WUF Custom Element Files

When a WUF file is intended for use as a custom element, name it with the `.ce.houxit` extension:

```
src/
└── elements/
    ├── my-button.ce.houxit
    ├── data-table.ce.houxit
    └── toast-message.ce.houxit
```

Houxit treats `.ce.houxit` files differently:

1. **CSS handling** — styles are extracted and bundled separately.
2. **Build output** — the default export is automatically wrapped in `createCustomElement`.
3. **Naming** — the filename (kebab-cased) is used as the element tag name by default.

### CSS Handling

**Shadow DOM mode (default):**

```js
const Element = createCustomElement(MyWidget, {
  shadowMode: 'open'   // or 'closed'
});
```

**Light DOM mode:**

```js
const Element = createCustomElement(MyWidget, {
  shadowMode: false
});
```

### Params as Attributes and Properties

```html
<!-- attribute — string values only -->
<user-card name="Ada Lovelace" role="Engineer"></user-card>

<!-- property — any JS value via DOM -->
<script>
  const card = document.querySelector('user-card');
  card.avatarUrl = '/images/ada.jpg';
</script>
```

### Signals as Custom Events

```js
document.querySelector('user-card').addEventListener('select', (event) => {
  console.log(event.detail);
});
```

### Lifecycle Mapping

| Custom Elements callback | Houxit lifecycle |
|---|---|
| `constructor` | `preBuild` |
| `connectedCallback` | `preMount` → `postMount` |
| `disconnectedCallback` | `preDestroy` → `postDestroy` |
| `attributeChangedCallback` | Reactive param update → `preUpdate` → `postUpdate` |
| `adoptedCallback` | No direct equivalent |

### Houxit Widget vs Custom Element

|  | Houxit Widget | Custom Element |
|---|---|---|
| Runtime requirement | Houxit | None — native browser API |
| Authoring model | Full Houxit API | Full Houxit API (same) |
| Reactivity | Houxit fine-grained | Houxit fine-grained |
| Styling | Scoped, merged into global CSS | Inline Shadow DOM or injected |
| Props | Params — any JS type | Attributes (string) + properties (any) |
| Events | Signals + events channel | CustomEvent dispatched on element |
| Slots | Houxit slot system | Native Shadow DOM slots |
| SSR | Full Houxit SSR | Declarative Shadow DOM (in progress) |
| Cross-framework use | Houxit only | Any framework or no framework |
| Bundle size | Shared Houxit runtime | Houxit runtime embedded per element |
| Best for | Within a Houxit application | Design systems, widget kits, open distribution |

---

## 36. Server-Side Rendering (SSR)

### The Core Model

```
Server                          Client
──────                          ──────
createApp()                     createApp()
    ↓                               ↓
renderToString(app)             app.hydrate()
    ↓                               ↓
HTML string → HTTP response     Attaches reactivity to existing DOM
```

### Setting Up a Universal App

```js
// src/app.js
import { initSSRBuild } from 'houxit';
import App from './App.houxit';

export function createApp() {
  return initSSRBuild(App)
    .widget('Card', Card)
    .install(RouterPlugin, { history: 'memory' })
    .transmit({ config: appConfig });
}
```

### Server Entry

```js
// src/entry-server.js
import { renderToString } from 'houxit';
import { createApp } from './app.js';

export async function render(url) {
  const app = createApp();
  app.router?.push(url);
  const html = await renderToString(app);
  return html;
}
```

### Client Entry

```js
// src/entry-client.js
import { createApp } from './app.js';

const app = createApp();
app.hydrate();
// app.mount('#app')  // equivalent
```

### Streaming Render APIs

| Function | Output | Use case |
|---|---|---|
| `renderToString(app)` | `Promise<string>` | General SSR — waits for full tree |
| `renderToNodeStream(app)` | Node.js Readable | Node.js streaming response |
| `renderToNodeWritable(app, writable)` | void | Pipe into Node.js Writable |
| `renderToWebStream(app)` | Web ReadableStream | Edge / Cloudflare / Deno |
| `renderToWebWritable(app, writable)` | void | Pipe into Web WritableStream |
| `renderToSimpleStream(app, cbs)` | void | Callback-based streaming |

### Hydration Mismatch

```js
export default {
  buildConfig: {
    allowHydrationMismatch: false   // default — throws on mismatch
  }
}
```

---

## 37. Routing

### The Core Idea

A route is nothing more than a mapping from a path to a widget, and a reactive value tracking the current path:

```js
import { token, computed } from 'houxit';
import Home from './pages/Home.houxit';
import About from './pages/About.houxit';

const routes = {
  '/': Home,
  '/about': About
};

const currentPath = token(window.location.pathname);
const currentWidget = computed(() => routes[currentPath.data] ?? null);
```

```html
<hx:build *self="currentWidget.data" />
```

### Houxit Router — Official Package

```js
import Houxit from 'houxit';
import { buildRouter } from '@houxit/router';
import App from './App.houxit';
import Home from './pages/Home.houxit';
import About from './pages/About.houxit';
import PostDetail from './pages/PostDetail.houxit';

const router = buildRouter({
  routes: [
    { path: '/', name: 'home', widget: Home },
    { path: '/about', name: 'about', widget: About },
    { path: '/posts/:id', name: 'post', widget: PostDetail }
  ]
});

Houxit.initBuild(App)
  .install(router)
  .mount('#app');
```

**Usage:**

```html
<script build>
  import { useRouter } from '@houxit/router';
  const router = useRouter();
</script>

<template>
  <nav>
    <a href="/" @click.prevent="router.push('/')">Home</a>
    <a href="/about" @click.prevent="router.push('/about')">About</a>
  </nav>
  <hx:view />
</template>
```

---

## 38. Internationalization (I18n)

### Installation

```bash
npm install @houxit/i18n
```

```js
import Houxit from 'houxit';
import I18nPlugin from '@houxit/i18n';
import App from './App.houxit';

Houxit.initBuild(App)
  .install(I18nPlugin, {
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: () => import('./locales/en.json'),
      fr: () => import('./locales/fr.json'),
      ar: () => import('./locales/ar.json')
    }
  })
  .mount('#app');
```

### Using I18n — Adapter API

```html
<script build>
  import { useI18n } from '@houxit/i18n';
  const { t, locale, setLocale, locales } = useI18n();
</script>

<template>
  <div>
    <p>{{ t('greeting', { name: user.name }) }}</p>
    <p>{{ t('cart.items', { count: cartCount }) }}</p>
    <select $$model="locale" @change="setLocale(locale.data)">
      <option $$for="code of locales" *key="code" *value="code">
        {{ code }}
      </option>
    </select>
  </div>
</template>
```

### Using I18n — Options API

```js
export default {
  handlers: {
    changeLanguage(code) {
      this.$setLocale(code);
    }
  },
  postMount() {
    console.log(this.$t('greeting', { name: 'Ada' }));
    console.log(this.$locale);
  }
}
```

### Number and Date Formatting

```js
const { t, n, d } = useI18n();
```

```html
<p>{{ n(price, { style: 'currency', currency: 'NGN' }) }}</p>
<p>{{ d(order.placedAt, { dateStyle: 'medium' }) }}</p>
```

### Colocating Translations in WUF Files

```html
<i18n>
{
  "en": {
    "title": "Welcome back",
    "subtitle": "Here's what changed since your last visit."
  },
  "fr": {
    "title": "Content de vous revoir",
    "subtitle": "Voici ce qui a changé depuis votre dernière visite."
  }
}
</i18n>

<template>
  <h2>{{ $t('title') }}</h2>
  <p>{{ $t('subtitle') }}</p>
</template>
```

### RTL and `lang` Attribute Handling

Houxit I18n automatically manages `document.documentElement.lang` and `document.documentElement.dir`.

---

## 39. Global State Management

### The Pattern

Houxit does not currently require a separate state management library. `stream` — the same primitive you use for local widget state — is a fully capable global store the moment you export it from a plain module:

```js
// src/stores/cart.js
import { stream } from 'houxit';

export const cart = stream({ items: [] });

export function addToCart(product) {
  const existing = cart.items.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.items.push({ ...product, qty: 1 });
  }
}

export function removeFromCart(productId) {
  const index = cart.items.findIndex(i => i.id === productId);
  if (index !== -1) cart.items.splice(index, 1);
}
```

### Encapsulating the Store

```js
// src/stores/cart.js
import { stream, readonlyStream, computed } from 'houxit';

const state = stream({ items: [] });

function addToCart(product) {
  const existing = state.items.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    state.items.push({ ...product, qty: 1 });
  }
}

function removeFromCart(productId) {
  const index = state.items.findIndex(i => i.id === productId);
  if (index !== -1) state.items.splice(index, 1);
}

function clearCart() {
  state.items.splice(0, state.items.length);
}

export const cartStore = {
  state: readonlyStream(state),
  itemCount: computed(() => state.items.reduce((sum, i) => sum + i.qty, 0)),
  total: computed(() => state.items.reduce((sum, i) => sum + i.price * i.qty, 0)),
  addToCart,
  removeFromCart,
  clearCart
};
```

### The Road Ahead

Houxit plans an official, first-party state management framework built directly on `stream`: **StreamX**. The intent is to take the conventions of encapsulated stores, computed selectors, and action-only mutation, and formalize them with dedicated tooling: devtools integration, time-travel debugging, structured module registration.

Until StreamX ships, the patterns above are the recommended approach, not a stopgap.

---

## 40. Mixins

> **Note:** Mixins are fully supported in Houxit and there is no plan to remove them. However, for everyday sharing of logic across widgets, Houxit's recommendation is to use the Adapter API's composable functions instead. Mixins exist primarily because developers arriving from mixin-based systems expect the pattern to be available.

### Local Mixins

```js
// LoadingMixin.js
export const LoadingMixin = {
  model() {
    this.isLoading = false;
  },
  handlers: {
    startLoading() { this.isLoading = true; },
    stopLoading() { this.isLoading = false; }
  }
};

import { LoadingMixin } from './LoadingMixin.js';

export default {
  mixins: [LoadingMixin],
  async postMount() {
    this.startLoading();
    await fetchData();
    this.stopLoading();
  }
}
```

### Global Mixins

```js
app.mixin({
  postMount() {
    console.log(`[${this.$name}] mounted`);
  }
});
```

### Merge Strategy

| Option type | Behavior |
|---|---|
| `build`, `render`, `template` | Cannot be duplicated — widget's own definition wins |
| Lifecycle hooks | Both called — mixin hooks fire before the widget's own |
| `model`, `handlers`, `observers` | Merged — widget's properties take precedence |
| `params`, `signals`, `slots` | Merged — widget's declarations take precedence |
| `widgets`, `directives`, `filters` | Merged — widget's registrations take precedence |

### Converting a Mixin to an Adapter

```js
// Before — a mixin
export const ClickOutsideMixin = {
  model() {
    this.isOpen = false;
  },
  handlers: {
    close() { this.isOpen = false; }
  },
  postMount() {
    document.addEventListener('click', this._handleOutside);
  },
  preDestroy() {
    document.removeEventListener('click', this._handleOutside);
  }
};

// After — an adapter
import { token, postMount, preDestroy, useRef } from 'houxit';

export function useClickOutside() {
  const isOpen = token(false);
  const targetRef = useRef('clickOutsideTarget');

  function close() {
    isOpen.data = false;
  }

  function handleOutside(event) {
    if (targetRef.data && !targetRef.data.contains(event.target)) {
      close();
    }
  }

  postMount(() => document.addEventListener('click', handleOutside));
  preDestroy(() => document.removeEventListener('click', handleOutside));

  return { isOpen, close, targetRef };
}
```

---

# Part VII — API Reference

## 41. Widget Options Reference

| Option | Type | Purpose |
|---|---|---|
| `name` | String | Widget display name |
| `build` | Function | Adapter API bridge |
| `model` | Function | Raw state declaration |
| `computed` | Object | Derived reactive values |
| `params` | Array / Object | Declared props |
| `signals` | Array | Declared emitted events |
| `slots` | Array | Declared named slots |
| `handlers` | Object | Instance methods |
| `observers` | Object | Declarative watchers |
| `widgets` | Object | Local widget registration |
| `directives` | Object | Local directive registration |
| `filters` | Object | Local filter registration |
| `blocks` | Object | Local block registration |
| `templateClasses` | Object | Local Template Class registration |
| `animations` | Object | Local animation registration |
| `transitions` | Object | Local transition registration |
| `tokenRefs` | Array | Template ref declarations |
| `transmit` | Function | Subtree data provision |
| `receive` | Array / Object | Injected values from ancestors |
| `context` | Function | Slot-consumer data exposure |
| `mixins` | Array | Mixin application |
| `buildConfig` | Object | Per-widget config overrides |
| `template` | String | Inline template string |
| `render` | Function | Render function |
| `markdown` | String | Markdown content |
| `styles` | String | Scoped inline styles |
| `install` | Function | One-time widget-type setup |
| `preBuild` | Function | Before build phase |
| `postBuild` | Function | After build phase |
| `preMount` | Function | Before DOM creation |
| `postMount` | Function | After DOM insertion |
| `preUpdate` | Function | Before reactive DOM patch |
| `postUpdate` | Function | After reactive DOM patch |
| `preDestroy` | Function | Before unmount |
| `postDestroy` | Function | After unmount |
| `onCatch` | Function | Error boundary hook |
| `onSlotRender` | Function | Slot render notification |
| `bindDrivers` | Array | Two-way binding shortcuts |

---

## 42. `buildConfig` Settings

| Setting | Type | Default | Purpose |
|---|---|---|---|
| `debug` | Boolean | `false` | Silence all error and debug warns within an individual widget |
| `forwardAttrs` | Boolean | `true` | Toggle attribute inheritance when a widget has a single root element |
| `forwardSlot` | Boolean | `true` | Toggle slot content fallthrough to root element |
| `forwardEvents` | Boolean | `true` | Toggle event fallthrough |
| `scopedStyle` | Boolean | `true` | Enable/disable automatic style scoping |
| `delimiters` | Array | `["{{", "}}"]` | Customize template mustache delimiters |
| `async` | Boolean | `false` | Build widget asynchronously |
| `allowHydrationMismatch` | Boolean | `false` | Allow hydration mismatches without throwing |

---

## 43. App Instance API

`initBuild()` returns a `HouxitBuild` instance — the application handle. Every method returns the same instance, making the API fully chainable. **`.mount()` must always be called last.**

```js
import { initBuild } from 'houxit';
import App from './App.houxit';

initBuild(App)
  .widget('Card', Card)
  .directive('focus', focusDirective)
  .filter('currency', currencyFilter)
  .transmit({ theme: appTheme })
  .install(RouterPlugin, { history: 'hash' })
  .mount('#app');
```

| Method | Purpose | Returns |
|---|---|---|
| `.widget(name, def)` | Register widget globally | `HouxitBuild` |
| `.directive(name, def)` | Register directive globally | `HouxitBuild` |
| `.filter(name, def)` | Register filter globally | `HouxitBuild` |
| `.templateClass(name, def)` | Register Template Class globally | `HouxitBuild` |
| `.mixin(mixin)` | Apply mixin to all widgets | `HouxitBuild` |
| `.transmit(object)` | Provide values app-wide | `HouxitBuild` |
| `.property(name, value)` | Define property on all instances | `HouxitBuild` |
| `.install(plugin, opts?)` | Install a plugin | `HouxitBuild` |
| `.configOptions(object)` | Bulk configuration | `HouxitBuild` |
| `.configDebug(bool)` | Toggle development warnings | `HouxitBuild` |
| `.configForwardAttrs(bool)` | Global attr fallthrough setting | `HouxitBuild` |
| `.configForwardSlot(bool)` | Global slot fallthrough setting | `HouxitBuild` |
| `.configDelimiter([o, c])` | Override interpolation delimiters | `HouxitBuild` |
| `.mount(target)` | Mount the app — call last | Widget instance |
| `.unmount()` | Unmount and clean up | void |

---

## 44. Adapter API Reference

All functions available from `'houxit'`:

```js
import {
  // Core reactive primitives
  token, stream, computed,

  // Shallow and readonly variants
  shallow, shallowStream,
  readonly, readonlyStream,
  shallowReadonly, shallowReadonlyStream,

  // Value utilities
  toToken, unToken, unwrap, read,

  // Effects
  observe, effectHook, onTracked, trackEffectDeps,

  // Advanced reactivity
  Token, factoryToken,
  agent, useAgent,
  mountToken, mountStream, mountEffect,

  // Type checks
  isToken, isStream, isComputed,
  isReadonly, isShallow, isShallowReadonly,
  isReadonlyStream, isShallowReadonlyStream,

  // Lifecycle hooks
  preBuild, postBuild,
  preMount, postMount,
  preUpdate, postUpdate,
  preDestroy, postDestroy,
  onCatch, onSlotRender, onSlotEffect,

  // Widget interface
  defineParams, defineSlots, defineSignals,
  useModel, useOptions, useContext,
  useTokenRef, useStyleSheet,

  // Provide / receive
  useTransmit, useReceiver,

  // Configuration
  defineConfig,

  // Utilities
  resolve
} from 'houxit';
```

> **Scope rule:** With the exception of `token` and `stream`, all adapter API hooks must be called synchronously inside a build scope — a `<script build>` block, a `build()` method, or an adapter function whose synchronous call chain traces back to one. Houxit uses the call stack to locate the active widget instance and bind effects, lifecycle hooks, and reactive state to it. Calls outside that chain throw.

---

## 45. Widget Instance (`this.$`) API

Inside lifecycle hooks, `handlers`, the `render` method, and `<script render>`, `this` refers to the current widget's public instance.

| Property / Method | Type | Purpose |
|---|---|---|
| `this.$observe(deps, cb, opts?)` | Method | Instance-bound observer, auto-cleaned on unmount |
| `this.$effectHook(cb, opts?)` | Method | Instance-bound effect, auto-cleaned on unmount |
| `this.$useAgent(path)` | Method | Getter/setter pair for a reactive dot-path |
| `this.$write(path, value)` | Method | Deep reactive write at a dot-path |
| `this.$trackEffectDeps(fn)` | Method | Dry-run effect to collect reactive dependencies |
| `this.$pushEffect()` ⚠️ | Method | Force scheduler flush — deprecated |
| `this.$attrs` | Object | Undeclared attributes from parent |
| `this.$signals` | Object | Declared signal emitters |
| `this.$events` | Object | Undeclared event listeners from parent |
| `this.$refs` | Object | Template refs — DOM elements and widget instances |
| `this.$el` | Element | Root DOM element (available after `postMount`) |
| `this.$parent` | Instance / null | Parent widget instance |
| `this.$root` | Instance | Root application widget instance |
| `this.$name` | String | Widget display name |

---

## 46. Directives Quick Reference

| Directive | Shorthand | Purpose |
|---|---|---|
| `$$if="expr"` | — | Conditional element rendering |
| `$$else-if="expr"` | — | Else-if branch |
| `$$else` | — | Fallback branch |
| `$$for="item of list"` | — | List rendering |
| `$$bind:key="expr"` | `*key="expr"` | Attribute / property binding |
| `$$on:event="handler"` | `@event="handler"` | Event listener |
| `$$model="expr"` | — | Two-way form binding |
| `$$text="expr"` | — | Reactive text content |
| `$$html="expr"` | — | Raw HTML content |
| `$$raw` | — | Skip child compilation |
| `$$slot:name="val"` | `#name="val"` | Slot declaration / usage |
| `$$animate:fn="params"` | — | Continuous looping animation |
| `$$transite:fn="params"` | — | Enter/leave transition |
| `$$provide="{ ... }"` | — | Expose widget context to consumers |
| `$$scoped` | — | Scope an inline `<style>` |

### Event Modifiers

| Modifier | Effect |
|---|---|
| `.prevent` | `event.preventDefault()` |
| `.stop` | `event.stopPropagation()` |
| `.once` | Remove listener after first fire |
| `.self` | Only fire if target is element itself |
| `.capture` | Attach in capture phase |
| `.passive` | Mark listener as passive |
| `.trim` | Trim input value before handler |
| `.number` | Coerce input value to number |

### Key Modifiers

| Alias | Key(s) captured |
|---|---|
| `.enter` | Enter |
| `.tab` | Tab |
| `.delete` | Delete + Backspace |
| `.esc` | Escape |
| `.space` | Space |
| `.up` | ArrowUp |
| `.down` | ArrowDown |
| `.left` | ArrowLeft |
| `.right` | ArrowRight |

---

## 47. Best Practices

As you dive deeper into Houxit, consider adopting best practices to ensure clean and maintainable code:

- **Modular Widgets:** Break down your UI into small, reusable widgets.
- **Effective Naming:** Use clear and meaningful names for model properties, widgets, block helpers, directives, plugins, agents, and handlers. Widget files should use PascalCase. Custom element files should use kebab-case with `.ce.houxit`. Adapters should be prefixed with `use`.
- **Reactive Data Usage:** Leverage reactive data for efficient UI updates. Use `token` for scalars, `stream` for objects/arrays.
- **Observer Methods:** Use observer methods for data changes that require specific customized reactions.
- **Key Your Lists:** Always provide `*key` for `$$for` loops for efficient reconciliation.
- **Keep Bound Expressions Cheap:** Move real computation into `computed` values.
- **Use Shallow Reactivity Wisely:** Use `shallow`/`shallowStream` for large, rarely-deep-mutated data.
- **Use `markRaw` for Static Data:** Large static datasets and third-party instances should be wrapped in `markRaw`.
- **Prefer CSS/WAAPI Motion Tiers:** Reserve `frame` for cases that genuinely need imperative per-frame DOM access.
- **Respect `prefers-reduced-motion`:** In every custom motion function.
- **Default to Scoped Styles:** Let Houxit's automatic scoping do its job.
- **Document Adapters:** Every adapter's documentation should state that it must be called synchronously in a build scope.
- **Declare Param Types:** Always declare a type, even when not required. Mark required params explicitly.
- **Never Mutate Params:** If you need to derive local mutable state from a param, snapshot it into a token at setup time.

---

## Conclusion

Congratulations! You have learned the basics of using Houxit to empower your creativity and build web apps with speed. You now know how to define widgets, use template strings, handle methods and reactive data, bind attributes, customize and apply directives, and render your UI widgets.

Additionally, you have explored advanced features like params, custom elements, observers, template block helpers, plugins, slots, agents, and some useful configuration options.

Houxit offers a powerful and flexible framework for developing dynamic and interactive web applications. Remember to consult the official Houxit documentation and explore the additional resources for more in-depth information and examples.

---

## Additional Resources

To further expand your knowledge and explore more advanced features of Houxit, check out the following resources:

- **Official Houxit Documentation:** https://houxit-docs.com
- **Houxit GitHub Repository:** https://github.com/houxersoftwares/houxerjs
- **Houxit Community Forum:** https://community.houxit.com

These resources provide comprehensive documentation, examples, and a supportive community to help you make the most of Houxit in your projects. Happy coding!
