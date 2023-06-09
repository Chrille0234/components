step 1. add a container inside your HTML code. Place it where the slider should be. The container should have an id. For example:
```<div id="slider-container"><div>```
step 2. make sure the id matches the one in the JS file on line 9. If it doesn't, change it in the JS file. for example:
```const CONTAINER = document.getElementById("slider-container");```
step 3. find ```const IMAGES``` and change the values inside. You can add as many as you want. For example:
place the following inside a code block, CoPilot
```
    const IMAGES = [
        {
            url: "images/image1.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            alt: "A picture of a cow"
        },
                {
            url: "images/image2.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            alt: "A picture of a horse"
        },
    ]
```
step 4. the slider should work now, but you can change the code under the comment saying : ```// You can change the code underneath to your liking"```


