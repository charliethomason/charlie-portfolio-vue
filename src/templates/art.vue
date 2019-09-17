<template>
    <main>
        <main-header active="art" />
        <section class="content">
            <h1>Art</h1>
            <ul>
                <li v-for="(gallery, i) in artData.galleries" :key="i">
                    <a :href="`/art/${gallery.href}.html`">{{ gallery.name }}</a>
                </li>
            </ul>
        </section>
    </main>
</template>

<script>
import artData from '../data/art.json';
import MainHeader from '../partials/Header.vue';

export default {
    name: 'art',
    components: { MainHeader },
    data() {
        return {
            artData
        };
    }
};
</script>
