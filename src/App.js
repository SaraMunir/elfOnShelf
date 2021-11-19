import{ useState, useEffect } from 'react';
import firebase from './firebase.js'

function App() {
  const [books, setBooks] = useState([]);
  const [userInput, setUserInput] = useState('');
  const handleInputChange=(e)=>{
    setUserInput(e.target.value)
  }
  //
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(userInput)
    const dbRef = firebase.database().ref();
    dbRef.push(userInput)
    setUserInput('')
  }
  const removeBook = (id)=> {
    const dbRef = firebase.database().ref();

    dbRef.child(id).remove();
  }

  useEffect(() => {
    const dbRef = firebase.database().ref()
    // add the event listener to watch for changes to our database

    dbRef.on('value', (response)=>{
      // fire base method
      console.log('response: ', response.val())
      const data = response.val()
      // firebase brings object. we need to convert the object in to array 
      const bookArray = []

      for (let key in data) {
        // data[key]
        bookArray.push({
          bookTitle: data[key],
          bookId: key
        })
      }
      setBooks(bookArray)
    })
    // 
  }, [])
  return (
    <div className="App">
      <h1>Elf on a book Shelf</h1>
      <ul>
        {books.length === 0 ? <p> no books added</p> : null }
        {
          books.map((book)=>{ 
            return( 
            <li key={book.bookId}>
              <p>{book.bookTitle}</p>
              {/* <p>{book.bookId}</p> */}
              <button onClick={()=>removeBook(book.bookId)}>Remove</button>
            </li>
            )
          })
        }
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="newBook">Add a new book to your shelf!</label>
        <input 
          type="text" 
          id="newBook" 
          onChange={handleInputChange} 
          value={userInput}
          />
        <button>Add Book</button>
      </form>

    </div>
  );
}

export default App;


