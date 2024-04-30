

(()=>{

    console.log("hello JavaScript")

    const nom="Javascript" // const = c'est une variable qui change jamais 
    let prenom = "Harish" // let = variable qui peut evolue 
    let phone =64843
console.log(prenom)
 console.log(typeof phone)





   const tab=["HTML","CSS","JS", true]
    console.table(tab)



    
    const user = {
        nom : "dup",
        prenom : "jean",
        age : 30,
        ville : "NY",
        pays : "USA"
    }




    console.table(user)

    console.log(`${user.nom} : ${user.prenom}`)

    //for(let i=0 ; i<tab.length; i++){

       // console.log(tab[i])
   // }
    

    i=0
    //while(i<tab.length){
      //  console.log(`Index ${i} : ${tab[i]}`)
            i++
    //}



    for(let index in user){
        console.log(`${index} : ${user[index]}`)
    }







    // operateur = + - / % < > 

    let age = 30
     let annee = 2024

     console.log(age%2)
     


     console.log(`Vous etes né en ${annee-age}`)


     age%2==0 ? console.log("Nombre paire") : console.log("Nombre impaire")

   


     let prix = 55 
     let taxe = 5.5

    console.log(`totale ${prix * taxe /100}`)


    const product=[
        {name: "car", price: 6000},
        {name: "Bike", price: 150},
        {name: "phone", price: 700},
        {name: "Watch", price: 200},
        {name: "pen", price: 8},
        {name: "bag", price: 50},
    ];
    
// 1 er methode

    console.log(product[0])
    
// 2e methode

    product.forEach((cle) => {
        console.log(cle.name+ ' '+cle.price)
    });



// 3e methode


const rowNP = product.filter((row) => row.price <200)
console.log(rowNP)




const person_1 ={

    nom:"Dup",
    prenom : "Jean"

}

const person_2 ={

    nom:"Bob",
    prenom : "Lo"

}

const person_3 ={

    nom:"Bran",
    prenom : "Jojo"

}


const people = []

people.push(person_1, person_2)

console.table(people)

people.forEach((key)=> {
    console.log(key.nom+ ' '+key.prenom)
});







})()


 