<template>
    <div>
        <h1>Numeros padre</h1>
        <h2>La suma es: {{suma}}</h2>
        <button @click="crearHijo">Nuevo Número</button>
        <hr/>
        <ul>
            <li v-for="num in nums" :key="num">
                <HijoNumero :num="num" v-on:sumarNum="sumarNum"/>
            </li>
        </ul>
    </div>
</template>

<script>
import HijoNumero from './HijoNumero.vue';

    export default 
    {
        name:"PadreDeportes",
        components:
        {
            HijoNumero
        },
        data()
        {
            return{
                suma:0,
                nums:[]
            }
        },
        methods:
        {
            crearHijo()
            {
               var num = parseInt(Math.random() * 100) + 1;
               this.nums.push(num);
            },
            sumarNum(num)
            {
                this.suma+=num;
            }
        }
    }
</script>

<style>
     @import './../assets/css/estilos.css';
</style>