(function() {
    // You can change the code underneath to your liking
    const presetStyling = true // change to false if you dont want the default styling
    const addDescriptionToSlider = true // if you want a description or not
    const addButtons = true // if you want the back and forward buttons
    const autoSlide = false // set give a number in ms if you it to autoslide
    var width = "500px" // image width
    var height = "500px" // image height
    const CONTAINER = document.getElementById("slider-container") //the container inside the HTML has to have the same id
    // change it to your own images. You can add however many you want. 
        const IMAGES = [
            {
                url: "change this to the path or link to your image",
                description: "The paragraph you want under the image. Won't show up if addDescriptToSlider is set to false",
                alt: "the alt attribute"
            },
        ]

    // you can't change anything under here, except where i have placed comments telling you otherwise

    CONTAINER.style.position = "relative"
    
    function placeItems(){
        IMAGES.forEach((image, index) => { 
            let newArticle = document.createElement('article');
            // every article except the first gets display: none
            if(index != 0) newArticle.style.display = "none"

            newArticle.classList.add("image-container");
            if(presetStyling){
                newArticle.style.position = "absolute"
            }
            CONTAINER.appendChild(newArticle);

            if(addButtons)addBackButton(newArticle);
            createImage(image, newArticle);
            if(addButtons)  addForwardButton(newArticle);
            if(addDescriptionToSlider) addDescription(image.description, newArticle);
        })
    }
    var currentImage = 0;
    function goBack(){
        if(currentImage === 0){
            currentImage = IMAGES.length - 1;
        }else{
            currentImage--;
        }
        const ARTICLE = document.querySelectorAll(".image-container")
        ARTICLE.forEach((article, index) => {
            if(index === currentImage){
                article.style.display = "inline-block"
            }else{
                article.style.display = "none"
            }
        })
    }
    function goForward(){
        if(currentImage === IMAGES.length - 1){
            currentImage = 0;
        }else{
            currentImage++;
        }

        const ARTICLE = document.querySelectorAll(".image-container")
        ARTICLE.forEach((article, index) => {
            if(index === currentImage){
                article.style.display = "inline-block"
            }else{
                article.style.display = "none"
            }
        })
    }
    function createImage(image, container){
        let newImage = document.createElement('img');
            newImage.src = image.url;
            newImage.alt = image.alt;
            if(presetStyling){
                newImage.style.width = width
                newImage.style.height = height
            }
            // you can change this to a different class name
            newImage.classList.add('slider-image');
            container.appendChild(newImage);
    }
    function addDescription(description, container){
        let newDescription = document.createElement('p');
            // you can change this to a different class name
            newDescription.classList.add('image-description');
            newDescription.textContent = description;
            if(presetStyling){
            // you can change the values on the next 3 lines
                newDescription.style.textAlign = "center"
                newDescription.style.margin = "0 auto"
                newDescription.style.width = Number(width.split("px")[0]) * 0.8 + "px"

            container.appendChild(newDescription);
            }
    }
    function addBackButton(container){
        let newButton__back = document.createElement('button');
        // you can change this to a different class name
        newButton__back.classList.add('back-button');
        newButton__back.textContent = '<';
        newButton__back.addEventListener("click", goBack)
        container.appendChild(newButton__back);
    }
    function addForwardButton(container){
        let newButton__forward = document.createElement('button');
        // you can change this to a different class name
        newButton__forward.classList.add('forward-button');
        newButton__forward.textContent = '>';
        newButton__forward.addEventListener("click", goForward)
        container.appendChild(newButton__forward);
    }

    if(autoSlide){
        setInterval(()=>{
            goForward()
        }, autoSlide)
    }
    placeItems();
})()