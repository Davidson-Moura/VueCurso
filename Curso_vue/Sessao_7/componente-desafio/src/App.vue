<template>
  <v-app>
    <nav-App></nav-App>

    <app-bar></app-bar>
    
    <carousel></carousel>

    <footer-app></footer-app>
    
  </v-app>
</template>

<script>
import Navi from "./Navigation.vue";
import AppBar from "./AppBar.vue";
import Carousel from "./Carousel.vue";
import Footer from "./Footer.vue";

export default {
  components:{
    "nav-App":Navi,
    "app-bar":AppBar,
    "carousel":Carousel,
    "footer-app":Footer
  }
}
</script>
