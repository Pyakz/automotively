# Automotively

## Overview
Build a simple React App with the following pages for a hypothetical automotive company.

## Instructions
- You are required to push your project source code to Github for evaluation.
- You are required to deploy the project to Vercel/Netlify or any other hosting provider of choice.
- You are required to make your submission here before Saturday 25th March 2023 5pm Central Daylight Time (GMT-5).

## Table of Contents
- [Installation](#installation)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)


## Installation

To install and run this project, follow these steps:

1. Clone the repository: `git clone https://github.com/pyakz/automotively.git`
2. Install dependencies: `yarn install`
3. Start the development server: `yarn dev`

## Technologies

- [Vite](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [Husky](https://typicode.github.io/husky/#/?id=install)

## Folder Structure

Here is an overview of the project's folder structure:

- `__tests__`: Contains test files.
- `assets`: Contains static assets such as images, fonts, and stylesheets.
- `components`: Contains reusable components.
- `stores`: Contains all the zustand stores.
- `modules`: Contains the main functionality of the application, any new modules will be included here
    - `nav`: Anything that involves navigation is in here.
    - `vehicles`: Contains the pages and components for the vehicles section.
- `utils`: Contains helper functions, constants, types, and other utilities.
    - `data.ts`: Mock vehicles data
    - `type.d.ts`: Some types that are used and will be used on many sections, put it here.


## Contributing
To contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a branch for your feature or bug fix: `git checkout -b my-feature`
3. Make changes and commit them: `git commit -am "Add new feature"`
4. Push to the branch: `git push origin my-feature`
5. Create a pull request.
6. Check if all tests passed
7. Merge PR

