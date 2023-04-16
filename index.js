/* <h2>Nepřečtené</h2>

<div class="email">
  <div class="email__head">
    <button class="email__icon email__icon--closed"></button>
    <div class="email__info">
      <div class="email__sender">Pavel Chocholouš</div>
      <div class="email__subject">Jak to jde?</div>
    </div>
    <div class="email__time">12:35</div>
  </div>
  <div class="email__body"></div>
</div>

<div class="email">
  <div class="email__head">
    <button class="email__icon email__icon--closed"></button>
    <div class="email__info">
      <div class="email__sender">Finanční úřad</div>
      <div class="email__subject">Daňové přiznání</div>
    </div>
    <div class="email__time">9:05</div>
  </div>
  <div class="email__body"></div>
</div> */

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=all')
  .then((response) => response.json())
  .then((emails) => {
    const arrayEmail = Array.from(emails.emails);
    console.log(arrayEmail);
    arrayEmail.forEach((email) => {
      if (email.unread === true) {
        return (document.querySelector('#inbox_unread').innerHTML += `
        <div class="email">
          <div class="email__head">
            <button class="email__icon email__icon--closed"></button>
            <div class="email__info">
              <div class="email__sender">${email.sender.name}</div>
              <div class="email__subject">${email.subject}</div>
            </div>
            <div class="email__time">${email.time}</div>
          </div>
          <div class="email__body"></div>
        </div>`);
      } else {
        return (document.querySelector(
          '#inbox_read',
        ).innerHTML += `<div class="email">
          <div class="email__head">
            <button class="email__icon email__icon--opened"></button>
            <div class="email__info">
              <div class="email__sender">${email.sender.name}</div>
              <div class="email__subject">${email.subject}</div>
            </div>
            <div class="email__time">${email.time}</div>
          </div>
          <div class="email__body"></div>
        </div>`);
      }
    });
  });
