function renderLicenseBadge(license) 
{
  let badges = "";
  switch (license)
  {
    case 'Apache 2.0':
      {
        badges = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      }
    case 'GNU GPL v3':
      {
        badges = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      }
    case 'GNU AGPL v3':
      {
        badges = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        break;
      }
    case 'MIT':
      {
        badges = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      }
    case 'Mozilla Public License 2.0':
      {
        badges = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
      }
  }
  return badges;
}

function renderLicenseLink(license) 
{
  let link = "";
  switch (license)
  {
    case 'Apache 2.0':
      {
        link = "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
        break;
      }
    case 'GNU GPL v3':
      {
        link = "[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      }
    case 'GNU AGPL v3':
      {
        link = "[GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0)";
        break;
      }
    case 'MIT':
      {
        link = "[MIT](https://opensource.org/licenses/MIT)";
        break;
      }
    case 'Mozilla Public License 2.0':
      {
        link = "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
        break;
      }

  }
  return link;
}

function renderLicenseSection(license) 
{
  const currentYear = new Date();
  return `
  ## License
  Licensed under the ${renderLicenseLink(license)} license. \n
  Copyright ${currentYear.getFullYear()}
  `;
}

function generateToC(data)
{
  return `
  ## Table of Contents
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
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}

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
  Github Profile: [${data.github}](https://github.com/${data.github})\n
  Email any questions to: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
