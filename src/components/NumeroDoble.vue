<template>
    <div>
        <h1>Número doble</h1>
        <h2>{{ mensaje }}</h2>
        <h3>{{ doble }}</h3>
        <button @click="volveraDeportes()">Volver a deportes</button>
    </div>
</template>

<script>
    export default 
    {
        name:"NumeroDoble",
        data()
        {
            return{
                mensaje:"",
                doble:0
            }
        },
        mounted()
        {
            console.log("param " + this.$route.params.numero);
            //los parametros siempre son string, aunque sean numericos
            let num = this.$route.params.numero;
            if (num == "")
            {
                this.mensaje="Sin params"
            }
            else
            {
                this.mensaje="Con params: "+num;
                this.doble=parseInt(num)*2;
            }
        },
        watch:
        {
            '$route.params.numero'(nextVal, oldVal)
            {
                if (nextVal != oldVal)
                {
                    this.mensaje="Esto ha cambiado:" + this.$route.params.numero;
                    this.doble=parseInt(this.$route.params.numero)*2;
                    console.log("ahora "+nextVal);
                    console.log("luego "+oldVal);
                }
            }
        },
        methods:
        {
            volveraDeportes()
            {
                this.$router.push("/padredeportes");
            }
        }
    }
</script>

<style>
     @import './../assets/css/estilos.css';
</style>