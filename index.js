let isdobopen = false;
let dateofbirth
const settingcogEl = document.getElementById("settingicon");
const settingcontentEl = document.getElementById("settingcontent");
const initialtextEl = document.getElementById("initialtext");
const afterdobbtntxtEl = document.getElementById("afterdobbtntxt");
const dobbuttonEl = document.getElementById("dobbutton");
const dobinputEl = document.getElementById("dobinput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const maketwodigitnumber = (number) => {
    return number > 9 ? number : `0${number}`
};


const toggledateofbirthselector = () => {
    if(isdobopen) {
        settingcogEl.classList.add("hide");
    }
    else{
        settingcontentEl.classList.remove("hide");
    }
    isdobopen = !isdobopen;
console.log("Toggle",isdobopen);

};


const updateAge = () => {
const currentdate = new Date();

const datediff = currentdate - dateofbirth;
const year = Math.floor(datediff / (1000 * 60 * 60 * 24 * 365));
const month = Math.floor((datediff / (1000 * 60 * 60 * 24 * 365)) % 12);
const  day = Math.floor(datediff / (1000 * 60 * 60 * 24 )) % 30;
const hour = Math.floor(datediff / (1000 * 60 * 60 ) )% 24;
const minute= Math.floor(datediff / (1000 * 60 ) )%60;
const second = Math.floor(datediff / 1000 ) %60;

yearEl.innerHTML= maketwodigitnumber(year);
monthEl.innerHTML= maketwodigitnumber (month);
dayEl.innerHTML= maketwodigitnumber (day) ;
hourEl.innerHTML= maketwodigitnumber(hour);
minuteEl.innerHTML= maketwodigitnumber(minute);
secondEl.innerHTML= maketwodigitnumber(second);

  
};

const localStorageGetter = () => {
    const year = localStorage.getItem('year')
const month = localStorage.getItem('month')
const date = localStorage.getItem('date')
if (year && month && date) {
    dateofbirth = new Date(year, month,date);
}
updateAge();

};

const setdobhandler = () => {
  const datestring =dobinputEl.value;

dateofbirth = datestring ? new Date (datestring) : null;


if(dateofbirth){

    localStorage.setItem("year", dateofbirth.getFullYear());
    localStorage.setItem("month", dateofbirth.getMonth());
    localStorage.setItem("date", dateofbirth.getDate());
    initialtextEl.classList.add("hide");
    afterdobbtntxtEl.classList.remove("hide");

    setInterval(() => updateAge(),1000);
}
else{
      afterdobbtntxtEl.classList.add("hide");
        initialtextEl.classList.remove("hide");
}
};

localStorageGetter();




settingcogEl.addEventListener("click",toggledateofbirthselector);
dobbuttonEl.addEventListener("click",setdobhandler); 
