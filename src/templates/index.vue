<template>
    <main>
        <main-header active="index" />
        <section class="content">
            <div class="homepage">
                <img src="~img/home/charlie-circle.png" class="charlie-circle" alt="Photo of Charlie Thomason" />
                <h1 class="h1">Charlie Thomason
                    <div class="subtitle">Artist and Software Engineer from Chicago</div>
                </h1>
            </div>
        </section>
    </main>
</template>

<script>
import dataset from '../data/index.json';
import MainHeader from '../partials/header.vue';

export default {
    name: 'Homepage',
    components: { MainHeader },
    data() {
        return {
            dataset
        };
    }
};
</script>
