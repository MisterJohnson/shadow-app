export class Character {
  name: string;
  alias: string;
  current_karma: number;
  spent_karma: number;
  physical_description: string[];
  background: string;
  picture: object;
  date_creation: Date;
  date_updated: Date;
  current_essence: number;

  constructor() {
    this.current_karma = 25;
    this.spent_karma = 0;
    this.current_essence = 6;
    this.date_creation = new Date();
    this.date_updated = new Date();
  }
}
