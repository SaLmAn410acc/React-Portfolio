import { Books } from "../booksData";
import { Book } from "./Book";

const BookList = () => {
  const chkId = (id) => {
    const result = Books.find((book) => {
      return book.id === id;
    });
    alert(`id = ${result.id}`);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {Books.map((book) => {
            return <Book {...book} key={book.id} chkId={chkId} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BookList;
