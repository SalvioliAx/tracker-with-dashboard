import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TrackerService } from '../../../core/tracker.service'

@Component({
  selector: 'app-tracks-table',
  templateUrl: './tracks-table.component.html',
  styleUrls: ['./tracks-table.component.css']
})
export class TracksTableComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns = ["idmNumber",
                      "requestedDate",
                      "action",
                      "name",
                      "sso",
                      "application",
                      "environment",
                      "client",
                      "performedBy",
                      // "executionDate",
                      // "comments",
                      ];
  
  constructor(private trackerService: TrackerService,
              private router: Router) {
    
}

  ngOnInit(): void {

    this.trackerService.list().subscribe((tracks) => {
      this.dataSource = new MatTableDataSource(tracks);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  });

  }

  open(id: number): void {
    this.router.navigateByUrl(`/tracker/${id}`);
  }

}
