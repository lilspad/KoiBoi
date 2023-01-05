# KoiBoi

KoiBoi is a simple browser game I've created to experiment with game development.

## About

This project is my first look at game development. At the time of creation I was only familiar with JavaScript and desired immediate start, so I settled for [Phaser](https://phaser.io/) as my framework for this project. Using Phaser's own tutorials and documentation, stack overflow and many of the other open sources on the web, I put together a very basic, but fully functional game. 

All of the art and animation was created by me using [PixilArt](https://www.pixilart.com/).

## Process

### Building the scene

The whole project actually started with the player character - the KoiBoi. I've created a koi fish spritesheet and wanted to bring it to life in a virtual pond. It didn't take me long to load it onto the browser and make it move around with some simple animations, but having no previous experience with game developement, I didn't really know what to do next. So I focused on what I did know and loaded the background and other ornamental images to create an aesthetically pleasing page.

### Adding interactive elements

So next step became quite obvious - I need something for KoiBoi to interact with. Firstly, I created some collision elements (lily pads) to make it more difficult for the player to move around. I decided to make these render at random every time, rather than having a set path. Then I created something for the player to collect (bugs), using the same code, but instead of blocking the player on contact, the bugs disappear. I've also dislpayed the amount of bugs left in the game, as to create an objective - collect them all. 

### Movement

In the start the KoiBoi had very simple physics, moving up, down, left, right. I felt it needed to move around a little more naturally. I changed the mechanics so that his angular velocity updates instead of moving side to side, and removed the down key as he could now turn around.

## Challanges

One of the most crucial things I realised while building this project is how difficult world building is. In this project I settled for the most random mapping of the world elements, but ideally I would've liked to have more structure. Originally, I thought of setting up platforms, but it just didn't feel right in a water environment. Then I realised how much more difficult it would be to create a tilemap or even a labyrinth path, and I didn't want to put in the time as this project was only meant as an introduction to game dev. For my next game development project I will definitely start with detailed plan for my world map.

## What I'd like to improve

There is definitely a lot that can be added and improved in this project. 

I feel like one of the main things it lacks is a difficulty setting. One of the basic features in any game is levelling up or otherwise progressing towards a more difficult gameplay. Even in a simple game like snake, it is progressively harder to stay alive as the snake grows larger. If I was to add more functionality to KoiBoi I would definitely try to come up with a way to update the progress and increase difficulty accordingly.
The above would also result in an ability to lose, as the game could be too difficult to complete at a high enough level. At the moment the objective is very simple - gather all the collectible items and win! Without a way to lose, there is no way to give the player a real sense of achievement. This could also be resolved with an addition of enemy characters to either avoid collision with or combat.

Of course, those aren't the only things that could be improved, but this is a very basic project that is only an introduction to this field of programming for me. I can't wait to learn more and create more complex worlds and physics. 
