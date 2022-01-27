## Available Scripts

In the project directory, you can run:

### `npm install`

- Create a .env file in root dir
- Put this code -> GENERATE_SOURCEMAP=false
- Install gh-pages package with -> yarn add gh-pages
- change package.json

```json
"scripts": {
    "start": "react-scripts start",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

### `npm install`
