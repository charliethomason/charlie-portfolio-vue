<template>
  <div class="filters">
    <fieldset v-for="filter in filters" :key="filter.id">
      <label :for="`filters-${filter.id}`" class="filters-label">{{ filter.id }}</label>
      <select :id="`filters-${filter.id}`" @change="onChange($event, filter.id)">
        <option
          v-for="option in filter.options"
          :key="`filters-${filter-id}-${option}`"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </fieldset>
  </div>
</template>
<script>
export default {
  name: "Filters",
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    filters() {
      return Object.keys(this.data).map(id => ({
        id,
        options: this.data[id]
      }));
    }
  },
  methods: {
    onChange(e, id) {
      const { value } = e.target;
      this.$emit("change", value, id);
    }
  }
}
</script>
