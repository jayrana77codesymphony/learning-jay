const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const mobileNumber = document.getElementById("mobileNumber");
const birthDate = document.getElementById("birthDate");

const male = document.getElementById("male");
const female = document.getElementById("female");

const cricket = document.getElementById("cricket");
const gaming = document.getElementById("gaming");
const anime = document.getElementById("anime");
const song = document.getElementById("song");

const resume = document.getElementById("resume");
const address = document.getElementById("address");
const city = document.getElementById("city");

// ********************* formdata obj data display **************************
// const hobby = document.getElementById('hobby');
// const myform = document.getElementById('myform');
// const btn = document.getElementById('submitbtn');
// btn.onclick = function(e){
//     e.preventDefault();
//     const formData = new FormData(myform);
//     const fname = formData.get('firstName');
//     const mname = formData.get('middleName');
//     const lname = formData.get('lastName');
//     const email = formData.get('email');
//     const pass = formData.get('password');
//     const mono = formData.get('mobileNumber');
//     const bdate = formData.get('birthDate');
//     const gen = formData.get('gender');
//     const hby = formData.getAll('hobby');
//     const resume = formData.get('resume');
//     const add = formData.get('address');
//     const city = formData.get('city');
//     console.log('First Name :',fname,'\nMiddle Name :',mname,'\nLast Name :',lname,'\nEmail :',email,'\nPassword :',pass,'\nMobile Number :',mono,'\nBirth Date :',bdate,'\nGender :',gen,'\nHobby :',hby,'\nResume :',resume.name,'\nAddress :',add,'\nCity :',city);
//     myform.reset();
// }

const myform = document.getElementById("myform");
const btn = document.getElementById("submitbtn");
btn.onclick = function (e) {
    e.preventDefault();
    const fname = firstName.value;
    const mname = middleName.value;
    const lname = lastName.value;
    const eml = email.value;
    const pass = password.value;
    const mono = mobileNumber.value;
    const bdate = birthDate.value;
    const resum = resume.value;
    const add = address.value;
    const cty = city.value;

    let gend;
    if (male.checked == true) gend = "male";
    else if (female.checked == true) gend = "female";

    const hoby = [];
    if (cricket.checked == true) hoby.push("cricket");
    if (gaming.checked == true) hoby.push("gaming");
    if (anime.checked == true) hoby.push("anime");
    if (song.checked == true) hoby.push("song");

    //   const data = [];
    //   data.push([
    //     fname,
    //     mname,
    //     lname,
    //     eml,
    //     pass,
    //     mono,
    //     bdate,
    //     gend,
    //     hoby,
    //     resume.value,
    //     add,
    //     cty,
    //   ]);

    let row = `<tr><td>${fname}</td><td>${mname}</td><td>${lname}</td><td>${eml}</td><td>${pass}</td><td>${mono}</td><td>${bdate}</td><td>${gend}</td><td>${hoby}</td><td>${resum}</td><td>${add}</td><td>${cty}</td></tr>`;
    // console.log(row);
    let tableBody = document.getElementById("myTable");
    // console.log(tableBody);
    tableBody.innerHTML += row;

    // myform.reset();


    // const table = document.getElementById('myTable');

    // const row = document.createElement('tr');
    // for (let i = 0; i < data.length; i++) {
    //     let tdata = document.createElement('td');
    //     tdata.textContent = data[i];
    //     row.appendChild(tdata);
    // }
    // table.appendChild(row);

    // console.log(fname,mname,lname,eml,pass,mono,bdate,gend,hoby,resume.value,add,cty);
};