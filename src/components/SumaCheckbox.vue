<template>
    <div>
        <form v-on:submit.prevent="crearChecks()">
            <h1>Suma Checkbox</h1>
            <button>Crear</button>
            <div v-if="total">
                <div v-for="contador in total" :key="contador">
                    <input type="checkbox"/> 
                    <label>{{ num }}</label>
                </div>
            </div>
            <h2>La suma seleccionada es {{ suma }}</h2>
        </form>
    </div>
</template>

<script>
    export default 
    {
        name:"SumaCheckbox",
        data()
        {
            return{
                total:null,
                suma:0,
                num:null

            }
        },
        methods:
        {
            crearChecks()
            {
                this.total = parseInt(Math.random()*10)+1;
            },
            sumar(num)
            {
                this.suma += num;
            }
        }
    }
</script>

<style>
     @import './../assets/css/estilos.css';
</style>