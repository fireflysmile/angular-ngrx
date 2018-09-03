import { User } from "../../models/user";

export interface State{
    // boolean if authenticated
    authenticated: boolean;

    // error message
    error?: string;

    // true if we have attempted existing auth session
    loaded: boolean;

    // true when loading
    loading?: boolean;

    // set role 1 'admin' and 2 'user'
    role: number

    user?: User
    
}

// const initialState: State = featureAdapter.getInitialState({
export const initialState: State = {
    authenticated: null,
    loaded: false,
    loading: false,
    role: 0
}