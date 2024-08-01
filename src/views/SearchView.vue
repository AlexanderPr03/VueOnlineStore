<template>
    <div class="container">
        <ProductCardComponent v-for="product of products" :key="product" 
            :name="product.title"
            :description="product.description" :price="product.price"
                    :img="product.image" :id="product.id"
        />
    </div>
</template>
  
<script lang="ts">

import { Options, Vue } from 'vue-class-component';
import api from '@/api/api';
import ProductCardComponent from '@/components/ProductCardComponent.vue';
@Options({
    name:'SearchView',
    components: {
        ProductCardComponent
    },
    data() {
        return {
            query:'',
            products:[],
            allProducts: []
        }
    },
    created() {
        this.search();
    },
    beforeRouteUpdate(to, from, next) {
        
    },
    // updated() {
    //     this.search();
    // },

    methods: {
        async search() {
            
            this.query = this.$route.params.query;

            this.allProducts = await api.getProducts();
            
            for (const product of this.allProducts.data) {
                console.log(product)
                if (product.title.toLowerCase().includes(this.query.toLowerCase())) {
                    this.products.push(product);
                }
            }
            console.log(this.products);
        }
    }
})
export default class SearchView extends Vue {}
</script>

<style>
.container {
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>
  