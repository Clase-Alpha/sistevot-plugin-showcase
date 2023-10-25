import MyAnswerPluginComponent from "./plugin1.vue";
import { markRaw } from "vue";

export default {
  install: (api) => {
    api.registerVoteViewComponentReplacement(
      "AnswerTable",
      MyAnswerPluginComponent
    );
  },
  disable: (api) => {
    delete api.replaceVoteViewComponents["AnswerTable"];
  },
};
