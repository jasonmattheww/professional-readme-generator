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

`;
}

module.exports = generateMarkdown;