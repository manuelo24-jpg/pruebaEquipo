<template>
    <div class="superhero-symbol">
      <div class="triangle"></div>
      <div class="letter">S</div>
    </div>
  </template>
  
  <style scoped>
  .superhero-symbol {
    position: relative;
    width: 200px;
    height: 200px;
  }
  
  .triangle {
    width: 0;
    height: 0;
    border-left: 80px solid transparent;
    border-right: 80px solid transparent;
    border-bottom: 160px solid blue;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  
  .letter {
    position: absolute;
    top: 70px;
    left: 70px;
    font-size: 100px;
    font-weight: bold;
    color: yellow;
  }
  </style>
  