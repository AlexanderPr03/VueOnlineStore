import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // url de baza pentru api
    headers: {
        'Content-Type': 'application/json'
    }
})

const api = {
    // GET request pentru a prelua toate produsele
    getProducts() {
        return axiosInstance.get('/products')
    },

    // GET request pentru a prelua un singur produs
    getProduct(id:number) {
        return axiosInstance.get(`/products?id=${id}`);
    },

    // POST request pentru a crea un produs nou
    addProduct(produs:object) {
        return axiosInstance.post('/products', produs)
    },

    // PUT request pentru a actualiza total un produs existent
    updateProduct(id:number, produs:object) {
        return axiosInstance.put(`/products/${id}`, produs);
    },

    // PATCH request pentru a actualiza parțial un produs
    patchProduct(id:number, produs:object) {
        return axiosInstance.patch(`/products/${id}`, produs);
    },

    // DELETE request pentru a șterge produsul
    deleteProduct(id:number) {
        return axiosInstance.delete(`/products/${id}`);
    },

    getMessages() {
        return axiosInstance.get('/messages')
    },

    // GET request pentru a prelua un singur produs
    getMessage(id:number) {
        return axiosInstance.get(`/messages?id=${id}`);
    },

    // POST request pentru a crea un produs nou
    addMessage(mesaj:object) {
        return axiosInstance.post('/messages', mesaj)
    },

    // PUT request pentru a actualiza total un produs existent
    updateMessage(id:number, mesaj:object) {
        return axiosInstance.put(`/messages/${id}`, mesaj);
    },

    // PATCH request pentru a actualiza parțial un produs
    patchMessage(id:number, mesaj:object) {
        return axiosInstance.patch(`/messages/${id}`, mesaj);
    },

    // DELETE request pentru a șterge produsul
    deleteMessage(id:number) {
        return axiosInstance.delete(`/messages/${id}`);
    }
}

export default api;