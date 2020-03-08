/****   1    ****/

// var coffee = {
//     name: "espresso",
//     strength: 5,
//     milk: 1,
//     sugar: 2
// }

// console.log(typeof coffee.milk);

/****   2    ****/

// var movie = {
//     title: "Snatch",
//     actors: ["Brad Pitt", "Vinnie Jones", "Benicio Del Toro"],
//     director: "Guy Ritchie",
//     genre: "Action"
// }
// console.log(movie.actors[1]);

/****   3    ****/

// var createProjectObject = function (description, progLang, gitRep, status) {
//     return {
//         description: description,
//         progLang: progLang,
//         gitRep: gitRep,
//         status: status,
//         getRepository: function () {
//             console.log(this.gitRep);
//         },
//         isJS: function () {
//             if (progLang === "JavaScript") {
//                 return true;
//             }
//             return false;
//         },
//         isFinish: function () {
//             if (status) {
//                 return "Finished";
//             }
//             return "It is in development"
//         }
//     }
// }

// var newProject = createProjectObject("2020 Web Project", "JavaScript", "bit-web", false);

// newProject.getRepository();
// console.log(newProject.isJS());
// console.log(newProject.isFinish());
// console.log(newProject.description);

/****   4    ****/

var culinaryRecipe = function(
  name,
  type,
  complexity,
  listOfIngredients,
  preparingTime,
  instructions
) {
  return {
    name: name,
    type: type,
    complexity: complexity,
    listOfIngredients: listOfIngredients,
    preparingTime: preparingTime,
    instructions: instructions,
    getIngredients: function() {
      return this.listOfIngredients;
    },
    isQuick: function() {
      if (this.preparingTime < 15) {
        return "It can be prepared in 15 min!";
      }
      return "No, it can not be prepared in 15 minutes.";
    },
    changeCuisine: function(cuisine) {
      return (this.type = cuisine);
    },
    removeIngredient: function(ingredient) {
      var newList = [];
      for (var i = 0; i < this.listOfIngredients.length; i++) {
        if (this.listOfIngredients[i] === ingredient) {
          continue;
        }
        newList[newList.length] = this.listOfIngredients[i];
      }
      this.listOfIngredients = newList;
    }
  };
};

var pasta = culinaryRecipe(
  "Carbonara",
  "It",
  2,
  ["eggs", "meat", "salt"],
  14,
  "In the culinary"
);
pasta.removeIngredient("meat");
pasta.changeCuisine("srb");
console.log(pasta);
