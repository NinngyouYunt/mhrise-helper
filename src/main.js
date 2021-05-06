import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Checkbox from "primevue/checkbox";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);

app.component("Checkbox", Checkbox);
app.component("InputNumber", InputNumber);
app.component("Dropdown", Dropdown);
app.component("Button", Button);

app.mount("#app");
