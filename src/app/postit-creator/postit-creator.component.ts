import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-postit-creator',
  templateUrl: './postit-creator.component.html',
  styleUrls: ['./postit-creator.component.css']
})
export class PostitCreatorComponent implements OnInit {
  constructor() {}

  @Output() createPostitEvent = new EventEmitter<any>();

  createPostit(title: string, content: string, important: boolean) {
    this.createPostitEvent.emit({ title, content, important });
  }

  ngOnInit() {}
}
