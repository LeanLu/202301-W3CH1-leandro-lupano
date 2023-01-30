import { Character } from './Character';

export class Adviser extends Character {
  constructor(
    public characterName: string,
    public family: string,
    public age: number,
    public characterAdvised: Character
  ) {
    super(characterName, family, age);
    this.characterAdvised = characterAdvised;
  }

  greeting() {
    console.log(
      `Soy ${this.characterName}. No sé por qué, pero creo que voy a morir pronto`
    );
  }
}
