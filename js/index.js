// All News Category 
const allNewsCategory = async()=>{
    const responseLink = await fetch ('https://openapi.programming-hero.com/api/news/categories');
    const response = await responseLink.json();
    const data = await response.data.news_category;
    console.log(data); // just check array
    const allNewsCategoryId = document.getElementById('all-news-category');

     data.slice(0,5).forEach(newsCategory => {
        const div = document.createElement ('div');
        div.innerHTML =`
        <a class="tab text-lg" onclick="handelLoadNews('${newsCategory.category_id}')" >${newsCategory.category_name} News</a> 
        `;
        allNewsCategoryId.appendChild(div);
    });
};

// All News In Category News Card / show the news title and img 
const handelLoadNews = async(categoryId) =>{
    const allNewsInCategory = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const response =await allNewsInCategory.json();
    const data = await response.data;
    console.log(data); // just check array
    const allNewsInCategoryId = document.getElementById('all-news-in-category');
    allNewsInCategoryId.innerHTML = "";

     data.forEach (showTheNews => {
        const div = document.createElement('div');
        div.innerHTML =`
        <div  class="card bg-gray-200 shadow-xl p-5">
        <figure class="pb-5"><img src=${showTheNews.thumbnail_url} alt="Shoes" class = "w-full" /></figure>
        <div class="">
            <div class="flex ">
                <h2 class="card-title">Welcome to my website ! Welcome to my website ! </h2>
                <div class="whitespace-nowrap">
                    <button class=" bg-rose-600 text-white rounded-lg px-4 py-2 ">Excellent</button>
                </div>
                  
            </div>
          <p class="py-3">If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
        </div>

        <div class="flex items-center justify-between ">   
            <div class="flex space-x-3">
                <div class="mask mask-squircle w-12 h-12 ">
                    <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                  </div>
                <div>
                  <div class="font-bold">Hart Hagerty</div>
                  <div class="text-sm opacity-50">2022-08-24 17:27:34</div>
                </div>
            </div>
                <div class="whitespace-nowrap">
                    <button class=" bg-gray-900 text-white rounded-lg px-4 py-2 ">Detail</button>
              </div>
          </div>
      </div> 
      `;
      
     allNewsInCategoryId.appendChild(div)
    });
};

allNewsCategory()