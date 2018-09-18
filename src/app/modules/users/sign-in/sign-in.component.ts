import { Component, OnInit } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserStoreState, UserStoreSelector, UserStoreActions } from '../../../shared/stores/user-store';
import { Go } from '../../../shared/stores/router-store/actions';
import { ofType } from '@ngrx/effects';
import { getUsersState } from '../../../shared/stores/user-store/selectors';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  /**
   * True if the authentication is loading.
   * @type {boolean}
   */
  loading$: Observable<boolean>;



  public userName: string = '';
  public password: string = ''

  constructor(
    private store$: Store<UserStoreState.State>
  ) {

  }

  public ngOnInit() {

    this.store$.select(getUsersState).subscribe(OBS => {
      console.log(OBS)
    })

    this.store$.select(UserStoreSelector.isGetRole).subscribe(value => {

      console.log(value)
      if (value === 1){
        alert("ok")
        this.store$.dispatch(new Go({
          path: ["/application/home"]
        }));
      }
    })

    this.loading$ = this.store$.select(UserStoreSelector.isAuthenticationLoading);
        
  }

  signIn(){
    const payload = {
      userName: this.userName,
      password: this.password
    };

    this.store$.dispatch(new UserStoreActions.LoadAction(payload))    
  }


  newFC(){
    this.store$.dispatch(new UserStoreActions.DemoAction())    
  }

}


