import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        contacts: JSON.parse(localStorage.getItem('contacts') || '[]')
    },

    mutations: {
        createContact (state, contact) {
            state.contacts.push(contact)

            localStorage.setItem('contacts', JSON.stringify(state.contacts))
        },

        updateContact(state, {id, contName, contWorkplace, contPhone, contMail}) {
            const contacts = state.contacts.concat()

            const index = contacts.findIndex(t => t.id === id)
            const contact = contacts[index]

            contacts[index] = {...contact, contName, contWorkplace, contPhone, contMail}

            state.contacts = contacts

            localStorage.setItem('contacts', JSON.stringify(state.contacts))
        },

        deleteHandler (state, id) {
            const contacts = state.contacts.concat()
            const index = contacts.findIndex(t => t.id === id)

            state.contacts.splice(index, 1);
        }
    },

    actions: {
        createContact ({ commit }, contact) {
            commit('createContact', contact)
        },

        updateContact ({commit}, contact) {
            commit('updateContact', contact)
        },

        deleteHandler ({commit}, contact, id) {
            commit('deleteHandler', contact, id)
        }
    },

    getters: {
        contacts: s => s.contacts,
        contactsId: s => id => s.contacts.find(t => t.id === id)
    }
})


export default store;
