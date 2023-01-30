import { Character } from './Character';

export class Fighter extends Character {
  constructor(
    public characterName: string,
    public family: string,
    public age: number,

    public weapon: string,
    public skill: number
  ) {
    super(characterName, family, age);
    this.weapon = weapon;
    this.skill = skill;
  }

  greeting() {
    console.log(`Soy ${this.characterName}. Primero pego y luego pregunto`);
  }
}
