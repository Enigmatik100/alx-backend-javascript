import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._sqft = sqft;
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(area) {
    // eslint-disable-next-line no-undef
    this._sqft = sqft;
  }

  get floors() {
    return this._floors;
  }

  set floors(floor) {
    this._floors = floor;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
