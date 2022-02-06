<template>
  <footer>
    <nav class="nav">
     <router-link :to="{ name: 'Home' }" class="nav__link">
        <i class="material-icons nav__icon">dashboard</i>
        <span class="nav__text">Galleria</span>
    </router-link>
    <router-link :to="{ name: 'Sellers' }" class="nav__link">
        <i class="material-icons nav__icon">groups</i>
        <span class="nav__text">Ranking</span>
    </router-link>
    </nav>
  </footer>
</template>

<style>
.nav {
  margin-top: 1rem;
    width: 100%;
    height: 55px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    display: flex;
    overflow-x: auto;
}

.nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    min-width: 50px;
    overflow: hidden;
    white-space: nowrap;
    font-family: 'Catamaran', sans-serif;;
    font-size: 13px;
    color: #444444;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.1s ease-in-out;
}

.nav__link:hover {
    background-color: #eeeeee;
}
.nav__icon {
    font-size: 18px;
}

.router-link-active {
  color: #ea4aaa;
}
@media screen and (min-width: 768px) {
  footer {
    display: none;
  }
}
</style>