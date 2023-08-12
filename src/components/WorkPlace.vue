<template>
  <div class="workplace">
    <h1>I want to work in CtrlHack!</h1>
    <button @click='showLocal' class="button" :class='isUseVuex? "" : "bg-green"'>Local</button>
    <button @click='showVuex' class="button" :class='isUseVuex? "bg-green" : ""'>Vuex</button>
    <ExampleLocal class='example' v-if='!isUseVuex'/>
    <ExampleVuex class='example' v-if='isUseVuex'/>
  </div>
</template>

<script>
import ExampleLocal from '@/components/ExampleLocal'
import ExampleVuex from '@/components/ExampleVuex'

export default {
  name: 'WorkPlace',
  data () {
    return {
      isUseVuex: false
    }
  },
  methods: {
    showVuex () {
      this.isUseVuex = true
    },
    showLocal () {
      this.isUseVuex = false
    }
  },
  components: {
    ExampleLocal,
    ExampleVuex
  }
}
</script>


<style>
  .workplace {
    width: 600px;
    height: 700px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 2px 4px -1px #0003, 0 4px 5px #00000024, 0 1px 10px #0000001f;
    padding: 20px;
  }

  .button {
    background-color: white;
    color: black;
    border: none;
    border-radius: 10px;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    transition-duration: 0.4s;
    box-shadow: 0 2px 4px -1px #0003, 0 4px 5px #00000024, 0 1px 10px #0000001f;
    margin-right: 10px;
  }

  .bg-green {
    background-color: green;
    color: white
  }

  .button:hover {
    background-color: #9455e4;
    color: white;
  }

  .example {
    margin-top: 10px;
  }

  label {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .label {
    box-sizing: border-box;
    width: 177px;
  }
  .example_container {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 550px;
    border: 1px solid black;
  }
  .example_label-area {
    margin-top: 5px;
    text-align: left;
  }
  .example_list-area {
    border: 1px solid black;
    height: 470px;
    text-align: left;
    overflow: auto;
  }
  .example_parent-list-area {
    position: relative;
  }
  .example_list-area li {
    list-style-type: none;
  }
  .base {
    color: green;
    border: 1px solid green
  }
</style>
