fetch('https://fakestoreapi.com/products').then((data1) => {
    return data1.json();
}).then((completedata) => {
    let data = '';
    completedata.map((values) => {
        data += `<div class="storeCards">
        <h3 class="sub-title">${values.title}</h3>
        <img src="${values.image}" class="images" alt="product-images">
        <p class="description">${values.description}}</p>
        <h6 class="price">$ ${values.price}</h6>
    </div>`
    });
    document.getElementById('container').innerHTML = data;
}).catch((err) => {
    conosole.log(err);
});