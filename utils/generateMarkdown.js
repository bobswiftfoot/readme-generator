function renderLicenseBadge(license) 
{
  let badges = "";
  if(license.javascript)
    badges += "![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)";
  if(license.mit)
    badges += "https://img.shields.io/badge/license-MIT-green";
  return badges;
}

function renderLicenseLink(license) 
{
  return "";
}

function renderLicenseSection(license) 
{
  return `
  ## License
  ${renderLicenseBadge(license)}
  `;
}

function generateToC(data)
{
  return `
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  `;
}

function generateMarkdown(data)
{
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ${generateToC(data.ToC)}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Github Profile: github.com/${data.github} 
  Email any questions to: ${data.email}
  `;
}

module.exports = generateMarkdown;
