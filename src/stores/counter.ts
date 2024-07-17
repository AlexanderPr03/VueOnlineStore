import { defineStore } from "pinia";


export const useCounterStore = defineStore('counter', {
    // State - este un obiect care contine datele reactive ale store-ului (
    // spatiului de stocare)
    state: () => ({
        productClicks: 0,
        blogClicks: 0
    }),  // echivalent cu data()

    // Getters - proprietati computed care pot fi calculate in baza celor din state
    // proprietati reactive - daca se schimba una din proprietatile din State, automat
    // se va reactuliza si valoarea proprietatii din getters
    getters: {
        totalClicks: (state) => {
            state.blogClicks + state.productClicks
        }
    },   // echivalent cu computed
    
    // actions - metode care schimba starea storage-ului nostru
    actions: {
        incrementProduct() {
            this.productClicks++;
        },
        incrementBlog() {
            this.blogClicks++;
        },
        async sendClicks() {
            // cream o functie in api.ts si o apelam aici
        }
    }  // echivalent cu methods
})