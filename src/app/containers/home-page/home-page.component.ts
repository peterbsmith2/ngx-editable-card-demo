import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../reducers';
import * as tryActions from '../../actions/try.actions';
import { PopActions } from '../../services/dispatcher.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'pop-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  complete$: Observable<any>;
  randomTry$: Observable<any>;
  editing$: Observable<any>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.randomTry$ = store.pipe(select(fromRoot.getSelectedTry));
    this.editing$ = store.pipe(select(fromRoot.selectTryEditing));
  }


  ngOnInit() {
    this.store.dispatch(new tryActions.Get());
  }

  onSave(data) {
    this.store.dispatch(new tryActions.Put(data));
  }

  onEdit() {
    this.store.dispatch(new tryActions.Edit());
  }

  onRefresh() {
    this.store.dispatch(new tryActions.SetRandom());
  }

}
