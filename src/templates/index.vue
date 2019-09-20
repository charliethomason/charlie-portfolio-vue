<template>
    <main>
        <main-header active="index" />
        <section class="content">
            <div class="homepage">
                <img src="~img/home/charlie-circle.png" class="charlie-circle" alt="Photo of Charlie Thomason" />
                <h1 class="h1">Charlie Thomason
                    <div class="subtitle">Artist and Software Engineer from Chicago</div>
                </h1>
                <drawer v-bind="experienceDrawer" />
                <drawer v-bind="educationDrawer" />
            </div>
        </section>
    </main>
</template>

<script>
import { experience, education } from '../data/index.json';
import MainHeader from '../partials/header.vue';
import Drawer from '../partials/drawer.vue';

export default {
    name: 'Homepage',
    components: { MainHeader, Drawer },
    data() {
        return {
            experience,
            education
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
    }
};
</script>
