import throttle from 'lodash.throttle';

const onDocumentScroll = event => {
  console.log('Hello!');
};

document.addEventListener('scroll', throttle(onDocumentScroll, 300));
