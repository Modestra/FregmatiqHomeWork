import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ModInput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() convert: number = 0;
  @Output() convertChange = new EventEmitter<number>();

  ConvertValute() {
    this.convertChange.emit(this.convert)
  }
}
