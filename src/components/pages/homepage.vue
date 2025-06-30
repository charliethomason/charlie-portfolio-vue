<template>
  <div class="homepage">
    <div class="contact">
      <img src="~img/home/charlie-circle.png" class="contact__photo" alt="Photo of Charlie Thomason" />
      <ul class="contact__link-row">
        <li v-for="(icon, i) in homeData.contact" :key="i">
          <icon-link :label="icon.label" :href="icon.href" :icon="icons[icon.label]" />
        </li>
      </ul>
    </div>
    <card :heading="homeData.heading">
      <p><strong>{{ homeData.subtitle }}</strong></p>
      <p>My name is Charlie, and this portfolio contains some of my best paintings, drawings, photography, and videos. My favorite art mediums are ink brush, watercolor, and <router-link :to="{ path: '/photo', query: { filter: '35mm' } }">film photography</router-link>. My paintings are mostly of <router-link :to="{ path: '/art', query: { filter: 'birds' } }">birds</router-link>, <router-link :to="{ path: '/art', query: { filter: 'movies' } }">movies</router-link>, and portraits, while my photography is mostly landscapes and travel.</p>
      <p>By day, I am a front-end software engineer at <a href="https://www.basis.com/" target="_blank">Basis</a>, leading their design system. I am also an active volunteer at my church, <a href="https://www.oldstpats.org/" target="_blank">Old St Pat's</a>, and enjoy playing music, running, reading, traveling, and auto racing.</p>
    </card>
    <footer-note />
  </div>
</template>

<script>
import homeData from "../../data/index.json";
import icons from "../../img/svg-icons/icons";
import IconLink from "../elements/icon-link.vue";
import FooterNote from "../elements/footer.vue";
import Card from "../elements/card.vue";

export default {
  name: "HomeContent",
  components: {
    IconLink,
    FooterNote,
    Card
  },
  data() {
    return {
      homeData,
      icons
    };
  }
};
</script>
