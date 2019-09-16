<template>
    <main>
        <main-header active="code" />
        <section class="content">
            <h1>Code page</h1>
            <h2>{{dataset.greeting}}</h2>
        </section>
    </main>
</template>

<script>
import dataset from '../data/code.json';
import MainHeader from '../partials/Header.vue';

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
