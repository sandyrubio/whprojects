var items = document.querySelector('#items');
var photos = 

var item =`
<li data-sku="001">
<input type="checkbox">
<img src="http://unsplash.it/256/256" alt="unsplash">
<h3>Unsplash Photo</h3>
<p>$100</p>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, consequatur.</p>
</li>`;

var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=100",
        alt: "image 100",
        title: "Unsplash Photo",
        cost: 100,
        desc: "My Happy Place!"
    },
    {
        img: "http://unsplash.it/256/256?image=206",
        alt: "image 205",
        title: "Unsplash Photo",
        cost: 75,
        desc: "Another image that I am selling."
    },
    {
        img: "http://unsplash.it/256/256?image=235",
        alt: "image 205?",
        title: "Unsplash Photo",
        cost: 250,
        desc: "Breathtaking mountains."
    },
    {
        img: "http://unsplash.it/256/256?image=220",
        alt: "image 205?",
        title: "Unsplash Photo",
        cost: 200,
        desc: "Spooky scence."
    },
];

function displayItems(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i].alt); 
        var item =`
    <li data-sku="$[i]">
        <input type="checkbox">
        <img src="${arr[i].img}" alt="${arr[i].alt}">
        <h3>${arr[i].title}</h3>
        <p>${arr[i].cost}</p>
        <p>${arr[i].desc}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, consequatur.</p>
    </li>`;
 
 items.innerHTML += item;
    }
}

displayItems(itemArray);

function addListener(arr){
    for(var i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        arr[i].addEventListener('click', function(evt){
            console.log(this.firstElementChild);
            this.classList.toggle('selected');
            // this.firstElementChild.checked = true;

            //ternary operator(aka checkbox method)
            (this.firstElementChild.checked) ? 
                this.firstElementChild.checked = false : 
                this.firstElementChild.checked = true;

            // console.log(this.dataset.sku);
            // selectedArray.push(arr[this.dataset.sku]);

            // console.log(Array.from(arr));
            console.log(Array.from(arr).slice(this.dataset.sku))

            console.log(selectedArray);
        });
    }
    
}

addListener(items.children);