import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./state";


export const isLoading = (state: State): boolean => state.loading;


export const getUsersState: MemoizedSelector<object, State> = createFeatureSelector<State>('user');



export const isAuthenticationLoading: MemoizedSelector<object, boolean> = createSelector(getUsersState, isLoading);