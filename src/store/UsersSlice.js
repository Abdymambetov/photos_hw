import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk(
    'getUsers',
    async function(info, {dispatch, rejectWithValue}) {
        try {
            dispatch(preloaderOn())
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')
            if (response.status === 200) {
                const data = await response.json()
                return data
            } else {
                throw Error(`error: ${response.status}`)
            }

        }
        catch (error) {
            return rejectWithValue(error.message)
            dispatch(moreError(error))
        }
        finally {
            dispatch(preloaderOff())
        }
    }
)
export const getUserInfo = createAsyncThunk(
    'getUserInfo',
    async function(id, {dispatch, rejectWithValue}) {
        try {
            dispatch(preloaderOn())
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            if (response.status === 200) {
                const data = await response.json()
                return data
            } else {
                throw Error(`error: ${response.status}`)
            }

        }
        catch (error) {
            return rejectWithValue(error.message)
            dispatch(moreError(error))
        }
        finally {
            dispatch(preloaderOff())
        }
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        favUsers:[],
        error: '',
        user: {},
        preloader: false,

    },
    reducers: {
        preloaderOn: (state, action) => {
            state.preloader = true
        },
        preloaderOff: (state, action) => {
            state.preloader = false
        },
        moreError: (state, action) => {
            state.error = action.payload
        },
        deleteAllAction: (state, action) => {
            state.users = []
        },
        changeFavUser:(state,action)=>{
            let check = true
             state.favUsers.forEach(item=>{
                if(action.payload.id===item.id){
                    check = false
                }
            })
               if(check) {
                state.favUsers=[...state.favUsers,action.payload]
            } else{
                state.favUsers = state.favUsers.filter(item=>action.payload.id!==item.id)
            }
           
        }
    },
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(getUserInfo.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})

export const {preloaderOff, preloaderOn, moreError, deleteAllAction,changeFavUser} = usersSlice.actions

export default usersSlice.reducer


