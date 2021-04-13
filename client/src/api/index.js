import axios from 'axios'

const api=axios.create({
    baseURL:'http://localhost:3000/api',
})
export const insertStudent=payload=>api.post(`/student`,payload)
export const getStudents=()=>api.get(`/students`)
export const getStudentById=id=>api.get(`/students/${id}`)
export const createRoom=()=>api.get(`/meeting/`)
const apis={
    insertStudent,
    getStudents,
    getStudentById,
    createRoom
}
export default apis