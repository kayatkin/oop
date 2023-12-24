import Bowman from "./Bowman";
import Swordsman from "./Swordsman";
import Magician from "./Magician";
import Daemon from "./Daemon";
import Undead from "./Undead";
import Zombie from "./Zombie";

export default function createPlayers() {
  return [
    new Bowman("Bowman"),
    new Swordsman("Swordsman"),
    new Magician("Magician"),
    new Daemon("Daemon"),
    new Undead("Undead"),
    new Zombie("Zombie"),
  ];
}
