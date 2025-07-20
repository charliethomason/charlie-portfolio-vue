<template>
  <dl class="info-list">
    <template v-for="item in info" :key="item.term">
      <dt class="info-list__term">{{ item.term }}</dt>
      <dd class="info-list__desc">{{ item.desc }}</dd>
    </template>
  </dl>
</template>

<script>
export default {
  name: "InfoList",
  props: {
    info: {
      type: Array,
      default: []
    }
  }
};
</script>
