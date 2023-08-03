// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `[![${license} license](https://img.shields.io/badge/license-${license}-blue)](${renderLicenseLink(license)})`
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    return `(https://opensource.org/licenses/${license})`
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `## Licenses
    Licensed under the ${license} license.`
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.licenses)}  

## Description

${data.description}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Licenses](#licenses)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.licenses)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For more information, contact me down below.
* Github: https://github.com/${data.githubUsername}
* Email: ${data.email}
`;
}

module.exports = generateMarkdown;