<template>
    <div class="homepage">
        <div class="contact">
            <img src="~img/home/charlie-circle.png" class="contact__photo" alt="Photo of Charlie Thomason" />
            <div class="contact__info">
                <h1 class="contact__name">
                    {{ homeData.heading }}
                    <div class="contact__subtitle">{{ homeData.subtitle }}</div>
                </h1>
                <icon-link
                    v-for="(icon, i) in homeData.contact"
                    :key="i"
                    :label="icon.label"
                    :href="icon.href"
                    :icon="icons[icon.icon]"
                />
            </div>
        </div>
        <drawer v-bind="homeData.experience" />
        <drawer v-bind="homeData.education" />
        <div class="download-pdf">
            <a
                href="docs/CharlieThomason-Resume2020.pdf"
                target="_blank"
                class="download-pdf__btn"
            >
                Download Full Resume PDF
            </a>
        </div>
    </div>
</template>

<script>
import homeData from '../data/index.json';
import icons from '../img/svg-icons/icons';
import Drawer from './drawer.vue';
import IconLink from './icon-link.vue';

export default {
    name: 'HomeContent',
    components: {
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
