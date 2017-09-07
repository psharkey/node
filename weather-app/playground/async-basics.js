console.log('Starting app');

setTimeout(() => {
   console.log('Inside callback'); 
}, 2000);

setTimeout(() => {
   console.log('Inside no-delay callback'); 
}, 0);

console.log('Finishing app');