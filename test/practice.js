class Vampire {
    constructor(name, yearConverted) {
        this.name = name;
        this.yearConverted = yearConverted;
        this.offspring = [];
        this.creator = null;
    }

    addOffSpring(vampire) {
        vampire.creator = this;
        this.offspring.push(vampire);
    }

    numberOfOffspring() {
        return this.offspring.length;
    }

    // returns the number of vampires away from the original vampire
    // this vampire is
    numberOfVampiresFromOriginal() {
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
}

let v1 = new Vampire('troot', 2014);
let v2 = new Vampire('t1', 2015);
let v3 = new Vampire('t2', 2016);
let v4 = new Vampire('t3', 2017);

v1.addOffSpring(v2);
v2.addOffSpring(v3);
v1.addOffSpring(v4);
console.log(v1.offspring);

// should return 0
console.log(v3.numberOfVampiresFromOriginal());

