<template>
   <div>
        <input id="showAllProducts" type="checkbox" v-model="this.showAllProducts">
        <label for="showAllProducts">Afiseaza toate produsele</label>
        <ContainerComponent :showAllProducts="showAllProducts" @addedProductToCard="handleAddingToCart" />
   </div>
</template>
  
<script lang="ts">
import ContainerComponent from '@/components/ContainerComponent.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        ContainerComponent
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
  