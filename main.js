const products = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl:
        "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
      id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill:
        "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl:
        "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl:
        "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl:
        "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
    },

]

const productsContainer = document.getElementById("pet-cards");

  const renderProducts = (type = "all") => {
    productContainer.innerHTML = "";
  
    products.forEach(pet => {
      if (type === "all" || pet.type.toLowerCase() === type) {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
  
        const labelClass = `label-${pet.type.toLowerCase()}`;
        card.innerHTML = `
          <div class="card">
            <div class="card-header text-center font-weight-bold">${pet.name}</div>
            <div class="card-body text-center">
              <img src="${product.imageUrl}" alt="${product.name}" class="img-fluid mb-3" style="max-height: 150px; object-fit: cover; border-radius: 8px;" onerror="this.src='myDog.jpeg';">
              <p><strong>Color:</strong> ${product.color}</p>
              <p><strong>Special Skill:</strong> ${pet.specialSkill}</p>
            </div>
            <div class="card-footer text-center">
              <span class="label ${labelClass}">${pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}</span>
            </div>
          </div>
        `;
        petContainer.appendChild(card);
      }
    });
  };