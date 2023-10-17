
import { defineStore } from 'pinia'
import { db } from '../firebase/firebase';
import { collection, getDoc, doc, updateDoc} from "firebase/firestore";

export const usePluginsStore = defineStore('pluginsStore', {
  state: () => {
    return {
      plugins:null
    }
  },
  actions: {
    async getPluginsConfig(){
      console.log('pinia');
      const docRef = doc(db, 'prueba-plugin', 'plugins')
      const [docSnapshot] = await Promise.all([
        getDoc(docRef)
      ])
      if(docSnapshot.exists()){
        this.plugins = docSnapshot.data()
      }
    }
  },
})