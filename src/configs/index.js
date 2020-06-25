export const itemsPerPage = [15, 30, 60];
export const PRODUCT_LIST_URL = '/productlist/';
export const CATALOGS_URL = '/catalogs/';
export const placeholder = 'Type here...';
export const countries = {
  title: 'Country',
  name: 'country',
  value: [
    '',
    'Ukraine',
    'Italy',
    'Netherlands',
    'Poland',
    'Portugal',
    'France',
    'Germany',
    'Greece',
    'Spain',
    'Hungary',
    'Sweden',
    'England',
    'USA'
  ]
};
export const paymentMethods = {
  title: 'Payment Method',
  name: 'paymentMethod',
  value: [
    '',
    'credit card',
    'pay pal',
    'cash',
    'google pay',
    'amazon pay',
    'apple pay'
  ]
};

export const deliveryType = {
  title: 'Delivery Type',
  name: 'deliveryType',
  value: ['', 'currier', 'post', 'delivery servise']
};

export const socialNetworkLinks = {
  title: 'Links',
  telegram: 'https://web.telegram.org',
  facebook: 'https://www.facebook.com/Fn-100171608356044/',
  instagram: 'https://www.instagram.com/'
};

export const policiesFooter = {
  title: 'Information',
  items: [
    { id: 1, url: '/about-us', item: 'About us' },
    { id: 2, url: '/terms-conditions', item: 'Terms and Conditions' },
    { id: 3, url: '#', item: 'Privacy Policy' },
    { id: 4, url: '/materials', item: 'Materials' }
  ]
};

export const contactInformationFooter = {
  title: 'Contacts',
  items: ['FashionNode', 'fashionnode@gmail.com', '+380630123456']
};

export const catalogsFooter = {
  title: 'Catalogs',
  items: [
    { id: 1, url: 'men', item: 'Men' },
    { id: 2, url: 'women', item: 'Women' },
    { id: 3, url: 'kids', item: 'Kids' }
  ]
};

export const routes = {
  pathToOrders: '/',
  pathToProducts: '/products',
  pathToProductDetails: '/product/:id',
  pathToCategories: '/categories',
  pathToCategoryDetails: '/category/:id',
  pathToNews: '/news',
  pathToNewsDetails: '/news/:id',
  pathToUserDetails: '/user/:id',
  pathToLogin: '/login',
  pathToOrderDetails: '/order/:id'
};

export const formRegExp = {
  email:
    '^[^-_][a-z0-9]{0,20}-?_?[a-z]{1,20}@[a-z]{0,20}-?[a-z]{1,20}.[a-z]{2,6}$',
  name: "^(?=.{2,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  password: '^(?!.* )(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,30}$',
  phone: /^\+?[0-9]{3}-?[0-9]{6,12}$/g,
  // /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g,
  // ^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$
  country: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  city: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  street: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  buildingNum: '^[a-zA-Z0-9_.-]*$',
  deliveryType: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  deliveryMethod: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
};

export const placeholders = {
  firstname: [
    {
      lang: 'eng',
      value: 'Enter firstname'
    },
    {
      lang: 'uk',
      value: "Введіть Ім'я"
    }
  ],

  lastname: [
    {
      lang: 'eng',
      value: 'Enter lastname'
    },
    {
      lang: 'uk',
      value: 'Введіть прізвище'
    }
  ],
  email: [
    {
      lang: 'eng',
      value: 'Enter email*'
    },
    {
      lang: 'uk',
      value: 'Введіть емейл*'
    }
  ],
  password: [
    {
      lang: 'eng',
      value: 'Enter password*'
    },
    {
      lang: 'uk',
      value: 'Введіть пароль*'
    }
  ],
  confirmPassword: [
    {
      lang: 'eng',
      value: 'Confirm password'
    },
    {
      lang: 'uk',
      value: 'Підтвердіть пароль'
    }
  ]
};

export const errorMessages = {
  firstname: 'Please enter firstname',
  lastname: 'Please enter lastname',
  email: 'Please enter email',
  password: 'Password not correct',
  confirmPassword: 'Please confirm password'
};
export const LANGUAGE = 0;
