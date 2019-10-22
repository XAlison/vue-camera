import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        settings: {
            cloudname: '',
            preset: ''
        }
    },
    mutations: {
        updateCloudname(state, cloudname) {
            state.settings.cloudname = cloudname
        },
        updatePreset(state, preset) {
            state.settings.preset = preset
        }
    }
})

//   editTodo (state, { todo, text = todo.text, done = todo.done }) {
//     todo.text = text
//     todo.done = done
//   }

export default store