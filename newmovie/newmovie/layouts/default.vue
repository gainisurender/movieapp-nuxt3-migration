<template>
  <!-- Keep alive stores Fetches, so it does recall the fetch -->
  <div class="app">
    <KeepAlive>
      <slot />
    </KeepAlive>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "defaultLayout"
});
</script>

<style lang="scss">
</style>
