<template>
    <main>
        <h1>Home page</h1>
        <h2>{{dataset.greeting}}</h2>
    </main>
</template>

<script>
export default {
    name: 'index',
    props: {
        greeting: String,
        dataset: Object
    }
};
</script>
