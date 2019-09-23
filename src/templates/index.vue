<template>
    <main>
        <main-header active="index" />
        <section class="content">
            <div class="homepage">
                <img src="~img/home/charlie-circle.png" class="charlie-circle" alt="Photo of Charlie Thomason" />
                <h1 class="h1">{{ homeData.heading }}
                    <div class="subtitle">{{ homeData.subtitle }}</div>
                </h1>
                <div class="contact">
                    <icon-link
                        v-for="(icon, i) in homeData.contact"
                        :key="i"
                        :label="icon.label"
                        :href="icon.href"
                        :icon="icons[icon.icon]"
                    />
                </div>
                <drawer v-bind="homeData.experience" />
                <drawer v-bind="homeData.education" />
            </div>
        </section>
    </main>
</template>

<script>
import homeData from '../data/index.json';
import icons from '../img/svg-icons/icons';

import MainHeader from '../partials/header.vue';
import Drawer from '../partials/drawer.vue';
import IconLink from '../partials/icon-link.vue';

export default {
    name: 'Homepage',
    components: {
        MainHeader,
        Drawer,
        IconLink
    },
    data() {
        return {
            homeData,
            icons
        };
    }
};
</script>
