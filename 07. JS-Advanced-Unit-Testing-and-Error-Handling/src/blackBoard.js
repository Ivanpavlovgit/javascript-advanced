    function createCard(face, suit) {
        const validFace=['J','D','Q','A'];
        for (let i = 2; i <11 ; i++) {
            validFace.push(`${i}`);
        }
        const suiteToString = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };
        if(validFace.includes(face)===false){
            throw new Error('Invalid face');
        }else if (!Object.keys(suiteToString).includes(suit)){
            throw new Error('Invalid suit');
        }
        return {
            face,
            suit,
            toString() {

                return `${this.face}${suiteToString[this.suit]}`
            }
        };
    }

console.log(createCard('A', 'S').toString());
console.log(createCard('10', 'H').toString());
console.log(createCard('1', 'C').toString());//err
//expected output - 60