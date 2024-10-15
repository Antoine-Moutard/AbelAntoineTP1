import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  @Output() changeBgEvent = new EventEmitter<string>();

  changeBg(color: string) {
    this.changeBgEvent.emit(color);
    console.log(color);
  }
}
