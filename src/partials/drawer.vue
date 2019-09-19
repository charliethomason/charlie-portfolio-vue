<template>
    <div class="drawer">
        <h2 class="drawer__heading">{{ heading }}</h2>
        <div class="drawer__content">
            <div class="drawer__main">
                <slot name="main" />
            </div>
            <div class="drawer__more" :class="{ 'drawer__more--hidden': !expanded }">
                <slot name="more" />
            </div>
        </div>
        <button type="button" class="drawer__expand" @click.stop.prevent="toggleExpanded">{{ buttonText }}</button>
    </div>
</template>

<script>
export default {
    name: 'Drawer',
    props: {
        heading: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            expanded: false
        };
    },
    computed: {
        buttonText() {
            return this.expanded ? 'View Less': 'View More';
        }
    },
    methods: {
        toggleExpanded() {
            this.expanded = !this.expanded;
        }
    }
};
</script>
