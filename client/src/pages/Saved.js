import React, {Component} from 'react';
import API from '../utils/API';

class Saved extends Component {
  state = {
    books: []
  }

  // retrieve saved books on load
  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    API.getSavedBooks()
      .then(({data}) => this.setState({books: data}))
      .catch(err => console.log(err));
  }

  // handle deleting a book
  deleteBook = (bookId) => {
    API.deleteBook(bookId)
      .then(this.getBooks)
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <h1 className="display-4">View Saved Books</h1>
        </div>
        <div className="container-fluid">
          <div className="row align-items-stretch">
            {/* use ternary to check if books are in state */}

            {!this.state.books.length
              ? (
                <h2>Search For Some Books, Yo!</h2>
              )
              : this
                .state
                .books
                .map(book => {
                  return (
                    <div className="col-12 col-md-6" key={book._id}>
                      <div className="card">
                        <h5 className="card-header">{book.title}</h5>
                        <img src={book.image} alt={book.title} className="card-img"/>
                        <div className="card-body">
                          <h6 className="card-subtitle">By {book
                              .authors
                              .join(" & ")}</h6>
                          <p>{book.description}</p>
                          <div className="btn-group" role="group">
                            <button type="button" className="btn" onClick={() => this.deleteBook(book._id)}>Delete Book</button>
                            <a className="btn" href={book.link}>Go To Google Books</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
}
          </div>
        </div>
      </div>

    )
  }
}

export default Saved;