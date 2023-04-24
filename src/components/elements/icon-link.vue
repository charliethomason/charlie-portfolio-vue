<template>
  <a :href="href" class="contact__link" target="_blank">
    <component :is="icon" />
    <span class="contact__tooltip">{{ label }}</span>
  </a>
</template>

<script>
export default {
  name: "IconLink",
  props: {
    label: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "#",
    },
    icon: {
      type: Object,
    },
  },
};
</script>
