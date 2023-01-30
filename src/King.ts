import { Character } from './Character';

export class King extends Character {
  constructor(
    public characterName: string,
    public family: string,
    public age: number,
    public regnalYears: number
  ) {
    super(characterName, family, age);
    this.regnalYears = regnalYears;
  }

  greeting() {
    console.log(`Soy ${this.characterName}. Vais a morir todos`);
  }
}
