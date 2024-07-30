<template lang="html">
    <footer>
        <div id="flex-center">
            <p>© {{ new Date().getFullYear() }} Alexandru Prohnitchi</p>
        </div>
    </footer>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'FooterComponent',
    data() {
        return {
        }
    },

    methods: {

    }
})
export default class FooterComponent extends Vue {

}
</script>

<style lang="css" scoped>
   footer {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 10vh;
    width: 100%;
    background-color: black;
    margin-top: 40px;

    /* position: absolute;
    bottom: 0; */
   }
   #flex-center {
    color: white;
   }
</style>


<!-- 1) Crearea componentului -->
<!-- 2) Montarea Componentului -->
<!-- 3) Actualizarea Componentului -->
<!-- 4) Distrugerea Componentului -->