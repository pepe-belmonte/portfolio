import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  private _mode: BehaviorSubject<boolean>;

  constructor() { 
    this._mode = new BehaviorSubject<boolean>(false);
  }

  public getMode(): Observable<boolean> {
    return this._mode.asObservable();
  }

  public setMode(newValue: boolean) {
    if (newValue != this._mode.value) {
      this._mode.next(newValue);
    }
  }

}
