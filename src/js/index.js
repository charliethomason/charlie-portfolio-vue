import Vue from 'vue';
import Homepage from '../templates/index.vue';
import '../styles/main.scss';

new Vue({
    el: '#app-container',
    render: c => c(Homepage)
});