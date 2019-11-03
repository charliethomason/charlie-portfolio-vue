<template>
    <div class="gallery-wrapper">
        <!-- <div class="gallery-header">
            <div class="gallery-title">
                <h1 class="h1">Art</h1>
                <h2 class="h2">{{ title }}</h2>
            </div>
            <div class="gallery-nav">
                <router-link to="/" class="back-to-art">Back to Art</router-link>
            </div>
        </div> -->
        <div class="gallery">
            <ul class="gallery__list">
                <li v-for="work in works" :key="work.id" :class="`${baseClass}__list__item`">
                    <button type="button" :class="`${baseClass}__list__btn`" @click="setActive(work)">
                        <img
                            :src="require('../img/art/'+name+'/thumbs/'+work.id+'-250.jpg')"
                            :alt="work.title"
                            :class="`${baseClass}__list__img`"
                        />
                        <div :class="`${baseClass}__list__title`">{{ work.title }}</div>
                    </button>
                </li>
            </ul>
            <div :class="`${baseClass}__viewer`" v-if="showViewer">
                <img
                    :src="require('../img/art/'+name+'/full/'+active.id+'.jpg')"
                    :alt="active.title"
                    :class="`${baseClass}__viewer__img`"
                />
                <div :class="`${baseClass}__viewer__title`">{{ active.title }}</div>
                <div :class="`${baseClass}__viewer__meta`">{{ active.year }} &mdash; {{ active.medium }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Gallery',
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
            active: null
        };
    },
    computed: {
        showViewer() {
            return !!this.active;
        }
    },
    methods: {
        setActive(work) {
            this.active = work;
        }
    },
    mounted() {
        if (this.works.length) {
            this.setActive(this.works[0]);
        }
    }
};
</script>
