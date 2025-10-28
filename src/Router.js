import { createRouter, createWebHistory } from 'vue-router'
import SumaCheckbox from './components/SumaCheckbox.vue';

//array con las rutas
const rutas=
[
    {
        path:"/sumacheckbox",
        component:SumaCheckbox
    }
]

//variable para el router indicando tipo de navegacion y rutas
const router=createRouter(
    {
        history:createWebHistory(),
        routes:rutas
    })

//router es la que utiliza el fichero main.js, hay que exportarla
export default router;