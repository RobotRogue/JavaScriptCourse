// What you'll be building
/*
In this project, we'll combine our knowledge of objects and arrays to create a simple contact list.
Then, using functions, we'll be able to log the entries in our contact list to the console, as well as search for a particular entry.
*/

// Below is the sample code provided in the lesson:
/*
var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");
*/

// My Version of the Project:

var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(778) 243-9902",
  address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
};

friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(778) 734-8240",
  address: ['1 Infinite Loop', 'Cupertino', 'CA', '95014']
};

var list = function(friends) {
  for (var friendsName in friends) {
    console.log(friendsName);
  }
};

var search = function(name) {
  for (var searchName in friends) {
    if (friends[searchName].firstName === name) {
      console.log(searchName);
      return (friends[searchName]);
    }
  }
};
