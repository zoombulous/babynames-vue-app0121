import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import awsconfig from './aws-exports';
import dotenv from 'dotenv';
import $ from 'jquery';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'
import vuetify from './plugins/vuetify';

global.Vue = Vue;

Vue.config.productionTip = false;
Vue.prototype.$http= axios;
Vue.use(
        AmplifyPlugin,
        AmplifyModules,
        );
Amplify.configure(awsconfig);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');

