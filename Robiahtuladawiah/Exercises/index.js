
// Exercises: Loops
// Log every number from 0 to 10
// Log every number from 4 to -16
// Log every fourth number from 8 to 41
// The Classic Fizzbuzz Program
// Loop from 0 to 100.

// If the number is evenly divisible by 3, log "Fizz"
// If the number is evenly divisible by 5, log "buzz"
// If the number is evenly divisible by both 3 and 5, log "Fizzbuzz"

function Loop1()
{
    let count = 0; 

    while ( count < 10 ) {
     count = count + 1; 
     console.log(count)
     }

}

function loop2()
{
    let count = 4;

    while ( count > -16 ) {
        count = count - 1; 
        console.log(count)
        
        }
        {
        console.log(Done)}

}

//class day 2
// console.log("Hello World")
// let alphabet =["a","b","c"]
// console.log(alphabet[0])

// let arraywithdatatypes = ["string",undefined,true]

// console.log(arraywithdatatypes[0])
// console.log(arraywithdatatypes[3])


// let alpha =["a","b","c"]
// console.log(alpha[0])
// console.log(alpha[1])
// console.log(alpha[2])
// console.log(alpha[3])


// const instruments = [
//     "The Great Stalacpipe Organ",
//     "Stylophone",
//     "Ondes Martenot",
//     "Sharpischord",
//     "Hydraulophone",
//     "Pyrophone"
//    ];
//    console.log(instruments[0])
//    console.log(instruments[5])
//   console.log(instruments[0] = "Roli Seaboard") 
//   console.log( instruments[3] = "Makey Makey Banana Piano")
//   console.log(instruments[ instruments.length - 1 ] = "OP1")
//   console.log(instruments)
//   console.log(instruments.length)
//   console.log(instruments[instruments.length-1])

//   for (let index = 0; index <= 5; index += 1) {
//     let currentElement = instruments[index];
//     console.log(currentElement);
//    }

// const ordinals = [
//     "Zeroeth",
//     "First",
//     "Second",
//     "Third"
//    ];
//    ordinals[0]; // "Zeroeth"
//    ordinals[1]; // "First"
//    ordinals[2]; // "Second"
//    ordinals[3]; // "Third"

//    for (let index = 0; index <= ordinals.length-1; index += 1) {
//     let currentElement = ordinals[index];
//     console.log(currentElement);
//    }

//    for (let index = 0; index <= 3; index += 1) {
//     let currentElement = ordinals[index];
//     console.log(currentElement);
//    }
// ordinals.forEach(e => {
//     console.log(e)
// });

// const instruments = [
//     "The Great Stalacpipe Organ",
//     "Stylophone",
//     "Ondes Martenot",
//     "Sharpischord",
//     "Hydraulophone",
//     "Pyrophone"
//    ];
//    instruments.forEach(e => {
//     console.log(e)
// });

// const ordinals = [
//     "First",
//     "Second",
//     "Third"];
//    ordinals.length; // 3
//    console.log(ordinals)
//    ordinals.push("Fourth"); // Add "Third" to the end
//    console.log(ordinals)
//    ordinals.pop(); // Remove the last element ("Fourth")
//    console.log(ordinals)
//    ordinals.unshift("Zeroeth"); // Add "Zeroeth" to the start
//    console.log(ordinals)
//    ordinals.shift(); // Remove the first element ("Zeroeth")
//    console.log(ordinals)
//    ordinals.indexOf("Second"); // 1
//    console.log(ordinals)

// let myNumbers =[3,4];

// console.log(myNumbers)
// myNumbers.push(5)
// console.log(myNumbers)
// myNumbers.unshift(2)
// console.log(myNumbers)
// myNumbers.pop()
// console.log(myNumbers)
// myNumbers.shift()
// console.log(myNumbers)


// Starting with an empty array called rainbowColors:

// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Bonus: Do this using one method
// Log out the length of the array
// Log out the second item
// Log out the last item (make this flexible/dynamic!)
// Log out the index of the string "blue"

// const rainbowColors =[]

// rainbowColors.push("orange")
// rainbowColors.unshift("red")
// rainbowColors.push("yellow")
// rainbowColors.push("green", "blue", "indigo",  "violet")
// console.log(rainbowColors)
// console.log(rainbowColors.length)
// console.log(rainbowColors[1])
// console.log(rainbowColors.length - 1)
// console.log(rainbowColors.indexOf("blue"))

// Bonus: Find out the difference between .slice and .splice
// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
// Starting with this array const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)

