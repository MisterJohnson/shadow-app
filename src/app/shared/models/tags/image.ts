import { AttributesModel } from '../attributes-model';

export class Image extends AttributesModel {

  constructor(src, alt = '', title = '') {
    super();
    this.src = src;
    this.alt = alt;
    this.title = title;
  }
}
