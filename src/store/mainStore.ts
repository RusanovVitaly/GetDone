import {create} from "zustand";
import {IStore} from "./types/mainStore";
import {UserSlice} from "./slices/user/userSlice";

//Тут только слайсы, nothing more
const useStore = create<IStore>((setState, getState) => ({
    ...UserSlice(setState, getState)
}))

export default useStore;