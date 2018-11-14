var  education = "Professional degree";
switch (education) {
  case "no high school diploma":
  salary = $25,636;
  break;
  case "high school diploma":
  salary = $35,256;
  break;
  case "Associate's degree":
  salary = $41,496;
  break;
  case "Bachekor's degree":
  salary = $59,124;
  break;
  case "Master's degree":
  salary = $69,732;
  break;
  case "Professional degree":
  salary = "$89,960";
  break;
  case "a Doctor's degree":
  salary = $84,396;
  break;
}
console.log(\""in 2015, a person with" + education + "education earned an average of" + salary + "year.\"");














var a = 1;
var b = 2;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}

var number = 0;
if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
};

var labas = prompt("kiek jums metu");
if (labas % 2 !== 0) {
  console.log("even");
} else {
  console.log("odd");
};

var promp = prompt("iveskite kiek grupeje zmoniu");
if (promp === "3") {
  console.log("trio");
} else if (promp === "4") {
  console.log("quartet");
} else if (promp === "5") {
  console.log("large group");
} else if (promp > "5") {
  console.log("large group");
}  else if (promp === "2") {
  console.log("duet");
} else if (promp === "1") {
  console.log("solo");
}  else if (promp === "0") {
  console.log("not a group");
}

var guess = prompt("spekite skaiciu");
var manoskaicius = 7;
if (guess === manoskaicius) {
  console.log("atspejai");
} else if (guess > 7) {
  console.log("perdidelis");
} else {
  console.log("permazas");
};


var condition = "hot";
var action = " ";
condition === "hot" ? action = "we will go swimming" : action = "we will stay home";
console.log(action);
