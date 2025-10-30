import { createRouter, createWebHistory } from 'vue-router'
import PadreDeportes from './components/PadreDeportes.vue';
import PadreNumeros from './components/PadreNumeros.vue';

//array con las rutas
const rutas=
[
    {
        path:"/padredeportes",
        component:PadreDeportes
    },
    {
        path:"/padrenumeros",
        component:PadreNumeros
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