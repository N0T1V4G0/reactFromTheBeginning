// Card component
function Card(props) {
  // console.log(props);
  const { dataCourse } = props;
  const { course, instructor, image } = dataCourse;
  //console.log(dataCourse);
  return (
    <div className="col s2">
      <div className="card hoverable small">
        <div className="card-image">
          <img src={image} />
        </div>
        <div className="card-content">
          <p>{course}</p>
          <p>{instructor}</p>
        </div>
        <div className="card-action">
          <a href="#">$9.99</a>
        </div>
      </div>
    </div>
  );
}
