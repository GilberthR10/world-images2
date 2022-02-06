<template>
<router-view v-slot="{ Component }">
  <transition name="no-mode-fade">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Catamaran:400,800');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
html, button, input, select, textarea {
    font-family: 'Catamaran', sans-serif;
    color: rgb(141, 138, 138);
}
body {
  background-color: #FDFAF5;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.no-mode-fade-enter-active, .no-mode-fade-leave-active {
  transition: opacity .5s
}

.no-mode-fade-enter-from, .no-mode-fade-leave-to {
  opacity: 0
}

</style>
