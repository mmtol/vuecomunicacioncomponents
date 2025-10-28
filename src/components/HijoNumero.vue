<template>
    <div>
        <h1>Numero: {{ num }}</h1>
        <button @click="sumarNum">Sumar {{ num }}</button>
    </div>
</template>

<script>
    export default 
    {
        name:"HijoNumero",
        props:["num"],
        methods:
        {
            sumarNum()
            {
                this.$emit("sumarNum", this.num);
            }
        }
    }
</script>

<style>
     @import './../assets/css/estilos.css';
</style>