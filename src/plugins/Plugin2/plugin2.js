import MyAnswerPluginComponent from "./plugin2.vue";

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
  applyContext: (context) => {
    context.percentage = 50;
  },
};
