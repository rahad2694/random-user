const profileBox = document.getElementById('profile-box');
const spinner = document.getElementById('spinner');
const showProfile =async() =>{
    spinner.classList.remove('d-none');
    profileBox.innerHTML='';
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    loadProfile(data.results[0]);
}

const loadProfile =(info) =>{
    // console.log(info);
    const div = document.createElement('div');
    div.innerHTML=`
        <div class="text-center">
            <div class="d-flex justify-content-center">
                <img class="rounded-circle img-fluid" src="${info.picture.medium}">
            </div>
            <h1>${info.name.title} ${info.name.first} ${info.name.last}</h1>
            <p>Gender: ${info.gender}</p>
            <p>Age: ${info.dob.age}</p>
            <p>E-mail: ${info.email}</p>
            <p>Phone: ${info.phone}</p>
            <button onclick="moreInfo('${info.picture.large}','${info.name.first}','${info.location.country}','${info.location.state}','${info.location.city}','${info.location.postcode}')" class="btn-primary py-2 px-3 rounded">More Info</button>
        </div>
    `;
    spinner.classList.add('d-none');
    profileBox.appendChild(div);
}

const moreInfo =(pic,nickName,country,state,city,postcode) =>{
    spinner.classList.remove('d-none');
    profileBox.innerHTML='';
    const div = document.createElement('div');
    div.innerHTML=`
        <div class="text-center">
            <div class="d-flex justify-content-center mb-3">
                <img class=" img-fluid" src="${pic}">
            </div>
            <h1>${nickName}</h1>
            <p>Country: ${country}</p>
            <p>State: ${state}</p>
            <p>City: ${city}</p>
            <p>Postcode: ${postcode}</p>
        </div>
    `;
    spinner.classList.add('d-none');
    profileBox.appendChild(div);
}