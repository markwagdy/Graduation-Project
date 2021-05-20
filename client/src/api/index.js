import axios from 'axios'

const api=axios.create({
    baseURL:'http://localhost:3000/api',
})

export const insertStudent=payload=>api.post(`/student`,payload)
export const getStudents=()=>api.get(`/students`)
export const getStudentById=id=>api.get(`/students/${id}`)
export const createMeeting=payload=>api.post(`/meeting`,payload)
export const updateMeeting=payload=>api.put(`/meeting`)
export const getMeetingById=id=>api.get(`/meeting/getMeeting`)

const apis={
    insertStudent,
    getStudents,
    getStudentById,
    createMeeting,
    getMeetingById
}
export default apis