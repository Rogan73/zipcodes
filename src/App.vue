<template>

<img class="c1" srcset="https://64.media.tumblr.com/f00b3c41898fcceb9c2a84e9ccf13a92/tumblr_oi4km9G7y11u2gapso1_100.pnj 100w, https://64.media.tumblr.com/f00b3c41898fcceb9c2a84e9ccf13a92/tumblr_oi4km9G7y11u2gapso1_250.pnj 250w, https://64.media.tumblr.com/f00b3c41898fcceb9c2a84e9ccf13a92/tumblr_oi4km9G7y11u2gapso1_400.pnj 400w, https://64.media.tumblr.com/f00b3c41898fcceb9c2a84e9ccf13a92/tumblr_oi4km9G7y11u2gapso1_500.pnj 500w, https://64.media.tumblr.com/f00b3c41898fcceb9c2a84e9ccf13a92/tumblr_oi4km9G7y11u2gapso1_540.pnj 540w, https://64.media.tumblr.com/f00b3c41898fcceb9c2a84e9ccf13a92/tumblr_oi4km9G7y11u2gapso1_640.pnj 640w, https://64.media.tumblr.com/f00b3c41898fcceb9c2a84e9ccf13a92/tumblr_oi4km9G7y11u2gapso1_1280.pnj 1280w" sizes="(max-width: 1280px) 100vw, 1280px" alt="Image" >
<img class="c2" srcset="https://64.media.tumblr.com/43154e5192cc580ed8dc9918d96fd47f/tumblr_oi4km6AwqB1u2gapso1_100.pnj 100w, https://64.media.tumblr.com/43154e5192cc580ed8dc9918d96fd47f/tumblr_oi4km6AwqB1u2gapso1_250.pnj 250w, https://64.media.tumblr.com/43154e5192cc580ed8dc9918d96fd47f/tumblr_oi4km6AwqB1u2gapso1_400.pnj 400w, https://64.media.tumblr.com/43154e5192cc580ed8dc9918d96fd47f/tumblr_oi4km6AwqB1u2gapso1_500.pnj 500w, https://64.media.tumblr.com/43154e5192cc580ed8dc9918d96fd47f/tumblr_oi4km6AwqB1u2gapso1_540.pnj 540w, https://64.media.tumblr.com/43154e5192cc580ed8dc9918d96fd47f/tumblr_oi4km6AwqB1u2gapso1_640.pnj 640w, https://64.media.tumblr.com/43154e5192cc580ed8dc9918d96fd47f/tumblr_oi4km6AwqB1u2gapso1_1280.pnj 1280w" sizes="(max-width: 1280px) 100vw, 1280px" alt="Image" >

  <div 
    class="main_panel"
    :class="Data.active ? 'active': ''"
      
  >
     <section class="user">
       <p> <span class="text-3xl ">Hi!</span> <span>We're glad to see you! </span></p>
       <p >
       How are things going in <span class="text-slate-50 mr-1"> {{Data.gLocation.city }} </span>?
       <br>
       We know a lot of things about you:
      </p>

      <tEdit title="ZIP code" :value=" Data.gLocation.zip "/>
      <tEdit title="Country" :value=" ` ${Data.gLocation.country} (${Data.gLocation.countryCode})` "/>
      <tEdit title="Region" :value="Data.gLocation.regionName"/>
      <tEdit title="City" :value="Data.gLocation.city"/>
      <tEdit title="ISP" :value="Data.gLocation.isp"/>
      
      <a class="btn btn-warning" :href=" `https://www.google.com/maps/search/?api=1&query=${Data.gLocation.lat},${Data.gLocation.lon}`" target="_blank">Google maps</a>
    </section>

    <section class="zipcode">
     <p>What are you looking for in the USA?</p>
     <tSearch/>

    </section> 

  </div>
</template>

<script setup>
import {onMounted} from 'vue'
import { useData } from './store'
import tEdit from './components/tEdit.vue'
import tSearch from './components/tSearch.vue'

const Data=useData()


onMounted( ()=>{

  Data.loadLocaction();

})

</script>

<style >

</style>