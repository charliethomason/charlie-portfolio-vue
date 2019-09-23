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
                        v-for="(icon, i) in contactIcons"
                        :key="i"
                        :label="icon.label"
                        :href="icon.href"
                        :icon="icon.icon"
                    />
                </div>
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
import IconLink from '../partials/icon-link.vue';
import ContactIcon from '../img/svg-icons/contact.vue';
import LinkedinIcon from '../img/svg-icons/linkedin.vue';
import InstagramIcon from '../img/svg-icons/instagram.vue';
import PdfIcon from '../img/svg-icons/pdf.vue';

export default {
    name: 'Homepage',
    components: {
        MainHeader,
        Drawer,
        IconLink,
        ContactIcon,
        LinkedinIcon,
        InstagramIcon,
        PdfIcon
    },
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
        },
        contactIcons() {
            return [
                { label: 'Email thomason.charlie@gmail.com', href: 'mailto:thomason.charlie@gmail.com', icon: ContactIcon },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/charliethomason', icon: LinkedinIcon },
                { label: 'Instagram', href: 'http://instagram.com/charliethomason', icon: InstagramIcon }
            ];
        }
    }
};
</script>
