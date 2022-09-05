<script setup>
const music = ref(null);
function play() {
  // music.value.play(true);
}
</script>

<template>
  <div class="zzjtnb" @click="play">
    <Music ref="music" />
    <slot />
  </div>
</template>
<style>
.zzjtnb {
  position: relative;
}
</style>
