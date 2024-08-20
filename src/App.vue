<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Operaciones from './components/Operaciones.vue'
</script>

<template>
  <header>
    <img alt="Super logo" class="logo" src="./assets/super.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Hello World" <img alt="Super logo" class="logo" src="./assets/super.svg" width="125" height="125" />/>
    </div>
  </header>

  <main>
    <Operaciones/>
  
  </main>
</template>

<style scoped>
body{
  background-color:darkslategrey;
}
main{
  background-color:cadetblue;
}
header {
  line-height: 1.5;
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
<style>
body{
  background-color:darkslategrey;
}
</style>

