import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, State } from '@ngrx/store';

export const reducers: ActionReducerMap<any> = {
    router: routerReducer
};
