<template>
    <section id="introduction">
        <carousel :items-to-show="1" :autoplay="3000" :wrapAround="true">
            <slide class="slide" v-for="slide in images" :key="slide" >
                <img :src="slide">
            </slide>

            <template #addons>
            <navigation />
            <pagination />
            </template>
        </carousel>
    </section>
</template>
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

@Options({
    name:'BlogView',
    data() {
        return {
            images: [
                'https://darwin.md/images/slider/2024/08/xiaomi_13pro_Desktop_1400x520px_Ro.webp',
                'https://darwin.md/images/slider/2024/08/Apple_day_Desctop_1400x520px_Rom.webp',
                'https://darwin.md/images/slider/2024/08/mese_gaming1_Desktop_1400x520px_ro.webp'

            ]
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    }
})
export default class BlogView extends Vue {}
</script>

<style></style>
  