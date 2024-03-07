const cardData =[
    {classname:"material-icons",
     icons:"&#xe8e8",
     title: "Safe & Secure",
     content: "This is card 1 contentLorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, deleniti laudantium ipsum illum atque quos ducimus tempora vel   odio quas. Ipsam corrupti exercitationem harum in blanditiis animi asperiores adipisci quae!."
    },

   {
     classname:"material-icons",
     icons:"&#xe8f9;",
     title: "Early Bounse",
     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, deleniti laudantium ipsum illum atque quos ducimus tempora vel odio quas. Ipsam corrupti exercitationem harum in blanditiis animi asperiores adipisci quae!"
    },

    {
     classname:"fa fa-universal-access",
     icons:"",
     title: "Universal Access",
     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, deleniti laudantium ipsum illum atque quos ducimus tempora vel odio quas. Ipsam corrupti exercitationem harum in blanditiis animi asperiores adipisci quae!"
    },
   ];

   function createCards() {
      const cardContainer = document.getElementById("card");
      for (let i = 0; i < 3; i++) {
         const card = document.createElement("div");
         card.classList.add("col-md-4");

          card.innerHTML = `
              <div class="card bg-transparent text-white">
                 <div class="card-body text-center">
                    <i class="${cardData[i].classname}">${cardData[i].icons}</i>
                    <h5 class="card-title pt-3">${cardData[i].title}</h5>
                    <p class="card-text">${cardData[i].content}</p>
                 </div>
             </div>
            `;
            cardContainer.appendChild(card);
       }
    }
   createCards();