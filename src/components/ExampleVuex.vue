<template>
  <div class='example_container'>
    <input @input='input("price", $event)' name='price' type='number' :disabled='isLoading' :value='price'>
    <input @input='input("qty", $event)' name='qty' type='number' :disabled='isLoading' :value='qty'>
    <input @input='input("amount", $event)' name='amount' type='number' :disabled='isLoading' :value='amount'>
    <button @click='send' :disabled='isLoading'>send</button>
    <br>
    <div class='example_label-area'>
      <label :class='base==="price" ? "base" : ""' class='label'>Price: {{ price }}</label>
      <label :class='base==="qty" ? "base" : ""' class='label'>Qty: {{ qty }}</label>
      <label :class='base==="amount" ? "base" : ""' class='label'>Amount: {{ amount }}</label>
      <label>{{ nonce }}</label>
    </div>
    <div class='example_parent-list-area'>
      <div class='example_list-area'>
        <ul>
          <li v-for='(el, idx) in logs' :key='idx'>
            <span><b>{{ el.type }}:</b> {{ el.value }}</span>
          </li>
        </ul>
      </div>
      <Loading :show='isLoading'/>
    </div>
    <span>* base value highlighted in green</span>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import { example } from '@/mixins/mixin'
import { delay } from '@/helpers'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ExampleVuex',
  computed: {
    ...mapGetters({ logs: 'getLogs' })
  },
  methods: {
    ...mapActions([ 'addLog', 'apiSave', 'getLocalStorageState' ]),
  },
  components: {
    Loading
  },
  mixins: [example]
}
</script>