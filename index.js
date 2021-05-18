// TODO: Include packages needed for this application
const fs = require('fs');
// const license = require('./utils')
const inquirer = require('inquirer')
const generateREADME = (answer) =>

`# ${answer.title}
${answer.badge}
## Description
${answer.desc}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${answer.installation}
### Test Intructions
${answer.test}

## Usage
${answer.usage}

## Credits
${answer.collaborator}

## License
* ${answer.license}
---
## Contacts
GitHub: [${answer.git}](https://github.com/${answer.git}/)

Email: [${answer.emailAccount}${answer.emailServer}](mailto:${answer.emailAccount}${answer.emailServer})`

inquirer
  .prompt([
    {
        type: 'confirm',
        name: 'welcome',
        message: 'Welcome to my README generator!!! Ready to go?',
      },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Please write your descriptions:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter your installation notes',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information',
    },
    {
      type: 'input',
      name: 'collaborator',
      message: 'Please list the collaborators and contribution notes',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions',
      },
    {
      type: 'rawlist',
      name: 'license',
      message: 'Please choose the open source license you would like to use',
      choices: [
        'GNU General Public License (GPL)',
        'GNU Lesser General Public License (LGPL)',
        'MIT license (MIT)',
        'Mozilla Public License 2.0 (MPL-2.0)',
        'Eclipse Public License 2.0 (EPL-2.0)',
        'Apache License 2.0 (Apache-2.0)',
        '3-clause BSD license (BSD-3-Clause)',
        '2-clause BSD license (BSD-2-Clause)'
      ],
    },
    {
        type: 'input',
        name: 'git',
        message: 'Please enter your GitHub User Name',
      },
      {
        type: 'rawlist',
        name: 'emailServer',
        message: 'Please choose your email service (chose "6" if none of them applies)',
        choices: ['@yahoo.com','@gmail.com','@hotmail.com','@uw.edu','@wsu.edu', ' ']
      },
      {
        type: 'input',
        name: 'emailAccount',
        message: 'Please enter your email address (enter full address if you chose empty "6" as the answer from the previous question'
      },
  ])
  .then((answers) => {
    for (let i = 0; i < bdge.length; i++) {
        if (answers.license == bdge[i]) {
            answers.badge =  bdgeIMG[i]
        }
    }
    const mdContent = generateREADME(answers);
    fs.writeFile('./result/README.md', mdContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
  });


  const bdge = [
    'GNU General Public License (GPL)',
    'GNU Lesser General Public License (LGPL)',
    'MIT license (MIT)',
    'Mozilla Public License 2.0 (MPL-2.0)',
    'Eclipse Public License 2.0 (EPL-2.0)',
    'Apache License 2.0 (Apache-2.0)',
    '3-clause BSD license (BSD-3-Clause)',
    '2-clause BSD license (BSD-2-Clause)'
];
  const bdgeIMG = [
      '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
      '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
      '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
      '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
      '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
      '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'

  ]
