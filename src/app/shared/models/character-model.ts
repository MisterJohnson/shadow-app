import {Image} from './tags/image';

export class Character {
  private _name: string;
  private _alias: string;
  private _current_karma: number;
  private _spent_karma: number;
  private _physical_description: string[];
  private _background: string;
  private _picture: Image;
  private _date_creation: Date;
  private _date_updated: Date;
  private _current_essence: number;
  private _priority: object;

  constructor() {
    this._current_karma = 25;
    this._spent_karma = 0;
    this._current_essence = 6;
    this._date_creation = new Date();
    this._date_updated = new Date();
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get alias(): string {
    return this._alias;
  }

  set alias(value: string) {
    this._alias = value;
  }

  get current_karma(): number {
    return this._current_karma;
  }

  set current_karma(value: number) {
    this._current_karma = value;
  }

  get spent_karma(): number {
    return this._spent_karma;
  }

  set spent_karma(value: number) {
    this._spent_karma = value;
  }

  get physical_description(): string[] {
    return this._physical_description;
  }

  set physical_description(value: string[]) {
    this._physical_description = value;
  }

  get background(): string {
    return this._background;
  }

  set background(value: string) {
    this._background = value;
  }

  get picture(): Image {
    return this._picture;
  }

  set picture(value: Image) {
    this._picture = value;
  }

  get date_creation(): Date {
    return this._date_creation;
  }

  set date_creation(value: Date) {
    this._date_creation = value;
  }

  get date_updated(): Date {
    return this._date_updated;
  }

  set date_updated(value: Date) {
    this._date_updated = value;
  }

  get current_essence(): number {
    return this._current_essence;
  }

  set current_essence(value: number) {
    this._current_essence = value;
  }

  get priority(): object {
    return this._priority;
  }

  set priority(value: object) {
    this._priority = value;
  }
}
