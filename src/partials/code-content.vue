<template>
    <div class="code-wrapper">
        <h1 class="h1">Code Demo Portfolio</h1>
        <div class="big-btn-wrap">
            <a
                href="https://github.com/charliethomason/charlie-portfolio-vue"
                target="_blank"
                class="big-btn"
            >
                View Code For This Site
            </a>
        </div>
        <ul class="code-list">
            <li
                v-for="(demo, i) in codeDemos"
                :key="i"
                class="code-list__item"
            >
                <code-preview v-bind="demo" />
            </li>
        </ul>
    </div>
</template>

<script>
import { codeDemos } from '../data/code.json';
import CodePreview from './code-preview.vue';
export default {
    name: 'CodeContent',
    components: {
        CodePreview
    },
    data() {
        return {
            codeDemos
        };
    }
};
</script>
