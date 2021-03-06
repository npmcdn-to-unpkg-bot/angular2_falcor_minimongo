import {bind} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import {Action} from './flux-action';
import {Container} from './flux-container';

export class Dispatcher<T> extends Subject<T> {
  constructor(destination?: Observer<T>, source?: Observable<T>) {
    super(destination, source);
  }
}

const initState: AppState = {
  now: null,
  page1: null,
  page2: null,
  page3: null,
  page4: null
}

export const stateAndDispatcher = [
  bind('initState').toValue(initState),
  bind(Dispatcher).toValue(new Dispatcher<Action>(null)),
  bind(Container).toFactory((state, dispatcher) => new Container(state, dispatcher), ['initState', Dispatcher])
];
