<template>
  <fieldset class="toggle">
    <legend class="toggle__legend">{{ legend }}</legend>
    <div class="toggle__group" role="radiogroup">
      <div
        v-for="option in options"
        :key="`toggle__option--${option.value}`"
        class="toggle__option"
      >
        <input
          type="radio"
          :id="`${name}-${option.value}`"
          :name="name"
          :value="option.value"
          :checked="value === option.value"
          @change="onChange(option)"
        />
        <label :for="`${name}-${option.value}`">{{ option.label }}</label>
      </div>
    </div>
  </fieldset>
</template>
<script>
export default {
  name: 'Toggle',
  props: {
    legend: {
      type: String
    },
    name: {
      type: String
    },
    options: {
      type: Array
    },
    value: {
      type: String
    }
  },
  data() {
    return {
      selected: false
    };
  },
  methods: {
    onChange(option) {
      this.$emit('change', option.value);
    }
  }
};
</script>
