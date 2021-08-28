export function SearchResult({ book, onAddBook }) {
  return (
    <div>
      {book.title}
      <button
        className="add-new-book-btn"
        onClick={() => {
          onAddBook(book);
        }}
      >
        +
      </button>
    </div>
  );
}
