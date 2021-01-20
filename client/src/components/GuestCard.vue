<template lang="html">
    <div class="guest-card">
        <h3>{{guest.name}}</h3>
        <p>Email: {{guest.emailAddress}}</p>
        <p  v-if="guest.checkedIn === true">Checked in</p>
        <p  v-if="guest.checkedIn === false">Checked out</p>
        <button v-if="guest.checkedIn === true" v-on:click="checkOut">Check Out</button>
        <button v-if="guest.checkedIn === false" v-on:click="checkIn">Check In</button>
        <button v-on:click="deleteGuest">Delete</button>
    </div>
</template>

<script>
import HotelService from '@/services/HotelService.js';
import {eventBus} from '@/main.js';

export default {
    name: 'guest-card',
    props: ['guest'],
    methods: {
        deleteGuest() {
            HotelService.deleteGuest(this.guest._id)
            .then(() => eventBus.$emit('guest-deleted', this.guest._id))
        },
        checkIn(){
            this.guest.checkedIn = true
        },
        checkOut(){
            this.guest.checkedIn = false
        }
    }
}
</script>

<style lang="css" scoped>
.guest-card{
    background:#C4F4C7;
    color: #030027;
    padding: 10px;
    border-radius: 7px;
    border: 2px dotted 
}

</style>