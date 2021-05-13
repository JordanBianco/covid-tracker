<template>
  <div>
    <div class="bg-indigo-50 p-4 rounded">
        <h2 class="tracking-wider text-center text-gray-800 uppercase mb-4">
            Seleziona per paese
        </h2>
        
        <select
            v-model="selected"
            @change="selectCountry(selected)" 
            class="w-full p-2 text-sm border-gray-200 border rounded-xl hover:border-gray-300 focus:outline-none focus:border-gray-400">
                <option value="0">Seleziona Paese</option>
                <option
                    v-for="country in countries"
                    :key="country.ID"
                    :value="country">
                        {{ country.Country }}
                </option>
        </select>
        </div>
  </div>
</template>

<script>
export default {
    name: 'CountrySelect',
    props: ['countries'],
    data() {
        return {
            selected: 0,
        }
    },
    methods: {
        selectCountry(selected) {
            this.$emit('select-country', selected);
        }
    }
}
</script>