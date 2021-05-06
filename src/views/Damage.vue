<template>
  基础 <InputNumber v-model="raw" />

  攻击
  <Dropdown v-model="attack" :options="attacks" optionLabel="level" />
  爪/符
  <Checkbox v-model="item.clawCharm.checked" :binary="true" />
  种子
  <Checkbox v-model="item.seed.checked" :binary="true" />
  粉尘
  <Checkbox v-model="item.powder.checked" :binary="true" />
  药
  <Checkbox v-model="item.drug.checked" :binary="true" />
  鬼火鸟
  <Checkbox v-model="item.bird.checked" :binary="true" />

  <h1>{{ damage }}</h1>
</template>

<script>
import { ref, computed } from "vue";
import { stats } from "../lib/stats";
export default {
  name: "Damage",
  setup() {
    const attack = ref(stats.skill.attack[0]);
    const item = ref({
      clawCharm: { checked: true, value: stats.item.claw + stats.item.charm },
      seed: { checked: false, value: stats.item.seed },
      powder: { checked: false, value: stats.item.powder },
      drug: { checked: false, value: stats.item.drug },
      bird: { checked: true, value: stats.item.bird },
    });
    const raw = ref(210);
    const damage = computed(() => {
      return (
        raw.value * attack.value.multiplier +
        attack.value.addition +
        (item.value.clawCharm.checked ? item.value.clawCharm.value : 0) +
        (item.value.seed.checked ? item.value.seed.value : 0) +
        (item.value.powder.checked ? item.value.powder.value : 0) +
        (item.value.drug.checked ? item.value.drug.value : 0) +
        (item.value.bird.checked ? item.value.bird.value : 0)
      );
    });

    return {
      ...{ attack, attacks: stats.skill.attack },
      ...{ raw, damage },
      item,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
