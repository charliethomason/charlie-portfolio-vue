<template>
    <main>
        <h1>Gallery page</h1>
        <h2>{{dataset.greeting}}</h2>
    </main>
</template>

<script>
import dataset from '../data/gallery.json';
export default {
    name: 'gallery',
    data() {
        return {
            dataset
        };
    }
};
</script>
