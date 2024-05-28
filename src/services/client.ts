import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const OPEN_WEATHER_KEY = "439d4b804bc8187953eb36d2a8c26a02"

class Client {
    private baseURL: string;
    private instance: AxiosInstance;
    public key: string

    constructor() {
        this.key = OPEN_WEATHER_KEY
        this.baseURL = 'https://openweathermap.org/data/2.5';
        this.instance = axios.create({ baseURL: this.baseURL })
    }

    public get(endpoint: string, config?: AxiosRequestConfig) {
        return this.instance.get(endpoint, config)
    }

    public post(endpoint: string, data: object, config?: AxiosRequestConfig) {
        return this.instance.post(endpoint, data, config)
    }
}

export const client = new Client();