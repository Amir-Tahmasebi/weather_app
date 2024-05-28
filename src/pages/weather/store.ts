import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { client } from './../../services'
import { DetailType, DailyType } from './../../types'
import { RootState } from './../../store'

export const fetchCityWeather = createAsyncThunk(
    'weather/getCityWeather',
    async (cityId: number) => {
        const response = await client.get(`/weather?id=${cityId}&appid=${client.key}`)
        return response.data
    }
)

export const fetchDailyWeather = createAsyncThunk('weather/fetchDailyWeather', async ({ lat, lon }: { lat: number, lon: number }) => {
    try {
        const response = await client.get(`/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${client.key}`)
        return response.data.daily
    } catch (error) {

    }
})

type InitialStateType = {
    detail: DetailType,
    daily: DailyType[],
    loadingDetail: boolean
    loadingDaily: boolean
}

const initialState: InitialStateType = {
    loadingDaily: false,
    loadingDetail: false,
    detail: {} as DetailType,
    daily: [],
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCityWeather.fulfilled, (state, action) => {
                state.detail = action.payload
                state.loadingDetail = false
            })
            .addCase(fetchCityWeather.pending, (state) => {
                state.loadingDetail = true
            })
            .addCase(fetchCityWeather.rejected, (state) => {
                state.loadingDetail = false
            })
        builder
            .addCase(fetchDailyWeather.fulfilled, (state, action) => {
                state.daily = action.payload
                state.loadingDaily = false
            })
            .addCase(fetchDailyWeather.pending, (state, action) => {
                state.loadingDaily = true
            })
            .addCase(fetchDailyWeather.rejected, (state, action) => {
                state.loadingDaily = false
            })
    },

})


export const selectedWeatherState = (state: RootState) => state.weather

export const { reducer, name, actions } = weatherSlice