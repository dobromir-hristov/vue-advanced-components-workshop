<template>
  <page-layout>
    <template slot="header">
      Custom header
    </template>
    TODO: here be page 2 content
  </page-layout>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';

export default {
  name: 'page-2',
  components: {
    PageLayout,
  },
};
</script>
