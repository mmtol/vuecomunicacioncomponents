<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/padredeportes">Padre deportes</router-link>
            </li>
            <li>
                <router-link to="/padrenumeros">Padre numeros</router-link>
            </li>
            <li>
                <router-link to="/comicscomponent">Comics component</router-link>
            </li>
            <li>
                <router-link to="/seleccionmultiple">Selección múltiple</router-link>
            </li>
            <li>
                <router-link to="/numerodoble">Numero doble sin parametro</router-link>
            </li>
            <li v-for="num in nums" :key="num">
                <router-link :to="'/numerodoble/'+num">Numero doble de {{ num }}</router-link>
            </li>
             <li v-for="num in mult" :key="num">
                <router-link :to="'/tablamultiplicar/'+num">Tabla del {{ num }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default 
{
    name:"MenuComponent",
    data()
    {
        return{
            nums:[99,405],
            mult:[]
        }
    },
    methods:
    {
        rellenarAleatorios()
        {
            for (var i = 0; i < 5; ++i)
            {
                var random = parseInt(Math.random()*100)+1;
                this.mult[i] = random;
            }
        }
    },
    mounted()
    {
        this.rellenarAleatorios();
    }
}
</script>

<style>
    @import './../assets/css/estilos.css';
</style>