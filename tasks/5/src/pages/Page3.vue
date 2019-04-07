<template>
  <page-layout>
    TODO: here be page 3 content
    <template slot="footer">
      Custom header
    </template>
  </page-layout>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';

export default {
  name: 'page-3',
  components: {
    PageLayout,
  },
};
</script>
