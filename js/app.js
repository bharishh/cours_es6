

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


})()
 