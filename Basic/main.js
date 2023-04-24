const app = Vue.createApp({
    template: `<h1>{{ firstName }}  {{ lastName }}</h1>
            <button @click="onChange">button</button>
            <div id="modal" v-if="isShowModal">
                <p>module 1</p>
            </div>`,
    data() {
        return {
            firstName: 'Hanh',
            lastName: 'Le',
            isShowModal: false

        }
    },
    methods: {
        onChange() {
            this.firstName = "new name",
            this.lastName = "new new new",
            this.isShowModal= !this.isShowModal 

        }
    }
})
app.mount('#contact')