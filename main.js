const person = {
    age: 10,
    eligibleForVote: function () {
        return this.age;
    }
}

console.log(person.eligibleForVote());
