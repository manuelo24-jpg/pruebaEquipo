<script setup>
import { ref } from "vue";
var imagen = ref("gato.jpg");
const animales = ref([
  { nombre: "gato", imagen: "gato.jpg" },
  { nombre: "perro", imagen: "perro.jpg" },
  { nombre: "caballo", imagen: "caballo.jpeg" },
  { nombre: "leon", imagen: "leon.jpg" },
]);
const cambiarImagen = (nuevaImagen) => {
  imagen.value = nuevaImagen;
};
</script>

<template>
  <div class="container">
    <h1>Selector de animales</h1>
    <div class="botones">
      <button
        v-for="animal in animales"
        :key="animal.imagen"
        @click="cambiarImagen(animal.imagen)"
      >
        {{ animal.nombre }}
      </button>
    </div>
    <img :src="imagen" :alt="imagen" />
    <div></div>
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
