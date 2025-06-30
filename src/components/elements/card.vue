<template>
  <section :class="{ card: true, 'card--link': link }">
    <h2 class="card__heading">{{ heading }}</h2>
    <div class="card__content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "Card",
  props: {
    heading: {
      type: String
    },
    link: {
      type: Boolean
    }
  }
}
</script>
