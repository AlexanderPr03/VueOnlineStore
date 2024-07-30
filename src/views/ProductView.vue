<template>

    <button @click="currentComponent = 'ProductCardComponent'">Toggle Component</button>
    <ButtonComponent />
    <div class="container">
        <div class="column">
            <img class="product-img" :src="image">
        </div>
        <div class="column info-column">
            <h1 class="product-name">
                {{ name }}
            </h1>
            <h2 class="product-description">
                Specificatii: {{ description }}
            </h2>
            <h4 class="product-stock">Stock: {{ stock }} unități</h4>
        </div>
        <div class="column">
            <h2 class="product-price">
                {{ price }} lei
            </h2>
            <button class="product-buy">
                Cumpără
            </button>
        </div>
        <!-- <div class='product-card'>
            
            <h3>ID-ul produsului: {{ idProdus }}</h3>
            <p></p>
            <h4></h4>
        </div> -->
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import api from '../api/api';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ProductCardComponent from '@/components/ProductCardComponent.vue';
@Options({
    methods: {
        handleAddingToCart(id:number) {
        //   cod care adauga id-ul produslui la shopping cart
        
        }
    },
    components: {
        ButtonComponent: ButtonComponent,
        ProductCardComponent: ProductCardComponent
    },
    async created() {
       this.idProdus = this.$route.params.id;

       try {
            const response = await api.getProduct(this.idProdus);
            this.productData = response.data[0];

            this.name = this.productData.name;
            this.description = this.productData.description;
            this.price = this.productData.price;
            this.image = this.productData.image;
            this.stock = this.productData.stock;
       } catch (error) {
            console.error('A aparut o eroare: ', error);
       }
       console.log(this.productData);
    },
    data() {
        return {
            showAllProducts: false,
            idProdus: null,
            productData:{},
            // Proprietatile produsului
            name:null,
            description:null,
            price:null,
            image:null,
            stock:null,
            currentComponent: 'ButtonComponent'
        }
    }
})
export default class ProductView extends Vue {}

</script>

<style scoped>
    .container {
        display: flex;
        width: 100%;
        margin-top: 60px;
    }
    .column {
        width: 33.33%;
    }
    .product-card {
        position: relative;
        width:300px;
        height:400px;
        border: 1px solid black;
        transition: all 0.5s ease-in-out;
        border:1px solid black;
        border-radius:12px;
    }
    .product-img {
        width: 70%;
        height: auto;
        border: 1px solid black;
    }
    .info-column {
        text-align: left;
    }
</style>



<!-- <script>
async getData() {
    let data = await fetch('jsonplaceholder.typicode.com');
}

</script> -->