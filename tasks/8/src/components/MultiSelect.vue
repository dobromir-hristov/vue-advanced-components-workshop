<template>
  <select multiple size="5">
    <option v-for="option in options" :key="option.id" :value="option.id">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
import $ from 'jquery';
import 'select2';
import 'select2/dist/css/select2.css';

export default {
  name: 'multi-select',
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
  },
  mounted () {
    const selectEl = this.$el;
    const jqEl = $(selectEl);
    jqEl.select2({ multiple: true });
    jqEl.on('change', () => {
      this.$emit('input', jqEl.val());
    });
    this.$once('hook:beforeDestroy', () => {
      jqEl.select2('destroy');
    });
  },
  watch: {
    value (newVal, oldVal) {
      if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
        $(this.$el).val(newVal).trigger('change');
      }
    },
  },
};
</script>

<style scoped>
select {
  height: 100%;
  width: 200px;
}
</style>
