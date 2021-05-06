<template>
  <div>
    <h1>随机选怪物</h1>
    <Button label="选择" @click="pick" />
    数量：<Dropdown v-model="count" :options="[1, 2, 3, 4, 5]" />
    <Button label="移除" @click="result.shift()" />
    <ul>
      <li v-for="(monster, index) in result" :key="monster.name">
        <span @click="removeItem(index)">{{ monster.name }}</span>
      </li>
    </ul>
  </div>
  <div>
    <ul>
      <li v-for="monster in monsters" :key="monster.name">
        <Checkbox v-model="monster.enabled" :binary="true" />
        {{ monster.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import { ref } from "vue";
import { info } from "../lib/quest";
export default {
  name: "Queue",
  setup() {
    const monsters = ref(
      info.monsters.map((item) => {
        return {
          name: item,
          enabled: info.starter.indexOf(item) >= 0,
        };
      })
    );
    const count = ref(1);
    const result = ref([]);
    const pick = () => {
      for (let i = 0; i < count.value; ++i) {
        const filtered = monsters.value.filter((item) => item.enabled);
        const index = Math.floor(Math.random() * filtered.length);
        result.value.push(filtered[index]);
      }
    };
    const removeItem = (index) => {
      if (index >= 0 && index < result.value.length) {
        result.value.splice(index, 1);
      }
    };
    return { monsters, result, removeItem, pick, count };
  },
};
</script>
