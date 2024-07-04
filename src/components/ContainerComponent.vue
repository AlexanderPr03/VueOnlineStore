<template lang="html">
    <div class="container">
        <ul class="product-list">
            <li v-for="produs of products" :key="produs.id" :class="[{ 'stock-none': (produs.stock==0 && !showAllProducts) }, {'transparent': (!produs.stock && showAllProducts) }]" >
                <ProductCardComponent                                                      
                    :name="produs.name" :description="produs.description" :price="produs.price"
                    :img="produs.image" :id="produs.id" 
                    @addedToCart="handleAddingToCart"   
                />
            </li>
        </ul>
        
    </div>
    
    <!-- <div v-show="showAllProducts">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis libero sed eaque dolores, illo ullam reprehenderit illum minus reiciendis temporibus voluptate vero sequi rem! Perferendis, quam cum! Fuga, veritatis! Ipsa.</div> -->
    <!-- <footer v-html="footerContent"></footer> -->

    <!-- V-cloak - va afisa un element ascuns până când restul instanței de Vue
     a fost compilată -->
     <div v-cloak></div>

    <!-- v-once - afiseaza componentul doar odata. Orice alta afisare consecutiva
     este oprita. -->
    <!-- <input v-model="message">
    <p v-once>{{ message }}</p> -->
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import ProductCardComponent from './ProductCardComponent.vue'

@Options({
    name: 'ContainerComponent',
    components: {
        ProductCardComponent,
    },
    methods: {
        handleAddingToCart(id) {
            this.$emit('addedProductToCart', id);
        }
    },
    updated() {
        // alert('Containerul a fost actualizat')
    },
    props: {
        showAllProducts: {
            type: String,
            default: false
        }
    },
    data() {
        return {
            products:[
                {
                    id: 0,
                    name:"Samsung Galaxy S23+ 256 GB Light Pink",
                    description: "6.6 | 50 MP | 8 GB | Dual SIM",
                    price: "17499",
                    image:'https://i.simpalsmedia.com/999.md/BoardImages/900x900/762ba5707197b0e84e94b49d9c88237a.jpg',
                    stock: 0,
                },
                {
                    id: 1,
                    name:"Samsung Galaxy M34 128 GB Silver",
                    description: "6.5 | 50 MP | 8 GB | Dual SIM",
                    price: "4199",
                    image:'https://darwin.md/images/product/2023/11/darwin-samsung-galaxy-m34-128-gb-silver-352597.webp',
                    stock: 2
                },
                {
                    id: 2,
                    name:"Laptop Asus Vivobook Go 14 E1404FA Mixed Black",
                    description: "14 | 8 GB | 512 GB | AMD Ryzen 5 7520U | VGA Integrată",
                    price: "7990",
                    image:'https://darwin.md/images/product/2024/01/darwin-laptop-asus-vivobook-go-14-e1404fa-mixed-black-390299.webp',
                    stock: 13
                },
                {
                    id: 3,
                    name:"Ceas inteligent Xiaomi Watch S3 Black",
                    description: "1.43 | 47 mm | Aliaj din aluminiu/ Cauciuc cu fluor | BHR7874GL",
                    price: "2299",
                    image:'https://darwin.md/images/product/2024/02/darwin-ceas-inteligent-xiaomi-watch-s3-black-424535.webp',
                    stock: 3,
                }
            ],
            footerContent: '<h2>© VueJS 2406</h2>',
            message:'text'
        }
    }
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