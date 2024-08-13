<template lang="html">
    <div class="container">
        <select v-model="criteriuSortare" @change="sorteazaProduse">
            <option value="title">Titlu</option>
            <option value="price">Preț</option>
            <!-- <option value="description">Descriere</option> -->
            <option value="rating.rate">Rating</option>
            <option value="rating.count">Nr. de Ratinguri</option>
        </select>

        <select v-model="ordineSortare" @change="sorteazaProduse">
            <option value="asc">Crescător</option>
            <option value="desc">Descrescător</option>
        </select>

        <select v-model="categorieSelectata" @change="filtreazaProduse">
            <option value="men's clothing">Îmbrăcăminte bărbați</option>
            <option value="women's clothing">Îmbrăcăminte femei</option>
            <option value="jewelery">Bijuterii</option>
            <option value="electronics">Electronica</option>
        </select>

        <label>Pret minim:</label>
        <input type="number" placeholder="Pret minim" v-model="minPret" @input="filtreazaProduse">
        <label>Pret maxim:</label>
        <input type="number" placeholder="Pret maxim" v-model="maxPret" @input="filtreazaProduse">

        <ul class="product-list">
            <li v-for="produs of produseFiltrateSiSortate" :key="produs.id" :class="[{ 'stock-none': (produs.stock==0 && !showAllProducts) }, {'transparent': (!produs.stock && showAllProducts) }]" >
                <ProductCardComponent                                                    
                    :name="produs.title" :description="produs.description" :price="produs.price"
                    :img="produs.image" :id="produs.id" 
                    :rate="produs.rating.rate"
                    :count="produs.rating.count"
                    @addedToCart="handleAddingToCart" @click="incrementProduct"  />
            </li>
        </ul>
        <!-- {{ productClicks }} -->
    </div>
    
    <!-- <button @click="stock++">Click</button> -->


    <!-- <div v-show="showAllProducts">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis libero sed eaque dolores, illo ullam reprehenderit illum minus reiciendis temporibus voluptate vero sequi rem! Perferendis, quam cum! Fuga, veritatis! Ipsa.</div> -->
    <!-- <footer v-html="footerContent"></footer> -->

    <!-- V-cloak - va afisa un element ascuns până când restul instanței de Vue
     a fost compilată -->
     <div v-cloak></div>
    <!-- {{ nume }} -->
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
        ...mapActions(useCounterStore, ['incrementProduct']),

        sorteazaProduse() {
            // Funcție empty
        },
        filtreazaProduse() {
            // Funcție
        }
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
        ...mapState(useCounterStore, ['productClicks']),

        produseFiltrateSiSortate() {
            // Mai întâi vom filtra produsele, apoi le vom sorta

            // Vom crea o copie a listei de produse, si o vom sorta

            // Destructuram continutul listei products in interioriul unei liste noi
            // create
            let produseFiltrate = this.products.filter(produs => {
                // Verificam daca vrem sa filtram produsele sau daca produsul face parte din categoria selectata
                let verificareCategorie = (this.categorieSelectata === '' ) || (produs.category === this.categorieSelectata);

                // Verificam daca pretul produsului se incadreaza in intervalul selectat
                let verificarePret = (produs.price >= this.minPret) && (produs.price <= this.maxPret);

                // Afisam produsul doar daca el respecta ambele criterii
                return verificareCategorie && verificarePret;
            })

            // Sortare
            return produseFiltrate.sort((a,b) => {
                 let valoareSortare;

                //  Determinam ordinea sortarii si utilizam o variabila
                // valoareSortare pentru a stoca valoarea respectiva
                 if (this.ordineSortare === 'asc') {
                    valoareSortare = 1;
                 } else {
                    valoareSortare = -1;
                 }

                // Ne ocupam de proprietatile nested
                if (this.criteriuSortare.includes('.')) {
                    // Impartim criteriile in proprietatea principala si
                    // subproprietate

                    // rating.count => proprietatePrincipala = rating.  proprietateSecundara = count
                    let [proprietatePrincipala, proprietateSecundara] = this.criteriuSortare.split('.');

                    // Extragem valorile pe care le vom compara
                    let valoareA = a[proprietatePrincipala][proprietateSecundara];
                    let valoareB = b[proprietatePrincipala][proprietateSecundara];

                    // Comparam valorile

                    // a = 50, b = 25
                    // 1
                    if (valoareA > valoareB) {
                        return valoareSortare * 1;
                    } else if (valoareA < valoareB) {
                        return valoareSortare * -1;
                    } else {
                        return 0;
                    }

                } else {
                    // Pentru proprietatile directe ale obiectului
                    let valoareA = a[this.criteriuSortare];
                    let valoareB = b[this.criteriuSortare];

                    // Facem comparatia
                    // CRITERIUL DE SORTARE
                    if (valoareA > valoareB) {
                        return valoareSortare * 1;
                    } else if (valoareA < valoareB) {
                        return valoareSortare * -1;
                    } else {
                        return 0;
                    }
                }
                
            })
        }
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
        axios.get('http://localhost:3000/products')
            .then(response => {
                for (const produs of response.data) {
                    this.products.push(produs)
                }
            });
    },
    data() {
        return {
            footerContent: '<h2>© VueJS 2406</h2>',
            message:'text',
            prenume: 'Alexandru',
            nume_familie: 'Prohnitchi',
            mesaj: 'Hello World',
            stock: 8,

            // Sortare
            products:[],
            criteriuSortare: 'title',
            ordineSortare:'asc', // crescator/descrescator,
            // Filtrare
            categorieSelectata: '',
            minPret: 0,
            maxPret: Infinity
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