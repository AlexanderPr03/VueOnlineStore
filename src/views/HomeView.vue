<template>
    <IntroductionComponent />
   <div>
        <input id="showAllProducts" type="checkbox" v-model="this.showAllProducts">
        <label for="showAllProducts">Afiseaza toate produsele</label>
        <ContainerComponent :showAllProducts="showAllProducts" @addedProductToCard="handleAddingToCart" />
   </div>
   
   <div class="container">
        <div class="row">
            <div class="col-5">
            
            </div>
            
        </div>
   </div>
</template>
  
<script lang="ts">
import ContainerComponent from '@/components/ContainerComponent.vue';
import IntroductionComponent from '@/components/IntroductionComponent.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        ContainerComponent,
        IntroductionComponent
    },
    methods: {
        handleAddingToCart(id:number) {
        //   cod care adauga id-ul produslui la shopping cart
        
        }
    },
    data() {
        return {
            showAllProducts: false,
        }
    }
})
export default class HomeView extends Vue {}
</script>

<style></style>
  