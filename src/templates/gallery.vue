<template>
    <main>
        <main-header />
        <h1>Gallery page</h1>
        <h2>{{dataset.greeting}}</h2>
    </main>
</template>

<script>
import dataset from '../data/gallery.json';
import MainHeader from '../partials/MainHeader.vue';

export default {
    name: 'gallery',
    components: { MainHeader },
    data() {
        return {
            dataset
        };
    }
};
</script>
