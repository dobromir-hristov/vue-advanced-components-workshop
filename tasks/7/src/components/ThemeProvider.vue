<script>
export default {
  name: 'theme-provider',
  provide() {
    const theme = {};

    Object.defineProperty(theme, 'config', {
      enumerable: true,
      get: () => (this.withTheme ? this.theme : {}),
    });

    return { theme };
  },
  props: {
    theme: {
      type: Object,
      default: () => ({}),
    },
    withTheme: {
      type: Boolean,
      default: false,
    },
  },
  render(h) {
    return h('div', this.$slots.default);
  },
};
</script>
