import "./style.css";

const Books = [
  {
    img: "https://m.media-amazon.com/images/I/514aE49swxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Song of Achilles",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    img: "https://m.media-amazon.com/images/I/41oihh5M3jL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Necessary Trouble",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    img: "https://m.media-amazon.com/images/I/51cyxw2A8PL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Visionaries",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    img: "https://m.media-amazon.com/images/I/518ewPPStwL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "A Little Life",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
];
const Greeting = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {Books.map((book) => {
            return <Book {...book} />;
          })}
        </div>
      </div>
    </>
  );
};

const Book = (props) => {
  const { img, title, desc } = props;
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <img src={img} className="card-img-top img-specs" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
