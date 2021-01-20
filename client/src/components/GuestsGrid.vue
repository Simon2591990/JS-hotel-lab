<template lang="html">
    <div id="guests-grid">
        <guest-card v-for="(guest, index) in guests" :key="index" :guest="guest"></guest-card>
    </div>
</template>

<script>
import HotelService from '@/services/HotelService.js';
import GuestCard from '@/components/GuestCard.vue'

export default {
    name: 'guests-grid',
    data(){
        return{
            guests: []
    };
    },
    mounted(){
        HotelService.getGuests()
        .then(guests => this.guests = guests)
    },
    components:{
        'guest-card': GuestCard
    }
    }


</script>

<style lang="css" scoped>

</style>