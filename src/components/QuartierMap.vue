<script setup>
import { computed, reactive } from 'vue'
import { store } from '@/stores/StatData.js'

const emit = defineEmits(['clickQuartier'])

function clickQuartier(value) {
  emit('clickQuartier', value)
}

// a computed ref
const sums = computed(() => {
  return store.data.quartier
})

const colorGoise = computed(() => {
  const dquartier = store.data.quartier.GOISE
  if (dquartier != undefined && dquartier != null && dquartier > 0) {
    return { fill: '#86dd6b' }
  } else {
    return { fill: 'grey' }
  }
})

const colorStLiguaire = computed(() => {
  const dquartier = store.data.quartier.ST_LIGUAIRE
  if (dquartier != undefined && dquartier != null && dquartier > 0) {
    return { fill: '#f49cd8' }
  } else {
    return { fill: 'grey' }
  }
})

const colorStPezenne = computed(() => {
  const dquartier = store.data.quartier.ST_PEZENNE
  if (dquartier != undefined && dquartier != null && dquartier > 0) {
    return { fill: '#499152' }
  } else {
    return { fill: 'grey' }
  }
})

const colorNord = computed(() => {
  const dquartier = store.data.quartier.NORD
  if (dquartier != undefined && dquartier != null && dquartier > 0) {
    return { fill: '#dde169' }
  } else {
    return { fill: 'grey' }
  }
})

const colorChabot = computed(() => {
  const dquartier = store.data.quartier.CHABOT
  if (dquartier != undefined && dquartier != null && dquartier > 0) {
    return { fill: '#b173bc' }
  } else {
    return { fill: 'grey' }
  }
})

const colorClouBouchet = computed(() => {
  const dquartier = store.data.quartier.CLOU_BOUCHET
  if (dquartier != undefined && dquartier != null && dquartier > 0) {
    return { fill: '#496588' }
  } else {
    return { fill: 'grey' }
  }
})

const colorCentre = computed(() => {
  const dquartier = store.data.quartier.CENTRE
  if (dquartier != undefined && dquartier != null && dquartier > 0) {
    return { fill: '#68b7e0' }
  } else {
    return { fill: 'grey' }
  }
})

const colorStFlorent = computed(() => {
  const dquartier = store.data.quartier.ST_FLORENT
  if (dquartier != undefined && dquartier != null && dquartier > 0) {
    return { fill: '#fc6868' }
  } else {
    return { fill: 'grey' }
  }
})

const colorSouche = computed(() => {
  const dquartier = store.data.quartier.SOUCHE
  if (dquartier != undefined && dquartier != null && dquartier > 0) {
    return { fill: '#fca369' }
  } else {
    return { fill: 'grey' }
  }
})

