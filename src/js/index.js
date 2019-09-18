import Vue from 'vue';
import index from '../templates/index.vue';
import '../styles/main.scss';

new Vue({
    el: '#app-container',
    render: c => c(index)
});