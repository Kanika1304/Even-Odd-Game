import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() event1 =new EventEmitter<number>(); 
  interval;
  num=0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.interval= setInterval(() => {
      this.event1.emit(this.num + 1);
      this.num++;
    }, 1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }

}
