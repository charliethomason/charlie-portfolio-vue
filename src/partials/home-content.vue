<template>
    <div class="homepage">
        <div class="contact">
            <img src="~img/home/charlie-circle.png" class="contact__photo" alt="Photo of Charlie Thomason" />
            <div class="contact__info">
                <h1 class="h1 contact__name">
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
        <div class="big-btn-wrap">
            <a
                href="docs/CharlieThomason-Resume2020.pdf"
                target="_blank"
                class="big-btn"
            >
                Download Resume PDF
            </a>
        </div>
    </div>
</template>

<script>
import homeData from '../data/index.json';
import icons from '../img/svg-icons/icons';
import IconLink from './icon-link.vue';

export default {
    name: 'HomeContent',
    components: {
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
