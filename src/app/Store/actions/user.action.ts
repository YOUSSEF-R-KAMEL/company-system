import { createAction, props } from "@ngrx/store";
import { IUser, IUserCred, IUserInfo } from "../Models/IUser";

export const beginRegister = createAction("[auth page] begin register", props<{userData: IUser}>())
export const beginLogin = createAction("[auth page] begin Login ", props<{userCred: IUserCred}>())

export const loginSuccess = createAction("[auth page] Login Success", props<{userinfo: IUserInfo}>())
export const loginFail = createAction("[auth page] Login Failed")

export const duplicateUser = createAction("[auth page] Duplicate User", props<{email: string}>())
export const duplicateUserSuccess = createAction("[auth page] Duplicate User", props<{isDuplicate: boolean}>())

