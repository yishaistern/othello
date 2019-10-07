import { createAction, props } from '@ngrx/store';
import { LoginAction } from './reducers/auth.reducer';
export const loginSuccess = createAction('[Login Component] Login Success', props< {user: LoginAction }>());
export const sginSuccess = createAction('[SigbUp Component] SigbUp Success', props< {user: LoginAction }>());
