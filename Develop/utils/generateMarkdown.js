// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
  - Description
  - Installation Instructions
  - Usage Information
  - License
  - contribution
  - Tests
  - Questions
  
  ### Description 
  ${data.description}

  ### Installation Instructions
  ${data.installInput}

  ### User Instructions
  ${data.instruction}

  ### Contribution
  ${data.contribution}

  ### License
  ${data.license}

  ### Questions
  If you have any questions, you can reach me at:
  eMail: ${data.emailInput}
  Github: ${data.userName}

`;
}

module.exports = generateMarkdown;
