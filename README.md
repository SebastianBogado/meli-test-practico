# Meli's tech exercise

## Requirements

Node version >= 8.0.0

To ease your life as a developer, use: 

- [nvm](https://github.com/creationix/nvm#installation)
- [React devtools](https://github.com/facebook/react-devtools#installation)
- [Redux devtools](http://extension.remotedev.io/#installation)


## Project setup

```
nvm use # to set node version, if you're using nvm
npm install
```


## Running the project

```
npm start
```

> :warning: Caveat: after SSR I lost the ability to reload changes made
 at the client app, so you need to restart the server to see changes.
 Meanwhile, when focusing on client development, you could run
 `npm run watch-client`, which opens a server at `localhost:8080` with
 HMR and all the shiny things.


## Pending tasks

- [ ] Remove Bootstrap (only used at the Header)
- [ ] Responsive design
- [ ] HMR when working with the server
- [ ] CSS variables with PostCSS
- [ ] Webpack build (concat, min, uglify, gzip)
- [ ] `npm run serve` build server side too before running the server
- [ ] Tests and coverage report
- [ ] Unify the functions that are used at each component to call the 
API (one defined at its container, and the other as a static method)
- [ ] Rethink SSR, at least to use to the most out of the SPA without
 needing to write again the same thing but for the server
- [ ] Use semantic attributes following http://schema.org/Product
- [ ] favicon
- [ ] Items API has mixed responsibilities of handling the requests and 
performing requests to Meli's API
- [ ] Error handling
