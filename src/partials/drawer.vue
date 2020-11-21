<template>
    <div class="drawer">
        <h2 class="drawer__heading">{{ heading }}</h2>
        <div class="drawer__content" :class="{ 'drawer__content--hidden': !expanded }" ref="content" tabindex="0">
            <slot />
        </div>
        <button
            type="button"
            class="drawer__expand"
            :class="{ 'drawer__expand--expanded': expanded }"
            :aria-expanded="`${expanded}`"
            @click.stop.prevent="toggleExpanded">
            {{ buttonText }}
        </button>
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
            return this.expanded ? 'Collapse Info': 'Read More';
        }
    },
    methods: {
        toggleExpanded() {
            this.expanded = !this.expanded;
            this.$nextTick(() => {
                this.$refs.content.focus();
            });
        }
    }
};
</script>
