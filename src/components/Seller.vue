<template>
  <div class="card">
    <div class="img-wrap">
      <img
        src="../assets/agent.png"
        alt="vendedor"
      />
    </div>
    <div class="text-card">
      <p>{{ sellerName }}</p>
      <span class="position"> Vendedor </span>
    </div>
    <div class="counter">{{vote}}/20</div>
    <div class="progress">
      <span class="progress-bar" :style="{width:`${progress}%`}"></span>
    </div>
  </div>
</template>

<script>
import {  ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2'
export default {
  props: ['id', 'sellerName', 'vote' ],
  setup(props){
    const store = useStore()
    const progress = ref(0)
    const getVotes = computed(() => store.getters['getVotes'])

    watch(()=> props.vote, () => {
        progress.value = props.vote * 100 / 20;
        if (props.vote > 18) {
        Swal.fire({
          icon: 'success',
          title: 'Tenemos un ganador',
          text: `Vendedor ${props.sellerName}`,
          confirmButtonColor: '#DB2777',
        })
        store.dispatch('createInvoice', {clientId:1, sellerId: props.id, quantity:getVotes.value, sellerName:props.sellerName})
        store.dispatch('gameOver')
      }
    })

    return {
      progress,
      getVotes
    }

  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  font-family: 'Catamaran', sans-serif;
  background-color: white;
}

p {
  font-size: 0.85rem;
  font-weight: bolder;
  margin: 0 0 0.2rem;
  line-height: 0.8;
}
.text-card {
  margin-right: 0;
  text-align: left;
}
span.position {
  font-size: 0.9rem;
  opacity: 0.9;
}
.card {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
  flex-wrap: wrap;
  min-width: 270px;
}

.img-wrap {
  flex-basis: 4rem;
  flex-shrink: 0;
}

img {
  width: 100%;
  border-radius: 8px;
}
.counter {
  padding: 0.5rem 0.5rem;
  background-color: #eff6ff;
  color: #ea4aaa;
  font-size: 2rem;
  border-radius: 0.2rem;
}
.progress {
  width: 100%;
  height: 6px;
  background: #e1e4e8;
  overflow: hidden;
}
.progress .progress-bar {
  display: block;
  height: 100%;
  background: #ea4aaa;
  background-size: 300% 100%;
}
</style>