<template>
    <main>
        <main-header active="art" />
        <section class="content">
            <router-view />
        </section>
        <main-footer />
    </main>
</template>

<script>
import MainHeader from '../partials/header.vue';
import MainFooter from '../partials/footer.vue';

export default {
    name: 'Art',
    components: { MainHeader, MainFooter }
};
</script>
