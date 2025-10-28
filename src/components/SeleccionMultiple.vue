<template>
    <div>
        <form>
            <h1>Selección múltiple</h1>
            <h2>Elige las palabras que quieras</h2>
            <select multiple id="palabras" v-model="seleccionadas">
                <option v-for="palabra in palabras" :key="palabra">{{ palabra }}</option>
            </select>
            <br/>
            <h3 v-for="selecc in seleccionadas" :key="selecc">{{ selecc }}</h3>
        </form>
    </div>
</template>

<script>
    export default 
    {
        name:"SeleccionMultiple",
        data()
        {
            return{
                palabras:["bufanda", "patata", "botella", "vestido", "lapiz", "mano"],
                seleccionadas:[]
            }
        }
    }
</script>

<style>
     @import './../assets/css/estilos.css';
</style>