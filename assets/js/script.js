// let imgOne = document.createElement("IMG");
// imgOne.setAttribute("src", "prova.jpg");

// document.body.appendChild(imgOne);


// const teamMembers = [
//   {
//     Nome: 'Angela Caroll',
//     Ruolo: 'Chief Editor',
//     Foto: imgOne,
//   }
// ];

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: './assets/img/wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: './assets/img/angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: './assets/img/walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: './assets/img/angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: './assets/img/scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: './assets/img/barbara-ramos-graphic-designer.jpg',
  },
];

const teamContainer = document.querySelector('.team-container');
document.getElementById('addMemberButton').addEventListener('click', addNewMember);


drawTeam();

function drawTeam(){

  /*
    1. reset
    2. ciclo la base dati
    3. delego a una funzione la creazione dell'HTML di ogni membro del team
  */

  teamContainer.innerHTML = '';

  for(let teamMember of team){
    drawTeamMember(teamMember)
  }

}

function drawTeamMember(teamMember){
  /*
    1. leggo il contenuto del team-container
    2. genero l'output HTML
    3. lo aggiungo all'HTML presente
  */

    // let prevContent = teamContainer.innerHTML;

    const {name, role, image} = teamMember;

    teamContainer.innerHTML += `
    <div class="team-card">
      <div class="card-image">
        <img
          src="${image}"
          alt="${name}"
        />
      </div>
      <div class="card-text">
        <h3>${name}</h3>
        <p>${role}</p>
      </div>
    </div>
    `;
   //console.log(prevContent)

    // teamContainer.innerHTML = prevContent;
}

function addNewMember(){

  /*
    1. leggo i value degli input
    2. creo un object con i valori
    3. invio l'oggetto a drawTeamMember che lo stamp
    4. aggiungo l'oggetto alla base dati
    5. resetto il form
  */

    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const image = document.getElementById('image').value;

    // uso la destrutturazione
    const newTeamMember = {
      name,
      role, 
      image
    }
    
    drawTeamMember(newTeamMember);
    team.push(newTeamMember);
    
    resetForm();

}

function resetForm(){
  document.getElementById('name').value = '';
  document.getElementById('role').value = '';
  document.getElementById('image').value = '';
}