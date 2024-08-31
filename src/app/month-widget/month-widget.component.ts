import { Component, Input, } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-month-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './month-widget.component.html',
  styleUrl: './month-widget.component.css'
})
export class MonthWidgetComponent {
  @Input() date!: Date;
  @Input() data!: string;
}