# stock-trader

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

This project employs Firebase as its database for storing and retrieving data. 
Create a .env file at the root of the project, if it doesn't already exist.

Add the following key to the .env file:

`VUE_APP_BASE_URL=Your_Firebase_BASE_URL`

Replace Your_Firebase_BASE_URL with the specific base URL of your Firebase project.

This configuration will enable the Vue.js application to communicate properly with Firebase for data read and write 
operations. Ensure to keep your Firebase credentials secure and refrain from sharing them publicly.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
