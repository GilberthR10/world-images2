<template>
  <div class="container">
    <TheHeader />
    <Gallery />
    <Invoice v-if="invoice" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/shared/TheHeader.vue';
import TheFooter from '@/components/shared/TheFooter.vue';
import Gallery from '@/components/Gallery.vue';
import Invoice from '@/components/Invoice.vue';
import {  computed } from 'vue';
import { useStore } from 'vuex';
export default {
  components: { TheHeader, TheFooter, Gallery, Invoice },
    setup(){
    const store = useStore()
    const invoice = computed(() => store.getters['invoiceCreated'])
    return {
        invoice
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  align-items: center;
}
@media screen and (min-width: 768px) {
  .container {
    max-width: 80vw;
  }
}
</style>