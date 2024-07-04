<template>
    <div>
        <div class='product-card'>
            <img class="product-img">
            <h3>ID-ul produsului: {{ idProdus }}</h3>
            <p></p>
            <h4></h4>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    methods: {
        handleAddingToCart(id:number) {
        //   cod care adauga id-ul produslui la shopping cart
        
        }
    },
    created() {
       this.idProdus = this.$route.params.id;
    },
    data() {
        return {
            showAllProducts: false,
            idProdus: null,
        }
    }
})
export default class ProductView extends Vue {}

</script>

<style scoped>
    .product-card {
        position: relative;
        width:300px;
        height:400px;
        border: 1px solid black;
        transition: all 0.5s ease-in-out;
        border:1px solid black;
        border-radius:12px;
    }
</style>
   