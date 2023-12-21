export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops, Tees & T-Shirts', id:"top" },
              { name: 'Co-ord Sets', id: 'coord_sets' },
              { name: 'Dresses', id:"women_dress", href: '#' },
              { name: 'Gouns', id: 'gouns' },
              { name: 'Sarees', id: 'saree' },
              { name: 'Kurtas', id: 'kurtas' },
              { name: 'Women Jeans', id: 'women_jeans' },
              { name: 'Ethnic Wear', id: 'ethnic_wear' },
              { name: 'Winter Wear', id: 'winter_wear' },
              { name: 'Western Wear', id: 'western_wear' },

            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'watch' },
              { name: 'Wallets', id: 'wallet' },
              { name: 'Bags, Caps & Hats', id: 'bag' },
              { name: 'Sunglasses & hair Accessories', id: 'sunglasses' },
              { name: 'Socks & Handercheif', id: 'socks' },
              { name: 'Jewellery', id: 'jewellery' },

            ],
          },
          {
            id: 'brands',
            name: 'Beauty and Personal',
            items: [
              { name: 'Makeup & Beauty Kits + Combos', id: 'makeup' },
              { name: 'Fragrence', id: 'fragrence' },
              { name: 'Beauty Appliances', id: 'appliances' },
              { name: 'Body & Hair Care ', id: 'body_care' },
              { name: 'Health & Wellness', id: 'health' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'mens_kurta' },
              { name: 'Ethnic Jackets', id: 'ethnic_jackets'},
              { name: 'Shirt', id: 'shirt' },
              { name: 'Men Jeans ,Cargo ,Shorts ,Formal&Casual Trousers', id: 'men_jeans' },
              { name: 'Winter Wear Collection', id: 'winter' },
              { name: 'T-Shirts', id: 't-shirt' },
              { name: 'Activewear', id: 'active_wear' },
              { name: 'Casual&Sports Shoes', id: 'casual_sports_shoes' },
              { name: 'Formal Shoes', id: 'formal_shoes' },
              { name: 'Boots', id: 'boots' },
              { name: 'Socks, handercheif & Ties', id: 'socks' },
              
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'watches' },
              { name: 'Wallets', id: 'wallets' },
              { name: 'Bags', id: 'bags' },
              { name: 'Sunglasses & Frames' , id: 'glasses' },
              { name: 'Caps & Hats', id: 'hats' },
              { name: 'Belts', id: 'belt' },
            ],
          },
          {
            id: 'brands',
            name: 'Personal Care',
            items: [
              { name: 'Beard Care', id: 'beard' },
              { name: 'Men Grooming', id: 'men_grooming' },
              { name: 'Men Perfumes', id: 'perfumes' },
              { name: 'Oral Care', id: 'oral_care' },
              { name: 'Body Care', id: 'body_care' },
            ],
          },
        ],
      },
      {
        id: 'home',
        name: 'Home Living and Electronics',
        featured: [
          {
            name: 'New Tech Gadgets',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Beautiful Home Decoration',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'bed',
            name: 'Home Decoration',
            items: [
              { name: 'Double Bedsheets', id: 'double' },
              { name: 'Single Bedsheets', id: 'single'},
              { name: 'Bedding Sets', id: 'bedding_set' },
              { name: 'Kitchen & Dining', id: 'dining' },
              { name: 'Decoration Appliances', id: 'decoration' },
              { name: 'Tables & Chairs', id: 'table' },
              { name: 'Wardrobe & Drawers', id: 'wardrobe' },
              { name: 'Curtains', id: 'curtains' },
              { name: 'Formal Shoes', id: 'formal_shoes' },
              { name: 'Boots', id: 'boots' },
              { name: 'Socks & handercheif & Ties', id: 'socks' },
              
            ],
          },
          {
            id: 'mobile',
            name: 'Mobiles and Electronics',
            items: [
              { name: 'Mobile & Tablet Accessories', id: 'mobile_tablet' },
              { name: 'Smart Wearable Tech', id: 'smart' },
              { name: 'Home Entertainment', id: 'home_entertainment' },
              { name: 'TV & Home Appliances' , id: 'tv_home' },
              { name: 'Laptop & Desktop Accessories', id: 'laptop' },
              { name: 'Camera Accessories', id: 'accessories' },
              { name: 'Musical Instruments', id: 'musical' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Contact', id: '/' },
      { name: 'Service Care', id: '/' },
    ],
  }
