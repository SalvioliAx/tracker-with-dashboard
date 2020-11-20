import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router'; 
import { FieldValidatorService } from '../shared/components/fields/field-validator.service';
import { TrackerService } from '../core/tracker.service';
import { Track } from '../shared/models/track'
import { AlertComponent } from '../shared/components/alert/alert.component';
import { Alert } from 'src/app/shared/models/alert';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  id: number;
  tracker: FormGroup;
  actionOptions: string[];
  applicationOptions: string[];

constructor(public validator: FieldValidatorService,
            public dialog: MatDialog,
            private fb: FormBuilder,
            private trackerService: TrackerService,
            private router: Router,
            private activatedRoute: ActivatedRoute) { }

get f() {
  return this.tracker.controls;
}

ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.params['id'];
  if (this.id) {
    this.trackerService.view(this.id)
      .subscribe((track: Track) => this.createForm(track));
  } else {
    this.createForm(this.createBlankForm());
  }

  this.actionOptions = ['Add', 'Disable', 'Delete', 'Edit'];
  this.applicationOptions = ['App1', 'App2', 'App3', 'App4'];
  
}

submit(): void {
  this.tracker.markAllAsTouched();
  if (this.tracker.invalid) {
    return;
  }

  const track = this.tracker.getRawValue() as Track;
  if (this.id) {
    track.id = this.id;
    this.edit(track);
  } else {
    this.save(track);
  }
}

resetForm(): void {
  this.tracker.reset();
}

private createForm(track: Track): void {
  this.tracker = this.fb.group({
    idmNumber: [track.idmNumber, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    requestedDate: [track.requestedDate, [Validators.required]],
    action: [track.action, [Validators.required]],
    name: [track.name, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    sso: [track.sso, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    application: [track.application, [Validators.required]],
    environment: [track.environment, [Validators.required]],
    client: [track.client, [Validators.required]],
    performedBy: [track.performedBy, [Validators.required]],
    executionDate: [track.executionDate, [Validators.required]],
    comments: [track.comments],
    
  });
}

private createBlankForm(): Track {
  return {
    idmNumber: null,
    requestedDate: null,
    action: null,
    name: null,
    sso: null,
    application: null,
    environment: null,
    client: null,
    performedBy: null,
    executionDate: null,
    comments: null,

  } as Track;
}

private save(track: Track): void {
  this.trackerService.save(track).subscribe(() => {
    const config = {
      data: {
        btnSuccess: 'Go back to the Dashboard',
        btnCancel: 'Register another track',
        colorBtnCancel: 'primary',
        hasBtnClose: true
      } as Alert
    };
    const dialogRef = this.dialog.open(AlertComponent, config);
    dialogRef.afterClosed().subscribe((option: boolean) => {
      if (option) {
        this.router.navigateByUrl('dashboard');
      } else {
        this.resetForm();
      }
    });
  },
  () => {
    const config = {
      data: {
        title: 'Error saving the register!',
        descricao: 'We cannot save your register now, please try  later.',
        corBtnSuccess: 'warn',
        btnSuccess: 'Close'
      } as Alert
    };
    this.dialog.open(AlertComponent, config);
  });
}

private edit(track: Track): void {
  this.trackerService.edit(track).subscribe(() => {
    const config = {
      data: {
        description: 'Your register has been saved with success',
        btnSuccess: 'Go back to the dashboard',
      } as Alert
    };
    const dialogRef = this.dialog.open(AlertComponent, config);
    dialogRef.afterClosed().subscribe(() => this.router.navigateByUrl('dashboard'));
  },
  () => {
    const config = {
      data: {
        title: 'Error saving your register!',
        description: 'We cannot save your register now, please try again later',
        colorBtnSuccess: 'warn',
        btnSuccess: 'Close'
      } as Alert
    };
    this.dialog.open(AlertComponent, config);
  });
}

}
