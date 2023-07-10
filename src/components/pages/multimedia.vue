<template>
  <div>
    <h1 class="h1">{{ meta.title }}</h1>
    <h2 class="h2">Videos</h2>
    <ul class="multimedia__vidgrid">
      <li v-for="video in data.videos" :key="video.id">
        <iframe
          class="multimedia__video"
          :src="`https://www.youtube.com/embed/${video.id}`"
          :title="video.title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </li>
    </ul>
    <h2 class="h2">Music</h2>
    <ul class="multimedia__albumgrid">
      <li v-for="album in data.albums" :key="album.id">
        <iframe
          class="multimedia__album"
          style="border: 0; width: 350px; height: 720px;"
          :src="`https://bandcamp.com/EmbeddedPlayer/album=${album.id}/size=large/bgcol=ffffff/linkcol=2ebd35/transparent=true/`"
          :title="album.title"
          seamless
        />
      </li>
    </ul>
  </div>
</template>
<script>
import data from '../../data/multimedia.json';

export default {
  name: 'Multimedia',
  data() {
    return {
      data
    };
  },
  computed: {
    meta() {
      return this.$route.meta;
    }
  }
}
</script>
