<template>
  <div class="container">
      <div>
          <h1>Bienvenidos</h1>
      </div>
      <div class="text-content">
          <p>Estamos Realizando un concurso con nuestros mejores vendedores, <b>¡una carrera para encontrar las imágenes más interesantes 
de la web!.</b><br /><b>¿Cómo funciona ?</b> Para empezar tienes que ingresar una palabra en el cuadro de búsqueda de la parte superior y presionar el botón de buscar, cada vez que veas una imagen que te guste puedes votar por ella haciendo click
en este ícono <span class="material-icons">add_photo_alternate</span> cada vez que votes el vendedor acumulara 3 puntos, el primero en acumular 20 puntos gana la carrera. <br /><b>¡Empecemos!
</b>
          </p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Catamaran', sans-serif;
}
h3,p {
    margin: 0;
}
p {
    max-width: 40rem;
    padding: 1rem;
}
</style>