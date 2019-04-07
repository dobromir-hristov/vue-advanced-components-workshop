<template>
  <div>
    <div v-if="loading">loading planets...</div>
    <ul v-else>
      <li v-for="planet in data" :key="planet.url">
        {{ planet.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import APIFetchMixin from './APIFetchMixin';

export default {
  name: 'planet-list',
  mixins: [APIFetchMixin],
  methods: {
    loadData () {
      return axios.get('https://swapi.co/api/planets');
    },
  },
};
</script>
