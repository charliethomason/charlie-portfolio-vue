<template>
    <main>
        <main-header active="art" />
        <section class="content">
            <h1>Art</h1>
            <ul>
                <router-link
                    v-for="(gallery, i) in artData.galleries" :key="i"
                    tag="li"
                    :to="gallery.href"
                    exact-active-class="active"
                    active-class="active"
                >
                    <a>{{ gallery.name }}</a>
                </router-link>
            </ul>
            <router-view />
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
