export const LANGUAGE = 1;

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

export const PDP_IMAGES = {
  main: './images/pdp/pdp-main.jpg'
};

export const HOMEPAGE_LOOKS_IMAGES = [
  'https://horondi.blob.core.windows.net/horondi/our-looks/img1.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img2.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img3.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img4.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img5.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img6.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img7.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img8.jpg'
];

export const ABOUT_US_IMAGES = {
  hero: './images/about-us/hero-bg.jpg',
  horondi_1: './images/about-us/horondi.jpg',
  horondi_2: './images/about-us/horondi-2.jpg',
  horondi_3: './images/about-us/horondi-3.jpg',
  workPlace_1: './images/about-us/work-place.jpg',
  workPlace_2: './images/about-us/work-place-2.jpg'
};

export const CABINET_OPTIONS_NOT_LOGGED = {
  0: {
    wishlist: 'Список уподобань',
    changeTheme: 'Змінити тему',
    logIn: 'Увійти'
  },
  1: {
    wishlist: 'Wishlist',
    changeTheme: 'Change theme',
    logIn: 'Log in'
  }
};

export const CABINET_OPTIONS_LOGGED = {
  0: {
    profile: 'Профіль',
    wishlist: 'Список уподобань',
    changeTheme: 'Змінити тему',
    logOut: 'Вийти'
  },
  1: {
    profile: 'Profile',
    wishlist: 'Wishlist',
    changeTheme: 'Change theme',
    logOut: 'Log out'
  }
};

export const HOMEPAGE_TITLES = {
  0: {
    catalog: 'Каталог',
    look: 'Стиль Горонді'
  },
  1: {
    catalog: 'Catalog',
    look: 'Horondi style'
  }
};

export const LOGO = 'HORONDI';
export const URL_LANGUAGE = 'en';

export const FOOTER_CATALOGS = {
  0: { title: 'Каталоги' },
  1: { title: 'Catalogs' }
};
export const FOOTER_INFORMATION = {
  0: {
    title: 'Інформація',
    items: [
      { id: 1, url: '/about-us', item: 'Про нас' },
      { id: 2, url: '#', item: 'Матеріали' },
      { id: 3, url: '#', item: 'Оплата і доставка' },
      { id: 4, url: '#', item: 'Умови конфіденційності' }
    ]
  },
  1: {
    title: 'Information',
    items: [
      { id: 1, url: '/about-us', item: 'About us' },
      { id: 2, url: '#', item: 'Materials' },
      { id: 3, url: '#', item: 'Payment & shipping' },
      { id: 4, url: '#', item: 'Privacy policy' }
    ]
  }
};

export const FOOTER_CONTACTS = {
  0: {
    title: 'Контакти',
    items: [
      { id: 1, url: '#', item: '+38 012 345 678' },
      { id: 2, url: '#', item: 'horondi@gmail.com' },
      { id: 3, url: '#', item: 'Львів, вул.Угорська,2' }
    ],
    map: {
      id: 4,
      url:
        'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A3%D0%B3%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%B0,+2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8130045,24.0348852,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7fa9be7c3b5:0xb30b2516d705bae6!8m2!3d49.8130011!4d24.0370739',
      item: 'Показати на мапі'
    }
  },
  1: {
    title: 'Contacts',
    items: [
      { id: 1, url: '#', item: '+38 012 345 678' },
      { id: 2, url: '#', item: 'horondi@gmail.com' },
      { id: 3, url: '#', item: 'Lviv, Ugorska str.2' }
    ],
    map: {
      id: 4,
      url:
        'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A3%D0%B3%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%B0,+2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8130045,24.0348852,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7fa9be7c3b5:0xb30b2516d705bae6!8m2!3d49.8130011!4d24.0370739',
      item: 'Show on map'
    }
  }
};

export const FOOTER_SOCIAL_NETWORK_LINKS = {
  0: {
    title: 'Ми в соцмережах'
  },
  1: {
    title: 'Social networks'
  },
  facebook: 'https://www.facebook.com/Horondi',
  instagram: 'https://www.instagram.com/horondi'
};
export const TIME_OPTIONS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

export const LANGUAGES_LIST = [
  { lang: 'UA', value: 0 },
  { lang: 'EN', value: 1 }
];

export const FEEDBACK = {
  0: {
    title: 'Відгуки',
    name: `Ім'я`,
    email: 'Електронна адреса',
    textField: 'Поділіться своїми враженнями з іншими',
    submit: 'Залишити відгук'
  },
  1: {
    title: 'Feedback',
    name: 'Name',
    email: 'Email',
    textField: 'Share your thoughts with others',
    submit: 'Leave feedback'
  }
};

export const SIMILAR_ITEMS = {
  0: {
    title: 'Схожі товари'
  },
  1: {
    title: 'Similar items'
  }
};

export const COLOR = {
  0: {
    color: 'Колір'
  },
  1: {
    color: 'Color'
  }
};

export const PATTERN = {
  0: {
    pattern: 'Візерунок'
  },
  1: {
    pattern: 'Pattern'
  }
};

export const PDP_BUTTONS = {
  0: {
    cartButton: 'В кошик',
    buyButton: 'Купити зараз'
  },
  1: {
    cartButton: 'Add to cart',
    buyButton: 'Buy now'
  }
};

export const IMGS_VIEWER = {
  0: {
    prev: 'Попередній',
    next: 'Наступний',
    close: 'Закрити'
  },
  1: {
    prev: 'Previous',
    next: 'Next',
    close: 'Close'
  }
};

export const COLORS = {
  red: './images/pdp/colors/red.jpg',
  yellow_1: './images/pdp/colors/yellow_1.jpg',
  yellow_2: './images/pdp/colors/yellow_2.jpg',
  black: './images/pdp/colors/black.jpg',
  brown: './images/pdp/colors/brown.jpg',
  coffee: './images/pdp/colors/coffee.jpg',
  blue: './images/pdp/colors/blue.jpg',
  gray: './images/pdp/colors/gray.jpg',
  gray_2: './images/pdp/colors/gray_2.jpg',
  green: './images/pdp/colors/green.jpg',
  pink: './images/pdp/colors/pink.jpg'
};

export const PATTERNS = {
  pattern_1: './images/pdp/patterns/pattern_1.jpg'
};

export const SIZE = {
  0: {
    size: 'Розмір',
    error: 'Виберіть розмір продукту'
  },
  1: {
    size: 'Size',
    error: 'Select product size'
  }
};

export const ADD_FEATURES = {
  0: {
    features: 'Додаткові особливості'
  },
  1: {
    features: 'Additional features'
  }
};

export const PRODUCT_PRICE = {
  0: {
    price: 'Ціна'
  },
  1: {
    price: 'Price'
  }
};

export const SIDE_POCKET = {
  0: {
    sidePocket: 'Боковий карман'
  },
  1: {
    sidePocket: 'Side pocket'
  }
};

export const BAG_BOTTOM = {
  0: {
    bagBottom: 'Низ рюкзака'
  },
  1: {
    bagBottom: 'Bag bottom'
  }
};

export const SELECT_NONE = {
  0: {
    none: 'Жоден'
  },
  1: {
    none: 'None'
  }
};
