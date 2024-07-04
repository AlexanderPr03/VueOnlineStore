<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <input id="showAllProducts" type="checkbox" v-model="this.showAllProducts">
  <label for="showAllProducts">Afiseaza toate produsele</label>

  <ContainerComponent :showAllProducts="showAllProducts" @addedProductToCard="handleAddingToCart" /> -->

  <nav>
    <router-link to="/home">Homepage</router-link>
    <br>
    <router-link to="/about">About page</router-link>
  </nav>

  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ContainerComponent from './components/ContainerComponent.vue'


@Options({
  components: {
    ContainerComponent
  },
  methods: {
    // handleAddingToCart(id) {
    //   // cod care adauga id-ul produslui la shopping cart
      
    // }
  },
  data() {
    return {
      showAllProducts: false,
    }
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
