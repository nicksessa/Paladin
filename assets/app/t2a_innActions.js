


// jQuery to load another javaScript file
//$.getScript('../data/randomName', function()
//{
    // script is now loaded and executed.
    // put your dependent JS here.
//});



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let availableRetainers = []


let retainers = [
    {
      name: "Fred",
      profession: "Mercenary",
      employed: true,
      cur_hp: 20,
      max_hp: 20,
      weapon: "Longsword",
      armor: "Padded",
      attack: 7,
      damage_bonus: 2,
      armor_bonus: 1,
      morale: 1
    },
    {
      name: "Oliver",
      profession: "Rogue",
      employed: true,
      cur_hp: 15,
      max_hp: 15,
      weapon: "Shortsword",
      armor: "Leather Jerkin",
      attack: 7,
      damage_bonus: 2,
      armor_bonus: 1,
      morale: -1
    },
    {
      name: "Trogdor",
      profession: "Woodsman",
      employed: true,
      cur_hp: 20,
      max_hp: 20,
      weapon: "Longbow and Shortsword",
      armor: "Leather Jerkin",
      attack: 7,
      damage_bonus: 2,
      armor_bonus: 1,
      morale: 0
    }
  ]
  
  let retainersForHire = false
  let numRetainers = retainers.length
  alert("You have " + numRetainers + " retainers")
  let total = checkRetainers()
  
  let retainerName = ""
  let retainerProfession = ""
  
  if (total > 0) {
    for (let i=0; i<total; i++) {
      createRetainer(i)
    }
  }
  
  function rollDie (dieType) {
  	let result = Math.floor(Math.random() * dieType + 1);
    return result
  }
  
  function checkRetainers () {
    let num1 = rollDie(6)
    alert("You rolled a: " + num1)
    let total = num1 - numRetainers
    alert("Total: " + total)
    return total
  }
  
  function createRetainer (i) {
    // get name
    retainerName = randomRetainerName()
    console.log("Inn: " + randomInnName())
    // get profession
    retainerProfession = getRetainerProfession(i)
    
    let newObj = {
      name: retainerName,
      profession: retainerProfession,
      employed: false
    }
    // push to availableRetainers[]
    
    availableRetainers.push(newObj)
    
  }
    
  function getRetainerProfession() {
    let num1 = rollDie(6)
    switch(num1) {
      case 1:
      case 2:
      case 3:
        return "Mercenary"
      break;
      case 4:
        return "Woodsman"
      break;
      case 5:
        return "Merchant"
      break;
      case 6:
        return "Rogue"
      break;
    }
  }
  
  
  function createTable() {
  
  let retainerTable = `
    <div class='row'>
  <div class="col-lg-12 bg-white rounded shadow-sm mb-5">
            Retainer Table
            <div class="table-responsive">
              <table class="table" id="retainerTable">
                <thead>
                  <tr>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase text-left">Name</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase text-left">Profession</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase text-left">Status</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase text-center">Hire</div>
                    </th>
                  </tr>
                </thead>
                <tbody id="retainerTableBody">
                  <!-- Javascript fills in the table here -->
                </tbody>
              </table>
            </div> <!-- End Table container -->
          </div> <!-- END column 1-->
  </div>  <!-- END row -->
  `
  

  $("#mainBody").empty()
  $("#mainBody").append(retainerTable)
  
  // this is the same as the jQuery loop below
  /*Object.keys(retainers).forEach(function (item) {
    retainter_name = retainers[item].name
    retainer_profession = retainers[item].profession
  })*/
  
  $.each(availableRetainers, function(key, value) {
  
    let retainer_name = value.name
    let retainer_profession = value.profession
    
    value.employed = false
    
    let retainer_status = value.employed

    var status = retainer_status ? retainer_status = "Hired" : retainer_status = "Available"
    
  let retainerRow = `
    <tr>
    <td class="border-0 align-center text-left p-2 px-3"> ${retainer_name}</td>
    <td class="border-0 align-center text-left p-2 px-3"> ${retainer_profession}</td>
    <td id="${retainer_name}_status"class="border-0 align-center text-left p-2 px-3"> ${retainer_status}</td>
    <td class="border-0 align-center text-left p-2 px-3 justify"> 
      <div class="d-flex justify-content-center px-2">
      <button data-id="${retainer_name}" type="button" class="hireBtn btn btn-dark rounded-pill mx-2 btn-sm">
        <i class="mt-2"></i>
        Hire
      </button>
      </div>
    </td>
    </tr>
  `
    
      //console.log("Name: " + retainer_name + " Profession: " + retainer_profession);
      $("#retainerTable").append(retainerRow)
    });
  
  }
  
  createTable()
  
 
  $(document).on('click', '.hireBtn', function () {
    var id = $(this).attr('data-id');
    // make this a choice.  "Are you sure..."
    if (confirm("Are you sure you want to hire " + id + " ?")) {
      txt = "You pressed OK!";
      let statusId = "#"+ id + "_status"
      $(statusId).text("Hired")
      // get a handle on the correct object
      var obj = $.grep(availableRetainers, function(obj){return obj.name === id;})[0];
      // set the object value to: true
      obj.employed = true
      
      // add the object to the retainers array
      retainers.push(obj)
      
      // remove the object from the array
      availableRetainers = $.grep(availableRetainers, function(e){ 
           return e.name != id; 
      });
      
      // next we have to refresh the screen
      createTable()
      
      //alert("the value of employed: " + obj.employed)
    } else {
      txt = "You pressed Cancel!";
    }
    
  })

