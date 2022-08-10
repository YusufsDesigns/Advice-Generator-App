# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL:(https://advice-generator-app-sooty.vercel.app/)

### What I learned
```css
.advice-box .dice:active img{
    animation-name: spinning;
    animation-duration: .5s;
    animation-iteration-count: 2;
    animation-timing-function: ease;
}

@keyframes spinning{
    from { 
        transform: rotate(0deg) 
    }
    to { 
        transform: rotate(360deg) 
    }
}
```
```js
function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.num').innerHTML = data.slip.id;
            document.querySelector('.advice').innerHTML = `<q>${data.slip.advice}</q>`;
        })
}
```

### Continued development
I would love to learn more about API's and how to use them to build complex applications.

### Useful resources

- [Advice Slip API](https://api.adviceslip.com/) - This is where I got the advice API.
## Author
- Frontend Mentor - [@YusufsDesigns](https://www.frontendmentor.io/profile/YusufsDesigns)
- Twitter - [@yusuf_Designs](https://twitter.com/yusuf_Designs)
