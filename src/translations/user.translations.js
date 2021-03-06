export const CONFIRM_EMAIL = [
  {
    value:
      'Ви успішно зареєструвались! Будь ласка, підтвердіть свою електронну адресу.'
  },
  {
    value:
      'You have successfully registered! Please, confirm your email address.'
  }
];

export const LOGIN_FORM_LABEL = [
  {
    value: 'увійти'
  },
  {
    value: 'log in'
  }
];
export const OR_TEXT = [
  {
    value: 'або'
  },
  {
    value: 'or'
  }
];

export const REGISTER_FORM_LABEL = [
  {
    value: 'Реєстрація'
  },
  {
    value: 'Register'
  }
];

export const EMPTY_FIELD = [
  {
    value: 'Заповніть поле'
  },
  {
    value: 'Empty field'
  }
];

export const LOGIN_USER_ERROR = {
  WRONG_CREDENTIALS: [
    {
      value: 'Неправильна електронна адреса або пароль'
    },
    {
      value: 'Wrong e-mail address or password'
    }
  ],
  INPUT_NOT_VALID: [
    {
      value: 'Ви ввели невірні дані'
    },
    {
      value: 'You have typed wrong data'
    }
  ],
  DEFAULT_ERROR: [
    {
      value: 'Ой! Щось пішло не так. Спробуйте будь ласка пізніше.'
    },
    {
      value: 'Oops! Something went wrong. Please, try again later.'
    }
  ]
};

export const REGISTER_USER_ERROR = {
  USER_ALREADY_EXIST: [
    {
      value: 'Користувач за вказаним емейлом вже існує'
    },
    {
      value: 'User with given email already exists'
    }
  ],
  INPUT_NOT_VALID: [
    {
      value: 'Невірно введені дані'
    },
    {
      value: 'Wrong input data'
    }
  ],
  DEFAULT_ERROR: [
    {
      value: 'Ой! Щось пішло не так. Спробуйте будь ласка пізніше.'
    },
    {
      value: 'Oops! Something went wrong. Please, try again later.'
    }
  ]
};

export const errorMessages = [
  {
    value: {
      firstName: 'Поле повинно містити від 2 до 30 символів',
      lastName: 'Поле повинно містити від 2 до 30 символів',
      email: 'Некоректний формат, ',
      password: 'Від 6 до 30 символів з однією великою літерою та цифрою',
      confirmPassword: 'Паролі не збігаються'
    }
  },
  {
    value: {
      firstName: 'Field should contain from 2 to 30 characters',
      lastName: 'Field should contain from 2 to 30 characters',
      email: `Wrong email address, `,
      password: 'From 6 to 30 characters with one capital letter and one digit',
      confirmPassword: 'Passwords do not match'
    }
  }
];

export const placeholders = {
  firstName: [
    {
      value: "Введіть Ім'я"
    },
    {
      value: 'Enter firstname'
    }
  ],
  lastName: [
    {
      value: 'Введіть прізвище'
    },
    {
      value: 'Enter lastname'
    }
  ],
  email: [
    {
      value: 'Введіть email'
    },
    {
      value: 'Enter email'
    }
  ],
  password: [
    {
      value: 'Введіть пароль'
    },
    {
      value: 'Enter password'
    }
  ],
  confirmPassword: [
    {
      value: 'Підтвердіть пароль'
    },
    {
      value: 'Confirm password'
    }
  ]
};

export const FORGOT_PASSWORD = [
  {
    value: 'Забули пароль?'
  },
  {
    value: 'Forgot password?'
  }
];

export const REGISTER_PROPOSAL = [
  {
    value: 'Реєстрація'
  },
  {
    value: 'Registration'
  }
];

export const WELCOME_MESSAGE = [
  {
    h2: 'Вітаємо',
    h3: 'Реєстрація пройшла успішно!',
    button_goToShop: 'В магазин',
    button_logIn: 'Увійти'
  },
  {
    h2: 'Welcome',
    h3: 'Registration was successful!',
    button_goToShop: 'Go to shop',
    button_logIn: 'Log in'
  }
];

export const CONFIRM_ERROR = [
  {
    value: 'Ой! Щось пішло не так.'
  },
  {
    value: 'Oops! Something went wrong.'
  }
];