// const emptyObject = {};
// const movie = {
//  name: "Satantango",
//  director: "Bela Tarr",
//  duration: 432
// };
// console.log(movie)

// const bookSeries = {
//     name: "In Search of Lost Time",
//     author: "Marcel Proust",
//     rating: 5,
//     books: [
//     "Swann's Way",
//     "In the Shadow of Young Girls in Flower",
//     "The Guermantes Way",
//     "Sodom and Gomorrah",
//     "The Prisoner",
//     "The Fugitive",
//     "Time Regained"
//     ]
//    };
// console.log(bookSeries.name)
// console.log(bookSeries.books[2])

// const bookSeries = {
//     name: "In Search of Lost Time",
//     author: "Marcel Proust",
//     rating: 5,
//     books: [
//     "Swann's Way",
//     ]
//    };
//    const name = bookSeries.name; // "In Search of Lost Time"
//    const author = bookSeries.author; // "Marcel Proust"
//    const rating = bookSeries.rating; // 5
//    const firstBook = bookSeries.books[0]; // "Swann's Way

//    console.log(name)
//    console.log(firstBook)
//    console.log(name,author,rating,firstBook)

//    bookSeries.books.forEach(e => {
//          console.log(e)
//      });

//     for (let index = 0; index < bookSeries.books.length; index += 1) {
//     let currentElement = bookSeries.books[index];
//     console.log(currentElement);
//    }
// for (let i =0; i < bookSeries.books.length; i++){
//     console.log(bookSeries.books[i]);
// }

// const marxFamily = [
//     { name: "Groucho", birthYear: 1890 },
//     { name: "Harpo", birthYear: 1888 },
//     { name: "Chico", birthYear: 1887 },
//     { name: "Zeppo", birthYear: 1901 },
//     { name: "Gummo", birthYear: 1893 }
//    ];
//    for ( const i = 0; i < marxFamily.length; i += 1 ) {
//     const brother = marxFamily[i];
//     console.log(brother.name, brother.birthYear);
//    }

// let  course={topic:"JavaScript"}

// //change the topic to be "JavaScript Development" 
// console.log(course.topic = "JavaScript Development")
// console.log(course)

//change the bookseries rating to be 10
// const bookSeries = {
//     name: "In Search of Lost Time",
//     author: "Marcel Proust",
//     rating: 5,
//     books: [
//     "Swann's Way",
//     "In the Shadow of Young Girls in Flower",
//     "The Guermantes Way",
//     "Sodom and Gomorrah",
//     "The Prisoner",
//     "The Fugitive",
//     "Time Regained"
//     ]
//    };
//    console.log(bookSeries.rating = 10)
//    console.log(bookSeries)

// let course = {
//     topic:"JavaScript"
// }
//    //add teacher name : Avi, add teaching assistant Aiman
//    console.log(course.teachername = "Avi")
//    console.log(course.teachingAssistant = "Aiman")
//    console.log(course)

// //add teacher name : Avi, add teaching assistant Aiman , iman
//    console.log(course.teachingAssistant= ["Aiman","Iman"])
//    console.log(course)
//console.log(course.name)/undefined/

// const movie = {
//     name: "Satantango",
//     director: "Bela Tarr",
//     duration: 432
//    };
//    movie.language = "Hungarian";
//    movie.ratingOutOfFive = 10;
//    movie.parts = 12;

//    const explorer = {
//     firstName: "Jacques",
//     lastName: "Cousteau",
//     birth: {
//     day: 11,
//     month: 6,
//     year: 1910
//     }
//    };
//    const birthDay = explorer.birth.day;
//    const birthMonth = explorer.birth.month;
//    const birthYear = explorer.birth.year

//    console.log(explorer.birth.day)
//    console.log(birthDay)


//    const explorer = {
//     firstName: "Jack",
//     lastName: "Delta",
//     birth: {
//     day: 11,
//     month: 6,
//     year: 1910
//     }
//    };
//    const birthDay = explorer.birth.day;
//    const birthMonth = explorer.birth.month;
//    const birthYear = explorer.birth.year

//    console.log(explorer.firstName)
//    console.log(explorer.lastName)
//    console.log(explorer.birth.day)

//    const explorer = {
//     firstName: "Jack",
//     lastName: "Delta",
//     birth: {
//     day: 11,
//     month: 6,
//     year: 1910
//     }
//    };
//    const birthDay = explorer.birth.day;
//    const birthMonth = explorer.birth.month;
//    const birthYear = explorer.birth.year

//    console.log(explorer.firstName)
//    console.log(explorer.lastName)
//    console.log(explorer.birthDay)


