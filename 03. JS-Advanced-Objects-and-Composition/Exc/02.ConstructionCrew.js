function worker(result) {

    if(result.dizziness){
        result.levelOfHydrated+=result.weight*0.1*result.experience;
        result.dizziness=false;
    }
    return result;

}

console.log(worker({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true}
));
//expected output -
// { weight: 80,
//   experience: 1,
//   levelOfHydrated: 8,
//   dizziness: false }