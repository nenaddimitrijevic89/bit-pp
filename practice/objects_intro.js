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

