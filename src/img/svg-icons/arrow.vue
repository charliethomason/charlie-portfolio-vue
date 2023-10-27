<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" :class="['galleria__lightbox__icon', className]">
    <title>{{ title }}</title>
    <g fill="none" fill-rule="evenodd">
      <path class="galleria__lightbox__icon-shape" d="M5.25 9.819a1.003 1.003 0 0 1 1.413-.09l2.335 2.057V6a1 1 0 0 1 2.003 0v5.786l2.337-2.056a1.001 1.001 0 0 1 1.324 1.502l-4 3.519c-.07.065-.385.249-.663.249-.305 0-.606-.195-.662-.25L5.34 11.233a1.002 1.002 0 0 1-.09-1.413M10 19.999c5.523 0 10-4.476 10-10 0-5.522-4.477-10-10-10C4.477 0 0 4.478 0 10c0 5.524 4.478 10 10 10"></path>
      <path class="galleria__lightbox__icon-symbol" fill-rule="nonzero" d="M5.34 11.231l3.998 3.52c.055.053.356.25.661.25.277 0 .593-.186.662-.25l4-3.52c.414-.365.454-.998.09-1.413a1.002 1.002 0 0 0-1.414-.088l-2.336 2.056V6A1 1 0 0 0 10 5a1 1 0 0 0-1 1v5.786L6.662 9.73a1 1 0 1 0-1.324 1.501"></path>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'ArrowIcon',
  props: {
    className: {
      type: String
    },
    title: {
      type: String
    }
  }
};
</script>
