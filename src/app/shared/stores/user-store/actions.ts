import { Action } from "@ngrx/store";
import { User } from "../../models/user";


export const ActionTypes = {
    AUTHENTICATION: "[users] Authentication",
    AUTHENTICATE_SUCCESS: "[users] Authentication SUCCESS",
    AUTHENTICATE_FAILURE: "[users] Authentication FAILURE",
    AUTHENTICATE: "[users] Authenticate",
}


export class LoadAction implements Action{
    readonly type: string = ActionTypes.AUTHENTICATION;
    constructor(public payload: {userName: string, password: string}) {
    }
}

export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.AUTHENTICATE_SUCCESS;
    constructor(public payload: any = { user: User }) {}
}

export class LoadFailureAction implements Action {
    readonly type = ActionTypes.AUTHENTICATE_FAILURE;
    constructor(public payload: { error: string }) {}
  }

export class DemoAction implements Action{
    readonly type: string = ActionTypes.AUTHENTICATE;

    constructor(public payload?: { error: string }) {}
}

/**
 * Actions type.
 * @type {Actions}
 */
export type Actions =  LoadAction | LoadSuccessAction | LoadFailureAction | DemoAction;