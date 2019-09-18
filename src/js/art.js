import Vue from 'vue';
import art from '../templates/art.vue';
import '../styles/main.scss';

new Vue({
    el: '#app-container',
    render: c => c(art)
});