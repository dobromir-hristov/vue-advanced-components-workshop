<template>
  <div class="row">
    <div>
      <div>{{ data.firstName }}</div>
      <div>{{ data.lastName }}</div>
      <div>{{ data.framework }}</div>
      <div><input type="checkbox" v-model="input" /></div>
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
  computed: {
    input: {
      get() {
        return this.data.selected;
      },
      set(value) {
        this.$emit('select', { id: this.data.id, value });
      },
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
