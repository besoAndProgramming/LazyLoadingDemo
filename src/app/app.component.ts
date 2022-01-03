import { Component } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pageTitle = 'Lazy Loading';
  loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => this.handleRoutingEvents(event));
  }

  handleRoutingEvents(event: Event): void {
    if (event instanceof NavigationStart) this.loading = true;

    if (
      event instanceof NavigationCancel ||
      event instanceof NavigationCancel ||
      event instanceof NavigationEnd
    ) {
      this.loading = false;
    }
  }
}
