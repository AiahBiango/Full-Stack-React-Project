# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## This project depends on:

Node.js v24.13.0
Git v2.52.0
Visual Studio Code v1.108.2
Docker v4.57.0.0
Mongodb and mongosh (mongodb shell)

## We created React project with

npm create vite
npm is node package manager
npx allows us to execute commands provided by npm

## For best practices we use

"Prettier" for code formating
"ESLint" to enforce Js and React best practices
"Husky" and "lint-staged" to make sure we commit proper code
"Mongoose" for working with Mongodb
"Express" for working http api
"Jest" to write and run unit test for services functions
"mongodb-memory-server" to spin up a fresh instance of MongoDB database, storing data only in memory
