import { Character } from './Character';
import { Fighter } from './Fighter.js';

export class Squire extends Character {
  constructor(
    public characterName: string,
    public family: string,
    public age: number,
    public characterServed: Fighter,
    public gradeOfServe: number
  ) {
    super(characterName, family, age);
    this.characterServed = characterServed;
    this.gradeOfServe = gradeOfServe;
  }

  greeting() {
    console.log(`Soy ${this.characterName}. Soy un loser`);
  }
}
