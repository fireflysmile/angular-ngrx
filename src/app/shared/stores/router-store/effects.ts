import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import * as RouterActions from "./actions"
import { switchMap, map, tap } from "rxjs/operators";

@Injectable()
export class RouterEffects{
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    ){}

    @Effect({dispatch: false})
    navGo$ = this.actions$.pipe(
        ofType<RouterActions.Go>(
            RouterActions.GO
        ),
        map((action: RouterActions.Go) => action.payload),
        tap(({ path}) => this.router.navigate(path))
    )

    @Effect({ dispatch: false })
    navBack$ = this.actions$.pipe(
        ofType<RouterActions.Back>(
            RouterActions.BACK
        ),
        tap(() => this.location.back())
    )

    @Effect({ dispatch: false })
    navForward$ = this.actions$.pipe(
        ofType<RouterActions.Forward>(
            RouterActions.FORWARD
        ),
        tap(() => this.location.forward())
    )

}
