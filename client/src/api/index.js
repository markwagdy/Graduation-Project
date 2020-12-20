import axios from 'axios'

const api=axios.create({
    baseURL:'http://localhost:3000/api',
})
export const insertStudent=payload=>api.post(`/student`,payload)
export const getStudents=()=>api.get(`/students`)
const apis={
    insertStudent,
    getStudents
}
export default apis