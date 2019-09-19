<template>
    <main>
        <main-header active="index" />
        <section class="content">
            <div class="homepage">
                <img src="~img/home/charlie-circle.png" class="charlie-circle" alt="Photo of Charlie Thomason" />
                <h1 class="h1">Charlie Thomason
                    <div class="subtitle">Artist and Software Engineer from Chicago</div>
                </h1>
                <drawer :heading="experience.heading">
                    <template v-slot:main>
                        <h3>{{ currentJob.company }}</h3>
                        <div>{{ currentJob.position }} &mdash; {{ currentJob.location }}</div>
                        <div>{{ currentJob.start }} &mdash; present</div>
                        <ul>
                            <li v-for="(note, i) in currentJob.notes" :key="`current-note-${i}`">
                                {{ note }}
                            </li>
                        </ul>
                    </template>
                    <template v-slot:more>
                        <div v-for="(job, i) in experience.past" :key="`past-job-${i}`">
                            <h3>{{ job.company }}</h3>
                            <div>{{ job.position }} &mdash; {{ job.location }}</div>
                            <div>{{ job.start }} &mdash; {{ job.end }}</div>
                            <ul>
                                <li v-for="(note, j) in job.notes" :key="`past-job-${i}-note-${j}`">
                                    {{ note }}
                                </li>
                            </ul>
                        </div>
                    </template>
                </drawer>
            </div>
        </section>
    </main>
</template>

<script>
import { experience } from '../data/index.json';
import MainHeader from '../partials/header.vue';
import Drawer from '../partials/drawer.vue';

export default {
    name: 'Homepage',
    components: { MainHeader, Drawer },
    data() {
        return {
            experience
        };
    },
    computed: {
        currentJob() {
            return experience.current;
        }
    }
};
</script>
