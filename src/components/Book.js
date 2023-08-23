export const Book = (props) => {
  const { img, title, desc, id, chkId } = props;
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <img src={img} className="card-img-top img-specs" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title">{`#${id}`}</h5>
          <p className="card-text">{desc}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              chkId(id);
            }}
          >
            check id
          </button>
        </div>
      </div>
    </div>
  );
};
