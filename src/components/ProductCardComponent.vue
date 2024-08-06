<template lang="html">
    <div class='product-card' @click="goToProductPage">
        <div class="product-img-div">
            <img :style="{height: imgHeight + 'px'}" class="product-img" :src="img">
        </div>
        <h3>{{ name.substring(0, 30) }}... </h3>
        <p>{{description.substring(0, 75)}}...</p>
        <h4>{{price}} MDL</h4>
        <div class="rating">
            <h5>Rating: {{ rate }} stele</h5>
            <h5>Nr. Reviews: {{ count }}</h5>
        </div>
        <img @click="addProductToCart" class="cart-img" src="../assets/shopping.png">

    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'ProductCardComponent',
    data() {
        return {
            imgHeight: 100,
        }
    },
    props:{
        id: Number,
        name: String,
        description: String,
        price: Number,
        img: String,
        rate: Number,
        count: Number
    },
    methods: {
        addProductToCart() {
            this.$emit('addedToCart', this.id);

            // Redirectionam din cadrul metodelor catre o ruta diferita
            this.$router.push('/cart');
        },
        goToProductPage() {
            this.$router.push({
                name: 'Product',
                 params: {
                    id: this.id
                }
            })
        }
    }
})
export default class ProductCardComponent extends Vue {
    // PARTEA DE TYPESCRIPT A CODULUI
    // id!: number,
    // name!: string,
    // description!:string,
    // price!:number,
    // img:string,
}
</script>

<style lang="css" scoped>

    .product-card {
        position: relative;
        cursor: pointer;
        width:300px;
        height:400px;
        border: 1px solid black;
        transition: all 0.5s ease-in-out;
        border:1px solid black;
        border-radius:12px;

        padding: 15px;
        box-sizing: border-box;
        /* &:hover {
            transform: scale(1.05);
        } */
        .product-img-div {
   
            position: relative;
        }
    }
    
    .rating {
        display: flex;
        align-items: start;
        width: 100%;
        justify-content: space-between;

        h5 {
            margin: 0;
        }
    }
    .cart-img {
        position: absolute;
        width: 35px;
        height: 35px;
        right: 10px;
        bottom: 10px;
        cursor: pointer;
        border: 3px solid black;
        padding: 3px;
        border-radius: 12px;
    }
</style>