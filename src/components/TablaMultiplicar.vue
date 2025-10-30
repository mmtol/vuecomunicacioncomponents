<template>
    <div>
        <h1>Tabla multiplicar</h1>
        <table>
            <thead>
                <tr>
                    <th>OPERACIÓN</th>
                    <th>RESULTADO</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contador in 10" :key="contador">
                    <td>
                        {{num}} * {{ contador }} = 
                    </td>
                    <td>{{ num * contador }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default 
    {
        name:"TablaMultiplicar",
        data()
        {
            return{
                num:0
            }
        },
        mounted()
        {
            this.num = parseInt(this.$route.params.numero);
        },
        watch:
        {
            '$route.params.numero'(nextVal, oldVal)
            {
                if (nextVal != oldVal)
                {
                    this.num=parseInt(this.$route.params.numero);
                }
            }
        },
    }
</script>

<style>
     @import './../assets/css/estilos.css';
</style>