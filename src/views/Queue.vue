<template>
  <div>
    <h1>随机选怪物</h1>
    <div>
      连续狩猎<Checkbox v-model="setting.multi" :binary="true" />
      捕获<Checkbox v-model="setting.capture" :binary="true" />
    </div>
    <Button label="选择" @click="pick" />
    <Button label="选择任务" @click="pickQuest" />
    数量：<Dropdown v-model="count" :options="[1, 2, 3, 4, 5]" />
    <Button label="移除最上" @click="result.shift()" />
    <Button label="清空" @click="result = []" />
    <ul>
      <li v-for="(item, index) in result" :key="item.name">
        <span @click="removeItem(index)">
          <span v-if="item.star">
            <b>★{{ item.star }} &nbsp;</b>{{ item.name }}
            <span>&nbsp;/&nbsp;目标：{{ item.targets.join(", ") }} </span>
          </span>
          <span v-else>目标：{{ item.name }} </span>
        </span>
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
import { QuestInfo } from "../lib/questInfo";
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
    const result = ref([]);
    const count = ref(1);
    const setting = ref({
      hr: true,
      capture: false,
      multi: true,
    });

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

    const pickQuest = () => {
      for (let i = 0; i < count.value; ++i) {
        const filtered = monsters.value.filter((item) => item.enabled);
        const target =
          filtered[Math.floor(Math.random() * filtered.length)].name;
        const quests = QuestInfo.questList.filter((item) => {
          // 选择HR，移除非HR
          if (setting.value.hr && item.star < QuestInfo.HR) return false;
          // 选择非捕获，移除捕获
          if (
            !setting.value.capture &&
            item.type === QuestInfo.QuestType.CAPTURE
          )
            return false;
          // 选择非大连续，移除大连续
          if (!setting.value.multi && item.type === QuestInfo.QuestType.MULTI)
            return false;
          return item.targets.indexOf(target) !== -1;
        });
        const index = Math.floor(Math.random() * quests.length);
        console.log(`${target}: ${index}`);
        console.log(quests);
        result.value.push(quests[index]);
      }
      console.log(result.value);
    };
    return { monsters, result, removeItem, pick, count, pickQuest, setting };
  },
};
</script>
