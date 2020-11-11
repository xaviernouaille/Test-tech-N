import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    all: [{ format: 'Fichier', file: "consulting.pdf", name: "Consulting", tag: "Equipe", type: "Manual", data: "26/02/2020" }],
    stepper: 1,
    format: '',
    file: '',
    name: '',
    tag: '',
    type: '',
    date: ''
  },
  mutations: {
    setFormat(state, payload) {
      state.format = payload
    },
    setName(state, payload) {
      state.name = payload
    },
    setTag(state, payload) {
      state.tag = payload
      console.log(state.tag)
    },
    setType(state, payload) {
      state.type = payload
    },
    setDate(state, payload) {
      state.date = payload
    },
    saveCard(state) {
      const card = { format: state.format, file: state.file, name: state.name, tag: state.tag, type: state.type, date: state.date }
      state.all.push(card)
      state.format = ""
      state.name = ""
      state.tag = ""
      state.type = ""
      state.date = ""
      state.stepper = 1

      console.log(state.all)
    }
  },
  getters: {
    step1: state => {
      if (state.format == '') {
        return true
      } else {
        return false
      }
    },
    step2: state => {
      if (state.format == '' || state.name == '' || state.tag == '') {
        return true
      } else {
        return false
      }
    },
    step3: state => {
      if (state.format == '' || state.name == '' || state.tag == '' || state.type == '' || state.date == '') {
        return true
      } else {
        return false
      }
    },
  }
})
