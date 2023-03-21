<template>
<div class="form-control">
  <div class="input-group">
    <input 
    type="text" 
    placeholder="US ZIP Code…" 
    class="input input-bordered" 
    v-model.number="Data.search"  
    @keyup.enter="Data.FindData" 
    />
    <button class="btn btn-square btn-error mb-2" @click="Data.FindData">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
   
   <div class="" 
   v-for="item , i in Data.gZip"
   >
      <span class="font-bold">State: </span> <span class="value">{{ `${item.state} (${item.state_code})` }}</span> <br>
      <span class="font-bold">Province: </span> <span class="value">{{ `${item.province} code (${item.province_code})` }}</span> <br>
      <span class="font-bold">City: </span> <span class="value">{{ item.city }}</span><br>
      

      

   </div>


</div>
</template>

<script setup>

import { useData } from './../store'
const Data=useData()



</script>