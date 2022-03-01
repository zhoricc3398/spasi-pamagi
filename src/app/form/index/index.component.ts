import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormManagerConfig,
  FormManagerIndexComponent,
  FormManagerService,
} from '@formio/angular/manager';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent extends FormManagerIndexComponent {
  constructor(
    public override service: FormManagerService,
    public override route: ActivatedRoute,
    public override router: Router,
    public override config: FormManagerConfig
  ) {
    super(service, route, router, config);
  }
}
