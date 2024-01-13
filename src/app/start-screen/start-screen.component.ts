import { Component } from '@angular/core';
import { RingoffireService } from '../firebase-services/ringoffire.service';
import { Router } from '@angular/router';
import { Game } from '../models/game';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
  constructor(private router: Router, public ringoffireService: RingoffireService,){

  }

  newGame(){
    let game = new Game();
    this.ringoffireService.addGame(
      this.ringoffireService.getCleanJson(game)
    );

    this.router.navigate(['/game'])
  }
}
