import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single, multi } from '../data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  single: any[];
  multi: any[];

  view: any[] = [500, 300];
  view2: any[] = [300, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Source';
  showYAxisLabel = true;
  yAxisLabel = 'count';

  colorScheme = {
    domain: ['#41acf9']
  };

  pieColorScheme = {
    domain: ['#e6981b', '#92271c', '#615c5c', '#f04124', '#f2dede', '#e6981b']
  };
  constructor() {
    Object.assign(this, { single, multi });
  }

  onSelect(event) {
    console.log(event);
  }
}
