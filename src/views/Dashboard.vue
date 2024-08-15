<template>
    <h1>Adăugare Produs</h1>
    <div class="container">
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

    <!-- v-if - scoate un element din codul de HTML -->
    <!-- v-show - ascunde elementul prin proprietatea display:none -->
    <h1>Actualizare Produs</h1>
    <div class="container">
        <form id="updateProduct" @submit.prevent="updateProduct">
            <select v-model="updateId" @change="loadProductDetails">
                <option v-for="product of products" :key="product.id" :value="product.id">{{ product.id }} - {{ product.title }}</option>
            </select>
            <input v-model="updateName" type="text" name="title" placeholder="Nume produs">
            <input v-model="updateDescription" type="text" name="description" placeholder="Descriere produs">
            <input v-model="updatePrice" type="number" name="price" placeholder="Pret">
            <input v-model="updateImage" type="text" name="image" placeholder="Imagine">
            <input v-model="updateStock" type="number" name="stock" placeholder="Stock (Cantitate)">

            <input type="submit" value="Actualizeaza produs">
        </form>
    </div>

    <h1>Mesaje primite:</h1>
    <div class="container">
        <ul v-if="messages.length > 0">
            <li class="mesaj" v-for="message in messages" :key="message.id">
                <p><b>{{ message.name }} ({{ message.email }}):</b> {{ message.message }}</p><button @click="deleteMessage(message.id)">Sterge mesajul.</button>
            </li>
        </ul>
        <p v-else>Niciun mesaj primit.</p>
    </div>


    <button @click="handleLogout">Logout</button>
 </template>
   
 <script lang="ts">
import { Options, Vue } from 'vue-class-component';
import api from '@/api/api';
import { logout } from '@/auth/auth';
import { supabase } from '@/lib/supabaseClient';


@Options({
    created() {
        this.fetchProducts();
        this.fetchMessages();
    },
    methods: {
        async fetchProducts() {
            const response = await api.getProducts();
            this.products = response.data;
        },
        async fetchMessages() {
            const response = await supabase.from('messages').select();

            this.messages = response.data;
        },
        async loadProductDetails() {
            const response = await api.getProduct(this.updateId);
            const product = response.data[0];
            this.updateName = product.title;
            this.updateDescription = product.description;
            this.updatePrice = product.price;
            this.updateImage = product.image;

        },
        async updateProduct() {
            const response = await api.patchProduct(this.updateId, {
                title:this.updateName,
                description: this.updateDescription,
                price:this.updatePrice,
                image: this.updateImage,
            });
           if (response.status === 200) {
            alert('Produsul a fost actualizat cu succes!');
           } else {
            alert('A aparut o eroare');
           }
        },
        async sendProduct() {
            const response = await api.addProduct({
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
        async deleteMessage(id:any) {
          const response = await api.deleteMessage(id);
          this.fetchMessages();
        },
        handleLogout() {
            logout();
            this.$router.push({ name: "Home"});
        }


    },
    data() {
        return {
            //lista produselor de pe server
            products: [],
            // valorile pentru crearea produselor
            id:null,
            name:null,
            description:null,
            price:null,
            image:null,
            stock:null,

            // valorile pentru actualizarea produselor
            updateId:null,
            updateName:null,
            updateDescription:null,
            updatePrice:null,
            updateImage:null,
            updateStock:null,
            
            // lista de mesaje de la utilizatori de pe server
            messages:[],

        }
    },
    props: {
        
    }
})
 export default class Dashboard extends Vue {}
 </script>
 
 <style scoped>
.container {
    display: flex;
    justify-content: center;
    width: 100%;
}
#addProduct, #updateProduct {
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
#addProduct input, #updateProduct input, #updateProduct select {
    width: 100%;
    height: 40px;
    border: 3px solid black;
    font-weight: bold;
    border-radius: 6px;
    padding-left: 10px;
}
.mesaj {
    text-align: left;
    font-size: 20px;
}

</style>
   

<!-- https://www.npmjs.com/package/vue3-carousel -->