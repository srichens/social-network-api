# Social Network API

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)

## Bootcamp Week 18 Challenge
This week's challenge was to to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The requirements included the following:

1. Start the application from the command line, syncing the Mongoose models to the MongoDB database, and then use Insomnia to test routes, since it is only a backend.
2. Include GET routes to retrieve all users and thoughts.
3. Include POST routest to create users, create thoughts associated to specific users, add users to other users as friends, and add reactions to thoughts.
4. Include PUT routes to update users and thoughts.
5. Include DELETE routes to delete users, thoughts, friends, and reactions.
6. Use a date library to format the MongoDB timestamps for the thoughts and reactions.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Process Highlights](#process-highlights)
4. [License](#license)
5. [Contributing](#contributing)
6. [Questions](#questions)

## Installation
This app requires Node.js, npm, Express.js, Mongoose, and Day.js.

## Usage
1. Run npm i to install dependencies.
2. Run npm start to start the server.
3. Use Insomnia to GET, POST, PUT and DELETE users and thoughts, and POST and DELETE reactions and friends.

Please click on the link below to see the demo video:

[*LINK TO SOCIAL NETWORK API DEMO VIDEO*](https://watch.screencastify.com/v/FJd95MB4ujB0NVD8cB9y)

## Process Highlights

1. One of the first challenges I encountered was that after adding thoughts and friends to the User model, the GET route for the users came back with an internal error. After researching and double-checking everything, I changed the thought and user (self reference for friends) references to lowercase, which is something that came up in class one day - sometimes capitalizing the models will make it not work. That fixed the error. 
2. I was nervous about getting the thoughts and friends to populate with the single user query, but was pleasantly surprised that I could simply do .populate twice, one after the other.
3. On the controllers, I had a little trial and error getting the friends and reactions to add and delete, because of the nesting within the $pull and $addToSet operators. 
4. I was initially (maybe still) confused by the need to create a specially name reactionId. At first I thought it meant that somehow the automatically created ID would not work with the routes that were specified, but that wasn't the case. And I at first had some of the code mixed up for creating the reactions (mentioned above), so it took a little while to reason through it. In the end, either ID works exactly the same, so I'm assuming the specially created one is simply to more easily identify which ID belongs to the reaction, rather than the thought.
5. I was puzzled by how to format the createdAt and did a lot of research with not much luck. But in office hours one day, I noticed a classmate had used Day.js, so that gave me a good hint. I feel like my code for the time formatting is nice and concise, so that was a success.

## License
This product is licensed under MIT.

## Contributing
If you would like to contribute to this application, please refer to the [Contributor Covenant](https://www.contributor-covenant.org/).

## Questions
If you have any questions, please contact me at sarahgrichens@gmail.com or view my projects at https://github.com/srichens.