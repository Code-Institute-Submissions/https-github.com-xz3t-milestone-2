# Morse code Learning Game

[View the live project here.](https://xz3t.github.io/milestone-2/)

This is a memory game with an objective to spark some interest and teach a bit of Morse code. It is designed to be responsive and accessible on a range of devices, so it's easy to play on the go.

![Preview](/docs/preview.jpg)

## User Experience (UX)

-   ### User stories

  
    -  As a First Time Visitor, I want to :
        *  be able to easily navigate throughout the site
        *  have all content accessible through the menu without the need to use the browser back button
        *  have an interactive experience with the content
        *  be able to run the game from the pc or a mobile device without losing on any futures
     
    -  As a Returning Visitor, I want to :
        *  be able to have access to enough content that will keep me engaged for a longer period
 

-   ### Design
    -   #### Color Scheme
        -   Colors used for text are b&w on b&w and Sephia backgrounds to have a vintage theme, buttons are colorful for contrast.
    -   #### Typography
        -   The Lato with a fallback to Sans Serif font is used on the whole website.
    -   #### Imagery
        -   Images used are representative of the Morse Code theme and are black and white/ Sephia effects.
        -   Black morse code image added and positioned on black and white parallax image to accentuate the effect and it's not intended to be visible and clear.

*   ### Wireframes

    -   Destop/Mobile Page sketch - [View](https://xz3t.github.io/milestone-2/docs/wireframes_desk_mobile.jpg)

    -   Navbar sketch - [View](https://xz3t.github.io/milestone-2/docs/wireframes_navbar.jpg)


## Features

-   Responsive on all device sizes.

    ![small device](/docs/devices_prev.png)

-   Interactive elements in form of a card turning memory game with added sound for complexity

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
2. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
3. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
4. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
5. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to create the logo, resizing images and editing photos for the website.
6. [Jasmine](https://jasmine.github.io/)
    - Jasmine is a behavior-driven development framework for testing JavaScript code.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fxz3t.github.io%2Fmilestone-2%2Findex.html)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fxz3t.github.io%2Fmilestone-2%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Testing User Stories from User Experience (UX) Section

-   #### Jasmine testing

-   Successfully tested getgImage() and getSound() function in number and letters scripts:
       (https://xz3t.github.io/milestone-2/spec/card-game.html)
   


  #### First Time Visitor Goals

   - As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.

        * Upon entering the site, users are on the homepage with a clean design, with a navigation bar and 3 buttons to what-is/rules and the game itself.
        * The user has two options, click the call to action buttons or scroll down, both of which will lead to the same places.
        * At the bottom of the viewport there is a navigation menu to ensure the user has always access to all areas of the page.
        * At the bottom of the page it is the game.

  #### Returning Visitor Goals

   -  As a Returning Visitor, I want to find more challenges.

        * These are 3 versions of the game with Numbers/Letters and Punctuation that combine in a total of 53 different cards.
    
### Further Testing

-   The Website was tested on Google Chrome, Opera, Microsoft Edge, and mobile Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone5S, iPhone 6, Nokia 5 & Pixel3a.
-   Friends were asked to review the site and play the game to point out any bugs and/or user experience issues.


### Known Bugs

-   game is responsive down to 320px but would be better enjoyed on a bigger screen 
-   by default sound will play as loud as the device is set up, mute button available
-   link in Morse code left as the line without styling to get people to click on it, but it is just getting to the page it can be translated without copying itself to buffer.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.


## Credits

### Code

-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make the site responsive using the Bootstrap Grid System.

-   The starting point of the game script was taken and adapted to project needs from (https://github.com/SanderCokart/javascript-memory-game)
    
    
### Media

-   All Images card images were created by the developer.
-   Sounds were downloaded from wiki page on morse code 
-   other images used in project: 
     1. [background image no 1](https://2.bp.blogspot.com/-_3whB542d6g/WIqjUtWPjPI/AAAAAAAAdOw/yUL9eCdKiAglZF1dmwvkuTiK2mmbVGQdgCEw/s640/skn-1.jpg)
     2. [background image no 2](https://i1.wp.com/www.sporcle.com/blog/wp-content/uploads/2018/10/1-38.jpg?resize=1280%2C720&ssl=1)
     3. [background image no 3](https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/10685559/1849_telegraph.jpg)

### Acknowledgements

-   My Mentor for continuous constructive feedback.


### Links:

https://www.w3schools.com/howto/howto_css_parallax.asp

https://en.wikipedia.org/wiki/Morse_code

https://github.com/SanderCokart/javascript-memory-game