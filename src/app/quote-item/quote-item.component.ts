import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  @Input() quote: any;
  @Output() onDelete = new EventEmitter<string>();


  onQuoteDelete(){
    this.onDelete.emit(this.quote.id);
  }


    constructor() { }

    ngOnInit() {
    }
}
