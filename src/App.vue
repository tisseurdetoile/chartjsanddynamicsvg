<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Quartier from './components/quartier.vue'

function callme(value) {
  console.log(value)
}

const maps = [
  {
    id: 'Souche',
    name: 'Souché',
    callback: 'Souche',
    coords:
      '257,148,274,224,310,261,438,319,480,319,465,292,478,239,535,211,544,187,464,135,355,140,317,142',
  },
  {
    id: 'Saint_Liguaire',
    name: 'Saint Liguaire',
    callback: 'Saint_Liguaire',
    coords: '205,200,108,462,228,529,312,457,295,255',
  },
  /**
  {
    id: 'Saint_Pezenne',
    name: 'Saint_Pezenne',
    callback: 'Saint_Pezenne',
    coords:
      '94,56,198,52,236,79,236,90,202,106,196,130,205,146,180,146,119,119,119,108,103,101',
  },
  {
    id: 'Nord',
    name: 'Nord',
    callback: 'Nord',
    coords:
      '259,11,281,25,279,58,351,151,268,182,214,153,198,126,207,108,238,94,238,79,202,49',
  },

  {
    id: 'Goise',
    name: 'Goise Champommier Champclairot',
    callback: 'Goise',
    coords: '250,196,326,227,274,295,225,243',
  },
  {
    id: 'Centre_ville',
    name: 'Centre ville',
    callback: 'centre_ville',
    coords:
      '182,148,209,153,261,182,261,193,250,193,236,220,214,202,196,214,180,205,187,202',
  },
  {
    id: 'Saint_Florent',
    name: 'Saint Florent',
    callback: 'saint_florent',
    coords:
      '214,207,232,223,223,245,277,299,274,313,214,304,193,337,148,326,160,252',
  },
  {
    id: 'Clou-Bouchet',
    name: 'Clou Bouchet',
    callback: 'clou_Bouchet',
    coords: '191,214,142,265,85,247,121,220,175,207',
  },
  {
    id: 'Tour_Chabot',
    name: 'Tour Chabot / Gavacherie',
    callback: 'tour_chabot',
    coords: '117,121,180,151,182,200,124,214',
  },
  /**

   */
]
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>
    <!--
    <map  name="ImageMap_quartier">
      <area
        v-for="data in maps"
        v-bind:key="data.id"
        href=""
        shape="poly"
        :coords="data.coords"
        :alt="data.name"
        :title="data.name"
        @click.prevent="callme(data.callback)"
      />
    </map>

    <img alt="none" src="/dessin.svg" usemap="#ImageMap_quartier" />
    -->
    <Quartier />
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
