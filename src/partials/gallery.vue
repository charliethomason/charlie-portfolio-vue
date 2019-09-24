<template>
    <div>
        <display-toggle :active="activeMode" @toggle="updateMode" />
        <ul>
            <li v-for="work in works" :key="work.id">
                <img :src="require('../img/art/'+name+imgSubdir+work.id+imgSize+'.jpg')" alt="" />
                <div>{{ work.title }}</div>
            </li>
        </ul>
    </div>
</template>
<script>
import DisplayToggle from './display-toggle.vue';
export default {
    name: 'Gallery',
    components: { DisplayToggle },
    props: {
        works: {
            type: Array,
            default: () => ([])
        },
        name: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            activeMode: 'grid'
        };
    },
    computed: {
        imgSubdir() {
            return this.activeMode === 'grid' ? '/thumbs/' : '/full/';
        },
        imgSize() {
            return this.activeMode === 'grid' ? '-250' : '';
        }
    },
    methods: {
        updateMode(mode) {
            this.activeMode = mode;
            this.updateSessionStorage(mode);
        },
        updateSessionStorage(mode) {
            if (window.sessionStorage) {
                sessionStorage.setItem('display-mode', mode);
            }
        },
        getSessionStorage() {
            if (window.sessionStorage && window.sessionStorage.getItem('display-mode')) {
                this.activeMode = sessionStorage.getItem('display-mode');
            }
        }
    },
    mounted() {
        this.getSessionStorage();
    }
};
</script>
