export default {
  data () {
    return {
      loading: false,
      data: [],
    };
  },
  created () {
    this._fetchData();
  },
  methods: {
    async _fetchData () {
      this.loading = true;
      const response = await this.loadData();
      this.data = response.data.results;
      this.loading = false;
    },
  },
};
