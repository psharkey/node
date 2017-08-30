console.log('Starting notes.js');

addNote = (title, body) => {
  console.log('Adding note:', title, body);
  return 'New note';
};

getAll = () => {
  console.log('Getting all notes');
  return 'New note';
};

module.exports = {
 addNote,
 getAll
};