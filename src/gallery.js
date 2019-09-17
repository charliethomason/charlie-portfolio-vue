import Vue from 'vue';
import gallery from './templates/gallery.vue';
import './styles/main.scss';

const pageName = document.getElementById('app-container').dataset.page;

new Vue({
    el: '#app-container',
    render: c => c(gallery, {
        props: {
            pageName
        }
    }),
});