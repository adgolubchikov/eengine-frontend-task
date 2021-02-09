## Task 4 - concept and implementation

### Carousel with the product photos

I think that it should be implemented using \<div> container with \<ul> in it with \<li>'s with photos \<img> inside them.  
\<div> container's size should be suitable for one photo.  
\<ul> width is big, for example 5000px  
All \<li> should be `display:inline-block` and all \<img> `display:block` (for removing blank line after the \<img>)  
When navigating the carousel, we should move the \<ul> position using `transform: translateX()` or `margin-left:`  
We may have issues with different photos resolution and aspect ratio, we may solve it by setting fixed width of \<img> to e. g. 200px and `height: auto` and centering it vertically  

### Number of elements in a row (4 or 3)

We can implement it using `display: flex`, `flex-wrap:wrap` and changing child's width from 25% to 33%  

