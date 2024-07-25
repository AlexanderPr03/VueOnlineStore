<template lang="html">
    <div>
        <slot :mesaj="mesaj" ></slot>
    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'ButtonComponent',
    props:{
        color: String
    },
    computed: {
        culoareButon() {
            return {
                'button-red': this.color === 'red',
                'button-blue': this.color === 'blue'
            }
        }
    },
    data() {
        return {
            mesaj: 'Hello from Button Component!'
        }
    }
   
})
export default class ButtonComponent extends Vue {

}
</script>

<style lang="css" scoped>
    button {
        width: 200px;
        height: 40px;
        border-radius: 24px;
        border: none;
        cursor: pointer;
    }
    .button-red {
        background-color: red;
        color: white;
    }
    .button-blue {
        background-color: blue;
        color: white;
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