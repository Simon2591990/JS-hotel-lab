<template lang="html">
<div id="guest-form">
    <h3>New Booking:</h3>
    <form v-on:submit="addGuest" method="post">
        <input type="text" id="name" v-model="name"  placeholder="Name:" required>
        <input type="text" id="email" v-model="email" placeholder="Email:" required>
        <button type="submit" id="submit">Submit</button>    
    </form>
</div>

</template>

<script>
import HotelService from '@/services/HotelService.js';
import {eventBus} from '@/main.js';

export default {
    name: 'guest-form',
    data(){
        return{
            name: '',
            email: '',
            checkedIn: null
        }
    },
    methods: {
        addGuest(e){
            if (this.name && this.email){
            e.preventDefault()
            const guest = {
                name: this.name,
                emailAddress: this.email,
                checkedIn: false
            }
        HotelService.addGuest(guest)
        .then(res => eventBus.$emit('guest-added', res))
        }}
    }

}
</script>

<style lang="css" scoped>
#guest-form{
    background: #f4d5db;
    padding: 10px
}
button{
    background: #C4F4C7;
    border-radius: 7px;
    border: 2px solid  #C4F4C7
}

#guest-form > h3 {
    margin: 0;
    padding: 0;
}

input {
    border-radius: 7px;
    border: 1px;
}

</style>