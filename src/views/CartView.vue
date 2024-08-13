<template lang="html">
    <div class="cart-container">
        <h1>Shopping Cart:</h1>
        <div v-if="cart.length >= 1">
            <div v-for="item of cart" :key="item.id" class="cart-item">
                <img :src="item.img" class="cart-item-img">
                <div class="cart-item-details">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.description.substring(0, 200) }}...</p>

                    <div class="cart-item-details-row">
                        <h4>{{ item.price }} MDL</h4>
                        <p>Cantitate: {{ item.quantity }}</p>

                        <button @click="removeFromCart(item.id)">Remove</button>
                    </div>
                  
                </div>
            </div>

            <div class="cart-summary">
                <h3>Nr. de produse: {{ cartItemCount }}</h3>
                <h3>Pret total: {{ cartTotalPrice }} MDL</h3>
                <button @click="clearCart">Golește coșul</button>
            </div>
        </div>
        <div v-else>
            <h1>Coșul este gol</h1>
        </div> 
    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import { useCartStore } from '@/stores/cartStore';

@Options({
    name: 'NavbarComponent',
    data() {
        return {
            cart:null,
            cartItemCount:null,
            cartTotalPrice:null,
        }
    },
    created() {
        const cartStore = useCartStore();
        this.cart = cartStore.cart;
        this.cartItemCount = cartStore.cartItemCount,
        this.cartTotalPrice = cartStore.cartTotalPrice
    },

    methods: {
        removeFromCart(id) {
            const cartStore = useCartStore();
            cartStore.removeFromCart(id);
        },
        clearCart() {
            const cartStore = useCartStore();
            cartStore.clearCart();
        }
    },
    computed: {

    }
})
export default class NavbarComponent extends Vue {

}
</script>

<style lang="css" scoped>
  .cart-item {
    width: 800px;
    height: 200px;
    display: flex;
    gap: 40px;
    padding: 15px;
    box-sizing: border-box;

    border: 1px solid black;
    text-align: left;
  }
  .cart-item-details-row {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    button {
        height: 50%;
    }
  }
</style>
