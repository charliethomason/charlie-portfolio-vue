<template>
    <ul class="galleries">
        <router-link
            v-for="(gallery, i) in galleries" :key="i"
            tag="li"
            :to="gallery.href"
            class="galleries__item"
            exact-active-class="active"
            active-class="active"
        >
            <a class="galleries__link">
                <img
                    :src="require('../../img/art/galleries/galleries-'+gallery.href+'-960.jpg')"
                    :alt="`${gallery.name} gallery icon`"
                    class="galleries__img"
                />
                <span class="galleries__text">{{ gallery.name }}</span>
            </a>
        </router-link>
    </ul>
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
