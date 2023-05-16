<template>
  <div>
    <h1 class="collection__title">{{ meta.title }}</h1>
    <div class="control-bar">
      <toggle
        v-for="control in controls"
        :key="`control-${control.name}`"
        :legend="control.legend"
        :name="control.name"
        :options="control.options"
        :value="filters[control.name]"
        @change="handleChange($event, control.name)"
      />
      <filters :data="metaFilters" @change="handleChange" />
    </div>
    <ul :class="galleriesClasses">
      <router-link
        v-for="(gallery, i) in galleries"
        :key="i"
        tag="li"
        :to="`/${meta.id}/${gallery.id}`"
        class="galleries__item"
      >
        <a class="galleries__link">
          <img
            :src="require('../../img/' + meta.id + '/galleries/galleries-' + gallery.id + '.jpg')"
            :alt="`${gallery.title} gallery`"
            class="galleries__img"
          />
          <div class="galleries__text" aria-hidden="true">
            <h2 class="galleries__title">{{ gallery.title }}</h2>
            <div v-if="gallery.subtitle" class="parallelogram nohover">{{ gallery.subtitle }}</div>
          </div>
          <div class="galleries__size">{{ gallery.images.length }} images</div>
        </a>
      </router-link>
    </ul>
    <footer-note />
  </div>
</template>

<script>
import data from '../../js/data';
import FooterNote from '../elements/footer.vue';
import Toggle from '../elements/toggle.vue';
import Filters from '../elements/filters.vue';

export default {
  name: 'Galleries',
  components: { FooterNote, Toggle, Filters },
  data() {
    return {
      filters: {
        view: 'grid'
      }
    };
  },
  computed: {
    meta() {
      return this.$route.meta;
    },
    type() {
      return data[this.meta.id];
    },
    controls() {
      return this.type.controls;
    },
    galleries() {
      const { galleries } = this.type;
      return Object.keys(galleries).map(key => ({
        ...galleries[key],
        id: key
      }));
    },
    galleriesClasses() {
      const { view } = this.filters;
      return {
        galleries: true,
        'galleries--grid': view === 'grid',
        'galleries--list': view === 'list'
      };
    },
    metaFilters() {
      return this.galleries.reduce((options, gallery) => {
        Object.keys(gallery.meta).forEach(filter => {
          if (!options[filter]) {
            const optionSet = new Set();
            options[filter] = optionSet;
          }
          gallery.meta[filter].forEach(opt => options[filter].add(opt));
        });
        return options;
      }, {});
    }
  },
  methods: {
    handleChange(opt, controlName) {
      console.log(opt, controlName);
      // this.filters[controlName] = opt.value;
      // const updatedFilters = {
      //   ...this.filters,
      //   [controlName]: opt.value
      // };
      // localStorage.setItem("filters", JSON.stringify(updatedFilters));
    }
  },
  mounted() {
    if (localStorage.getItem("filters")) {
      this.filters = JSON.parse(localStorage.getItem("filters"));
    }
  }
};
</script>
