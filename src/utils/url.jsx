import axios from "axios";

const countryUrl = "https://restcountries.com/v2/name";

export const customFetch = axios.create({
    baseURL: countryUrl
})
