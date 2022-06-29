fetch('https://fakestoreapi.com/products')
    .then((data) => {
        console.log(data);
    let data1 = data.json();
    console.log(data1);
}).catch((error) => {
    console.log(error);
})