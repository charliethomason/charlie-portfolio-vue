<template>
    <main>
        <h1>About page</h1>
        <h2>{{dataset.greeting}}</h2>
    </main>
</template>

<script>
export default {
    name: 'about',
    props: {
        greeting: String,
        dataset: Object
    },
    mounted() {
        console.log(this.dataset);
    }
};
</script>
