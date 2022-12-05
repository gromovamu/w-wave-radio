//валидация полей формы
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

