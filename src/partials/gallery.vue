<template>
    <div>
        <display-toggle :active="activeMode" @toggle="updateMode" />
    </div>
</template>
<script>
import DisplayToggle from './display-toggle.vue';
export default {
    name: 'Gallery',
    components: { DisplayToggle },
    data() {
        return {
            activeMode: 'grid'
        };
    },
    methods: {
        updateMode(mode) {
            this.activeMode = mode;
            this.updateSessionStorage(mode);
        },
        updateSessionStorage(mode) {
            if (window.sessionStorage) {
                sessionStorage.setItem('display-mode', mode);
            }
        },
        getSessionStorage() {
            if (window.sessionStorage && window.sessionStorage.getItem('display-mode')) {
                this.activeMode = sessionStorage.getItem('display-mode');
            }
        }
    },
    mounted() {
        this.getSessionStorage();
    }
};
</script>
