<template>
  <div class="container">
    <div class="container-sellers">
      <Seller v-for="seller in sellers"
        :key="seller.id"
        :sellerName="seller.name"
        :id="seller.id"
        :vote="seller.votes"
        />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/shared/TheFooter.vue';
import Seller from '@/components/Seller.vue';
import { computed, onActivated} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
export default {
  components: { TheFooter, Seller },

  setup(){
    const router = useRouter()
    const store = useStore()
    const sellers = computed(() => store.getters['allSellers'][0])
    onActivated(()=>{
      if (!sellers.value) {
        router.push({name: 'Home'})
      }
    })

    return {
      sellers
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  margin: 0 auto;
  row-gap: 1.2rem;
}
.container-sellers .card {
  margin: 1rem auto;
  width: 90%;
}
@media screen and (min-width: 768px) {
  .container {
    max-width: 80vw;
  }
}
.container-sellers {
  align-self: flex-start;
  text-align: center;
  margin: 1rem auto;
  padding-top: 1rem;
  max-width: 65rem;
  display: flex;
  flex-wrap: wrap;
}
</style>