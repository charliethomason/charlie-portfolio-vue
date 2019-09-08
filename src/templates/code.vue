<template>
    <main>
        <main-header />
        <h1>Code page</h1>
        <h2>{{dataset.greeting}}</h2>
    </main>
</template>

<script>
import dataset from '../data/code.json';
import MainHeader from '../partials/MainHeader.vue';

export default {
    name: 'codeDemos',
    components: { MainHeader },
    data() {
        return {
            dataset
        };
    }
};
</script>