const styleObject = reactive({
  'stroke-width': 0.264583,
  'fill-opacity': 1
})
</script>
<template>
  <svg
    width="900px"
    height="713px"
    viewBox="0 0 297 210"
    version="1.1"
    id="svg5"
    xml:space="preserve"
    inkscape:version="1.3 (0e150ed, 2023-07-21)"
    sodipodi:docname="dessin.svg"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
  >
    <defs id="defs1">
      <rect x="37.661348" y="97.291817" width="81.599595" height="59.002781" id="rect4" />
      <rect x="17.021955" y="186.29584" width="59.576842" height="131.44732" id="rect3" />
      <rect x="149.41494" y="267.62296" width="77.544461" height="132.39298" id="rect1" />
      <rect x="37.661346" y="97.291817" width="214.04199" height="68.418128" id="rect4-5" />
      <rect x="37.661346" y="97.291817" width="231.61729" height="227.85117" id="rect4-2" />
      <rect x="37.661346" y="97.291817" width="195.83901" height="52.7259" id="rect4-7" />
      <rect x="37.661346" y="97.291817" width="87.248796" height="69.045807" id="rect4-4" />
      <rect x="37.661346" y="97.291817" width="231.61729" height="227.85117" id="rect4-5-5" />
      <rect x="37.661346" y="97.291817" width="195.839" height="52.725899" id="rect4-7-0" />
      <rect x="37.661346" y="97.291817" width="195.839" height="52.725899" id="rect4-7-0-8" />
      <rect x="37.661346" y="97.291817" width="197.09438" height="75.322708" id="rect4-7-0-2" />
      <rect x="37.661346" y="97.291817" width="195.839" height="52.725899" id="rect4-7-0-82" />
    </defs>
    <g id="g1">
      <path
        @click="clickQuartier('ST_LIGUAIRE')"
        :style="[styleObject, colorStLiguaire]"
        d="M 54.089111,52.411928 C 78.408246,67.08727 78.408246,67.08727 78.408246,67.08727 l 4.192955,53.66982 -22.222658,19.28759 -32.285749,-18.02971 z"
        id="ST_LIGUAIRE"
      />
      <path
        @click="clickQuartier('ST_PEZENNE')"
        :style="[styleObject, colorStPezenne]"
        d="m 67.506566,38.155885 5.45084,21.384066 8.385908,4.192956 v 6.289431 l 33.962926,14.256044 12.99816,1.257887 -5.87013,-9.643795 4.19295,-12.998159 15.93323,-7.128023 1.25788,-6.708727 -20.96477,-13.836748 z"
        id="ST_PEZENNE"
      />
      <path
        @click="clickQuartier('NORD')"
        :style="[styleObject, colorNord]"
        d="m 155.9779,14.67534 11.74027,6.708727 -1.25788,18.448998 38.57518,46.541796 -44.02602,17.191109 -27.6735,-14.256042 -8.38591,-12.998158 2.93507,-12.159568 16.77181,-7.547318 0.8386,-7.547319 -19.28759,-14.256044 z"
        id="NORD"
      />
      <path
        @click="clickQuartier('CHABOT')"
        :style="[styleObject, colorChabot]"
        d="m 81.4507,71.502523 32.0207,15.233145 2.3316,26.580282 -31.709816,8.39378 z"
        id="CHABOT"
      />
      <path
        @click="clickQuartier('CLOU_BOUCHET')"
        :style="[styleObject, colorClouBouchet]"
        d="m 64.19683,138.80816 18.963714,-15.07771 28.134686,-6.99481 9.17098,4.50777 -27.046609,25.18132 z"
        id="CLOU_BOUCHET"
      />
      <path
        @click="clickQuartier('CENTRE')"
        :style="[styleObject, colorCentre]"
        d="m 129.17086,87.046548 1.70984,2.487046 27.04661,14.300506 -1.70984,6.52849 -4.81865,-0.7772 -9.01554,14.76682 -10.72537,-9.32641 v 0 l -9.94818,5.28497 -8.8601,-4.50777 4.19689,-1.39896 -2.3316,-27.823813 z"
        id="CENTRE"
      />
      <path
        @click="clickQuartier('ST_FLORENT')"
        :style="[styleObject, colorStFlorent]"
        d="m 121.55429,186.062 10.72538,-18.34195 31.55437,4.97408 0.7772,-6.68393 -28.75645,-29.22277 5.12953,-10.72537 -9.01553,-9.01554 -9.01554,4.81865 -20.36268,18.65283 -5.129522,39.94815 z"
        id="ST_FLORENT"
      />
      <path
        @click="clickQuartier('GOISE')"
        :style="[styleObject, colorGoise]"
        d="m 152.02058,111.29523 38.54919,15.85491 -25.02589,36.99478 -27.0466,-28.29013 z"
        id="GOISE"
      />
      <path
        @click="clickQuartier('SOUCHE')"
        :style="[styleObject, colorSouche]"
        d="m 159.32627,104.92218 -1.86528,6.06217 35.44038,15.38859 -5.75129,9.48185 47.56472,13.67875 11.9689,-40.88079 -24.715,-25.803089 z"
        id="SOUCHE"
      />
    </g>
    <text
      xml:space="preserve"
      transform="matrix(0.33,0,0,0.33,0,-12.645)"
      id="text1"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: bold;
        font-stretch: normal;
        font-size: 18.6667px;
        font-family: Courier, monospace;
        text-align: center;
        white-space: pre;
        shape-inside: url(#rect1);
        display: inline;
        fill: #fc6868;
        fill-opacity: 0;
      "
    />
    <text
      xml:space="preserve"
      transform="matrix(0.33,0,0,0.33,0,-12.645)"
      id="text3"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: bold;
        font-stretch: normal;
        font-size: 18.6667px;
        font-family: Courier, monospace;
        text-align: center;
        white-space: pre;
        shape-inside: url(#rect3);
        display: inline;
        fill: #2b0000;
        fill-opacity: 0;
      "
    />
    <text
      xml:space="preserve"
      transform="matrix(0.33,0,0,0.33,30.4492,59.645959)"
      id="text4"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: bold;
        font-stretch: normal;
        font-size: 13.3333px;
        font-family: Courier, monospace;
        text-align: center;
        white-space: pre;
        shape-inside: url(#rect4);
        display: inline;
        fill: #ff0000;
        fill-opacity: 0;
      "
    >
      <tspan x="58.458709" y="108.98277" id="tspan3">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan1">SAINT</tspan>
      </tspan>
      <tspan x="46.456787" y="125.6494" id="tspan10">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan9">LIGUAIRE</tspan>
      </tspan>
      <tspan x="62.45935" y="142.31603" id="tspan13">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan11">({{ sums.ST_LIGUAIRE }})</tspan>
        <tspan style="fill-opacity: 1" id="tspan12">&#10;</tspan>
      </tspan>
    </text>
    <text
      xml:space="preserve"
      transform="matrix(0.33,0,0,0.33,65.820764,91.697412)"
      id="text4-9"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: bold;
        font-stretch: normal;
        font-size: 13.3333px;
        font-family: Courier, monospace;
        text-align: center;
        white-space: pre;
        shape-inside: url(#rect4-4);
        display: inline;
        fill: #ff0000;
        fill-opacity: 0;
      "
    >
      <tspan x="65.283569" y="108.98277" id="tspan15">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan14">CLOU&#10;</tspan>
      </tspan>
      <tspan x="53.281646" y="125.6494" id="tspan17">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan16">BOUCHET&#10;</tspan>
      </tspan>
      <tspan x="65.283569" y="142.31603" id="tspan20">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan18">({{ sums.CLOU_BOUCHET }})</tspan>
        <tspan style="fill-opacity: 1" id="tspan19">&#10;</tspan>
      </tspan>
    </text>
    <text
      xml:space="preserve"
      transform="matrix(0.33,0,0,0.33,57.600271,13.490841)"
      id="text4-2"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: bold;
        font-stretch: normal;
        font-size: 13.3333px;
        font-family: Courier, monospace;
        text-align: center;
        white-space: pre;
        shape-inside: url(#rect4-7);
        display: inline;
        fill: #ff0000;
        fill-opacity: 0;
      "
    >
      <tspan onclick="alert('You have clicked the txt.')" x="111.57721" y="108.98277" id="tspan22">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan21">SAINTE&#10;</tspan>
      </tspan>
      <tspan x="107.57657" y="125.6494" id="tspan24" @click="clickQuartier('ST_PEZENNE')">
        <tspan
          style="fill: #0f0000; fill-opacity: 1"
          id="tspan23"
          @click="clickQuartier('ST_PEZENNE')"
        >
          PEZENNE&#10;
        </tspan>
      </tspan>
      <tspan x="119.57849" y="142.31603" id="tspan27">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan25">({{ sums.ST_PEZENNE }})</tspan>
        <tspan style="fill-opacity: 1" id="tspan26">&#10;</tspan>
      </tspan>
    </text>
    <text
      xml:space="preserve"
      transform="matrix(0.33,0,0,0.33,115.9206,26.949508)"
      id="text4-2-0"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: bold;
        font-stretch: normal;
        font-size: 13.3333px;
        font-family: Courier, monospace;
        text-align: center;
        white-space: pre;
        shape-inside: url(#rect4-7-0);
        display: inline;
        fill: #ff0000;
        fill-opacity: 0;
      "
    >
      <tspan x="103.57593" y="108.98277" id="tspan29">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan28">QUARTIER&#10;</tspan>
      </tspan>
      <tspan x="119.57849" y="125.6494" id="tspan31">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan30">NORD&#10;</tspan>
      </tspan>
      <tspan x="119.57849" y="142.31603" id="tspan34">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan32">({{ sums.NORD }})</tspan>
        <tspan style="fill-opacity: 1" id="tspan33">&#10;</tspan>
      </tspan>
    </text>
    <text
      xml:space="preserve"
      transform="matrix(0.33,0,0,0.33,164.37567,74.776952)"
      id="text4-2-0-5"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: bold;
        font-stretch: normal;
        font-size: 13.3333px;
        font-family: Courier, monospace;
        text-align: center;
        white-space: pre;
        shape-inside: url(#rect4-7-0-8);
        display: inline;
        fill: #ff0000;
        fill-opacity: 0;
      "
    >
      <tspan x="111.57721" y="108.98277" id="tspan36">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan35">SOUCHE&#10;</tspan>
      </tspan>
      <tspan x="119.57849" y="125.6494" id="tspan39">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan37">({{ sums.SOUCHE }})</tspan>
        <tspan style="fill-opacity: 1" id="tspan38">&#10;</tspan>
      </tspan>
    </text>
    <text
      xml:space="preserve"
      transform="matrix(0.33,0,0,0.33,118.96815,93.774966)"
      id="text4-2-0-7"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: bold;
        font-stretch: normal;
        font-size: 13.3333px;
        font-family: Courier, monospace;
        text-align: center;
        white-space: pre;
        shape-inside: url(#rect4-7-0-2);
        display: inline;
        fill: #ff0000;
        fill-opacity: 0;
      "
    >
      <tspan x="116.20578" y="108.98277" id="tspan41">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan40">GOISE&#10;</tspan>
      </tspan>
      <tspan x="88.201293" y="125.6494" id="tspan43">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan42">CHAMPCLAIROT&#10;</tspan>
      </tspan>
      <tspan x="92.201934" y="142.31603" id="tspan45">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan44">CHAMPOMMIER&#10;</tspan>
      </tspan>
      <tspan x="120.20642" y="158.98265" id="tspan48">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan46">({{ sums.GOISE }})</tspan>
        <tspan style="fill-opacity: 1" id="tspan47">&#10;</tspan>
      </tspan>
    </text>
    <text
      xml:space="preserve"
      transform="matrix(0.33,0,0,0.33,80.225096,108.85649)"
      id="text4-2-0-53"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: bold;
        font-stretch: normal;
        font-size: 13.3333px;
        font-family: Courier, monospace;
        -inkscape-font-specification: 'Courier New Bold';
        text-align: center;
        white-space: pre;
        shape-inside: url(#rect4-7-0-82);
        display: inline;
        fill: #ff0000;
        fill-opacity: 0;
      "
    >
      <tspan x="99.575286" y="108.98277" id="tspan50">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan49">SAINT&#10;</tspan>
      </tspan>
      <tspan x="119.57849" y="125.6494" id="tspan52">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan51">FLORENT&#10;</tspan>
      </tspan>
      <tspan x="119.57849" y="142.31603" id="tspan55">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan53">({{ sums.ST_FLORENT }})</tspan>
        <tspan style="fill-opacity: 1" id="tspan54">&#10;</tspan>
      </tspan>
    </text>
    <text
      xml:space="preserve"
      transform="matrix(0.33,0,0,0.33,42.460116,93.170844)"
      id="text4-4"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: bold;
        font-stretch: normal;
        font-size: 13.3333px;
        font-family: Courier, monospace;
        -inkscape-font-specification: 'Courier New Bold';
        text-align: center;
        white-space: pre;
        shape-inside: url(#rect4-2);
        display: inline;
        fill: #ff0000;
        fill-opacity: 0;
      "
    />
    <text
      xml:space="preserve"
      transform="matrix(0.33,0,0,0.33,50.718804,56.258819)"
      id="text4-1"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: bold;
        font-stretch: normal;
        font-size: 13.3333px;
        font-family: Courier, monospace;
        text-align: center;
        white-space: pre;
        shape-inside: url(#rect4-5);
        display: inline;
        fill: #ff0000;
        fill-opacity: 0;
      "
    >
      <tspan x="128.68005" y="108.98277" id="tspan57">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan56">TOUR&#10;</tspan>
      </tspan>
      <tspan x="120.67877" y="125.6494" id="tspan59">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan58">CHABOT&#10;</tspan>
      </tspan>
      <tspan x="104.67621" y="142.31603" id="tspan61">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan60">GAVACHERIE&#10;</tspan>
      </tspan>
      <tspan x="128.68005" y="158.98265" id="tspan64">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan62">({{ sums.CHABOT }})</tspan>
        <tspan style="fill-opacity: 1" id="tspan63">&#10;</tspan>
      </tspan>
    </text>
    <text
      xml:space="preserve"
      transform="matrix(0.33,0,0,0.33,80.176182,64.288285)"
      id="text4-1-0"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: bold;
        font-stretch: normal;
        font-size: 13.3333px;
        font-family: Courier, monospace;
        text-align: center;
        white-space: pre;
        shape-inside: url(#rect4-5-5);
        display: inline;
        fill: #ff0000;
        fill-opacity: 0;
      "
    >
      <tspan x="129.46686" y="108.98277" id="tspan66">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan65">CENTRE&#10;</tspan>
      </tspan>
      <tspan x="133.4675" y="125.6494" id="tspan68">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan67">VILLE&#10;</tspan>
      </tspan>
      <tspan x="137.46814" y="142.31603" id="tspan71">
        <tspan style="fill: #0f0000; fill-opacity: 1" id="tspan69">({{ sums.CENTRE }})</tspan>
        <tspan style="fill-opacity: 1" id="tspan70">&#10;</tspan>
      </tspan>
    </text>
  </svg>
</template>
