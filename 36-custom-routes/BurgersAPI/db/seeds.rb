bougie = Category.create(name: "Bougie")
basic = Category.create(name: "Basic")

burgers = [
    { name: "Good Burger",
      description: "What a Good Burger!",
      category: Category.first,
      image: "https://www.lovelesscafe.com/uploads/recipeimages/BBQBaconBurger-web.jpg",
      price: rand(100)
    },
    { name: "Sal's Burger",
      description: "Burger of Sal's!",
      category: Category.second,
      image: "http://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/umami-bomb-burgers-ck.jpg",
      price: rand(100)
    },
    { name: "Sloppy Beef",
      description: "Sloppimus Maximus",
      category: Category.second,
      image: "https://www.budgetbytes.com/wp-content/uploads/2011/06/Sloppy-Joes-Plus-sandwich.jpg",
      price: rand(100)
    },
    { name: "Glamburger",
      description: "Bling Bling Burger",
      category: Category.first,
      image: "https://i.ytimg.com/vi/zrnHrX_NCbY/hqdefault.jpg",
      price: rand(100)
    },
    { name: "Burgér",
      description: "Burgér fróm Fránce",
      category: Category.first,
      image: "https://assets3.thrillist.com/v1/image/937699/size/tmg-article_default_mobile.jpg",
      price: rand(100)
    },
    { name: "Le Magnifique",
      description: "C'est la magnifique!",
      category: Category.first,
      image: "https://wswd-wordpress-production.s3.amazonaws.com/content/uploads/2017/01/Delmonicos.jpg",
      price: rand(100)
    },
    { name: "HamBougie",
      description: "Not Bad, But Bougie",
      category: Category.first,
      image: "https://townsquare.media/site/51/files/2018/04/ThinkstockPhotos-855832928.jpg",
      price: rand(100)
    },
    { name: "Green Eggs and Hamburger",
      description: "Cooked by Sam",
      category: Category.second,
      image: "https://stupiddope.com/wp-content/uploads/2016/05/mcdonalds-green-angry-birds-burger-01.jpg",
      price: rand(100)
    },
    { name: "Veggie Burger",
      description: "Impossible Burger",
      category: Category.second,
      image: "https://cookieandkate.com/images/2013/05/sweet-potato-black-bean-veggie-burgers-recipe-0.jpg",
      price: rand(100)
    },
    { name: "Spinach",
      description: "Ew.",
      category: Category.first,
      image: "https://www.organicfacts.net/wp-content/uploads/spinach.jpg",
      price: rand(100)
    },
    { name: "Cow-abunga",
      description: "Mooooo",
      category: Category.first,
      image: "http://www.foodwithfeelings.com/wp-content/uploads/2013/06/ab44_the-fat-cow-ramsay-gordon-6-e1352887255279.jpg",
      price: rand(100)
    }
  ]

Burger.create(burgers)

User.create(name: "Eric", amount: 10000000)
User.create(name: "Rei", amount: 10000000)
User.create(name: "Sylwia", amount: 10000000)
User.create(name: "Mazen", amount: 10000000)
