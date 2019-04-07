<template>
  <div>
    <div v-if="loading">loading people...</div>
    <ul v-else>
      <li v-for="person in data" :key="person.url">
        {{ person.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import APIFetchMixin from './APIFetchMixin';

export default {
  name: 'people-list',
  mixins: [APIFetchMixin],
  methods: {
    loadData () {
      return axios.get('https://swapi.co/api/people');
    },
  },
};
</script>
