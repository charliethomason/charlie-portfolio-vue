<template>
    <main>
        <main-header active="code" />
        <section class="content">
            <code-content />
        </section>
        <main-footer />
    </main>
</template>

<script>
import MainHeader from '../partials/header.vue';
import CodeContent from '../partials/code-content.vue';
import MainFooter from '../partials/footer.vue';

export default {
    name: 'CodeDemos',
    components: {
        MainHeader,
        CodeContent,
        MainFooter
    }
};
</script>
