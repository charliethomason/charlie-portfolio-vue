<template>
    <main>
        <main-header active="art" />
        <section class="content">
            <h1>Gallery</h1>
        </section>
    </main>
</template>
<script>
import MainHeader from '../partials/Header.vue';

export default {
    name: 'gallery',
    components: { MainHeader },
    props: {
        pageName: {
            type: String
        }
    }
}
</script>