<template>
  <div>

    <div class="text-center mb-10">
      <p class="text-xs text-gray-400">Ultimo aggiornamento</p>
      <p class="text-gray-600">{{ timestamp }}</p>
    </div>

    <div v-if="loading" class="text-center text-gray-500">Loading...</div>
    
    <div v-else>
      <StatsBox :title="title" :stats="stats" />
      <CountrySelect @select-country="getCountryStats" :countries="countries" />
    </div>
  </div>
</template>

<script>
import covidApi from '@/api/covidApi'
import moment from 'moment'

import StatsBox from '@/components/StatsBox'
import CountrySelect from '@/components/CountrySelect'

export default {
  name: 'Home',
  components: {
    StatsBox, CountrySelect
  },
  data() {
    return {
      loading: true,
      date: '',
      title: 'Globali',
      stats: {},
      countries: {},
    }
  },
  computed: {
    timestamp() {
      return moment(this.date).format('D MMMM YYYY, h:mm:ss a');
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await covidApi.get('/summary');

      this.date = res.data.Date;
      this.stats = res.data.Global;
      this.countries = res.data.Countries;
      this.loading = false;
    },
    getCountryStats(country) {
      this.stats = country;
      this.title = country.Country;
    }
  },
  
}
</script>
