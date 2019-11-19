//variables

const form = document.getElementById('bookaCake');

const html = new HTMLUI (); 

// event listeners

eventListeners();
function eventListeners(){
  window.addEventListener('load',function (){
    
    html.displayOccasion();
    html.displayLayer();
    html.displayFlavour();
    html.displayMonth();
    html.displayYear();
    html.displayDay();
  
  });
  

  
  form.addEventListener('submit', function(e){
    e.preventDefault();

    //read values from form
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('yourEmail').value;
    const yourLocation = document.getElementById('yourLocation').value;
    const occasion = document.getElementById('occasion').value;
    const layer = document.getElementById('layer').value;
    const flavour = document.getElementById('flavour').value;
    const theYear = document.getElementById('yourYear').value;
    const theDay = document.getElementById('yourDay').value;
    const theMonth = document.getElementById('yourMonth').value;
   
    
    // Check that all fields have something
    if(firstName === "" || lastName === "" || email ==="" || yourLocation === "" || occasion === "" || layer === "" || flavour === "" || theYear === "" || theDay === "" || theMonth === "" ){
      console.log("error");
      
      html.displayError('All the fields are mandatory!!!')
    } else {
      
      console.log("It was a success");
      html.displayError('It was a success')
      firstName.value = "";
      console.log(firstName);

      
    }

  
  });


}






// objects


function HTMLUI(){};

HTMLUI.prototype.displayOccasion = function (){
  const occasions = ["Wedding", "Birthday", "Anniversary", "Engagement", "Other"];
  const selectOccasion = document.getElementById('occasion');
  console.log(occasions[0]);
  

  for(let i = 0; i < occasions.length; i++){
    const option = document.createElement('option');
    option.value = occasions[i];
    option.textContent = occasions[i];
    selectOccasion.appendChild(option);
    // console.log(option);

  }
  
}


HTMLUI.prototype.displayLayer = function (){
  const layers = [1,2,3,4,5,6];
  const selectLayer = document.getElementById('layer');
  

  for(let i = 0; i < layers.length; i++){
    const option = document.createElement('option');
    option.value = layer[i];
    option.textContent = layers[i];
    selectLayer.appendChild(option);
    // console.log(option);

  }
  
}

HTMLUI.prototype.displayFlavour = function (){
  const flavours = ["Chocolate", "Vanilla", "Strawberry", "Raspbbery", "Apple flavour"];
  const selectFlavour = document.getElementById('flavour');
  

  for(let i = 0; i < flavours.length; i++){
    const option = document.createElement('option');
    option.value = flavours[i];
    option.textContent = flavours[i];
    selectFlavour.appendChild(option);
    // console.log(option);

  }
  
}


HTMLUI.prototype.displayDay = function (){
  const maxDay  = 31,
  minDay = 1;
  console.log(maxDay);
  const selectDay = document.getElementById('yourDay');
  

  for(let i = minDay; i <= maxDay; i++){
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectDay.appendChild(option);
     console.log(option);

  }
  
}



HTMLUI.prototype.displayMonth = function (){
  const months  = ["January", "February", "March", "April", "June", "July", "August", "September", " October", "November", "December"];
  console.log(months);
  const selectMonth = document.getElementById('yourMonth');
  

  for(let i = 0; i < months.length; i++){
    const option = document.createElement('option');
    option.value = months[i];
    option.textContent = months[i];
    selectMonth.appendChild(option);
    // console.log(option);

  }
  
}


HTMLUI.prototype.displayYear = function (){
  const min  = new Date().getFullYear(),
        max = min + 2;
  
  const selectYear = document.getElementById('yourYear');
  

  for(let i = min; i <= max; i++){
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
    console.log(option);

  }
  
} 

// Shows an error

HTMLUI.prototype.displayError = function(message){
  // create a div 
  const div = document.createElement('div');
  div.classList = "error";

  // insert the message
  div.innerHTML= `<p>${message}</p>`

  form.insertBefore(div, document.querySelector('#firstName') );
  
  // clear error message after 3 sec

  setTimeout(function(){
    document.querySelector('.error').remove();
  }, 3000);

}

HTMLUI.prototype.displayOrder = function( firstName, lastName, email, yourLocation, layer, flavour, theDay, theMonth, theYear){
  this.firstName = firstName;
  // create div
  const div = document.createElement('div');

  // insert firstname
  div.innerHTML = `${firstName} + ${lastName} + <br> + `  
  
  // form.
}







// const occasion = ["a", "b", "c", "e", "Other"];
// const occasion = ["Wedding", "Birthday", "Burial", "Engagement", "Other"];

function diffArray(arr1, arr2){
  var newArr = [];
  var newConcat = arr1.concat(arr2);
  for(var i = 0; i < newConcat.length; i++){
    if(arr1.indexOf(newConcat[i]) === -1 || arr2.indexOf(newConcat[i]) === -1){
      newArr.push(newConcat[i]);
    }
  }
  return newArr;
}

console.log(diffArray([1,2,3,5], [1,2,3,4,5,6,7]));


// &times = multiplication, &#247 = division