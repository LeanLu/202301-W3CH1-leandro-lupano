export type InsertPosition =
  | 'afterbegin'
  | 'afterend'
  | 'beforebegin'
  | 'beforeend';

export abstract class Component {
  selector!: string;
  template!: string;
  element!: HTMLElement;

  render(place: InsertPosition) {
    const element = document.querySelector(this.selector) as HTMLElement;
    element.insertAdjacentHTML(place, this.template);
  }
}
