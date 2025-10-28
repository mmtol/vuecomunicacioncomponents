<template>
    <div>
        <h4>{{nombredeporte}}</h4>
    </div>
</template>

<script>
    export default
    {
        name:"HijoDeporte",
        props:["nombedeporte"],
        mounted()
        {
            console.log(this.nombredeporte)
        }
    }
</script>