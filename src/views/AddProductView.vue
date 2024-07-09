<template>
    <div id="container">
        <form id="addProduct" @submit.prevent="sendProduct">
            <input type="number" name="id" placeholder="Id Produs" v-model="id">
            <input type="text" name="title" placeholder="Nume Produs" v-model="name">
            <input type="text" name="description" placeholder="Descriere" v-model="description">
            <input type="number" name="price" placeholder="Pret" v-model="price">
            <input type="text" name="image" placeholder="Imagine" v-model="image">
            <input type="number" name="stock" placeholder="Stock" v-model="stock">
            <input type="submit">
        </form>
    </div>


    <div>
        <form id="updateProduct" @submit.prevent="updateProduct">
            <input type="number" name="id" placeholder="id produs">
            <input type="submit">
        </form>
    </div>
 </template>
   
 <script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';

@Options({

    methods: {
        sendProduct() {
            axios.put('http://localhost:3000/produse', {
                "id": this.id,
                "name": this.name,
                "description": this.description,
                "price": this.price,
                "image": this.image,
                "stock": this.stock
            });
            alert('Product added!');
            this.$router.push('/home');
            // axios.delete('http://localhost:3000/produse?id=6')
        },

        // updateProduct() {
        //     axios.
        // }


    },
    data() {
        return {
            id:null,
            name:null,
            description:null,
            price:null,
            image:null,
            stock:null,
        }
    }
})
 export default class AddProductView extends Vue {}
 </script>
 
 <style scoped>
#container {
    display: flex;
    justify-content: center;
    width: 100%;
}
#addProduct {
    margin-top: 50px;
    width: 400px;
    height: auto;
    padding: 15px;
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 12px;
    border: 1px solid black;
}
#addProduct input {
    width: 100%;
    height: 40px;
    border: 3px solid black;
    font-weight: bold;
    border-radius: 6px;
    padding-left: 10px;
}

</style>
   