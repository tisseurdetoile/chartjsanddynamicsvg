<template>
  <Bar id="batiement-chart-id" :options="chartOptions" :data="chartData" />
</template>
<script setup>
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Colors
} from 'chart.js'
import { store } from '@/stores/StatData.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors)

const chartData = computed(() => {
  return {
    labels: store.data.batiements,
    datasets: [
      {
        label: 'Nombre',
        data: store.data.batiementData
      }
    ]
  }
})

const chartOptions = computed(() => {
  return {
    responsive: true,
    onClick: handle
  }
})

const emit = defineEmits(['clickBatiement'])

function handle(point, event) {
  if (event[0] !== undefined && event[0] !== null) {
    const item = event[0].index
    emit('clickBatiement', item)
  }
}

// https://github.com/modrinth/omorphia/blob/8369330053d13e9aae2b44aaeea2b67fcf6c0174/lib/components/chart/BarChart.vue#L4
</script>
