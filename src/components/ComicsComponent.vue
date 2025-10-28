<template>
    <div>
        <h1>Comics</h1>
        <div>
            <form v-on:submit.prevent="crearComic()">
                <hr/>
                <label>Título</label>
                <br/>
                <input type="text" v-model="form.titulo"/>
                <br/>
                <label>Imagen</label>
                <br/>
                <input type="text" v-model="form.imagen"/>
                <br/>
                <label>Descripción</label>
                <br/>
                <input type="text" v-model="form.descripcion"/>
                <br/>
                <label>Año</label>
                <br/>
                <input type="text" v-model="form.year"/>
                <br/>
                <br/>
                <button>Crear comic</button>
                <hr/>
            </form>
        </div>
        <h3 v-if="fav">Fav: {{ fav }}</h3>
        <div id="comics" v-for="(comic,index) in comics" :key="comic">
            <ComicComponent :comic="comic" :index="index" v-on:seleccionarFav="seleccionarFav" v-on:deleteComic="deleteComic"/>
        </div>
    </div>
</template>

<script>
import ComicComponent from "./ComicComponent.vue";

export default {
    name: "ComicsComponent",
    components: {
        ComicComponent,
    },
    methods:
    {
        seleccionarFav(comic)
        {
            this.fav = comic.titulo;
        },
        crearComic()
        {
            this.comics.push(this.form);
        },
        deleteComic(index)
        {
            this.comics.splice(index, 1);
        }
    },
    data() {
        return {
            comics: [
                {
                    titulo: "Spiderman",
                    imagen:
                        "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                    descripcion: "Hombre araña",
                    year: 1997,
                },
                {
                    titulo: "Wolverine",
                    imagen:
                        "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                    descripcion: "Lobezno",
                    year: 2003,
                },
                {
                    titulo: "Guardianes de la Galaxia",
                    imagen:
                        "https://i1.whakoom.com/large/1a/2b/b1c53be43ba54f9b9be5e35d392eed02.jpg",
                    descripcion: "Yo soy Groot",
                    year: 2006,
                },
                {
                    titulo: "Avengers",
                    imagen:
                        "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                    descripcion: "Los Vengadores",
                    year: 1993,
                },
                {
                    titulo: "Spawn",
                    imagen:
                        "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                    descripcion: "Al Simmons",
                    year: 2000,
                },
                {
                    titulo: "Batman",
                    imagen:
                        "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                    descripcion: "Murcielago",
                    year: 2001,
                },
            ],
            fav:null,
            form:
            {
                titulo:"",
                imagen:"",
                descripcion:"",
                year:0
            }
        };
    },
};
</script>

<style>
    @import "./../assets/css/estilos.css";
</style>