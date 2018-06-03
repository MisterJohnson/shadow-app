export class Step {
  public actual_step: string;
  public title: string;
  public current: boolean;

  constructor(step: string, title: string) {
    this.actual_step = step;
    this.title = title;
    this.current = true;
  }

  toggle() {
    this.current = !this.current;
  }
}