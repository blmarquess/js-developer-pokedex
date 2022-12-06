export default class Pokemon {
  constructor({
    abilities,
    base_experience,
    forms,
    game_indices,
    height,
    held_items,
    id,
    is_default,
    location_area_encounters,
    moves,
    name,
    order,
    species,
    sprites,
    stats,
    types,
    weight,
  }) {
    this.abilities = abilities;
    this.base_experience = base_experience;
    this.forms = forms;
    this.game_indices = game_indices;
    this.height = height;
    this.held_items = held_items;
    this.id = id;
    this.number = id;
    this.is_default = is_default;
    this.location_area_encounters = location_area_encounters;
    this.moves = moves;
    this.order = order;
    this.species = species;
    this.sprites = sprites;
    this.stats = stats;
    this.weight = weight;
    this.name = name;
    this.types = types.map((type) => type.type.name);
    this.type = this.types[0];
    this.photo = sprites.other.dream_world.front_default;
  }
}
// export default class Pokemon {
//   constructor(number, name, type, types, photo) {
//     this.number = number;
//     this.name = name;
//     this.type = type;
//     this.types = types;
//     this.photo = photo;
//   }
// }
