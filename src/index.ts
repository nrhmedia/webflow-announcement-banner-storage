document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      const cookiePair = cookieArray[i].split('=');
      if (name == cookiePair[0].trim()) {
        return cookiePair[1];
      }
    }
    return null;
  }

  function setCookie(name, value, days) {
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + expiryDate.toUTCString() + ';path=/';
  }

  const announcementClosed = getCookie('announcement');

  const announcementBanner = document.querySelector('[announcement=banner]');

  if (announcementBanner) {
    // Check if announcementBanner is found
    if (announcementClosed === 'close') {
      announcementBanner.style.display = 'none';
    } else {
      announcementBanner.style.display = 'block';
    }

    const closeElement = document.querySelector('[announcement=close]');
    if (closeElement) {
      closeElement.addEventListener('click', function () {
        const daysClosed = document.querySelector('[days-closed]').getAttribute('days-closed');
        setCookie('announcement', 'close', parseInt(daysClosed));
      });
    }
  }
});
