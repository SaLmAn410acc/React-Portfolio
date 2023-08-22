import "./style.css";

const Greeting = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </>
  );
};

const Book = () => {
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <img
          src={"https://m.media-amazon.com/images/I/41+iW8nZKAL._AC_UL320_.jpg"}
          className="card-img-top img-specs"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
