import Vue from 'vue';
import CodeDemos from '../templates/code.vue';
import '../styles/main.scss';

new Vue({
    el: '#app-container',
    render: c => c(CodeDemos)
});