<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { VButton, HelloWorld } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  components: {
   VButton,
   HelloWorld
  }
});
</script>

<template>
  <div class="main">
    <center>
      <h1>Storybook-vue3-rollup</h1>
    </center>
    <HelloWorld />
    <p>Test: </p>
    <VButton label="Button Title" />
    <VButton
      label="Button Title 2"
      type="secondary"
    />
  </div>
</template>

<style lang="scss">
.main {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  margin: auto;
}
</style>