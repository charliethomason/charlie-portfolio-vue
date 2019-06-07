import Vue from 'vue';
import index from './templates/index.vue';
import about from './templates/about.vue';
import gallery from './templates/gallery.vue';

import './styles/main.scss';

const page = document.getElementById('app-container').dataset.page;
const templates = { index, about, gallery };

new Vue({
    el: '#app-container',
    render: c => c(templates[page])
});