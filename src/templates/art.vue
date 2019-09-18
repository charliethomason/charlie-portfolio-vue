<template>
    <main>
        <main-header active="art" />
        <section class="content">
            <h1 class="h1">Art</h1>
            <router-view />
        </section>
    </main>
</template>

<script>
import MainHeader from '../partials/header.vue';

export default {
    name: 'Art',
    components: { MainHeader }
};
</script>
