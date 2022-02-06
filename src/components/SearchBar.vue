<template>
  <div class="search-container">
    <input type="text" data-cy="input-search" v-model="searchTerm" @keyup.enter="handleSearhImages" placeholder="Imagenes por el mundo" required>
    <button data-cy="btn-submit" class="material-icons icon" @click="handleSearhImages">search</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from 'vuex';
import Swal from 'sweetalert2'
export default {
  setup() {
    const store = useStore()
    const searchTerm = ref('');


    const handleSearhImages = async () => {
      if (searchTerm.value.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Para buscar ingresa un palabra',
        confirmButtonColor: '#DB2777',
      })
        return null
      }
      store.dispatch('emptyGallery')
      await store.dispatch('getImages',searchTerm.value)
    }

    return {
      searchTerm,
      handleSearhImages
    };
  },
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 0.8rem 1.1rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: solid 1px #94A3B8;
  border-right-style: none;
  outline: none;
}
input:focus {
    outline: none;
}
.icon {
  padding: 8px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #DB2777;
  color: white;
}
.search-container {
  display: flex;
  width: 100%;
  max-width: 700px;
}
button{
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #db2778dc;
}
button:active {
	transform: scale(0.9);
}
.confirm_swal-button {
  background-color: #DB2777;
}
</style>