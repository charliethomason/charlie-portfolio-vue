<template>
  <fieldset class="filters">
    <legend class="filters__legend">
      <span class="sr-text">Filter</span>
      <filter-icon />
    </legend>
    <label
      v-for="filter in filters"
      :key="filter.id"
      :class="getClasses(filter.id)"
    >
      <input
        type="radio"
        name="filters"
        :value="filter.id"
        :checked="selected === filter.id"
        @change.stop="() => onClick(filter.id)"
        @click.stop="() => removeFilter(filter.id)"
      />
      <check-icon v-if="selected === filter.id" />
      <span>{{ filter.label }}</span>
    </label>
  </fieldset>
</template>
<script>
import FilterIcon from "../../img/svg-icons/filter.vue";
import CheckIcon from "../../img/svg-icons/check.vue";
export default {
  name: "Filters",
  components: { FilterIcon, CheckIcon },
  props: {
    filters: {
      type: Array
    },
    selected: {
      type: String
    }
  },
  computed: {
    currSelected() {
      return this.selected;
    }
  },
  methods: {
    onClick(filterId) {
      this.$emit("change", filterId);
    },
    removeFilter(filterId) {
      if (this.selected === filterId) {
        this.$emit("change", null);
      }
    },
    getClasses(filterId) {
      return {
        "pill": true,
        "filters__btn": true,
        "active": filterId === this.selected
      }
    }
  }
}
</script>
