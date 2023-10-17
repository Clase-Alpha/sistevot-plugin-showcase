import { defineStore } from 'pinia'

export const useApi = defineStore('api', {
  state: () => {
    return { 
      replaceVoteViewComponents:{},
    }
  },
  actions: {
    registerVoteViewComponentReplacement(id, component){
      this.replaceVoteViewComponents[id] = component
    },
  },
})


    


