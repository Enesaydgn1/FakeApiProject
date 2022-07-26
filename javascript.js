var products = [];

function api() {
  fetch("api.json")
    .then((res) => res.json())
    .then((data) => {
      products = data;
      list(data);
    });
}

function list(data) {

  var kart = document.getElementById("kartlar");
  
  kart.innerHTML = "";
  data.forEach((element) => {
    var indirim = element.oldprice ? ((( element.oldprice - element.price ) / element.oldprice) * 100).toFixed(2) : "";
  
    kart.innerHTML += `
        <div class="col-md-4 col-sm-6 col-xl-3"  >
        
                       
        <div class="card ${!indirim ? " " + indirim : "border"}" id="kartlar" >
        <div class="${!indirim ? " " + indirim : "discount"}">${!indirim ? " " + indirim : "CLOSEOUT"}</div>

            <div class="card-body">
                <div class="kapsayici">
                     <img src="${element.image}" class="image" id="resim">
                </div>
               
                <p id="card-title" class="card-title">${element.title}</p>
              
                <p class="price_style">₺${element.price} </p> 
                <p class="oldprice">${element.oldprice ? '₺' + element.oldprice : ''} </p> 
                <p class="indirim" id="sold">${indirim ? "SALE "+indirim+"% OFF" : ''}</p>
                <i data-star="${element.rating.rate}"></i>
                <span class="comment-count">(${element.rating.count})</span>

                <br><br>

                <div id="rater-step"></div>
                <p class="colors">${element.color ? element.color : ""}</p>
                <i class="fa-brands fa-youtube yt-icon-color" ></i>
            </div>
        </div>
        </div>
   `;
   
  });
}



function sıralama(selected) {
    
  if (selected == "PriceIn") {
    products.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (selected == "PriceUp") {
    products.sort(function (a, b) {
        return b.price - a.price;
      });
  }else if (selected == "StarsUp") {
    products.sort(function (a, b) {
        return b.rating.rate - a.rating.rate;
      });
  }else if (selected == "Comment") {
    products.sort(function (a, b) {
        return b.rating.count - a.rating.count;
      });
  }

  list(products);

}

document.getElementById("arrangement").addEventListener("change", function () {
  sıralama(this.value);
  
});

document.getElementById("clear").addEventListener("click", function() {
    window.location.reload();
  });



api();
