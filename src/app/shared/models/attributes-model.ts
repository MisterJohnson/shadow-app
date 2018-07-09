export abstract class AttributesModel {
  private _src: string;
  private _alt: string;
  private _href: string;
  private _role: string;
  private _type: string;
  private _name: string;
  private _title: string;
  private _width: string;
  private _height: string;

  get src(): string {
    return this._src;
  }

  set src(value: string) {
    this._src = value;
  }

  get alt(): string {
    return this._alt;
  }

  set alt(value: string) {
    this._alt = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get href(): string {
    return this._href;
  }

  set href(value: string) {
    this._href = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get width(): string {
    return this._width;
  }

  set width(value: string) {
    this._width = value;
  }

  get height(): string {
    return this._height;
  }

  set height(value: string) {
    this._height = value;
  }
}
