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
            <div class="flex gap-2">
                <h2 class="card-title">${showTheNews.title.slice(0, 40)}</h2>
                <div class="whitespace-nowrap ">
                    <button class=" bg-rose-600 text-white rounded-lg px-4 py-2 ">${showTheNews.rating.badge}</button>
                </div>
                  
            </div>
          <p class="py-3" >${showTheNews.details.slice(0,150)}</p>
          <p class="pb-4 font-medium ">Total View : ${showTheNews.total_view?showTheNews.total_view: "No Data"}</p>

        </div>

        <div class="flex items-center justify-between ">   
            <div class="flex space-x-3">
                <div class="mask mask-squircle w-12 h-12 ">
                    <img src=${showTheNews.author.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                <div>
                  <div class="font-bold">${showTheNews.author.name? showTheNews.author.name:"No Data"}</div>
                  <div class="text-sm opacity-50">${showTheNews.author.published_date}</div>
                </div>
            </div>
                <div class="whitespace-nowrap">
                    <button onclick="handelModal('${showTheNews._id}')" class="bg-gray-900 text-white rounded-lg px-4 py-2">Detail</button>
              </div>
          </div>
      </div> 
      `;
      
     allNewsInCategoryId.appendChild(div)
    });
};

const handelModal =async(modalId)=>{
    // console.log(modalId);
    const responseLink = await fetch(`https://openapi.programming-hero.com/api/news/${modalId}`);
    const response = await responseLink.json();
    const data = await response.data[0];
    console.log(data);

    const showTheModalId = document.getElementById('show-the-modal');
    const div = document.createElement('div');
    div.innerHTML=`
    <dialog id="my_modal_1" class="modal">
    
    <form method="dialog" class="modal-box shadow-xl">
    <div  class=" p-5">
    <figure class="pb-5"><img src=${data.thumbnail_url} alt="Shoes" class = "w-full" /></figure>
    <div class="">
        <div class="flex gap-2">
            <h2 class="card-title">${data.title}</h2>
        </div>
      <p class="py-3" >${data.details}</p>
      <p class="pb-4 font-medium ">Total View : ${data.total_view?data.total_view: "No Data"}</p>
    </div>
  </div> 

      
      <div class="modal-action">
        <button class="btn">Close</button>
      </div>
    </form>
  </dialog>
    `;
    showTheModalId.appendChild(div);
    const showModal = document.getElementById('my_modal_1');
    showModal.showModal();
};

allNewsCategory();
handelLoadNews(categoryId="01");