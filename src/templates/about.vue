<template>
    <main>
        <main-header />
        <h1>About page</h1>
        <h2>{{dataset.greeting}}</h2>
    </main>
</template>

<script>
import dataset from '../data/about.json';
import MainHeader from '../partials/MainHeader.vue';

export default {
    name: 'about',
    components: { MainHeader },
    data() {
        return {
            dataset
        };
    }
};
</script>
