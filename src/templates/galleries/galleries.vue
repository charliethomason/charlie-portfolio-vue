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
        <div class="copyright-note">
            All artwork on this website is property of <a href="https://charliethomason.github.io">Charlie Thomason</a>. Do not reuse or republish without permission.
        </div>
    </div>
</template>

<script>
import { galleries } from '../../data/art.json';

export default {
    name: 'Galleries',
    data() {
        return {
            galleries
        };
    }
};
</script>
