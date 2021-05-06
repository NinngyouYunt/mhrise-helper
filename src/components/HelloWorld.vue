<template>
  <Checkbox v-model="checked" :binary="true" />
  <InputNumber v-model="value" />

  <Dropdown v-model="attack" :options="attacks" optionLabel="level" />
</template>

<script>
import { ref } from "vue";

export default {
  name: "HelloWorld",
  setup() {
    const attack = ref({});
    const checked = ref(false);
    const value = ref(1);
    const attacks = [{ level: 1 }];

    return {
      attack,
      checked,
      value,
      attacks
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
