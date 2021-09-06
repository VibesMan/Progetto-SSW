import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-postit-viewer',
  templateUrl: './postit-viewer.component.html',
  styleUrls: ['./postit-viewer.component.css']
})
export class PostitViewerComponent implements OnInit {
  @Input() allPostit: Array<any> = [];
  @Output() deletePostitEvent = new EventEmitter<number>();

  importantToggle: Boolean;
  constructor() {}

  deletePostit(tsp: number) {
    this.deletePostitEvent.emit(tsp);
  }

  toggleBoolean() {
    this.importantToggle =
      this.importantToggle === undefined ? true : undefined;
    console.log(this.importantToggle);
  }

  isObject(input: any): boolean {
    return typeof input == 'object';
  }

  ngOnInit() {}
}
