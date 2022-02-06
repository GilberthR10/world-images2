<template>
<figure>
  <img :src="src" decoded="async">
  <figcaption>
    <span  v-if="!gamestate" class="material-icons" data-cy="handleVote" @click="handleVote">
    add_photo_alternate
    </span>
    <p>{{ sellerName }}</p>
</figcaption>
</figure>
</template>

<script scoped>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  props: ['sellerName', 'sellerId', 'src'],
  setup(props, context) {
    const store = useStore()
    const gamestate = computed(() => store.getters['getGameState'])
    const handleVote = () => {
      context.emit('upvotes', props.sellerId )
    }
    return { handleVote,gamestate }
  }
}
</script>

<style scoped>
figure {
  padding: 0.8rem;
  max-width: 18rem;
  min-width: 14rem;
  max-height: 100%;
  border: 2px inset #db2778c5;
  display: grid;
  grid-template-areas: "figure";
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-area: figure;
  max-height: 18rem;
  min-height: 18rem;
}

figcaption {
  background-color: rgba(30, 30, 30, 0.6);
  color: #fff;
  padding: 1rem;
}

figcaption {
  grid-area: figure;
  align-self: end;
  padding:0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.material-icons {
  color: #f1eff0;
  font-size: 3em;
  cursor: pointer;
  order: 1;
}
</style>