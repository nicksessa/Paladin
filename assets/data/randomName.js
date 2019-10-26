// -------------------------------------
  // Retainer Names
  
  let retainerNameFirst_A = [
    "Bard",
    "Cadm",
    "Guel",
    "Har",
    "Mael",
    "Rayg"
  ]
  
  let retainerNameSecond_A = [
    "an",
    "ar",
    "oc"
  ]
  
  let retainerNameFirst_B = [
    "Adal",
    "Childe",
    "Ed",
    "Leof",
    "Theud",
    "Wulf"
  ]
  let retainerNameSecond_B = [
    "berg",
    "mund",
    "ric"
  ]
  
  let retainerNameFirst_C = [
    "Berw",
    "Cadw",
    "Gwrh",
    "Llyw",
    "Ow",
    "Tyw"
  ]
  let retainerNameSecond_C = [
    "en",
    "yr",
    "yn"
  ]
  
  let retainerNameFirst_D = [
    "Aligr",
    "Bedin",
    "Dion",
    "Gaheri",
    "Guivr",
    "Mordr"
  ]
  let retainerNameSecond_D = [
    "auz",
    "es",
    "et"
  ]

// -------------------------------------

function randomRetainerName() {

    let firstPart = ""
    let secondPart = ""
    let name= ""
    let firstRoll = 0
    let secondRoll = 0
    
    firstRoll = rollDie(6)
    switch(firstRoll) {
      case 1:
      case 2:
        secondRoll = rollDie(retainerNameFirst_A.length)
        firstPart = retainerNameFirst_A[secondRoll -1]
        console.log("First Part is: " + firstPart)
        thirdRoll = rollDie(retainerNameSecond_A.length)
        secondPart = retainerNameSecond_A[thirdRoll -1]
        console.log("Second Part is: " + secondPart)
        name= firstPart + secondPart
        console.log("Retainer Name is: " + name)
      break;
      case 3:
      case 4:
        secondRoll = rollDie(retainerNameFirst_B.length)
        firstPart = retainerNameFirst_B[secondRoll -1]
        console.log("First Part is: " + firstPart)
        thirdRoll = rollDie(retainerNameSecond_B.length)
        secondPart = retainerNameSecond_B[thirdRoll -1]
        console.log("Second Part is: " + secondPart)
        name= firstPart + secondPart
        console.log("Retainer Name is: " + name)
      break;
      case 5:
        secondRoll = rollDie(retainerNameFirst_C.length)
        firstPart = retainerNameFirst_C[secondRoll -1]
        console.log("First Part is: " + firstPart)
        thirdRoll = rollDie(retainerNameSecond_C.length)
        secondPart = retainerNameSecond_C[thirdRoll -1]
        console.log("Second Part is: " + secondPart)
        name= firstPart + secondPart
        console.log("Retainer Name is: " + name)
      break;
      case 6:
        secondRoll = rollDie(retainerNameFirst_D.length)
        firstPart = retainerNameFirst_D[secondRoll -1]
        console.log("First Part is: " + firstPart)
        thirdRoll = rollDie(retainerNameSecond_D.length)
        secondPart = retainerNameSecond_D[thirdRoll -1]
        console.log("Second Part is: " + secondPart)
        name= firstPart + secondPart
        console.log("Retainer Name is: " + name)
      break;
    }
    //alert("Retainer ["+ i + "] is " + name)
    alert("Random Retainer Name is: " + name)
    return name
  }


  // Random Inn Names

  let innNameFirst_A = [
    "The Black ",
    "The Red ",
    "The White ",
    "The Blue ",
    "The Green ",
    "The Gray ",
    "The Brown ",
    "The Hound and ",
    "The Hungry ",
    "The Happy ",
    "The Golden ",
    "The Rusty "
  ]
  
  let innNameSecond_A = [
    "Bear",
    "Dragon",
    "Griffin",
    "Lion",
    "Swan",
    "Unicorn",
    "Hare",
    "Hart",
    "Hobgoblin",
    "Horse",
    "Hog",
    "Huntsman"
  ]
  
  let innNameFirst_B = [
    "The Three ",
    "The Golden ",
    "The Silver ",
    "The Broken "
  ]
  let innNameSecond_B = [
    "Arrows",
    "Castles",
    "Goblets",
    "Kings",
    "Horseshoes",
    "Oaks"
  ]
  let innNameFirst_C = [
    "The Friars ",
    "The Pilgrims "
  ]
  let innNameSecond_C = [
    "Anchor",
    "Brew",
    "Cellar",
    "Habit",
    "Rest",
    "Tabard"
  ]

  function randomInnName() {

    let firstPart = ""
    let secondPart = ""
    let name= ""
    let firstRoll = 0
    let secondRoll = 0
    
    firstRoll = rollDie(6)
    switch(firstRoll) {
      case 1:
      case 2:
        secondRoll = rollDie(innNameFirst_A.length)
        firstPart = innNameFirst_A[secondRoll -1]
        //console.log("First Part is: " + firstPart)
        thirdRoll = rollDie(innNameSecond_A.length)
        secondPart = innNameSecond_A[thirdRoll -1]
        //console.log("Second Part is: " + secondPart)
        name= firstPart + secondPart
        //console.log("Name is: " + name)
      break;
      case 3:
      case 4:
        secondRoll = rollDie(innNameFirst_B.length)
        firstPart = innNameFirst_B[secondRoll -1]
        //console.log("First Part is: " + firstPart)
        thirdRoll = rollDie(innNameSecond_B.length)
        secondPart = innNameSecond_B[thirdRoll -1]
        //console.log("Second Part is: " + secondPart)
        name= firstPart + secondPart
        //console.log("Name is: " + name)
      break;
      case 5:
      case 6:
        secondRoll = rollDie(innNameFirst_C.length)
        firstPart = innNameFirst_C[secondRoll -1]
        //console.log("First Part is: " + firstPart)
        thirdRoll = rollDie(innNameSecond_C.length)
        secondPart = innNameSecond_C[thirdRoll -1]
        //console.log("Second Part is: " + secondPart)
        name= firstPart + secondPart
        //console.log("Name is: " + name)
      break;
    }
    //alert("Retainer ["+ i + "] is " + name)
    //alert("Random Inn Name is: " + name)
    return name
  }