<template>
    <header class="header">
        <a href="/" class="logo" title="Charlie Thomason"><span class="sr-text">Charlie Thomason</span></a>
        <main-nav :active="active" />
    </header>
</template>

<script>
import MainNav from './Nav.vue';
export default {
    name: 'MainHeader',
    components: { MainNav },
    props: {
    	active: {
    		type: String,
    		default: 'index'
    	}
    }
};
</script>
