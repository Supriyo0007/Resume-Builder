// alert("loading");
function addNewLangField() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("langField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("lang");
  let aqAddButtonOb = document.getElementById("langAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewEducField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("educField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("educ");
  let aqAddButtonOb = document.getElementById("educAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}



function addNewPROField() {
  let x = document.createElement("input");
  x.classList.add("form-control");
  x.classList.add("proField");
  x.classList.add("mt-2");
  x.setAttribute("placeholder", "Enter title");

  let aqOb = document.getElementById("pro");
  let aqAddButtonOb = document.getElementById("proAddButton");
  aqOb.insertBefore(x, aqAddButtonOb);
}

function addNewWEXField() {
  // addNewTiField();
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("wexField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Experience");

  let weOb = document.getElementById("wex");
  let weAddButtonOb = document.getElementById("wexAddButton");
  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewSKIField() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("skiField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("ski");
  let aqAddButtonOb = document.getElementById("skiAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating cv
function generateCV() {
  document.getElementById("nName").innerHTML =
    document.getElementById("nameField").value;

  // job title 
  document.getElementById("jJob").innerHTML = document.getElementById(
    "jobFiled"
  ).value;

  //contact
  document.getElementById("cContact").innerHTML =
    document.getElementById("contactField").value;

  //gmail
  document.getElementById("gGmail").innerHTML =
    document.getElementById("gmailFiled").value;

  document.getElementById("fFacebook").href =
    document.getElementById("fbField").value;

  document.getElementById("lLinkedin").href =
    document.getElementById("linkedField").value;

  // languages
  let languages = document.getElementsByClassName("langField");
  let lanF = "";
  for (let e of languages) {
    lanF += `<li> <span> ${e.value} </span></li>`;
  }
  document.getElementById("lan").innerHTML = lanF;

  //objective (about)
  document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
  // 

  // education 
  let educationF = document.getElementsByClassName("educField");
  let resEdu = "";
  for (let e of educationF) {
    resEdu += `<li> <p> ${e.value} </p></li>`;
  }
  document.getElementById("edu").innerHTML = resEdu;
  // work experience
  let wes = document.getElementsByClassName("wexField");
  let str = "";
  for (let e of wes) {
    str += `<li class="square"> <h4> ${e.value} </h4></li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // professional skills
  let aqs = document.getElementsByClassName("skiField");
  let str1 = "";
  for (let e of aqs) {
    str1 += `<li class="square"> <h4> ${e.value} </h4></li>`;
  }
  if (str1.length) document.getElementById("skills").innerHTML = str1;

  // projects
  let pro = document.getElementsByClassName("proField");
  let str2 = "";
  for (let e of pro) {
    str2 += `<li class="square"> <h4> ${e.value} </h4></li>`;
  }
  if (str2.length) document.getElementById("projects").innerHTML = str2;
  //code for setting image

  let file = document.getElementById("imgField").files[0];
  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  //set the image to template

  reader.onloadend = function() {
    document.getElementById("imgTemplate").src = reader.result;
  };
}

//print cv
function printCV() {
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
  document.getElementById("btnN").style.display = "none";
  window.print();
}