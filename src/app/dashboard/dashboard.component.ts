import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { TrackerService } from "../core/tracker.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  miniCardData = [  
                  {
                    'icon' : 'person_add',
                    'value' : 134,
                    'title' : 'Add',
                    'isIncrease' : true,
                    'isCurrency' : false, 
                    'duration' : 'since last month',
                    'textValue' : '', 
                    'color' : 'primary',
                    'percentValue' : '0.08'
                  },
                  {
                    'icon' : 'person_add_disabled',
                    'value' : 85,
                    'title' : 'Disable',
                    'isIncrease' : false,
                    'isCurrency' : false, 
                    'duration' : 'since last month',
                    'textValue' : '', 
                    'color' : 'warn',
                    'percentValue' : '0.05'
                  },
                  {
                    'icon' : 'computer',
                    'value' : 219,
                    'title' : 'Application 1',
                    'isIncrease' : false,
                    'isCurrency' : false, 
                    'duration' : 'since last month',
                    'textValue' : '', 
                    'color' : 'accent',
                    'percentValue' : '0.23'
                  },
                  {
                    'icon' : 'person',
                    'value' : 113,
                    'title' : 'Assis Salvioli',
                    'isIncrease' : true,
                    'isCurrency' : false, 
                    'duration' : 'since last month',
                    'textValue' : '', 
                    'color' : '',
                    'percentValue' : '0.10'
                  },
                ];

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 4,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );
  constructor(private breakpointObserver: BreakpointObserver, private trackerService: TrackerService) {}

  ngOnInit() {
    // this.trackerService.getStoreSummary().subscribe({
    //   next: summaryData => {
    //     this.miniCardData = summaryData;
    //   }
    // });
  } 
 }



