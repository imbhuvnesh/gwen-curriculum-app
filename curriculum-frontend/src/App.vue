<template>
  <v-app id="app">
    <div id="nav">
      <TopNav/>
    </div>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TopNav from './components/TopNav';

export default {
    name: 'App',
    data: () => ({
      //
    }),
    components:{
      TopNav,
    }
  }
</script>
