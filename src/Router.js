import { createRouter, createWebHistory } from 'vue-router'
import PadreDeportes from './components/PadreDeportes.vue';
import PadreNumeros from './components/PadreNumeros.vue';
import ComicsComponent from './components/ComicsComponent.vue';
import SeleccionMultiple from './components/SeleccionMultiple.vue';
import NumeroDoble from './components/NumeroDoble.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue';

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
    },
    {
        path:"/comicscomponent",
        component:ComicsComponent
    },
    {
        path:"/seleccionmultiple",
        component:SeleccionMultiple
    },
    {
        path:"/numerodoble/:numero?",
        component:NumeroDoble
    },
    {
        path:"/tablamultiplicar/:numero?",
        component:TablaMultiplicar
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