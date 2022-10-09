<template>
  <div id="App">
    <h1>Contadores</h1>
    <p>{{contador}}</p>
    <button @click="contador++">+</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      contador: 0
    }
  }
  /*components: {
    HelloWorld
  }*/
}
</script>

<style>

</style>
