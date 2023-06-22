<template>
  <div id="app">
    <img width="150px" alt="Vue logo" src="https://st3.depositphotos.com/16030310/18317/v/450/depositphotos_183173562-stock-illustration-letters-logo-initial-logo-identity.jpg">
    <HelloWorld msg="Welcome to QA System Demo"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
