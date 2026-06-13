# 🌐 WebDev MERN & SQL - Complete Study Repository

Welcome to the ultimate learning and practice repository for Full-Stack Web Development! This repository documents my journey and progress through frontend basics, modern JavaScript, backend engineering with Node.js and Express, relational and non-relational database management, and building rich, state-managed applications using React and Redux.

---

## 🛠️ Tech Stack & Key Concepts

| Category | Technologies / Concepts Covered |
| :--- | :--- |
| **Frontend** | HTML5 (Semantic, Forms, Tables), CSS3 (Flexbox, Grid, Animations), Bootstrap, Tailwind CSS |
| **JavaScript** | ES6+ syntax, Async/Await, DOM manipulation, DOM Events, OOP in JS (Classes, Prototypes) |
| **Backend** | Node.js, Express.js, EJS (Embedded JavaScript templates), RESTful APIs, Express Middleware, Router, Cookies |
| **Databases** | SQL (MySQL schema, queries, Node integration), MongoDB (Mongoose schemas, validations, relationships) |
| **State Management** | React (Hooks, state lifting, controlled forms), Redux Toolkit (RTK store, slices, selectors) |

---

## 📂 Repository Structure & Progression

Below is a detailed guide to what is practiced and built within each directory of this repository:

### 🎨 Frontend Design & Layouts
*   **[HTML](./HTML)**: Basic structure, semantic tags, forms, tables, and a portfolio template.
*   **[CSS](./CSS)**: In-depth styling tutorials covering:
    *   Box Model, Typography, and Units (`em`, `rem`, etc.)
    *   Layouts using Flexbox and Grid
    *   Transitions, Animations, and 2D/3D Transforms
    *   Media Queries for responsive design
    *   *Mini Projects*: A stylish profile Card, custom smiley designs, and a Pet Adoption landing page.
*   **[Bootstrap](./Bootstrap)**: Responsive layouts using the Bootstrap grid, forms, navigation components, and cards.
*   **[Tailwind CSS](./Tailwind%20CSS)**: Modern styling workflow using utility-first classes, custom configuration files, and PostCSS integration.

### ⚡ JavaScript Core & DOM
*   **[JavaScript](./JavaScript)**: Complete programming fundamentals (variables, arrays, loops, objects, functions), along with:
    *   **DOM Manipulation**: Dynamic styling, selecting elements, and creating elements programmatically.
    *   **DOM Events**: Event listeners, `this` context, event bubbling, form events, and keyboard inputs.
    *   **Mini-Projects**: CLI & Web-based Guessing Games, and a DOM-based Todo application.
*   **[Miscellaneous/OOPS](./Miscellaneous/OOPS)**: Advanced JS concepts including prototype chains, constructor functions, classes, inheritance, and the `new` keyword.

### 🖥️ Backend Development (Node.js & Express)
*   **[NodeJS](./NodeJS)**: Working with Node CLI, modularization (`module.exports`), package management (`package.json`), and using directory-level npm packages (e.g., `Fruits`).
*   **[ExpressJS](./ExpressJS)**: Building local servers, setting up routes, handling dynamic route parameters, query parameters, and processing requests.
*   **[EJS](./EJS)**: Dynamic server-side rendering (SSR) using Embedded JavaScript templates. Covers templates, logic (conditionals/loops), layouts (header/footer partials), serving static files, and dynamic route queries (like a mock Instagram page).
*   **[REST](./REST)**: Building RESTful APIs with CRUD operations. Demonstrates standard route design, data listing, creating new records, and updating/deleting records (using `method-override`).

### 🛡️ Express & MongoDB Relationships
*   **[Middlewares](./Middlewares)**: Designing custom middleware, understanding `next()`, authentication checks, and custom error handling using an `ExpressError` wrapper class.
*   **[Routing](./Routing)**: Segregating routes using `express.Router()` for modularity, parsing cookies, and securing route access using signed cookies.
*   **[Relationships](./Relationships)**: Modeling MongoDB relations in Mongoose:
    *   **One-to-Few**: Storing references directly in the parent document.
    *   **One-to-Many**: Referencing child collections (e.g., Customers and Orders).
    *   **One-to-Squillions**: Scalable referencing models (e.g., Users and Posts).

### 🗄️ Database Management
*   **[SQL](./SQL)**: Relational database design. Includes writing schemas (`schema.sql`), executing queries, connecting Node.js with MySQL, and building a dynamic user CRUD application with SQL database persistence.
*   **[MongoDB](./MongoDB)**: Non-relational databases. Connects Mongoose with MongoDB, defines schemas, handles validation rules, and designs data models.
*   **[MongoExpress](./MongoExpress)**: A full-stack chat application that integrates Express, EJS templates, and Mongoose. Features database-persisted message history, message creation, edits, deletions, and robust error handling.

### ⚛️ Modern Web Frameworks (React & Redux)
*   **[React](./React)**: Vite-powered modular frontends:
    *   `basic-react-app`: Introduces components, JSX, properties (`props`), and modular styles.
    *   `amazon-cards`: A product card layout styling challenge.
    *   `react-state`: State management using the `useState` hook, event handlers, and UI synchronization.
    *   `board-game`: Multi-player state management (e.g., a Ludo Board).
    *   `todo-list`: Dynamic checklist tracker utilizing arrays/objects state updates.
    *   `lottery-game`: Custom components, helper functions, and logic separation.
    *   `form`: Controlled components, multi-input forms, and `useEffect` hooks fetching APIs (e.g., random jokes).
*   **[Redux](./Redux)**: Global state management. Implements Redux Toolkit (RTK) configured store, slices (e.g., `todoSlice`), actions, reducers, and integrates components with `useSelector` and `useDispatch`.

---

## 🚀 How to Run a Project

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/sahitya1903/webdev-MERN.git
    cd webdev-MERN
    ```
2.  **Navigate to a specific project folder** (e.g., EJS or React):
    ```bash
    cd React/todo-list
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start the server / development server**:
    *   *For Express/EJS apps*: `node index.js` (or `nodemon index.js` if installed)
    *   *For React apps*: `npm run dev`

---

## 📌 Status
**Active Progress (WIP)**  
This repository serves as a growing portfolio of web development skills and design paradigms, updated continuously as I learn and scale projects.

## 📜 License
This repository is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.
