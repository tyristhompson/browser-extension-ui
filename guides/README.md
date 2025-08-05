# Frontend Mentor - Browser extensions manager UI

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![alt text](<Screenshot (1).png>)
![alt text](<Screenshot (2).png>)

## My process

### Built With

-HTML5
-CSS
-JavaScript

I started by, of course, building out my HTML and CSS. I tend to have a hard time figuring how to get going on a design, but I recenetly learned about the Nested Layout Technique and it made the process so much easier. 

After I finished with the basic styling, I then hopped over to my JavaScript code to add some functionality for the light/dark mode and work out the logistics of dynamically adding elements to the DOM using the provided JSON file. This part was easier than anticipated and I was glad that I could work through it confidently.

The hardest part, however, was implementing the toggle feature for the extensions. I had to really think about how the element should behave based on not only the current filter that was active, but also other factors such as whether the given element's active value matched the filter (active or inactive) or if the element could stay on the page beacuse no filter was selected (default and all). It took me a few hours to refactor my code to solve this problem, but I'm happy with how it turned out, especially for my first FrontendMentor submission!

Finally, I made the site responsive and made small adjustments where I could. Keeping note of things that I could improve on when revisiting the project.

### What I learned

1) How to use the innerHTML property to dynamically add elements onto a page (the source for the HTML was the JSON file so I didn't have to consider any security risks).
2) Making CSS grid responsive without using media queries.
3) Using the "this" keyword to work with elements that have triggered a given event listener.

### Continued development

There are definitely some small things that I want to work on that I think will naturally get better the more I code, like using grid and flexbox in css, but there a few things that I will be putting more time towards learning. First, I want to look into more ways of accessing a parent element (or really the parent of a parent) instead of simply using "element.parentElement.parentElement...' until I get to the disired node. Secondly, while this didn't cause much of a problem during this project, having a catch block that can handle errors in a more robust way than "console.log(error)" seems like a skill that I should try to implement in any, if not all, coding projects. Lastly, I (kinda) want to get better at working with SVGs. As you may notice, my svg doesn't show the proper color when in dark mode, and despite searching forever for a way to fix it, I couldn't find an answer anywhere.



