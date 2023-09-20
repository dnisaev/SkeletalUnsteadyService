const normalizeUrl = (url) => {
  
  const https = url.startsWith("https://");
  const http = url.startsWith("http://");

  if (https === true) {
    return url;
  } else if (http === true) {
    return `https://${url.slice(7, url.length)}`;
  } else {
    return `https://${url}`;
  }
}

const url = "http://yandex.ru";
console.log(normalizeUrl(url));