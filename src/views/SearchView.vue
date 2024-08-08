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
import { Product } from '@/types/types';
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
    async created() {
        await this.loadProducts();
        this.query = this.$route.params.query;

        this.search();
    },
   
    beforeRouteUpdate(to, from, next) {
        this.query = to.params.query;
        this.search();
        next();
    },

    methods: {
        async loadProducts() {
            const response = await api.getProducts();
            this.allProducts = response.data;
        },
        async search() {
            
            this.products = this.allProducts.filter((product: Product) =>
                product.title.toLowerCase().includes(this.query.toLowerCase())
            );
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
  