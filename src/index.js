import Vue from 'vue';
import index from './templates/index.vue';
import about from './templates/about.vue';

import indexData from './data/index.json';
import aboutData from './data/about.json';

const page = document.getElementById('app-container').dataset.page;
const templates = { index, about };
const datasets = {
    index: indexData,
    about: aboutData
};

new Vue({
    el: '#app-container',
    render: function(createElement) {
        return createElement(templates[page], {
            props: {
                greeting: 'Hello world',
                dataset: datasets[page]
            }
        });
    }
});