<template>
    <div>
        <ul class="galleries">
            <router-link
                v-for="(gallery, i) in galleries" :key="i"
                tag="li"
                :to="`/art/${gallery.href}`"
                class="galleries__item"
            >
                <a class="galleries__link">
                    <img
                        :src="require('../../img/art/galleries/galleries-'+gallery.href+'.jpg')"
                        :alt="`${gallery.name} gallery icon`"
                        class="galleries__img"
                    />
                    <!-- <div class="galleries__img" /> -->
                    <div class="galleries__text">
                        <h2 class="galleries__title">{{ gallery.title }}</h2>
                        <div v-if="gallery.subtitle" class="galleries__subtitle nohover">{{ gallery.subtitle }}</div>
                    </div>
                </a>
            </router-link>
        </ul>
        <footer-note />
    </div>
</template>

<script>
import data from '../../data/art.json';
import FooterNote from '../../partials/footer.vue';

export default {
    name: 'Galleries',
    components: { FooterNote },
    data() {
        return {
            galleries: data.galleries
        };
    }
};
</script>
