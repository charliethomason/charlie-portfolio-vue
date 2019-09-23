<template>
    <main>
        <main-header active="index" />
        <section class="content">
            <div class="homepage">
                <img src="~img/home/charlie-circle.png" class="charlie-circle" alt="Photo of Charlie Thomason" />
                <h1 class="h1">Charlie Thomason
                    <div class="subtitle">Artist and Software Engineer from Chicago</div>
                </h1>
                <div class="contact">
                    <icon-link
                        v-for="(icon, i) in contact"
                        :key="i"
                        :label="icon.label"
                        :href="icon.href"
                        :icon="getIcon(icon.icon)"
                    />
                </div>
                <drawer v-bind="experienceDrawer" />
                <drawer v-bind="educationDrawer" />
            </div>
        </section>
    </main>
</template>

<script>
import { experience, education, contact } from '../data/index.json';
import MainHeader from '../partials/header.vue';
import Drawer from '../partials/drawer.vue';
import IconLink from '../partials/icon-link.vue';
import icons from '../img/svg-icons/icons';

export default {
    name: 'Homepage',
    components: {
        MainHeader,
        Drawer,
        IconLink
    },
    data() {
        return {
            experience,
            education,
            contact,
            icons
        };
    },
    computed: {
        experienceDrawer() {
            const { heading, main, more } = this.experience;
            return { heading, main, more };
        },
        educationDrawer() {
            const { heading, main, more } = this.education;
            return { heading, main, more };
        }
    },
    methods: {
        getIcon(icon) {
            return this.icons[icon];
        }
    }
};
</script>
