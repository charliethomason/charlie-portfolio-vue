<template>
    <div class="code-preview">
        <h2 class="code-preview__title">{{ title }}</h2>
        <div class="code-preview__content">
            <div class="code-preview__info">
                <div class="code-preview__year">{{ year }}</div>
                <div class="code-preview__tags">{{ tagsList }}</div>
                <p class="code-preview__description" v-html="description" />
            </div>
            <div class="code-preview__btns">
                <a :href="`/demos/${id}/`">View Demo</a>
                <a :href="github">View Code</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CodePreview',
    props: {
        title: {
            type: String
        },
        id: {
            type: String
        },
        year: {
            type: String
        },
        description: {
            type: String
        },
        github: {
            type: String
        },
        tags: {
            type: Array
        }
    },
    computed: {
        tagsList() {
            if (!this.tags || !this.tags.length) {
                return null;
            }
            return this.tags.join(', ');
        }
    }
};
</script>