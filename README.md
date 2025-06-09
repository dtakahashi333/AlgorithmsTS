# AlgorithmTS

## TypeScript setup

### Install TypeScript

```bash
npm install --save-dev typescript
npx tsc --init
```

### Compile TypeScript

```bash
npx tsc
```

## Set up TypeScript Lint

### Install ESLint for TypeScript

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### Create ESLint Config

Run the following command to start an interactive setup with the following options.

```bash
npx eslint --init
```

- What do you want to lint? -> javascript
- How would you like to use ESLint? -> problems
- What type of modules does your project use? -> esm
- Which framework does your project use? -> none
- Does your project use TypeScript? -> yes
- Where does your code run? -> node
- Would you like to install them now? -> Yes
- Which package manager do you want to use? -> npm

Or create the `eslint.config.mjs` in the project root directory, and copy/paste the folloing configuration.

```json
{
  "project": "./tsconfig.json",
  "tsconfigRootDir": ".",
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    // Customize rules here
  }
}
```

You can use `.eslintignore` to exclude files and directories.

```nginx
node_module
dist
```

## Set up Jest for TypeScript

### Install Jest

```bash
npm install --save-dev jest ts-jest @types/jest
```

### Initialize Jest with ts-jest

```bash
npx ts-jest config:init
```