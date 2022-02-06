<template>
    <header>
        <SearchBar />
    </header>
</template>

<script>
import SearchBar from '../SearchBar.vue';
export default {
    components: { SearchBar }
}
</script>

<style scoped>
/* Generic Styles */
header {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 2em 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
</style>