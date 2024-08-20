<script setup>
import WelcomeItem from './WelcomeItem.vue'
import SumIcon from './icons/IconSum.vue'
import SubtractIcon from './icons/IconSubtract.vue'
import MultiplyIcon from './icons/IconMultiply.vue'
import DivideIcon from './icons/IconDivide.vue'
import ModulusIcon from './icons/IconModulus.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <SumIcon />
    </template>
    <template #heading>Suma</template>

    La operación de suma combina dos números y devuelve el resultado. Ejemplo:
    <code>5 + 3 = 8</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SubtractIcon />
    </template>
    <template #heading>Resta</template>

    La operación de resta encuentra la diferencia entre dos números. Ejemplo:
    <code>10 - 4 = 6</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <MultiplyIcon />
    </template>
    <template #heading>Multiplicación <br>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">checkbox</label>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <p>Picked: {{ picked }}</p>
    </template>

    La operación de multiplicación encuentra el producto de dos números. Ejemplo:
    <code>6 * 7 = 42</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DivideIcon />
    </template>
    <template #heading>División</template>

    La operación de división divide un número por otro.<br> Ejemplo:
    <code>20 / 4 = 5</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ModulusIcon />
    </template>
    <template #heading>Módulo</template>

    La operación de módulo encuentra el residuo de la división de dos números. Ejemplo:
    <code>10 % 3 = 1</code>.
  </WelcomeItem>
</template>
