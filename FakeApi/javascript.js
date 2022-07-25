
var products =[];

// var arrangement = document.getElementById("arrangement").value;
// console.log(arrangement);

function api(){
   
    fetch('api.json')
                .then(res=>res.json())
                .then(data=>{
                    products = data;
                    sıralama();

                    list(data);

                })
                   
}


function list(data){
    var kart = document.getElementById("kartlar");
    console.log(products.sort())
   
 
    data.forEach(element => {
        
        kart.innerHTML += `
        <div class="col-md-3 col-sm-12"  >
       

        <div class="card" id="kartlar">
            <div class="card-body">
                <div class="kapsayici">
                     <img src="${element.image}" class="image" id="resim">
                </div>
               
                <p id="card-title" class="card-title">${element.title}</p>
                <p class="price_style">₺${element.price}</p>
                <span class="comment-count">(${element.rating.count})</span>
                <br><br>


                <div class="stars-outer">
                <div class="stars-inner"></div>
              </div>
              <span class="number-rating">${element.rating.rate}</span>

                
                <i class="fa-brands fa-youtube yt-icon-color"></i>
            </div>
        </div>
        </div>
   `   
    });

};

function sıralama(sırala){
    
    var i, listeUzunluk, metin="";

    for(i = 0; i < products.length; i++) {
        metin += products[i].id + " - " + products[i].price +" \n";
    }
    console.log(metin);
    products.sort(function(a, b){return a.price - b.price});

    metin = "";
    for(i = 0; i < listeUzunluk; i++) metin += products[i].id + " - " + products[i].price +" \n";
    console.log(metin);

        
}

api();


    