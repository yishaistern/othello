import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, State } from '@ngrx/store';
import { counterReducer, UsersState } from './auth.reducer';

export interface AppState {
    router: any;
    users: UsersState;
  }

export const reducers: ActionReducerMap<any> = {
    router: routerReducer,
    users: counterReducer
};
