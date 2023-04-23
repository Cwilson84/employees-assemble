const inquirer = require("inquirer");
const fs = require("fs");

// Array to hold the team members
const team = [];

// Prompt the user for the manager's information
function promptManager() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team manager's office number?",
    },
  ]);
}

// Prompt the user for an engineer's information
function promptEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub username?",
    },
  ]);
}

// Prompt the user for an intern's information
function promptIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school?",
    },
  ]);
}

// Generate the HTML for a team member
function generateMemberHTML(member) {
  return `
    <div class="card">
      <div class="card-header">
        <h2>${member.name}</h2>
        <h3>${member.role}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${member.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${member.email}?subject=Team%20Roster">${member.email}</a></li>
          <li class="list-group-item">${member.extra}</li>
        </ul>
      </div>
    </div>
  `;
}

// Generate the HTML for the entire team
function generateTeamHTML(team) {
  const membersHTML = team.map(generateMemberHTML).join("");
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./dist/style.css">
      </head>
      <body>
        <div class="container">
          <h1 class="mt-5 mb-3 text-center title-logo" id="header">My Team</h1>
          <div id="team" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">${membersHTML}</div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="index.js"></script>
      </body>
    </html>
  `;
}

// Write the HTML file to disk
function writeHTML(html) {
  fs.writeFile("team.html", html, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Successfully generated team.html!");
  });
}

// Prompt the user to add a new team member or finish
function promptAddOrFinish() {
  return inquirer.prompt({
    type: "list",
    name: "choice",
    message: "What would you like to do next?",
    choices: [
      {
        name: "Add an engineer",
        value: "engineer",
      },
      {
        name: "Add an intern",
        value: "intern",
      },
      {
        name: "Finish building my team",
        value: "finish",
      },
    ],
  });
}

// Run the program
async function run() {
  try {
    console.log("Welcome to the Team Profile Generator!");

    // Prompt the user for the manager's information
    const managerAnswers = await promptManager();

    // Create the manager object and add it to the team array
    const manager = {
      name: managerAnswers.name,
      id: managerAnswers.id,
      email: managerAnswers.email,
      role: "☕Manager",
      extra: `Office Number: ${managerAnswers.officeNumber}`,
    };
    team.push(manager);

    // Prompt the user to add more team members until finished
    let addOrFinish = await promptAddOrFinish();
    while (addOrFinish.choice !== "finish") {
      switch (addOrFinish.choice) {
        case "engineer":
          const engineerAnswers = await promptEngineer();
          const engineer = {
            name: engineerAnswers.name,
            id: engineerAnswers.id,
            email: engineerAnswers.email,
            role: "💻Engineer",
            extra: `GitHub: <a href="https://github.com/${engineerAnswers.github}">${engineerAnswers.github}</a>`,
          };
          team.push(engineer);
          break;
        case "intern":
          const internAnswers = await promptIntern();
          const intern = {
            name: internAnswers.name,
            id: internAnswers.id,
            email: internAnswers.email,
            role: "📚 Intern",
            extra: `School: ${internAnswers.school}`,
          };
          team.push(intern);
          break;
        default:
          console.error("Invalid choice");
          break;
      }
      addOrFinish = await promptAddOrFinish();
    }

    // Generate the HTML and write it to disk
    const html = generateTeamHTML(team);
    writeHTML(html);
  } catch (error) {
    console.error(error);
  }
}

// Call run function to start the program
run();
