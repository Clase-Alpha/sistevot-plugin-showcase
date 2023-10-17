
<template>
    <RouterView></RouterView>
</template>

<script async setup>

  import { watchEffect } from 'vue';
  import { useApi } from './api/api'
  import * as plugins from './plugins/plugins.js'
  import { usePluginsStore } from './stores/pluginsStore'
  const pluginsStore = usePluginsStore()
  const api = useApi()


  const installPlugins = async () => {
    await pluginsStore.getPluginsConfig(); console.log('mainjs', pluginsStore.plugins);
    if(pluginsStore.plugins != null){
      Object.keys(pluginsStore.plugins).forEach(element => {
        if(pluginsStore.plugins[element].isActive){
          console.log("install", element);
          plugins[element].install(api)
        }
      });
    }
  }

  await installPlugins()
  // watchEffect(() => {
  //   if(pluginsStore.plugins != null){
  //     Object.keys(pluginsStore.plugins).forEach(element => {
  //       if(pluginsStore.plugins[element].isActive){
  //         console.log("install", element);
  //         plugins[element].install(api)
  //       }
  //     });
  //   }
  // })

</script>

<style>
.main{
  display: flex;
  gap: 10px;
}
.buttonGrp{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
button{
  color: white;
}
</style>
