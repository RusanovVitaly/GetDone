import {IStore} from "../../types/mainStore";
import {SetState, GetState} from "zustand";
import {UserTypes} from "./userTypes";


export const UserSlice = (setState: SetState<IStore>, getState: GetState<IStore>): UserTypes => ({
    firstname: "Вася",
    lastname: "Пупкин",
    setFirstName: (firstname) => {
        setState({firstname})
    }
});