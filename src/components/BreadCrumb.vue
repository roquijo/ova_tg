
<!-- ############################################## -->
<!-- ############# Sección de HTML ################ -->
<!-- ############################################## -->
<!-- 
	Definicion del componente BreadCrumb, define las migas de pan
    respectivamente del nombre de las rutas
 -->
<template>
    <!-- Se agrega componente Migas de Pan -->
    <v-breadcrumbs :items="items" class="pa-0">
        <template v-slot:divider>
            <v-icon x-small :color="$vuetify.breakpoint.xs ? 'gray' : 'white'">mdi-chevron-right</v-icon>
        </template>
        <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.path" :disabled="item.disabled" class="text-capitalize">
                <!--Separar nombre de ruta haciendo uso de Regex Camel Case-->
                <span class="secondary--text">
                    {{ item.name.replace(/([a-z0-9])([A-Z])/g, '$1 $2')}}
                </span>
            </v-breadcrumbs-item>
        </template>
    </v-breadcrumbs>
</template>
<!-- ############################################## -->
<!-- ############# Seccion de Script ############## -->
<!-- ############################################## -->
<!--
Espacio que permite la configuracion y definicion de propiedades, datos, metodos entre otros, determina
el comportamiento de la vista y su ciclo de vida  
-->
<script>
/*
* Definimos el modulo propio de la vista, basado en las directivas de vuejs
*/
export default {
    /*Nombre el componente*/
    name: "BreadCrumb",
    /*
    *Objeto con los datos de la vista, forman parte del sistema de reactividad de Vue, las vistas y otros
    * componentes reaccionan a los cambios
    */
    data() {
        return {
            /*Almacenar el nombre de la ruta en cuestión*/
            items: []
        }
    },
    /*Método que se encarga de ejecutarse nada más al renderizar la vista */
    created() {
        this.getRoute()
    },
    /*Observador que permite imprimir la ruta actual de forma continua*/
    watch: {
        $route() {
            this.getRoute()
        }
    },
    /*
    * Objeto que permite registrar las funciones que hacen parte de la capa de negocio de la vista
    */
    methods: {
        /*Se obtienen las rutas de cada modulo y se almacenan en items*/
        getRoute() {
            this.items = this.$route.matched
            this.lastItem()
        },
        /*Se controla el disabled de la ultima miga para indicar que se encuentra ahi*/
        lastItem() {
            if (this.items[this.items.length - 1]) {
                this.items[this.items.length - 1].disabled = true
                for (var item = 0; item < this.items.length - 1; item++) {
                    this.items[item].disabled = false
                }
            }
        }
    }
}
</script>
