<template>
    <div class="gallery-wrapper">
        <div class="gallery-header">
            <div class="gallery-title">
                <h1 class="h1">Art</h1>
                <h2 class="h2">{{ title }}</h2>
            </div>
            <div class="gallery-nav">
                <router-link to="/" class="back-to-art">Back to Art</router-link>
                <display-toggle :active="activeMode" @toggle="updateMode" />
            </div>
        </div>
        <ul :class="galleryClass">
            <li v-for="work in works" :key="work.id" :class="`${baseClass}__item`">
                <button type="button" :class="`${baseClass}__btn`">
                    <img
                        :src="require('../img/art/'+name+imgSubdir+work.id+imgSize+'.jpg')"
                        :alt="work.title"
                        :class="`${baseClass}__img`"
                    />
                    <div :class="`${baseClass}__title`">{{ work.title }}</div>
                </button>
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
        title: {
            type: String,
            default: ''
        },
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
            baseClass: 'gallery',
            activeMode: 'grid'
        };
    },
    computed: {
        imgSubdir() {
            return this.activeMode === 'grid' ? '/thumbs/' : '/full/';
        },
        imgSize() {
            return this.activeMode === 'grid' ? '-250' : '';
        },
        galleryClass() {
            const { baseClass, activeMode } = this;
            const modeClass = `${baseClass}--${activeMode}`;
            return [baseClass, modeClass];
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
