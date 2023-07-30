<script setup>
import Quartier from '@/components/QuartierMap.vue'
import TheChart from '@/components/TheChart.vue'
import { store } from '@/stores/StatData.js'

const batList = ['A', 'B', 'C', 'D', 'E']

const ids = [
  'CENTRE',
  'ST_LIGUAIRE',
  'NORD',
  'SOUCHE',
  'CHABOT',
  'ST_PEZENNE',
  'GOISE',
  'ST_FLORENT',
  'CLOU_BOUCHET'
]

const allStats = {
  CENTRE: [1, 4, 3, 5, 1],
  ST_LIGUAIRE: [0, 0, 1, 0, 0],
  NORD: [0, 0, 1, 1, 0],
  SOUCHE: [0, 1, 0, 2, 0],
  CHABOT: [0, 0, 1, 2, 0],
  ST_PEZENNE: [0, 0, 0, 1, 0],
  GOISE: [0, 0, 1, 1, 3],
  ST_FLORENT: [0, 0, 5, 0, 0],
  CLOU_BOUCHET: [0, 2, 1, 2, 0]
}

function initstat() {
  const result = new Array(14).fill(0)
  const long = result.length

  return Object.entries(stats).reduce((acc, value) => {
    for (let ni = 0; ni < long; ni++) {
      acc[ni] = acc[ni] + value[1][ni]
    }
    return acc
  }, result)
}

function sum(accumulator, currentValue) {
  return accumulator + currentValue
}

function sumquartier(quartierId = null) {
  const result = {}

  ids.forEach((value) => {
    if (quartierId === null || value === quartierId) {
      result[value] = stats[value].reduce(sum, 0)
    }
  })

  return result
}

function cquartier(n) {
  console.log('App.vue = %s', n)

  stats = Object.entries(allStats).reduce(function (obj, pair) {
    const [key, value] = pair
    if (key === n) {
      obj[key] = value
    }
    return obj
  }, {})

  store.setDataQuartier(sumquartier(n))
  store.setDataBatiementData(initstat())
}

function cbatiement(n) {
  stats = Object.entries(allStats).reduce(function (obj, pair) {
    const [key, values] = pair
    obj[key] = values.map((x, ndx) => {
      if (ndx === n) {
        return x
      }
      return 0
    })

    return obj
  }, {})

  store.setDataQuartier(sumquartier())
  store.setDataBatiementData(initstat())
}

function reset() {
  stats = allStats
  store.setDataQuartier(sumquartier())
  store.setDataBatiementData(initstat())
}

/**
 * init data
 */
let stats = allStats
store.setDataQuartier(sumquartier())
store.setDataBatiements(batList)
store.setDataBatiementData(initstat())
</script>

<template>
  <div class="row">
    <div class="column"><Quartier @click-quartier="cquartier" /></div>
    <div class="column">
      <a
        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        @click="reset"
        >Reset graphique</a
      >
      <TheChart @click-batiement="cbatiement" />
    </div>
  </div>
</template>

<style scoped>
.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: '';
  display: table;
  clear: both;
}
</style>
