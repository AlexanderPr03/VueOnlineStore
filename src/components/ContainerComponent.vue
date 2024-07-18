<template lang="html">
    <div class="container">
        <ul class="product-list">
            <li v-for="produs of products" :key="produs.id" :class="[{ 'stock-none': (produs.stock==0 && !showAllProducts) }, {'transparent': (!produs.stock && showAllProducts) }]" >
                <ProductCardComponent                                                      
                    :name="produs.name" :description="produs.description" :price="produs.price"
                    :img="produs.image" :id="produs.id" 
                    @addedToCart="handleAddingToCart" @click="incrementProduct"  />
            </li>
        </ul>
        {{ productClicks }}
    </div>
    
    <button @click="stock++">Click</button>


    <!-- <div v-show="showAllProducts">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis libero sed eaque dolores, illo ullam reprehenderit illum minus reiciendis temporibus voluptate vero sequi rem! Perferendis, quam cum! Fuga, veritatis! Ipsa.</div> -->
    <!-- <footer v-html="footerContent"></footer> -->

    <!-- V-cloak - va afisa un element ascuns până când restul instanței de Vue
     a fost compilată -->
     <div v-cloak></div>
    {{ nume }}
    <!-- v-once - afiseaza componentul doar odata. Orice alta afisare consecutiva
     este oprita. -->
    <!-- <input v-model="message">
    <p v-once>{{ message }}</p> -->
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import ProductCardComponent from './ProductCardComponent.vue'
import axios from 'axios';
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '@/stores/counter';

@Options({
    name: 'ContainerComponent',
    components: {
        ProductCardComponent,
    },
    methods: {
        handleAddingToCart(id) {
            this.$emit('addedProductToCart', id);
        },
        ...mapActions(useCounterStore, ['incrementProduct'])
    },
    props: {
        showAllProducts: {
            type: String,
            default: false,
        }
    },
    computed: {
        nume() {
           return this.prenume + " " + this.nume_familie 
        },
        mesajInvers() {
            return this.mesaj.split('').reverse().join('');
        },
        ...mapState(useCounterStore, ['productClicks'])
    },
    watch: {
        stock(valoareNoua, valoareVeche) {
            if (valoareNoua <= 5) {
                this.limitedQuantity = true
            }
            alert(`Valoarea veche: ${valoareVeche}, Valore Noua: ${valoareNoua} `)
        }
    },
    created() {
        // fetch('http://localhost:3000/produse')
        //     .then(raspuns => raspuns.json())
        //     .then(date => console.log(date));
        axios.get('http://localhost:3000/products')
            .then(response => {
                for (const produs of response.data) {
                    this.products.push(produs)
                }
            });

        // PUT - schimba total resursa
        // PATCH - schimba partial ('peticim') resursa
        // axios.put()
        // axios.patch()
    },
    updated() {
        // alert('Containerul a fost actualizat')
    },
    data() {
        return {
            products:[],
            footerContent: '<h2>© VueJS 2406</h2>',
            message:'text',
            prenume: 'Alexandru',
            nume_familie: 'Prohnitchi',
            mesaj: 'Hello World',
            stock: 8
        }
    },
   
})
export default class ContainerComponent extends Vue {

}
</script>

<style lang="css" scoped>
    .container {
        display:flex;
        width: 100%;
    }
    .product-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 20px;
        list-style: none;
    }
    .stock-none {
        display: none;
    }
    .transparent {
        opacity: 70%;
    }
</style>


<!-- 1) Crearea componentului -->
<!-- 2) Montarea Componentului -->
<!-- 3) Actualizarea Componentului -->
<!-- 4) Distrugerea Componentului -->


<!-- fetch().then() -->
<!-- .then() -->
<!-- .catch() -->

<!-- Promise.all(/* o lista de promisiuni */) -->