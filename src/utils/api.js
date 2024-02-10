import axios from 'axios';

const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGMyZTJhZGEyNjEzMjZiZTYzM2E1ODlhYWNmNTE4OCIsInN1YiI6IjY1YWU3YjkxNjdiNjEzMDBjYmQ3M2Q1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m1bhVP4tmidMRAYAkwx1L9iTw_k3-H-2EIR-TXD9Veg";
  
const headers = {
    Authorization:`Bearer ${TMDB_TOKEN}`,
    accept:'application/json'
};

export const fetchDataFromApi = async (url,params) => {
    try {
        const {data} = await axios.get(BASE_URL+url,{
            headers,
            params
        })
        return data;
    } catch (err) {
        console.log(err);
        return err
    }
}