<template>
  <div id="app">
    <h1>Simon and Giulia's Cool Hotel</h1>
    <guests-grid></guests-grid>
    
  </div>
</template>

<script>
import HotelService from '@/services/HotelService.js';
import GuestsGrid from '@/components/GuestsGrid.vue';


export default {
  name: 'App',
  components: {
    'guests-grid': GuestsGrid
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
