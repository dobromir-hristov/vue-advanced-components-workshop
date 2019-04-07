<template>
  <div :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'square',
  inject: ['theme'],
  computed: {
    style() {
      return {
        color: this.theme.config.color || '#000',
        backgroundColor: this.theme.config.backroundColor || '#eee',
        padding: '10px',
        height: '200px',
        width: '200px',
      };
    },
  },
};
</script>
