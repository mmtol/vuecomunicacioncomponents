<template>
    <div>
        <h2>{{ comic.titulo }}</h2>
        <h4>{{ comic.descripcion }}</h4>
        <img :src="comic.imagen"/>
        <h4 :class="
        {
            rojo: comic.year <= 2000,
            verde: comic.year > 2000
        }">
            {{ comic.year }}
        </h4>
        <button @click="seleccionarFav">Elegir como fav</button>
    </div>
</template>

<script>
    export default 
    {
        name:"ComicComponent",
        props:["comic"],
        methods:
        {
            seleccionarFav()
            {
                this.$emit("seleccionarFav", this.comic);
            }
        }
    }
</script>

<style>
     @import './../assets/css/estilos.css';
     @import './../assets/css/comics.css';
</style>