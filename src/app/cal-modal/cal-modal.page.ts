import { Component, AfterViewInit, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
 
@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements AfterViewInit {
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  viewTitle: string;
  
  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };
 
  modalReady = false;
 
  constructor(private modalCtrl: ModalController) { }
 
  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;      
    }, 0);
  }
 
  save() {    
    this.modalCtrl.dismiss({event: this.event})
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onTimeSelected(ev) {    
    this.event.startTime = new Date(ev.selectedTime);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }
  @ViewChild('fileInp') fileInput: ElementRef;
  @Input() label: string;
  @Output() data = new EventEmitter<FormData>();

  fileUpload(event) {
    let fd = new FormData();
    fd.append('file', event.srcElement.files[0]);
    this.data.emit(fd);
  }

  onClick() {
    this.fileInput.nativeElement.click();
}
}