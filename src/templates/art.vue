<template>
    <main>
        <main-header active="art" />
        <section class="content">
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
