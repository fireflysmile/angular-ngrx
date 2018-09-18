import { State, initialState } from "./state";
import { ActionTypes, Actions } from "./actions";
import { User } from "../../models/user";


export function UserReducer (state: State = initialState, action: Actions): State {
    console.log(action);

    switch (action.type) {
        
        case ActionTypes.AUTHENTICATION:
            return  {
                ...state,
                error: undefined,
                loading: true
            }

        case ActionTypes.AUTHENTICATE_SUCCESS:
            const user: User = action.payload.user;

            // verify user is not null
            if (user === null) {
                return {
                    ...state,
                    error: null,
                    loading: false,
                }
            }
            
            // is user member
            if (user.userName  === "user@u.com") {
                return  {
                    ...state,
                    error: null,
                    loading: false,
                    role: 1,
                    user: user
                }
            } else if (user.userName  === "admin@a.com") {
                return  {
                    ...state,
                    error: null,
                    loading: false,
                    role: 2,
                    user: user
                }

            }

        case ActionTypes.AUTHENTICATE_FAILURE:
            return  {
                ...state,
                error: action.payload.error.message,
                loading: false
            }
        

        case ActionTypes.AUTHENTICATE:
            return  {
                ...state,
                error: undefined,
                loading: false
            }      
            

        default:
            return state
    }

}