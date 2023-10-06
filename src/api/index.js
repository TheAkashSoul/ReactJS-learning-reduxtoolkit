 import Chance from "chance"

 const chance = Chance();

 export const fakeuserdata = () => {
//     //console.log(chance.name({ middle_initial: true }))
    return chance.name({ middle_initial: true })
 };
