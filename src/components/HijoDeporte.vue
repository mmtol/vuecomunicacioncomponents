<template>
    <div>
        <h4>{{nombredeporte}}</h4>
        <button @click="seleccionarFav">Seleccionar fav</button>
    </div>
</template>

<script>
    export default
    {
        name:"HijoDeporte",
        props:["nombredeporte"],
        mounted()
        {
            console.log(this.nombredeporte)
        },
        methods:
        {
            seleccionarFav()
            {
                console.log("Soy el hijo " + this.nombredeporte);
                this.$emit("seleccionarFavPadre", this.nombredeporte);
            }
        }
    }
</script>