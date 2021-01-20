<template>
  <div id="app">
    <h1>Simon and Giulia's Cool Hotel</h1>
    <div id="app-wrapper">
    <guests-grid id="guests-grid"></guests-grid>
    <guest-form id="guest-form"></guest-form>
    </div>
  </div>
</template>

<script>
import HotelService from '@/services/HotelService.js';
import GuestsGrid from '@/components/GuestsGrid.vue';
import GuestForm from '@/components/GuestForm.vue';


export default {
  name: 'App',
  components: {
    'guests-grid': GuestsGrid,
    'guest-form': GuestForm
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
  text-align: center;
  color: #2c3e50;
  background: aliceblue;
  margin-top: 60px;
}
#app > h1 {
  font-family: 'Codystar', sans-serif;
}
#app-wrapper {
  display: grid;
  grid-template-columns: 1fr 0.2fr;
}

</style>
