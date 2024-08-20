<script setup>
import { ref } from "vue";
var imagen = ref("gato.jpg");
const cambiarImagen = (nuevaImagen) => {
  imagen.value = nuevaImagen;
};
</script>

<template>
  <div class="container">
    <h1>Selector de animales</h1>
    <div class="botones">
      <button @click="cambiarImagen('gato.jpg')">Gato</button>
      <button @click="cambiarImagen('perro.jpg')">Perro</button>
      <button @click="cambiarImagen('caballo.jpeg')">Caballo</button>
      <button @click="cambiarImagen('leon.jpg')">Leon</button>
    </div>
    <img :src="imagen" :alt="imagen" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

img {
  display: block;
  margin: 0 auto;
  width: 300px;
  height: 223px;
  margin-top: 2rem;
}

.botones {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
