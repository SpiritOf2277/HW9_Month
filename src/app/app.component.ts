import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonthWidgetComponent } from "./month-widget/month-widget.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonthWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HW9_Month';
}
