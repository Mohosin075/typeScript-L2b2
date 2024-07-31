{// spreed 

const bros1 : string[] = ['mohosin', 'roni', 'mariful']
const bros2 : string[] = ['asif', 'jamal', 'rayhan']

bros1.push(...bros2)

const mission1 = {
    typeScript : 'Mezba'
}
const mission2 = {
    mongos : 'MIr'
}

const milestone = {
    ...mission1,
    ...mission2
}


const greatFriend =(...friends : string[]) =>{
    friends.forEach((friend : string) =>console.log(friend))
}

greatFriend('a', 'b', 'c', 'dk')




}