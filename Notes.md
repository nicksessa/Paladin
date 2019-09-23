# Paladin

This is a text based RPG based heavily on the Ganesha Games solo adventure game called "Knight of Destiny".  I am also toying with using the simplified mechanics in the GrailQuest adventure books.

What follows is a brain dump of various things relating to this project.

## Needs

random number generator for various die rolls
how to store the character stats?
  character as an object?
  Write to a back end database?
  
need a way to track turns
I want to keep a log of each turn, the options presented, the option chosen, the outcome, etc.

## Screen layout

left hand pane for the character stats.
maybe make it collapsible?

Center div for the text and options

right div for the bad guys/monsters


## random stuff


What do we need to keep track of?
  hit points
  level
  experience points
  monster kill count?
  equipment
  progress in the story
  current room? (if in a dungeon or grid location or something)


Each page might could be an encapsulated adventure.  So that way, each page could look different or have different options.
You could have a [monster] encounter
a [trap] encounter
a [riddle] encounter

each one would be a web page with it's own set of rules and objectives




Every turn is tracked as a row in a table in the database.  Call it the "turns" table.


## Helpful Links

https://docs.textadventures.co.uk/quest/tutorial/tutorial_introduction.html
https://medium.com/@heoegema/coding-for-absolute-beginners-choose-your-own-adventure-tutorial-3613182c6097
https://docs.textadventures.co.uk/quest/
https://www.freecodecamp.org/news/learning-javascript-by-making-a-game-4aca51ad9030/



## Walkthough

1. Start Game or Continue Saved Game
2. Create New Character
     --> name, maybe upload a picture? or just pick from stock pictures
     roll hit points
     record equipment
     
3. Click on Start Game
 
BEGIN
 
Roll on Table 1 - Journey Table (roll d6)
 
 
END
 
The above is a loop.  Call it the game loop.  Stay in the loop until certain conditions are met.
 
Need a way to save progress.  make it automatic?
Need a way to start a new game.
Need a way to start a new character.

Need a way to view another character.
Need a way to list all characters.

Need a way to pick up where a character left off.
Need a way to "fork" a character?

Need a login to the game?  Use the "passport" node module?





 
 
 
 
 
 
 
 
 
 


