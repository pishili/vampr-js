class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    // should add parent as creator
    vampire.creator = this;
    this.offspring.push(vampire);
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;

  }

  // Returns the number of vampires away from the original vampire
  // this vampire is
  get numberOfVampiresFromOriginal() {
    if (this.creator === null) {
      return 0;
    } else {
      let count = 0;
      while (this.creator !== null) {
          count += 1;
          this.creator = this.creator.creator;
      }
      return count;
  }
}

  // Returns true if this vampire is more senior than the other vampire.
  // (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.yearConverted < vampire.yearConverted;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire
  // if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

    

  }
}

module.exports = Vampire;

