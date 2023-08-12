<template>
  <div id="app">
    <WorkPlace/>
  </div>
</template>

<script>
import WorkPlace from '@/components/WorkPlace'

export default {
  name: 'App',
  components: {
    WorkPlace
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