export const RECOVERY_MESSAGES = [
  {
    h2: 'Відновлення паролю',
    label: 'Електронна адреса',
    p:
      'Вкажіть свою електронну пошту для скидання паролю і ми надішлемо інструкції для відновлення.',
    button: 'Відправити'
  },
  {
    h2: 'Password recovery',
    label: 'E-mail  ',
    p:
      'Specify your e-mail to reset the password and we will send recovery instructions.',
    button: 'Send'
  }
];

export const RECOVERY_SUCCESS_MESSAGE = [
  {
    h2: 'Успішно!',
    p: 'Будь ласка виконайте інструкції у листі, який ми вам надіслали.'
  },
  {
    h2: 'Success!',
    p: 'Please follow the instructions in the message, we have just sent you.'
  }
];

export const RECOVERY_ERROR_MESSAGE = {
  USER_NOT_FOUND: [
    {
      value: 'Користувача з даним емейлом не знайдено'
    },
    {
      value: 'User with given e-mail address is not found'
    }
  ],
  EMAIL_ERROR: [
    {
      value: 'Будь ласка перезавантажте сторінку та спробуйте ще раз.'
    },
    {
      value: 'Please, reload your page and try again.'
    }
  ]
};

export const CHANGE_PASSWORD = [
  {
    h2: 'Введіть новий пароль',
    pass_label: 'Новий пароль',
    confirm_label: 'Підтвердіть пароль',
    button: 'Змінити'
  },
  {
    h2: 'Enter new password',
    pass_label: 'New password',
    confirm_label: 'Confirm password',
    button: 'Change'
  }
];

export const NEW_PASSWORD_ERROR = {
  USER_NOT_FOUND: [
    {
      value: 'Користувача не знайдено'
    },
    {
      value: 'User is not found'
    }
  ],
  PASSWORD_RECOVERY_ATTEMPTS_LIMIT_EXCEEDED: [
    {
      value: 'Перевищено максимальну кількість спроб відновлення'
    },
    {
      value: 'Exceeded password recovery limit'
    }
  ],
  DEFAULT_ERROR: [
    {
      value:
        'Відбулась помилка! Будь ласка перезавантажте сторінку та спробуйте ще раз.'
    },
    {
      value: 'An error occurred! Please, reload your page and try again.'
    }
  ]
};

export const NEW_PASSWORD_SUCCESS_MESSAGE = [
  {
    h2: 'Ваш пароль успішно змінено!',
    p: 'Вас буде спрямовано на сторінку логінування'
  },
  {
    h2: 'Your password is successfully changed!',
    p: 'You will be directed to login page'
  }
];

export const PROFILE_LABELS = [
  {
    firstName: "Ім'я",
    lastName: 'Прізвище',
    email: 'Емейл',
    phoneNumber: 'Номер телефону',
    country: 'Країна',
    region: 'Область',
    city: 'Місто',
    street: 'Вулиця',
    buildingNumber: 'Будинок',
    appartment: 'Квартира',
    zipcode: 'Почтовий індекс',
    addPhoto: '+',
    saveBtnTitle: 'Зберегти'
  },
  {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phoneNumber: 'Contact phone number',
    country: 'Country',
    region: 'Region',
    city: 'City',
    street: 'Street',
    buildingNumber: 'Building number',
    appartment: 'Appartment number',
    zipcode: 'Zip Code',
    addPhoto: '+',
    saveBtnTitle: 'Save'
  }
];

export const PROFILE_PASSWORD_CHANGE = [
  {
    heading: 'Зміна паролю',
    text:
      'Якщо ви бажаєте змінити пароль, будь ласка, натисніть кнопку нижче і ми надішлемо Вам відповідні інструкції на емейл',
    btnTitle: 'Змінити пароль',
    checkEmailText: 'Будь ласка, перевірте ваш емейл!'
  },
  {
    heading: 'Change password',
    text:
      'If you want to change your password, please click the button below and we will send you the instructions on your email',
    btnTitle: 'Change password',
    checkEmailText: 'Please, check your email!'
  }
];

export const PROFILE_EMAIL_CONFIRM = [
  {
    heading: 'Підтвердження емейлу',
    btnTitle: 'Підтвердити',
    checkEmailText: 'Будь ласка, перевірте ваш емейл!'
  },
  {
    heading: 'Confirm email',
    btnTitle: 'Resend confirmation letter',
    checkEmailText: 'Please, check your email!'
  }
];
