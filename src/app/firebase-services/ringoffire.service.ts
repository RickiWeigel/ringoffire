import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { GameInterface } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class RingoffireService {
  firestore: Firestore = inject(Firestore);
  games: GameInterface[] = [];

  onsubList;


  constructor() {
    this.onsubList = this.subGamesList();
  }

  async addGame(item: {}) {
    await addDoc(this.getGamesRef(), item)
      .catch((err) => {
        console.error(err);
      })
      .then((docRef) => {
        console.log('Document written widt ID:', docRef?.id);
      });
  }

  async updateGame(game: GameInterface) {
    if (game.id) {
      await updateDoc(
        this.getSingleGameRef(game.id),
        this.getCleanJson(game)
      ).catch((err) => {
        console.error(err);
      });
    }
  }

  getCleanJson(game: GameInterface): {} {
    return {
      players: game.players,
      stack: game.stack,
      playedCards: game.playedCards,
      currentPlayer: game.currentPlayer,
    };
  }

  subGamesList() {
    return onSnapshot(this.getGamesRef(), (list) => {
      list.forEach((element) => {
        this.games.push(this.setGamesObject(element.data(), element.id));
      });
    });
  }

  subSingleGameList(docId: string) {
    return onSnapshot(this.getSingleGameRef(docId), (list) => {
      console.log(this.setGamesObject(list.data(), list.id));
    });
  }

  ngonDestroy() {
    this.onsubList();
  }

  setGamesObject(obj: any, id: string): GameInterface {
    return {
      id: id,
      players: obj.players || [],
      stack: obj.stack || [],
      playedCards: obj.playedCards || [],
      currentPlayer: obj.currentPlayer || 0,
    };
  }

  getGamesRef() {
    return collection(this.firestore, 'games');
  }

  getSingleGameRef(docId: string) {
    return doc(collection(this.firestore, 'games'), docId);
  }
}
