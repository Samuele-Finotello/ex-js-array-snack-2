const ids = [2, 13, 7, 21, 19];

async function getBooks(ids) {

  const promisesBooks = ids.map(id => fetch(`http://localhost:3333/books/${id}`).then(res => res.json()))

  const promiseAllBook = await Promise.all(promisesBooks)

  return promiseAllBook
}

(async () => {
  try {
    getBooks(ids)
      .then(books => console.log(books))
  } catch (error) {
    console.error(error)
  }
})()