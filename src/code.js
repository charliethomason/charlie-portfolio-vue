import Vue from 'vue';
import codeDemos from './templates/code.vue';
import './styles/main.scss';

new Vue({
    el: '#app-container',
    render: c => c(codeDemos)
});