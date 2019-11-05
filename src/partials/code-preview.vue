<template>
    <div class="code-preview">
        <h2 class="code-preview__heading">
            {{ title }}
            <a :href="`/demos/${id}/`" class="code-preview__btn code-preview__btn--primary">View Demo</a>
            <a :href="github" class="code-preview__btn code-preview__btn--secondary" target="_blank">View Code</a>
            <span class="code-preview__btn code-preview__btn--year">{{ year }}</span>
        </h2>
        <div class="code-preview__content">
            <a :href="`/demos/${id}/`" class="code-preview__img">
                <img :src="require('../img/code/'+id+'.jpg')" alt="title" />
            </a>
            <div class="code-preview__info">
                <div class="code-preview__tags">{{ tagsList }}</div>
                <p class="code-preview__description" v-html="description" />
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