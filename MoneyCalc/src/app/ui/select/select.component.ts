import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Valutes } from '../../entity/vatues';

@Component({
  selector: 'Selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit {

    @Output() selected = new EventEmitter<Valutes>()
    @Input() moneylist:Valutes[] | undefined = []
    constructor(){

    }
    ngOnInit(): void {

    }
}
