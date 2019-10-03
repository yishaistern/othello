import { createReducer, on, Action, createSelector } from '@ngrx/store';
import * as authActions from '../auth.actions';
import { AppState } from './reducers';
export interface User {
    userName: string;
}
export interface LoginAction {
    userName: string;
    userid: string;
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

function assginUser(users, userId, userNmae): any {
    users[userId].userName = userNmae;
    return users;
}

const _counterReducer = createReducer(initialState,
    on(authActions.loginSuccess, (state, {user} ) =>  {
        return {...state, users: assginUser(state, user.userid, user.userName)};
    }),
);


export function counterReducer(state: UsersState | undefined, action: Action) {
    return _counterReducer(state, action);
}

export const selectUsers = (state: AppState) => state.users;
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
