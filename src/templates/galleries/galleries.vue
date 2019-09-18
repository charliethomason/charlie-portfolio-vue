<template>
    <ul class="galleries">
        <router-link
            v-for="(gallery, i) in galleries" :key="i"
            tag="li"
            :to="gallery.href"
            class="galleries-item"
            exact-active-class="active"
            active-class="active"
        >
            <a class="galleries-link">
                <img src="https://via.placeholder.com/480" alt="" class="galleries-img" />
                <span class="galleries-text">{{ gallery.name }}</span>
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
