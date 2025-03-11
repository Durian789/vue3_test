<template>
  <div class="persion">
    姓： <input type="text" v-model="firstName" />
    名： <input type="text" v-model="lastName" />
    全名： <sapn>{{fullName}}</sapn>
    <button @click="changeFullName">修改全名为lisi</button>
  </div>
</template>
<script lang="ts" setup name="Persion">
import { ref, computed } from "vue"

let firstName = ref("zhang")
let lastName = ref("san")

// let fullName = computed(() => {
//   return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
// })

let fullName = computed({
  get() {
    return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  },
  set(val) {
    let [first, last] = val.split('-') 
    firstName.value = first
    lastName.value = last
  }
})
function changeFullName() {
  fullName.value = "li-si"
}

</script>
<style>
.persion {
  background: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>