import axios from "axios";
import UpdateMahasiswa from "../componen/admin/UpdateMahasiswa";
import { data } from "autoprefixer";

const api = axios.create({
    baseURL: "http://127.0.0.1:4000"
});

const apis = {
    getAllMahasiswa: ()  => api.get('/mahasiswa'),
    getMahasiswaByNim: (nim) => api.get(`/mahasiswa/${nim}`),
    createMahasiswa: (data) => api.post('/mahasiswa', data),
    UpdateMahasiswa: (nim, data) => api.put (`/mahasiswa/${nim}`, data),
    DeleteMahasiswa: (nim) => api.delete(`/mahasiswa/${nim}`)
}
 
export default apis;