import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name: 'liveChat',
    initialState: [],
    reducers:{
        addChat: (state, action) => {
            state.splice(15,1)
            state.push(action.payload);
        }
    }
});

export const { addChat } = liveChatSlice.actions;

export default liveChatSlice.reducer;
