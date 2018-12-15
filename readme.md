run the following:

npm install
npm run webpack
npm start

chrome: localhost:3000

===========================================================================
README BEST VIEWD IN VSCODE
===========================================================================

[ ] Database population

[ ] Go to https://www.json-generator.com/ and generate an array of dummy data. Copy and paste into dummyData.js inside the server folder.

//pick one to work with first

[ ] Mysql:

  [ ] Write a .sql file, inside database/mysql that:
    
    [ ] create a database. Name it whatever you want
    
    [ ] Creates a table with columns being: isActive, balance (you can keep it as string to start with), age, name and email.
        NOTE!!!: A primary key that has auto increment is recommended
    
    [ ] Inside index.js, use mysql to create a connection to your msyql server locally.
        NOTE!!!: When googling mysql for javascript, search for npm mysql instead of just mysql
    
    [ ] Create a method that lets you save ONE data into the database
    
    [ ] Somehow save all the data in your dummyData.js into the database
    
    [ ] You should access mysql shell ad check if the data is there.

[ ] MongoDB:
  
  [ ] Inside index.js, use mongoose to create a connection.
  
  [ ] Create a schema with props: isActive, balance (keep it as a string to start with), age, name and email.
  
  [ ] Create a method that lets you save One data into the database
  
  [ ] Somehow save all the data in your dummyData.js into the database
  
  [ ] You should use robo3t to check if the data is there.

// Features: Won't give specific details now
[ ] Application should render all people data, based on whats in the database when application first starts

[ ] Implement the form so it can add new people data into your database
  NOTE!!! Assume all new people created are active
  
  [ ] After new data is inserted, the page should render that new person data without refreshing
  
  [ ] The form fields should clear (back to empty) when the form is submitted
  
  [Adv] Use a validation module to check if the email entered by the user is valid. If not, handle it gracefully
  
  [ ] Ensure that the age entered is realistic

[ ] Implement the active and none-active buttons. They should filter out data in some way
  
  [ ] Implement this feature in two ways (this is for practice, but actually implement the state one):
    
    [ ] When a button is clicked, a new request is made to retrieve new data. The filtering is done on the server side
    
    [ ] When a button is clicked, state changes, and filtering is done on the client side

[ ] Implement the select bar so the list of people are sorted by whats selected.

[ ] Implement a feature where if you click on a person's view box (my english is horrible) inside the application, this person      is now active. This change needs to be reflected without refreshing your page, meaning that if you are viewing all the          invalid personal, and you just clicked on John Doe, he should now disappear and appear on the active page.

[ ] Implement a delete onclick feature if the user clicked on a person who is inactive already

[ ] Implement the average component so it shows the average of all ACTIVE users' balances. This change needs to be reflected in     real time (without refreshing the page). It needs to work when a new person is created from the form, when a person is          deleted from the invalid page.


Advanced :

[ ] Add a new field / column for your people data: registered, in the format of a date. (do some research on this)
[ ] When a new user is created, the default registered should be new Date() (which is now)
[ ] For the sake of practicing, let's say if a user is registered 10 seconds ago, they are considered in-active. This should be reflected on your application view.

[ ] Add a pagination feature.
[ ] The people component should only display up to 4 people at once. Have a pagination bar at the button that lets you go to page 1, 2, 3, 4 etc... Consider using react-pagination

[ ] Add a feature that let you (the admin super user) change the balance and update the balance of any user. (you would have to change the behavior of the onClick you implemented before so they don't conflict some how)

Advanced+ :

[ ] Add a form element (from scrach of course) that lets you transfer funds between two people.
