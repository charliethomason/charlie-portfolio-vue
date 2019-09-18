<template>
    <main>
        <main-header active="index" />
        <section class="content">
            <h1 class="h1">Home page</h1>
            <h2>{{dataset.greeting}}</h2>
        </section>
    </main>
</template>

<script>
import dataset from '../data/index.json';
import MainHeader from '../partials/header.vue';

export default {
    name: 'Homepage',
    components: { MainHeader },
    data() {
        return {
            dataset
        };
    }
};
</script>
