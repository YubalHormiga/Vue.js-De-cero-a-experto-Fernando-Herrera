
const app = Vue.createApp({
    // template: `
    // <h1>Hola Mundo</h1>
    // <p>Desde app.js</p>
    // `
    data() {
        return {
            quote: 'Soy Batman',
            autor: 'Yubal Hormiga',
            button: 'Change'
        }
    },
    methods: {
        chageQuote(){
            console.log('Hola Mundo')
            this.autor = 'ahora soy Pedro'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
            this.button = 'Modificado'
        }
    },
})

app.mount('#myApp')