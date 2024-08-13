<template>
  <NavbarComponent />
  <!-- <ButtonComponent color="red" />
  <ButtonComponent color="blue"/> -->

  <main>
    <router-view></router-view>
  </main>

  <FooterComponent />
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import ContainerComponent from './components/ContainerComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { useCartStore } from '@/stores/cartStore';


// import ButtonComponent from './components/ButtonComponent.vue';

@Options({
  components: {
    ContainerComponent,
    NavbarComponent,
    FooterComponent
    // ButtonComponent
  },
  methods: {
    // handleAddingToCart(id) {
    //   // cod care adauga id-ul produslui la shopping cart
      
    // }
  },
  created() {
    let cartStore = useCartStore();
    cartStore.loadCart();
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
  min-height: 100vh;

}
main {
  padding: 0 5%;
}
.nav-menu {
  /* color: white;
  width: 100%;
  height: 100px;
  display:flex;
  background-color:black; */
}
</style>



<!-- i18n - internationalization -->