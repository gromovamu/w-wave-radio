//валидация полей формы в разделе "О нас"
new JustValidate('.feedback', {
  colorWrong: '#D52B1E',
  rules: {
    message: {
      required: true,
    },
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    message: {
      required: 'Вы не ввели сообщение',
    },
    name: {
      required: 'Вы не ввели имя'
    },
    email: {
      required: 'Вы не ввели e-mail',
      email: 'Вы ввели некорректный e-mail'
    }
  }
});

// валидация полей формы в разделе "вход"
new JustValidate('.entrance__form', {
  colorWrong: '#D52B1E',
  rules: {
    login: {
      required: true,
    },
    password: {
      required: true,
    }
  },
  messages: {
    login: {
      required: 'Вы не ввели логин',
    },
    password: {
      required: 'Вы не ввели пароль'
    }
  }
});

