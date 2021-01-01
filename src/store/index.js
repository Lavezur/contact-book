import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
        others: JSON.parse(localStorage.getItem('others') || '[]')
    },

    mutations: {
        createContact (state, contact) {
            state.contacts.push(contact)

            localStorage.setItem('contacts', JSON.stringify(state.contacts))
        },

        createOther (state, other) {
            state.others.push(other)

            localStorage.setItem('others', JSON.stringify(state.others))
        },

        updateContact (state, {id, contName, contWorkplace, contPhone, contMail}) {
            const contacts = state.contacts.concat()

            const index = contacts.findIndex(t => t.id === id)
            const contact = contacts[index]

            contacts[index] = {...contact, contName, contWorkplace, contPhone, contMail}

            state.contacts = contacts

            localStorage.setItem('contacts', JSON.stringify(state.contacts))
        },

        updateOther (state, {id, contAttribute, contAttValue}) {
            const others = state.others.concat()

            const index = others.findIndex(t => t.id === id)
            const other = others[index]

            others[index] = {...other, contAttribute, contAttValue}

            state.others = others

            localStorage.setItem('others', JSON.stringify(state.others))
        },

        deleteHandler (state, id) {
            const contacts = state.contacts.concat()
            const index = contacts.findIndex(t => t.id === id)

            state.contacts.splice(index, 1);
            this.commit('saveData');
        },

        deleteOtherHandler (state, id) {
            const others = state.others.concat()
            const index = others.findIndex(t => t.id === id)

            state.others.splice(index, 1);
            this.commit('savaData');
        },

        saveData(state) {
            window.localStorage.setItem('contacts', JSON.stringify(state.contacts))
        }
    },

    actions: {
        createContact ({commit}, contact) {
            commit('createContact', contact)
        },

        createOther ({commit}, other) {
            commit('createOther', other)
        },

        updateContact ({commit}, contact) {
            commit('updateContact', contact)
        },

        updateOther ({commit}, other) {
            commit('updateOther', other)
        },

        deleteHandler ({commit}, contact, id) {
            commit('deleteHandler', contact, id)
        },

        deleteOther ({commit}, other, id) {
            commit('deleteOtherHandler', other, id)
        }
    },

    getters: {
        contacts: s => s.contacts,
        contactsId: s => id => s.contacts.find(t => t.id === id),
        others: q => q.others,
        othersId: q => id => q.others.find(t => t.id === id)
    }
})


export default store;
