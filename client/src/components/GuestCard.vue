<template lang="html">
    <div class="guest-card">
        <h2>Name: {{guest.name}}</h2>
        <p>Email: {{guest.emailAddress}}</p>
        <p>Checked in: {{guest.checkedIn}}</p>
    </div>
</template>

<script>
export default {
    name: 'guest-card',
    props: ['guest']

}
</script>

<style lang="css" scoped>

</style>