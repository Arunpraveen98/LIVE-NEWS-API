//async function to fetch top live news of india:-
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

async function TopNews() {
  try {

    let TopNews = await fetch(
      "https://api.thenewsapi.com/v1/news/top?api_token=bpzNZnWBYY3MQPtiOxcIPW3wBqU4PSXiA1zhtIk4&locale=in&limit=5"
    );
    let JsonFormat = await TopNews.json();
   // console.log(JsonFormat);

   //for loop to get the top 5 news dynamically :-
   //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    for (let i = 0; i < 5; i++) {
      let title = JsonFormat.data[i].title;
      
      let description = JsonFormat.data[i].description;
  
      let snippet = JsonFormat.data[i].snippet;
     
      let reference_url = JsonFormat.data[i].url;
      
      let image_url = JsonFormat.data[i].image_url;
   
      let published_on = JsonFormat.data[i].published_at;
   
      let source = JsonFormat.data[i].source;
      
      //dynamically fetched api data is assigned:-
      let row = document.getElementById("row-content");
      //if conditions are used only for to navigate 
      //different news instead of scrolling the pages.
      if (i == 0) {
        row.innerHTML += ` <div class="card" id="card-1">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <div>
    <span class="badge badge-dark">DESCTIPTION :</span>
    <p class="card-text">${description}</p>
    </div>
    <div>
    <span class="badge badge-dark">SNIPPET :</span>
    <p class="card-text">${snippet}</p>
    </div>
    <a href="${reference_url}" class="badge  badge-success">Reference link</a><a href="${source}" class="badge badge-info">Source page</a>
  </div>
  <img src="${image_url}" class="card-img-bottom" alt="News-stories">
  <p class="card-text"><span class="badge badge-dark">PUBLISHED ON: </span><mark>${published_on}</mark></p>
  </div> `;
      }
  //----------------------------------------------------------------
      if (i == 1) {
        
        row.innerHTML += ` <div class="card" id="card-2">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <div>
    <span class="badge badge-dark">DESCTIPTION :</span>
    <p class="card-text">${description}</p>
    </div>
    <div>
    <span class="badge badge-dark">SNIPPET :</span>
    <p class="card-text">${snippet}</p>
    </div>
    <a href="${reference_url}" class="badge  badge-success">Reference link</a><a href="${source}" class="badge badge-info">Source page</a>
  </div>
  <img src="${image_url}" class="card-img-bottom" alt="News-stories">
  <p class="card-text"><span class="badge badge-dark">PUBLISHED ON: </span><mark>${published_on}</mark></p>
  </div> `;
      }
//----------------------------------------------------------------

      if (i == 2) {
        row.innerHTML += ` <div class="card" id="card-3">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <div>
    <span class="badge badge-dark">DESCTIPTION :</span>
    <p class="card-text">${description}</p>
    </div>
    <div>
    <span class="badge badge-dark">SNIPPET :</span>
    <p class="card-text">${snippet}</p>
    </div>
    <a href="${reference_url}" class="badge  badge-success">Reference link</a><a href="${source}" class="badge badge-info">Source page</a>
  </div>
  <img src="${image_url}" class="card-img-bottom" alt="News-stories">
  <p class="card-text"><span class="badge badge-dark">PUBLISHED ON: </span><mark>${published_on}</mark></p>
  </div> `;
      }
//----------------------------------------------------------------
      if (i == 3) {
        row.innerHTML += ` <div class="card" id="card-4">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <div>
    <span class="badge badge-dark">DESCTIPTION :</span>
    <p class="card-text">${description}</p>
    </div>
    <div>
    <span class="badge badge-dark">SNIPPET :</span>
    <p class="card-text">${snippet}</p>
    </div>
    <a href="${reference_url}" class="badge  badge-success">Reference link</a><a href="${source}" class="badge badge-info">Source page</a>
  </div>
  <img src="${image_url}" class="card-img-bottom" alt="News-stories">
  <p class="card-text"><span class="badge badge-dark">PUBLISHED ON: </span><mark>${published_on}</mark></p>
  </div> `;
      }
//----------------------------------------------------------------
      if (i == 4) {
        row.innerHTML += ` <div class="card" id="card-5">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <div>
    <span class="badge badge-dark">DESCTIPTION :</span>
    <p class="card-text">${description}</p>
    </div>
    <div>
    <span class="badge badge-dark">SNIPPET :</span>
    <p class="card-text">${snippet}</p>
    </div>
    <a href="${reference_url}" class="badge  badge-success">Reference link</a><a href="${source}" class="badge badge-info">Source page</a>
  </div>
  <img src="${image_url}" class="card-img-bottom" alt="News-stories">
  <p class="card-text"><span class="badge badge-dark">PUBLISHED ON: </span><mark>${published_on}</mark></p>
  </div> `;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
TopNews();
//----------------------------------------------------------------
