<template>
  <div class="homepage">
    <div class="contact">
      <img src="~img/home/charlie-circle.png" class="contact__photo" alt="Photo of Charlie Thomason" />
      <div class="contact__info">
        <h1 class="h1 contact__name">
          {{ homeData.heading }}
        </h1>
        <div class="contact__subtitle">{{ homeData.subtitle }}</div>
        <ul class="contact__link-row">
          <li v-for="(icon, i) in homeData.contact" :key="i">
            <icon-link :label="icon.label" :href="icon.href" :icon="icons[icon.label]" />
          </li>
        </ul>
      </div>
    </div>
    <card heading="Portfolio">
      <p>My name is Charlie, and this portfolio contains some of my best paintings, drawings, photography, and other creations. My favorite art mediums are ink brush, watercolor, and <router-link :to="{ path: '/photo', query: { filter: '35mm' } }">film photography</router-link>. I earned my BFA in Art Studio and have self-published a few books of my art, including <router-link :to="{ path: '/art/birdsofchicagoland' }"><em>Birds of Chicagoland</em></router-link>. Thematically, I enjoy <router-link :to="{ path: '/art', query: { filter: 'birds' } }">birds</router-link>, <router-link :to="{ path: '/art', query: { filter: 'movies' } }">movies</router-link>, desert landscapes, cityscapes, and the intersection of old and new.</p>
      <p>By day, I am a front-end software engineer at <a href="https://www.basis.com/" target="_blank">Basis</a>, leading their design systems. I am also an active volunteer at my church, <a href="https://www.oldstpats.org/" target="_blank">Old St Pat's</a>, and play rhythm guitar for the Louisville, KY rock band, <a href="https://www.youtube.com/@echosaim" target="_blank">Echo's Aim</a>. I also enjoy running, reading, traveling, and watching movies and auto racing. I live in the western Chicago suburbs with my wife, Amanda, and cat, Baxter.</p>
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
