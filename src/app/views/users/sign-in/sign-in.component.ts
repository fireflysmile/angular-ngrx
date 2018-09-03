import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserStoreState, UserStoreSelector, UserStoreActions } from '../../../shared/stores/user-store';


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

  ngOnInit() {

    this.store$.select('user').subscribe(OBS => {
      console.log(OBS)
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
