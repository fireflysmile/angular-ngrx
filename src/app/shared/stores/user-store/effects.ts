import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of as observableOf  } from "rxjs";
import { Action } from "@ngrx/store";
import { debounceTime, switchMap, map, catchError } from 'rxjs/operators';

import * as UserActions from './actions';
import { UserService } from "../../services/user.service";


@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService) {}

    @Effect()
    authenticate$: Observable<Action> = this.actions$.pipe(
        ofType<UserActions.LoadAction>(
            UserActions.ActionTypes.AUTHENTICATION
        ),debounceTime(5000),
        switchMap(action =>
            this.userService.authenticate(action.payload.userName, action.payload.password)
            .pipe(
                map(
                  user =>
                    new UserActions.LoadSuccessAction({
                      user
                    })
                  ),
                  catchError(error =>
                    observableOf(new UserActions.LoadFailureAction({ error }))
                )
            )
        )
    )
}