// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * 15);
      let newBase = returnRandBase();
      //check newBase and random this.dna Base is same or not
      while (newBase === this.dna[randomIndex]) {
        newBase = returnRandBase();
      }
      // console.log(newBase);
      // console.log(randomIndex,this.dna[randomIndex])
      this.dna[randomIndex] = newBase;
      return this.dna;
    },

    compareDNA(otherpAe) {
      let identical = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherpAe.dna[i]) identical++;
      }
      // console.log(identical);
      const identicalPercentage = Math.floor(
        (identical / this.dna.length) * 100
      );
      console.log(
        `specimen #${this.specimenNum} and specimen #${otherpAe.specimenNum} have ${identicalPercentage}% DNA in common`
      );
    },

    willLikelySurvive() {
      const cOrG = this.dna.filter((base) => base === "C" || base === "G");
      // console.log(cOrG)
      return cOrG.length / this.dna.length >= 0.6;
    },
  };
};

const onepA = pAequorFactory(1, mockUpStrand());
const twopA = pAequorFactory(2, mockUpStrand());
const threepA = pAequorFactory(3, mockUpStrand());
const fourpA = pAequorFactory(4, mockUpStrand());

console.log(onepA.dna);
console.log(twopA.dna);
console.log(onepA.compareDNA(twopA));
console.log(threepA.willLikelySurvive());
console.log(fourpA.dna);
console.log(fourpA.mutate());
