<template>
  <div class="bg-indigo-50 p-4 rounded mb-10">
      <h2 class="tracking-wider text-center text-gray-800 uppercase mb-4">
        Casi {{ title }}
      </h2>
      
      <div class="flex flex-col space-y-3 text-sm">
        <p class="text-gray-500 flex justify-between items-center border-b border-indigo-100 pb-1">
          <span class="tracking-wider">nuovi casi</span>
          <span>{{ stats.NewConfirmed }}</span>
        </p>

        <p class="text-red-500 flex justify-between items-center border-b border-indigo-100 pb-1">
          <span class="tracking-wider">nuovi morti</span>
          <span>{{ stats.NewDeaths }}</span>
        </p>

        <p class="text-green-500 flex justify-between items-center border-b border-indigo-100 pb-1">
          <span class="tracking-wider">nuovi guariti</span>
          <span>{{ stats.NewRecovered }}</span>
        </p>

        <p class="text-gray-500 flex justify-between items-center border-b border-indigo-100 pb-1">
          <span class="tracking-wider">totale casi</span>
          <span>{{ stats.TotalConfirmed }}</span>
        </p>

        <p class="text-red-500 flex justify-between items-center border-b border-indigo-100 pb-1">
          <span class="tracking-wider">totale morti</span>
          <span>{{ stats.TotalDeaths }}</span>
        </p>

        <p class="flex justify-between items-center text-green-500">
          <span class="tracking-wider">totale guariti</span>
          <span>{{ stats.TotalRecovered }}</span>
        </p> 
      </div>
  </div>
</template>

<script>
export default {
    name: 'StatsBox',
    props: ['stats', 'title'],
}
</script>