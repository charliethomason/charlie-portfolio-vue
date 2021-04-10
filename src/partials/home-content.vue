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
        <drawer heading="About Charlie">
            My name is Charlie, and I love writing code and creating art. By day, I am a Senior UI Software Engineer at <a href="https://www.centro.net/" target="_blank">Centro</a>, specializing in front-end, design systems, and web accessibility. I have been a full-time web devevloper for over 8 years, and got my Master's degree from DePaul. By night, I am an Artist, specializing in ink, watercolor, and oil painting. I earned my BFA in Art Studio, and have self-published several books of my art, including <a href="https://www.blurb.com/b/7500748-birds-of-chicagoland" target="_blank"><em>Birds of Chicagoland</em></a>. In addition to being an engineer and artist, I am also a musician and guitarist for the Louisville, KY band <a href="https://www.youtube.com/channel/UC-SQ6raHnpW0yvpNibW6aRA" target="_blank">Echo's Aim</a>. When I'm not coding, painting, or playing music, I enjoy watching movies, jogging, and traveling. I live in Chicago with my wife, Amanda, and cat, Baxter. This website is a portfolio of some of my best work.
        </drawer>
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
