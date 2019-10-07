import { createReducer, on, Action, createSelector, createFeatureSelector, props } from '@ngrx/store';
import * as authActions from '../auth.actions';
import { AppState } from './reducers';
export interface User {
    userName: string;
}
export interface UserLoginPayload {
    userName: string;
    password: string;
}
export interface LoginAction {
    userName: string; userid: string;
}
export interface UsersState {
    user1: User;
    user2: User;
}
export const initialState: UsersState = {
    user1: {
        userName: ''
    },
    user2: {
        userName: ''
    }
};

function assginUser(prop, user, userId, userNmae): any {
    if (prop === userId) {
        return { userName: userNmae};
    } else {
        return user;
    }
}

const counterrReducer = createReducer(initialState,
    on(authActions.loginSuccess, (state, {user} ) => ({...state, user1 : { userName: 'sds'}})),
    on(authActions.sginSuccess, (state, {user} ) =>  ({
        ...state,
        user1 : assginUser('user1', state.user1, user.userid, user.userName),
        user2 : assginUser('user2', state.user2, user.userid, user.userName)
    })),
);
// assginUser(state, user.userid, user.userName))

export function counterReducer(state: UsersState | undefined, action: Action) {
    return counterrReducer(state, action);
}

export const usersKey = 'users';
export const selectUsers = createFeatureSelector<AppState, UsersState>(usersKey);
export const selectAllUsers = createSelector(
    selectUsers,
    (router: UsersState): UsersState => {
        return router;
    }
  );

export const selectUserById = createSelector(
    selectUsers,
    (router: UsersState, id: string): User => {
        return router[id];
    }
  );
export const selectUsersss = (state: AppState) => state.users;
export const areBothLooged = createSelector(
    selectUsersss,
  (router: UsersState, allready: boolean): boolean => {
      const bool = (router.user1.userName && router.user2.userName && allready) ? true : false;
      return bool;
  }
);
