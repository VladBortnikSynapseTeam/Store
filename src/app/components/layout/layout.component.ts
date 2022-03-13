import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppSelectors } from 'src/app/store/selectors/app.selector';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  stageSwitch$: Observable<number>;
  title = 'shop-app';

  constructor(private store$: Store){
    this.stageSwitch$ = this.store$.select(AppSelectors.stage)
  }

  ngOnInit(){


  }

}
