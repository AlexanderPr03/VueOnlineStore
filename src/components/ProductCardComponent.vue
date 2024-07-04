<template lang="html">
    <div class='product-card'>
        <img class="product-img" :src="img">
        <h3>{{ name }}</h3>
        <p>{{description}}</p>
        <h4>{{price}} MDL</h4>
        <img @click="addProductToCart" class="cart-img" src="../assets/shopping.png">

    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'ProductCardComponent',
    props:{
        id: Number,
        name: String,
        description: String,
        price: Number,
        img: String,
    },
    methods: {
        addProductToCart() {
            this.$emit('addedToCart', this.id);

            // Redirectionam din cadrul metodelor catre o ruta diferita
            this.$router.push('/cart');
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

<style lang="css">
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
        width: auto;
        height: 60%;
        margin: auto;
    }
    .product-card:hover {
        transform:scale(1.03);
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