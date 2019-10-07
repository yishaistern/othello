import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { AppState } from './reducers';
import { createSelector } from '@ngrx/store';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

export const selectRouter = (state: AppState) => state.router;
export const selectPathUrl = createSelector(
    selectRouter,
    (router: any) => {
        console.log(router);
        const ans = (router && router.state && router.state.url) ? (router.state.url as string).substring(1) : '';
        return ans;
    }
  );

export const selectRouteParams = createSelector(
  selectRouter,
  (router: any) => {
      const ans = (router && router.state && router.state.params) ? (router.state.params) : {};
      return ans;
  }
);

export const selectRouteParam = createSelector(
  selectRouter,
  (router: any, key: string) => {
      const ans = (router && router.state && router.state.params) ? (router.state.params[key]) : null;
      return ans;
  }
);
