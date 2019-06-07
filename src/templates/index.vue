<template>
    <main>
        <h1>Home page</h1>
        <h2>{{dataset.greeting}}</h2>
    </main>
</template>

<script>
import dataset from '../data/index.json';
export default {
    name: 'index',
    data() {
        return {
            dataset
        };
    }
};
</script>
