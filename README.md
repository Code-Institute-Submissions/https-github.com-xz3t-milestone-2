<h1 align="center">Morse code Learning Game</h1>

[View the live project here.](https://xz3t.github.io/milestone-2/)

This is memory game with an objective to spark some interest and teach a bit of morse code. It is designed to be responsibe and accessible on a range of devices, so its easy to play on the go.

<h2 align="center"><img src="https://xz3t.github.io/milestone-2/docs/preview.jpg"></h2>
a
## User Experience (UX)

-   ### User stories

  
        1. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
        2. As a Returning Visitor, I want to be able to have acces to enought content that will keep me playing for a longer period. 
 

-   ### Design
    -   #### Colour Scheme
        -   Colors used for text are b&w on b&w and sephia backgrounds to have a vintage theme, buttons are colorfull for contrast.
    -   #### Typography
        -   The Lato with a fallback to Sans Serif font is used on the whole website.
    -   #### Imagery
        -   Images used are representative of the Morse Code theme and are black and white/ sephia efects.

*   ### Wireframes

    -   Destop Page Wireframe - [View](https://github.com/)

    -   Mobile Wireframe - [View](https://github.com/)


## Features

-   Responsive on all device sizes

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


## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/#validate_by_input) - [Results](https://xz3t.github.io/milestone-2/docs/Showing%20results%20for%20contents%20of%20text-input%20area%20-%20Nu%20Html%20Checker.html)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://xz3t.github.io/milestone-2/docs/W3C%20CSS%20Validator%20results%20for%20TextArea%20(CSS%20level%203%20+%20SVG).html)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.

        1. Upon entering the site, users is on homegame with clean design, with navigation bar and 3 buttons to whatis/rules and the game itself.
        2. The user has two options, click the call to action buttons or scroll down, both of which will lead to the same places.
        3. At the bottom of viewport there is navigation menu to ensure the user has always acces to all areas of the page.
        4. At the bottom of the page it is the game.

-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to find more challenges.

        1. These are 3 version of the game with Numbers/Letters and Punctuation that combine in total of 53 different cards.
    
### Further Testing

-   The Website was tested on Google Chrome, Opera, Microsoft Edge and mobile Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone5S, iPhone 6, Nokia 5 & Pixel3a.
-   Friends were asked to review the site and play the game to point out any bugs and/or user experience issues.

-   Jasime testing was atempted on a few function with if statments and switch returning just the default value, unfortunatly did not have time to adress it.
    (https://xz3t.github.io/milestone-2/spec/numbers.html)

### Known Bugs

-   on small mobile devices game area may be wider than the rest of the page and it breaks the intended view. 
-   sound will play as loud as the device is set up
-   morse code link left a the lin iwthout styling to get people to click on it, but it is just geting to the page it can be trasnlated withot copyiing itself to buffer.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

-   Starting point of the game script was taken and adapted to need from: (https://github.com/SanderCokart/javascript-memory-game)

### Media

-   All Images card images were created by the developer.
-   Sounds were copied from wiki page on morse code 

### Acknowledgements

-   My Mentor for continuous helpful feedback.


Links:

https://www.w3schools.com/howto/howto_css_parallax.asp

https://en.wikipedia.org/wiki/Morse_code

https://github.com/SanderCokart/javascript-memory-game