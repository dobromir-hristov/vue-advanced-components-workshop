<template>
  <div id="app">
    <theme-provider :theme="activeTheme" :with-theme="withTheme">
      <square>I am square!</square>

      <button @click="withTheme = !withTheme">
        With{{ withTheme ? 'out' : '' }} theme
      </button>
      <button @click="chosenTheme = chosenTheme === 0 ? 1 : 0">
        Switch theme
      </button>
    </theme-provider>
  </div>
</template>

<script>
import ThemeProvider from './components/ThemeProvider.vue';
import Square from './components/Square.vue';

export default {
  name: 'app',
  components: {
    ThemeProvider,
    Square,
  },
  data() {
    return {
      themes: [
        {
          color: 'orangered',
          backgroundColor: 'lightgreen',
        },
        {
          color: 'yellow',
          backgroundColor: 'navy',
        },
      ],
      withTheme: false,
      chosenTheme: 0,
    };
  },
  computed: {
    activeTheme() {
      return this.themes[this.chosenTheme];
    },
  },
};
</script>

<style>
body,
button {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}

button {
  display: block;
  font-size: 16px;
  margin: 10px 0;
}
</style>
