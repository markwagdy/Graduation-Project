import axios from 'axios'

const api=axios.create({
    baseURL:'http://localhost:3000/api',
})
export const insertStudent=payload=>api.post(`/movie`,payload)

const apis={
    insertStudent
}
export default apis