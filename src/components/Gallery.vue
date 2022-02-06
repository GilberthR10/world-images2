<template>
    <section v-if="!isLoading">
        <div class="gallery" v-if="gallery">
          <ImageCard v-for="(seller,index) in sellers"
           :key="seller.id"
           :sellerName="seller.name"
           :sellerId="seller.id"
           @upvotes="setUpVotes"
           :src="gallery[index]"
           />
        </div>
        <div class="how-works" v-else>
          <how-it-works />
        </div>
        <div class="container-sellers">
          <Seller v-for="seller in sellers"
            :key="seller.id"
            :sellerName="seller.name"
            :id="seller.id"
            :vote="seller.votes"
            />
        </div>
    </section>
    <div v-else>
      <TheLoading />
    </div>
</template>

<script>
import ImageCard from './ImageCard.vue';
import Seller from './Seller.vue';
import HowItWorks from './HowItWorks.vue';
import TheLoading from '@/components/shared/TheLoading.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: { ImageCard, Seller, HowItWorks,TheLoading },
  setup(){

    const store = useStore()

    store.dispatch('getAllSellers')

    const setUpVotes = (id) => {
       store.dispatch('voting', id)
    }

    const gallery = computed(() => store.getters['gallery'][0])
    const sellers = computed(() => store.getters['allSellers'][0])
    const isLoading = computed(() => store.getters['isLoading'])

    return {
      sellers,
      gallery,
      isLoading,
      setUpVotes,
    }
  }
}
</script>
<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr;
}
.container-sellers {
  display: none;
}
.container-sellers .card {
  margin-bottom: 1.5rem;
}
.gallery {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300, 1fr) );
  place-items: center;
  width: 100%;
}
@media screen and (min-width: 768px) {
  .container-sellers {
    display: block;
    padding-top: 1rem;
  }
  section {
    grid-template-columns: 2fr 1fr;
    padding: 0;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    max-height: 100%;
    padding: 0.5rem;
  }
  .gallery {
    grid-template-columns: 1fr 1fr;
    min-height: 100%;
  }
}
</style>