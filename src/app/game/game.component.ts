import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgForOf,NgStyle,NgIf],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit{
pickCardAnimation = false;

ngOnInit(): void {
    
}

takeCard(){
  this.pickCardAnimation = true;
}

}

