import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserStoreState, UserStoreSelector, UserStoreActions } from '../../../shared/stores/user-store';
import { Go } from '../../../shared/stores/router-store/actions';
import { getUsersState } from '../../../shared/stores/user-store/selectors';
import { FormControl, Validators, FormGroup } from '@angular/forms';

// class Signin {
//   constructor(
//     public name: string = "",
//     public password: string = ""
//   ) {}
// }

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

  /**
   * model sign in.
   * @type {any}
   */
  // model: Signin = new Signin();
  public signInForm: FormGroup;
  public name: FormControl;
  public password: FormControl

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

    // reactive from

    this.name = new FormControl(this.name, [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern("[^ @]*@[^ @]*")
    ])
    this.password = new FormControl(this.password, [
      Validators.required,
      Validators.minLength(6)
    ])

    this.signInForm  = new FormGroup({
      name: this.name,
      password: this.password
    })
        
  }

  signIn(){
    const payload = {
      // userName: this.model.name,
      // password: this.model.password
      userName: this.name.value,
      password: this.password.value
    };

    if (this.signInForm.valid) {
      this.store$.dispatch(new UserStoreActions.LoadAction(payload))
      this.signInForm.reset();
    }

  }


  newFC(){
    this.store$.dispatch(new UserStoreActions.DemoAction())    
  }

}