// const marxFamily = [
//     { name: "Groucho", birthYear: 1890 },
//     { name: "Harpo", birthYear: 1888 },
//     { name: "Chico", birthYear: 1887 },
//     { name: "Zeppo", birthYear: 1901 },
//     { name: "Gummo", birthYear: 1893 }
//    ];
//    for ( i = 0; i < marxFamily.length; i ++ ) {
//     const brother = marxFamily[i];
//     console.log(brother.name);
//    }

// The Reading List
// Keep track of which books you have read and which books you want to read!

// Create an array of objects, where each object describes a 
//book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you have read it yet).
// Iterate through that array of books
// For each book, log the book title and book author like so: "'Sapiens', by Yuval Noah Harari".
// Now use an if/else statement to change the output depending on whether you read it yet or not.
// If you have read it, log a string like 'You have already read "Sapiens", by Yuval Noah Harari'
// If not, log a string like 'You still need to read "A Life on Our Planet", by David Attenborough.'"

// const ReadingList = {
//     title : "title",
//     author : "author",
//     alreadyRead : yes
// }
function Exercises1() {

const ReadingList = [
            { 
                title: "In Search of Lost Time", 
                author: "Marcel Proust", 
                alreadyRead:true  
            },

            {   title: "Sapiens", 
                author: "Yuval Noah Harari", 
                alreadyRead:false  
            },

            {   title: "A Life on Our Planet", 
                 author: "David Attenborough",
                alreadyRead:true  
            },

           ];

              for ( i = 0; i < ReadingList.length; i ++ ) {
                const Bookinfo = ReadingList[i];
                
                console.log(Bookinfo.title,Bookinfo.author)
          

                if (Bookinfo.alreadyRead)
                {
                 
                   console.log("You have already read \"" + Bookinfo.title + "\", by " + Bookinfo.author )
                
                }
                else
                {
                    console.log("You still need to read  \"" + Bookinfo.title + "\", by " + Bookinfo.author )
                }
   }

}
// The Recipe Card
// Never forget another recipe!

// Create an object to hold information on your favorite recipe. 
//It should have properties for a title (a string), a number of servings, and ingredients (an array of strings).

// On separate lines log the recipe information so it looks like this:

// Ginger, Apple and Banana Smoothie

// Serves: 2

// Ingredients:

// - 500ml Milk
// - 2/3 cups of vanilla protein powder
// - 2 tbs rolled oats
// - Pinch of cinnamon
// - 2 cups of baby spinach leaves
// - 2 frozen bananas
// - 2 roughly chopped apples
// - 1/2 avocado
// - 2 tsp fresh ginger
// - 6 ice cubes
// Note: That is actually a very nice smoothie

function Exercises2()
{
    RecipeCard = {
        title:"Ginger, Apple and Banana Smoothie",
        servings:2,
        ingredients :
        [
            "500ml Milk",
            "2/3 cups of vanilla protein powder",
            "2 tbs rolled oats",
            "Pinch of cinnamon",
            "2 cups of baby spinach leaves",
            "2 frozen bananas",
            "2 roughly chopped apples",
            "1/2 avocado",
            "2 tsp fresh ginger",
            "6 ice cubes"

        ]
    }
    console.log("Recipe Title : " + RecipeCard.title)
    console.log("Recipe Servings : " + RecipeCard.servings)
    console.log("Recipe Ingredients : ")
    for ( i = 0; i < RecipeCard.ingredients.length; i ++ ) {
        console.log(RecipeCard.ingredients[i])
    }
    console.log("Note: That is actually a very nice smoothie")
}

// The Movie Database
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), director (a string) and stars (an array of strings).
// Print out the movie information like so: "'The Life Aquatic' lasts for 118 minutes, and was directed by Wes Anderson. Stars: Bill Murray, Cate Blanchett, Anjelica Huston, Jeff Goldblum and Willem Dafoe."
// Maybe the join method will be helpful

function Exercises3()
{
    MovieDatabase = {
        title:"The Life Aquatic" ,
        duration:"118 minutes",
        director:"Wes Anderson",
        stars : [
            "Bill Murray", 
            "Cate Blanchett", 
            "Anjelica Huston", 
            "Jeff Goldblum",
            "Willem Dafoe"

        ]
    }
    console.log(MovieDatabase.title)
    console.log("lasts for : " + MovieDatabase.duration)
    console.log("stars : ")
    for ( i = 0; i < MovieDatabase.stars.length; i ++ ) {
        console.log(MovieDatabase.stars[i])
    }
}
