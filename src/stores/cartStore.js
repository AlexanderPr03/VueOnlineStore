import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: JSON.parse(localStorage.getItem('cart') || '[]')
    }),
    getters: {
        cartItemCount: (state) => {
            return state.cart.reduce((total, item) => total + item.quantity, 0)
        },
        cartTotalPrice: (state) => {
            return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    },
    actions: {
        addToCart(product) {
            const produsExista = this.cart.find(item => item.id === product.id);

            if (produsExista) {
                produsExista.quantity += 1;
            } else {
                this.cart.push({...product, quantity:1});
            }
            this.saveCart();
        },
        removeFromCart(productId) {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.saveCart();
        },
        clearCart() {
            this.cart = [];
            this.saveCart();
        },

        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        loadCart() {
            const cartData = localStorage.getItem('cart');
            if (cartData) {
                this.cart = JSON.parse(cartData);
            }

        }
    }
})