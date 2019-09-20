<template>
    <div class="drawer">
        <h2 class="drawer__heading">{{ heading }}</h2>
        <div class="drawer__content">
            <div v-if="main" class="drawer__main">
                <div class="content-item">
                    <h3 class="h3">{{ main.name }}</h3>
                    <div class="details">{{ main.role }} &mdash; {{ main.location }}</div>
                    <div class="date">{{ main.start }} &mdash; {{ main.end }}</div>
                    <ul class="notes">
                        <li v-for="(note, i) in main.notes" :key="`main-note-${i}`">
                            {{ note }}
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="more" class="drawer__more" :class="{ 'drawer__more--hidden': !expanded }">
                <div v-for="(item, i) in more" :key="`more-${i}`" class="content-item">
                    <h3 class="h3">{{ item.name }}</h3>
                    <div class="details">{{ item.role }} &mdash; {{ item.location }}</div>
                    <div class="date">{{ item.start }} &mdash; {{ item.end }}</div>
                    <ul class="notes">
                        <li v-for="(note, j) in item.notes" :key="`main-${i}-note-${j}`">
                            {{ note }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <button
            type="button"
            class="drawer__expand"
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
        },
        main: {
            type: Object,
            default: null
        },
        more: {
            type: Array,
            default: null
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
