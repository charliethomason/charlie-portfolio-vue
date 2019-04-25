import Vue from 'vue';
import homepage from './templates/homepage.vue';
import about from './templates/about.vue';

import homepageData from './data/homepage.json';
import aboutData from './data/about.json';

const page = document.getElementById('app-container').dataset.page;
const templates = { homepage, about };
const datasets = {
    homepage: homepageData,
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