# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

This project uses `npm workspaces` as default monorepo architecture.

#### First clone the repo

```bash
git clone https://github.com/IamNaeto/motion-revive.git
```

#### Install all dependencies

```bash
npm install
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

# Commit Standards

## Branches

- **dev** -> pr this branch for everything `frontend` related
- **main** -> **dont touch** this branch, this is what is running in production.

## Contribution Guidelines

1. Clone the repo `git clone https://github.com/IamNaeto/motion-revive.git`.
2. Open your terminal & set the origin branch: `git remote add origin https://github.com/IamNaeto/motion-revive.git.web.git`
3. Pull origin `git pull origin dev`
4. Create a new branch for the task you were assigned to, eg `git checkout -b Frontend/Feat/Sign-Up-Form`
5. After making changes, do `git add .`
6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
7. To make sure there are no conflicts, run `git pull origin dev`.
8. Push changes to your new branch, run `git push -u origin Frontend/Feat/Sign-Up-Form`.
9. Create a pull request to the `dev` branch not `main`.
10. Ensure to describe your pull request.
11. > If you've added code that should be tested, add some test examples.

# Merging

Please under any circumstances should you merge a pull requests on a specific branch to the `dev` or `main` branch

