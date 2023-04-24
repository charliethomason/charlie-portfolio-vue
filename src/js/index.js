import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../components/app.vue';
import routes from './routes.js';
import '../styles/main.scss';

Vue.use(VueRouter);

const router = new VueRouter({
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes
});

new Vue({
    el: '#app-container',
    render: c => c(App),
    router
});