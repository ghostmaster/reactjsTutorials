import charaters_json from '../data/characters.json';

export function createCharacter(id){
    let character = charaters_json.find( c => c.id === id);
    return character;
}