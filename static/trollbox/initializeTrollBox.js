function initBeet() {
  return new Promise((resolve, reject) => {
    window.beetBox.get("Beet Trollbox", "BTS").then(beet => {
      beet.getAccount().then(account => {
        resolve({beet, account});
      });
    }).catch((err) => {
      console.error(err);
    });
  });
}

function initTrollBox (channel) {
  const config = {
    container: '#BitSharesVotesTrollboxId',
    firebase: {
      apiKey: 'AIzaSyCbU0lppDUcRjkGzIkpPlzaWaTghz_0WoE',
      authDomain: 'beet-trollbox.firebaseapp.com',
      databaseURL: 'https://beet-trollbox.firebaseio.com/',
      projectId: 'beet-trollbox',
      storageBucket: 'beet-trollbox.appspot.com',
      messagingSenderId: '363824724794'
    },
    channel: channel,
    user: null,
    delayRender: false
  };
  let trollbox = new window.Trollbox(config);
  initBeet().then(result => {
    trollbox.setUser(result.account.name, result.beet);
  });
}
