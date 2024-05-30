let app = Vue.createApp({
    // data, functions, component templates
    data() {
        return {
            url: 'https://www.google.com',
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true },    // img: is the path 
                { title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false },
                { title: 'Good Omens', author: 'Terry Pratchett & Neil Gaiman', img: 'assets/3.jpg', isFav: true }
            ] 
        }
    },

    methods: {
        toggleShowBooks() {
            this.showBooks  = !this.showBooks
        }
        

    }
})

app.mount('#app')