<template>
    <main>
        <main-header active="code" />
        <section class="content">
            <h1 class="h1">Code page</h1>
            <h2>{{dataset.greeting}}</h2>
        </section>
        <main-footer />
    </main>
</template>

<script>
import dataset from '../data/code.json';
import MainHeader from '../partials/Header.vue';
import MainFooter from '../partials/footer.vue';

export default {
    name: 'CodeDemos',
    components: { MainHeader, MainFooter },
    data() {
        return {
            dataset
        };
    }
};
</script>
