import Vue from 'vue';
import axios from 'axios';

require('dotenv').config();
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create();
    }
});