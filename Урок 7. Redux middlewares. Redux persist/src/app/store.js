import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tasksReducer from '../features/tasksSlice';


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, tasksReducer);

const store = configureStore({
    reducer: {
        tasks: persistedReducer,
    },
});

export const persistor = persistStore(store);

export default store;
