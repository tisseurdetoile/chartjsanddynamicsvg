// store.js
import { reactive } from 'vue'

export const store = reactive({
  data: {
    quartier: [],
    batiements: [],
    batiementData: []
  },

  setDataQuartier(something) {
    this.data.quartier = something
  },

  setDataBatiements(batiements) {
    this.data.batiements = batiements
  },

  setDataBatiementData(data) {
    this.data.batiementData = data
  }
})
