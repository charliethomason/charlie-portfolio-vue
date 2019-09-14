<template>
    <main>
        <main-header active="art" />
        <h1>Art page</h1>
        <h2>{{dataset.greeting}}</h2>
    </main>
</template>

<script>
import dataset from '../data/art.json';
import MainHeader from '../partials/Header.vue';

export default {
    name: 'art',
    components: { MainHeader },
    data() {
        return {
            dataset
        };
    }
};
</script>
