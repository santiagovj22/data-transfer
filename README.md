# technical-test-sigma
Technical test for sigma studios

### By: Santiago Valle

Requirements
  - nodejs v14.15.0
  - npm 6.14.8
  - docker 19.09.13
  - docker-compose 1.26.0
  - yarn `npm install -g yarn`
  
Description:  
  -   Create a layout with a form where we would send information such as { department, city, name, email } 
  -   Save the information in a database (Mysql)
  
Acceptance Criteria:  
  - Frontend:  
      - Create the view using React
      - Create the neccesary fronten logic
      
  - Backend:
      - Create an Api to save the information
  
Steps for run docker container db
  -  Clone repository: `git clone <url>`
  - `cd technical-test-sigma`
  - `yarn db`
  - port: 3306
  
Steps for run docker container api
  - `yarn api`
  - after the container db is running maybe the api logs show something like Econnrefused, to fix please 
    executed the next commands
  - `docker exec -it db bash`
  - `mysql -uroot -p`
  - `ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'secret';`
  - `flush privileges;`
  - `exit` twice
  - Having running the api we need restart container api
  - `docker restart api`
  - Right now you should see the api running ok with two messages { Server on port 3001 and Database connected }
  
Endpoints
  - http://localhost:3001/ --> Home ( GET )
  - http://localhost:3001/api/v1/users ---> ( POST )
  - http://localhost:3001/api/v1/locations ---> ( GET )


Steps for run docker container ui
  - `yarn ui`  
  - url http://localhost:3002

Pending principal tasks:
  - view for manage the admin CRUD
  - querys for CRUD
  - Design a good modal
  - Get the cities by department
  
Notes :'c :
  - the project architecture was build having in mind for the future, scalable, other devs would read the code, etc
    also with the bonus i added the docker container to more easy read and access
    
    bads...
  - i need add more unit test
  - i need build a best way for handler the exceptions and errors
  
  Thanks a lot for the opportunity and i hope you like my work
  
  PD: if you want run the project as local way just change the variable at the path `technical-test-sigma/api/src/dataAccessLayer/database` open the file database.js and host:db ---> change to host:localhost
