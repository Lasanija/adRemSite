"use strict"

//send message to telegram
const form = document.querySelector('.callback-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  sendMessage(form);
})



async function sendMessage(form) {
  const formData = new FormData(form);
  const message = "Нова заявка з сайту: "+formData.get('username')+" "+formData.get('tel');

  if (formData){
    const url = `https://api.telegram.org/bot6712943783:AAHJMc3tXafTZgGTtqMcxiJApAqVv7-EDYA/sendMessage` // The url to request
    const obj = {
      chat_id: '@AdRem_Get_Message_bot', // Telegram chat id
      text: message // The text to send
    };

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    });

    form.reset();
    alert('Дані відправлено, очікуйте дзвінок впродовж 20 хв');
  }
  else {
    alert('Сталася помилка! Будь ласка,відправте дані ще раз.')
  }

 /* const formData = new FormData(form);
  if (formData) {
    const url = 'sendMessage.php';
    const response = await fetch(url, {
      method: "POST",
      body: formData
    });
    if (response.ok) {
      form.reset();
      alert('Дані відправлено, очікуйте дзвінок впродовж 20 хв');
    }
    else {
      alert('Сталася помилка! Будь ласка,відправте дані ще раз.')
    }
  }*/
}
