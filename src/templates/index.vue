<template>
    <main>
        <main-header active="index" />
        <div class="splash" />
        <section class="content">
            <home-content />
        </section>
        <main-footer />
    </main>
</template>

<script>
import MainHeader from '../partials/header.vue';
import HomeContent from '../partials/home-content.vue';
import MainFooter from '../partials/footer.vue';

export default {
    name: 'Homepage',
    components: {
        MainHeader,
        HomeContent,
        MainFooter
    }
};
</script>
