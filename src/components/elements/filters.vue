<template>
  <ul class="filters">
    <li
      v-for="filter in filters"
      :key="filter.id"
    >
      <button
        :class="{ parallelogram: true, active: filter.id === selected }"
        @click="() => onClick(filter.id)"
      >
        {{ filter.label }}
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
