<template>
      <label class="input-group input-group-sm mb-2">
       <span class="w-[100px]">{{props.title}}</span>
        <input type="text" placeholder="Type here" class="input input-bordered input-sm" :value="props.value"/>
      </label>
</template>

<script setup>

const props = defineProps(['title', 'value'])

</script>