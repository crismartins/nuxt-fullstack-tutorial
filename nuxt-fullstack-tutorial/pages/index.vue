<template>
    <section>
      <o-button variant="info" @click="clickMe">Click Me now</o-button>
    </section>
</template>
<script setup>
  
      function clickMe(){
        alert('Clicked!')
      }

</script>