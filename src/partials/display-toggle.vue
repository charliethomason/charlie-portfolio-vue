<template>
    <ul class="display-toggle">
        <li v-for="mode in modes" :key="mode.value">
            <input
                type="radio"
                class="display-toggle__radio"
                name="mode"
                :id="`mode-${mode.value}`"
                :value="mode.value"
                :checked="isChecked(mode.value)"
                @change="modeToggle"
            />
            <label
                :for="`mode-${mode.value}`"
                class="display-toggle__label"
            >{{ mode.label }}</label>
        </li>
    </ul>
</template>

<script>
import { modes } from '../data/art.json';

export default {
    name: 'DisplayToggle',
    props: {
        active: {
            type: String,
            default: 'grid'
        }
    },
    data() {
        return {
            modes
        };
    },
    methods: {
        isChecked(id) {
            return id === this.active;
        },
        modeToggle(event) {
            this.$emit('toggle', event.target.value);
        }
    }
};
</script>
