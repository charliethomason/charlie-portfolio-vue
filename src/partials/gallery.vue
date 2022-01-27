<template>
    <div class="gallery">
        <div class="gallery__menu">
            <h1 class="gallery__header"><strong>Art</strong>&nbsp;&rarr; {{ title }}</h1>
            <router-link to="/" class="gallery__back">Back to Galleries</router-link>
            <div class="gallery__list-container">
                <ul class="gallery__list">
                    <li
                        v-for="work in works"
                        :key="work.id"
                        :class="`${baseClass}__list__item`"
                    >
                        <button type="button" :class="getWorkClasses(work.id)" @click="setActive(work)">
                            <img
                                :src="require('../img/art/'+name+'/thumbs/'+work.id+'-250.jpg')"
                                :alt="work.title"
                                :class="`${baseClass}__list__img`"
                            />
                            <div :class="`${baseClass}__list__title`">{{ work.title }}</div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div :class="`${baseClass}__viewer`" v-if="showViewer">
            <transition name="fade" mode="out-in">
                <img
                    :src="require('../img/art/'+name+'/full/'+active.id+'.jpg')"
                    :alt="active.title"
                    :key="`viewer-${active.id}`"
                    :class="`${baseClass}__viewer__img`"
                />
            </transition>
            <div :class="`${baseClass}__viewer__title`">{{ active.title }}</div>
            <div :class="`${baseClass}__viewer__meta`">{{ active.year }} &mdash; {{ active.medium }}</div>
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
        },
        getWorkClasses(id) {
            const workClass = `${this.baseClass}__list__btn`;
            return [
                workClass,
                this.showViewer && id === this.active.id ? `${workClass}--active` : null
            ];
        }
    },
    mounted() {
        if (this.works.length) {
            this.setActive(this.works[0]);
        }
    }
};
</script>
