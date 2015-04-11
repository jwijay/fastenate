# Fastenate

## Set-up
After forking and cloning this project, `npm install` then `gulp`

Do commit often!

##### **Stack**
- Use Sass for styling.  
- Use any frontend framework(s) that may make styling faster for the project (Bourbon, Foundation, Bootstrap, etc)  

##### **Fonts**
Google fonts used in the layout:

- Oswald Regular  
- Lato Regular  

##### **Media Queries**
Be sure you are viewing the layouts at Actual Size. Use media query ranges as they make sense for the layout. The only 'media query' requirement is that the final webapp matches the mockups at the sizes specified, and that they gracefully transition at each range.

##### **Content**
The content shown in the mockup is placeholder text only. It's easier to work with your own static content for styling, before loading in dynamic data. see `layouts/unformatted_text.txt`

For each module:

- the image should fill the entire area of the rectangular box (use background-size "cover"). 
- Optional Hard Mode: *Even though the image is displayed as a background image, create your markup so that each image is also included in an <img> tag so it is visible to the DOM*
- the title should never span more than 2 lines tall.
- the subtitle line should never span more than 2 lines tall.
- the text snippet should never span more than 4 lines tall, except for the small size, where it should be the height of the text.

##### **Interaction, Loading Data**

when "My Boards" is clicked  
create an xhr get request to `/api/my_boards.json`

when "Random" is clicked  
create an xhr get request to `/api/random.json`

when "Get the app" is clicked  
create an xhr get request to `/api/get_the_app.json`


when the page loads, trigger the event listener that is bound to "My Boards"

all of the json documents are structured the same  
whenever a json document is loaded, generate the appropriate markup for your layout using the data:  

- image : url
- title : title
- author : author
- age : created -> timestamp to "2 days ago" : use moment.js
- views : score
- description : hardcode 2 sentences of lorem ipsum

