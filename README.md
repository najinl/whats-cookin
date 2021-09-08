# What's Cookin'?

## Abstract
What's Cookin' is an application developed by a group of Mod2 students at the Turing School of Software & Design. When the user opens up the webpage they will see recipe cards they can favorite/unfavorite ❤️, add to a cook list/remove from cook list ➕, and view more details about (i.e. ingredients, instructions, recipe cost). A user can utilize the search bar at the top of the page to search recipes by names and/or ingredients or they can search by recipe tags (i.e. lunch, breakfast, dinner, appetizer) utilizing the "Recipe Type" checkboxes and filter button on the right-pane of the screen.

![recording (2)](https://user-images.githubusercontent.com/68795578/132438129-4f30d5cd-0804-4206-9d80-9bf4e9f62a9d.gif)
![recording (3)](https://user-images.githubusercontent.com/68795578/132438267-3a1b0a90-12cf-4178-a429-263e792416f4.gif)



## Instructions to Access Application

1. On your Terminal: `git clone git@github.com:najinl/whats-cookin.git`
2. `cd`into the repository (directory)
3. Run the command `npm install`
4. Run the command `npm start`
5. Copy and paste `http://localhost:8080/` into your web browser!

## Technologies
- Javascript
- HTML
- CSS
- Figma
- Testing:
  - Mocha
  - Chai
  
## Planning
- GitHub Project Board (See `Projects` in repository menu
- Wireframes:

Home view
![image](https://user-images.githubusercontent.com/68795578/131358969-ceacfb84-43a0-4667-b197-71ce1ade59c6.png)

Home screen with pop-up
![image](https://user-images.githubusercontent.com/68795578/131358338-d3dc115f-a2fb-4a0c-b044-8f58ec261504.png)

## Part 1 Fixes (to revisit during Part 2 & fix bugs)
- Cannot filter through searched recipes, my favorites, and my list. It can only filter through all recipes from home page.
- Cannot search through ONLY favorited recipes or ONLY recipes added to my list.
- When a recipe has been added to favorites and added to my cook list, once you switch to the my favorites tab the option to remove from my list is not available. It is as if it has never been added to the cook list; however, it really does reside there.
- When a recipe has been added to my list and added to my favorites, once you switch to the my list tab the option to add to favorites is not available. It is as if it has never been added to the favorites list; however, it really does reside there.
- We must have a data leak? We cannot get some global variables to log to the console. We discovered this when trying to interpolate into the h1 welcome message the random user name. We are able to access all these global variables within function scopes though...CONFUSED!

## Contributors
- Janika Hortizuela, Github Username: jhortizu01
- Oscar Cortez, Github Username: oacortez
- Nadia Naji, Github Username: najiln

## Rubric
[What's Cookin' Part 1](https://frontend.turing.edu/projects/whats-cookin-part-one.html)
