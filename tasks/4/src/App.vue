<template>
  <div id="app" class="container mt-4">
    <button
      class="btn btn-primary"
      @click="isModalVisible = true"
    >
      Open modal
    </button>
    <app-modal
      title="People"
      v-model="isModalVisible"
      @ok="isModalVisible = false"
    >
      <div v-if="loading">loading people...</div>
      <ul v-else>
        <li v-for="person in people" :key="person.url">
          {{ person.name }}
        </li>
      </ul>
    </app-modal>
  </div>
</template>

<script>
import axios from 'axios';
import Modal from './components/Modal.vue';

export default {
  name: 'app',
  components: {
    AppModal: Modal,
  },
  data () {
    return {
      loading: false,
      people: [],
      isModalVisible: false,
    };
  },
  created () {
    this.loadPeople();
  },
  methods: {
    loadPeople () {
      this.loading = true;
      axios.get('https://swapi.co/api/people').then(res => {
        this.people = res.data.results;
        this.loading = false;
      });
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
  font-size: 16px;
}
</style>
