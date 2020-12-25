<template>
    <div>
        <ul class="galleries">
            <router-link
                v-for="(gallery, i) in galleries" :key="i"
                tag="li"
                :to="gallery.href"
                :class="['galleries__item', { 'galleries__item--wide': gallery.wide }]"
                exact-active-class="active"
                active-class="active"
            >
                <a class="galleries__link">
                    <img
                        :src="require('../../img/art/galleries/galleries-'+gallery.href+'.jpg')"
                        :alt="`${gallery.name} gallery icon`"
                        class="galleries__img"
                    />
                    <span class="galleries__text">{{ gallery.name }}</span>
                </a>
            </router-link>
        </ul>
        <footer-note />
    </div>
</template>

<script>
import { galleries } from '../../data/art.json';
import FooterNote from '../../partials/footer.vue';

export default {
    name: 'Galleries',
    components: { FooterNote },
    data() {
        return {
            galleries
        };
    }
};
</script>
