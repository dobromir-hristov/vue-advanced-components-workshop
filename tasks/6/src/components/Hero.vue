<template>
  <div class="row">
    <slot :data="data">
      <div>{{ data.firstName }}</div>
      <div>{{ data.lastName }}</div>
      <div>{{ data.framework }}</div>
    </slot>
    <div>
      <slot name="input" :selected="selected" :handler="handler">
        <input type="checkbox" v-model="selected" />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: this.data.selected,
    };
  },
  watch: {
    'data.selected'(value) {
      this.selected = value;
    },
    selected(value) {
      this.$emit('select', { id: this.data.id, value });
    },
  },
  methods: {
    handler(value) {
      this.selected = value.target.value;
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  width: 400px;
}

.row div {
  flex: 1;
}
</style>
