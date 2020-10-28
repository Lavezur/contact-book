import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        contacts: JSON.parse(localStorage.getItem('contacts') || '[]')
    },
    mutations: {
        createContact (state, contact) {
            state.contacts.push(contact)

            localStorage.setItem('contacts', JSON.stringify(state.contacts))
        }
    },
    actions: {
        createContact ({ commit }, contact) {
            commit('createContact', contact)
        }
    },
    getters: {
        contacts: s => s.contacts,
        contactsId: s => id => s.contacts.find(t => t.id === id)
    }
})

export default store;
