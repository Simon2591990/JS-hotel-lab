const baseURL = 'http://localhost:3000/api/guests/'

export default {
    getGuests(){
        return fetch(baseURL)
        .then(res => res.json())
    },
    addGuest(payload){
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },

    deleteGuest(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'    
        })
    },
    updateGuest(guest) {
        const updatedGuest = { 
            name: guest.name,
            emailAddress: guest.emailAddress,
            checkedIn: guest.checkedIn
        }
        return fetch(baseURL + guest._id, {
            method: 'PUT',
            body: JSON.stringify(updatedGuest),
            headers: { 'Content-Type': 'application/json'}
        })
    }
}