import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  @Input() src: string;
  @Input() alt: string;
  @Output() onDisplayNone = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(id) {
    document.getElementById(id).style.display = 'none';
    this.onDisplayNone.emit('none');
  }

}
