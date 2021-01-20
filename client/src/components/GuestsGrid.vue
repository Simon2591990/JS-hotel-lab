<template lang="html">
    <div id="guests-grid">
        <guest-card v-for="(guest, index) in guests" :key="index" :guest="guest"></guest-card>
    </div>
</template>

<script>
import HotelService from '@/services/HotelService.js';
import GuestCard from '@/components/GuestCard.vue';
import {eventBus} from '@/main.js';

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

        eventBus.$on('guest-added', (guest) => {
            this.guests.push(guest)
        })

        eventBus.$on('guest-deleted', (id) => {
            let index = this.guests.findIndex(guest => guest._id === id)
            this.guests.splice(index, 1)
        })
    },
    components:{
        'guest-card': GuestCard
    }
    }


</script>

<style lang="css" scoped>
#guests-grid{
    background: #f4d5db;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    padding: 10px;

}

</style>