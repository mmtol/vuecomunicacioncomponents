<template>
    <div>
        <h1>Padre deportes</h1>
        <h2 v-if="fav">Su deporte fav es {{ fav }}</h2>
        <ul>
            <li v-for="deporte in deportes" :key="deporte">
                <HijoDeporte :nombredeporte="deporte" v-on:seleccionarFavPadre="seleccionarFavPadre"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import HijoDeporte from './HijoDeporte.vue';
    export default 
    {
        name:"PadreDeportes",
        components:
        {
            HijoDeporte
        },
        data()
        {
            return{
                deportes:["Futbol", "Petanca", "Canicas"],
                fav:null
            }
        },
        methods:
        {
            seleccionarFavPadre(fav)
            {
                console.log("Luke, yo soy tu padre");
                this.fav=fav;
            }
        }
    }
</script>

<style>
     @import './../assets/css/estilos.css';
</style>