import { Action } from "@ngrx/store";
import { Actions } from "@ngrx/effects";

export const GO = '[Route] Go';
export const BACK = '[Route] Back';
export const FORWARD = '[Route] Forward';

export class Go implements Action {
    readonly type = GO;

    constructor(
        public payload: {
            path: any[]
        }
    ){}
    
}

export class Back implements Action{
    readonly type = BACK;
}

export class Forward implements Action{
    readonly type = FORWARD;
}

export type Actions = Go | Back | Forward
