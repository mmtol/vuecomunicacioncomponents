<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/padredeportes">Padre deportes</router-link>
            </li>
            <li>
                <router-link to="/padrenumeros">Padre numeros</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default 
{
    name:"MenuComponent"
}
</script>

<style>
    @import './../assets/css/estilos.css';
</style>