<template>
    <main>
        <main-header />
        <h1>Home page</h1>
        <h2>{{dataset.greeting}}</h2>
    </main>
</template>

<script>
import dataset from '../data/index.json';
import MainHeader from '../partials/MainHeader.vue';

export default {
    name: 'index',
    components: { MainHeader },
    data() {
        return {
            dataset
        };
    }
};
</script>
