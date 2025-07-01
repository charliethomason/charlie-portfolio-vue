<template>
  <ul class="filters">
    <li>Filters:</li>
    <li
      v-for="filter in filters"
      :key="filter.id"
    >
      <button
        :class="{ pill: true, filters__btn: true, active: filter.id === selected }"
        @click="() => onClick(filter.id)"
      >
        <span>{{ filter.label }}</span>
      </button>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Filters",
  props: {
    filters: {
      type: Array
    },
    selected: {
      type: String
    }
  },
  methods: {
    onClick(filter) {
      const newFilter = filter === this.selected ? null : filter;
      this.$emit("change", newFilter);
    }
  }
}
</script>
