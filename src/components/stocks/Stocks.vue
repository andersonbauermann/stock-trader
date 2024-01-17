<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
    </v-layout>
</template>

<script>

import Stock from './Stock.vue';

export default {    
    components: {
        Stock
    },
    data() {
        return {
            stocks: [
                { id: 1, name: 'BMW', price: 110 },
                { id: 2, name: 'APPLE', price: 300 },
                { id: 3, name: 'GOOGLE', price: 270 },
                { id: 4, name: 'AMAZON', price: 240 }
            ]
        }
    }
}
</script>

<style>

</style>