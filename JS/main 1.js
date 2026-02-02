const app = Vue.createApp({

    data() {
        return {
            nombre: '',
            precio: '',
            cantidad: '',
            productos: []
        }
    },

    methods: {
        agregarProducto() {
            if (this.nombre && this.precio > 0 && this.cantidad > 0) {
                this.productos.push({
                    nombre: this.nombre,
                    precio: Number(this.precio),
                    cantidad: Number(this.cantidad)
                })

                this.nombre = ''
                this.precio = 0
                this.cantidad = 1
            }
        }
    },

    computed: {
        subtotal() {
            return this.productos.reduce(
                (total, p) => total + (p.precio * p.cantidad),
                0
            )
        },

        iva() {
            return (this.subtotal * 0.16).toFixed(2)
        },

        totalPagar() {
            return (this.subtotal * 1.16).toFixed(2)
        }
    }

})

app.mount('#componente')
