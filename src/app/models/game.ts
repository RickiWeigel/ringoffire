export class Game {
  public players: string[] = ['Max', 'Peter', 'Paula'];
  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    for (let i = 1; i < 14; i++) {
      this.stack.push(`./../../assets/img/cards/ace_${i}.png`);
      this.stack.push(`./../../assets/img/cards/hearts_${i}.png`);
      this.stack.push(`./../../assets/img/cards/clubs_${i}.png`);
      this.stack.push(`./../../assets/img/cards/diamonds_${i}.png`);
    }
    shuffle(this.stack);
  }
}


 function shuffle(a:string[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
