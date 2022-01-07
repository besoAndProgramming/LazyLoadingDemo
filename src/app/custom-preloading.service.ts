
import { Injectable } from '@angular/core';
import { Route, PreloadingStrategy } from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements PreloadingStrategy {

  constructor() { }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      return fn();
    }
    return of(null);
  }
}
