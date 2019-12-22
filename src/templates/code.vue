<template>
    <main>
        <main-header active="code" />
        <section class="content">
            <code-content />
        </section>
    </main>
</template>

<script>
import MainHeader from '../partials/header.vue';
import CodeContent from '../partials/code-content.vue';

export default {
    name: 'CodeDemos',
    components: {
        MainHeader,
        CodeContent
    }
};
</script>
