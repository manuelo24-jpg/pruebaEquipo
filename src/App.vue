<script setup>
import { ref } from "vue";

const imagen = ref("gato.jpg");
const mostrarImagen = ref(true);

const animal = {
  nombre: ref(""),
  imagen: ref(""),
  patas: ref(0),
  sonido: ref(""),
  color: ref(""),
};

const cambiarImagen = (nuevaImagen) => {
  imagen.value = nuevaImagen;
};

const animales = ref([
  {
    nombre: "Gato",
    imagen: "gato.jpg",
    patas: 4,
    sonido: "Miau",
    color: "Gris",
  },
  {
    nombre: "Perro",
    imagen: "perro.jpg",
    patas: 4,
    sonido: "Guau",
    color: "Marrón",
  },
  {
    nombre: "Caballo",
    imagen: "caballo.jpeg",
    patas: 4,
    sonido: "Relincho",
    color: "Negro",
  },
  {
    nombre: "Leon",
    imagen: "leon.jpg",
    patas: 4,
    sonido: "Rugido",
    color: "Amarillo",
  },
]);

const toggleImagen = () => {
  mostrarImagen.value = !mostrarImagen.value;
};

const agregarAnimal = () => {
  if (animal.nombre.value && animal.imagen.value) {
    const nuevoAnimal = {
      nombre: animal.nombre.value,
      imagen: animal.imagen.value,
      patas: animal.patas.value,
      sonido: animal.sonido.value,
      color: animal.color.value,
    };
    animales.value.push(nuevoAnimal);
    seleccionarAnimal(nuevoAnimal);
    animal.nombre.value = "";
    animal.imagen.value = "";
    animal.patas.value = 0;
    animal.sonido.value = "";
    animal.color.value = "";
  }
};

const animalSeleccionado = ref(null);

const seleccionarAnimal = (animal) => {
  animalSeleccionado.value = animal;
  cambiarImagen(animal.imagen);
};
</script>

<template>
  <div class="container">
    <div class="pruebaAnimales">
      <h1>Selector de animales</h1>
      <div class="botones">
        <button
          v-for="animal in animales"
          :key="animal.imagen"
          @click="seleccionarAnimal(animal)"
        >
          {{ animal.nombre }}
        </button>
        <button @click="toggleImagen">
          {{ mostrarImagen ? "Ocultar Imagen" : "Mostrar Imagen" }}
        </button>
      </div>
    </div>
    <div class="pruebaFormulario">
      <h1>Crear animal</h1>
      <form @submit.prevent="agregarAnimal">
        <div>
          <label for="nombre">Nombre:</label>
          <input id="nombre" v-model="animal.nombre.value" required />
        </div>
        <div>
          <label for="imagen">Imagen:</label>
          <input id="imagen" v-model="animal.imagen.value" required />
        </div>
        <div>
          <label for="patas">Patas:</label>
          <input
            id="patas"
            type="number"
            v-model="animal.patas.value"
            required
          />
        </div>
        <div>
          <label for="sonido">Sonido:</label>
          <input id="sonido" v-model="animal.sonido.value" required />
        </div>
        <div>
          <label for="color">Color:</label>
          <input id="color" v-model="animal.color.value" required />
        </div>
        <button type="submit">Agregar Animal</button>
      </form>
      <div
        v-if="
          animal.nombre.value ||
          animal.imagen.value ||
          animal.patas.value ||
          animal.sonido.value ||
          animal.color.value
        "
      >
        <h2>Datos del nuevo animal:</h2>
        <p><strong>Nombre:</strong> {{ animal.nombre.value }}</p>
        <p><strong>Imagen:</strong> {{ animal.imagen.value }}</p>
        <p><strong>Patas:</strong> {{ animal.patas.value }}</p>
        <p><strong>Sonido:</strong> {{ animal.sonido.value }}</p>
        <p><strong>Color:</strong> {{ animal.color.value }}</p>
      </div>
    </div>
    <div v-if="animalSeleccionado" class="animal-card">
      <h2>Datos del animal seleccionado:</h2>
      <img
        v-if="mostrarImagen"
        :src="animalSeleccionado.imagen"
        :alt="animalSeleccionado.nombre"
        class="animal-card-imagen"
      />
      <p><strong>Nombre:</strong> {{ animalSeleccionado.nombre }}</p>
      <p><strong>Imagen:</strong> {{ animalSeleccionado.imagen }}</p>
      <p><strong>Patas:</strong> {{ animalSeleccionado.patas }}</p>
      <p><strong>Sonido:</strong> {{ animalSeleccionado.sonido }}</p>
      <p><strong>Color:</strong> {{ animalSeleccionado.color }}</p>
    </div>
  </div>
</template>
