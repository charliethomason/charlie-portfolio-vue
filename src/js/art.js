import Vue from 'vue';
import VueRouter from 'vue-router';
import Art from '../templates/art.vue';
import routes from './galleries.js';
import '../styles/main.scss';

Vue.use(VueRouter);

const router = new VueRouter({ routes });

new Vue({
    el: '#app-container',
    render: c => c(Art),
    router
});