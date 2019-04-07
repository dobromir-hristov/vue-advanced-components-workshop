<template>
  <div>
    <div>
      <select v-model="computedValue">
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
        <option value="__other__">Other</option>
      </select>
    </div>
    <div class="input" v-if="otherVisible">
      <input v-model="otherOption"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select-other',
  data () {
    return {
      otherOption: '',
      otherVisible: false,
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: null,
    },
  },
  computed: {
    computedValue: {
      get () {
        if (this.options.includes(this.value) || this.value === null) {
          return this.value;
        }
        return '__other__';
      },
      set (value) {
        if (value === '__other__') {
          this.otherVisible = true;
          this.otherOption = ''
          return false;
        }
        this.otherVisible = false;
        this.$emit('input', value);
      },
    },
  },
  watch: {
    otherOption (value) {
      this.$emit('input', value);
    },
    value (val) {
      if (val !== null && !this.options.includes(val)) {
        this.otherOption = val;
        this.otherVisible = true;
      } else {
        this.otherVisible = false;
      }
    },
  },
};
</script>

<style scoped>
select,
input {
  width: 200px;
}

.input {
  margin-top: 10px;
}
</style>
