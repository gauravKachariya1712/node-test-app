const sonarqubeScanner = require('sonarqube—scanner');

sona rqubeScanner({
    serverUrl: 'http://44.202.238.126:3000',
      options :{
        'sonar.projectDescription' :  'This is a Node JS application',
        'sonar.projectName' : 'Node JS Application — Sample',
        'sonar.projectKey':  'NodeJSMSS' ,
        'sonar.login': 'admin' ,
        'sonar.password': 'admin',
        'sonar.projectVersion': '1.0', 
        'sonar.language' : 'js',
        'sonar.sourceEncoding' : 'UTF—8' ,
        'sonar.sources' : '.',
      }
}, () => {} );
