import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { FieldsModule } from '../shared/components/fields/fields.module';
import { TracksTableComponent } from '../shared/components/tracks-table/tracks-table.component'
import { TrackerComponent } from '../tracker/tracker.component'
import { CardComponent } from '../shared/components/card/card.component'
import { AnnualSalesChartComponent } from "../shared/components/charts/annual-sales-chart/annual-sales-chart.component";
import { ProductSalesChartComponent } from "../shared/components/charts/product-sales-chart/product-sales-chart.component";
import { ActionChartComponent } from "../shared/components/charts/action-chart/action-chart.component";
import { StoreSessionsChartComponent } from "../shared/components/charts/store-sessions-chart/store-sessions-chart.component";
import { MiniCardComponent } from '../shared/components/mini-card/mini-card.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    TrackerComponent, 
    TracksTableComponent, 
    CardComponent,
    AnnualSalesChartComponent,
    ProductSalesChartComponent,
    ActionChartComponent,
    StoreSessionsChartComponent,
    MiniCardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MaterialModule,
    FieldsModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    
  ]
})
export class DashboardModule { }
