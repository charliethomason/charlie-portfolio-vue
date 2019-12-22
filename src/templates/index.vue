<template>
    <main>
        <main-header active="index" />
        <section class="content">
            <home-content />
        </section>
    </main>
</template>

<script>
import MainHeader from '../partials/header.vue';
import HomeContent from '../partials/home-content.vue';

export default {
    name: 'Homepage',
    components: {
        MainHeader,
        HomeContent
    }
};
</script>
