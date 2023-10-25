import "./style.css";
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import PrimeVue from "primevue/config";
import Card from "primevue/card";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Row from "primevue/row";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(PrimeVue, { ripple: true });

app.use(pinia);
app.use(router);

app.component("Card", Card);
app.component("Column", Column);
app.component("DataTable", DataTable);
app.component("Row", Row);

app.mount("#app");
