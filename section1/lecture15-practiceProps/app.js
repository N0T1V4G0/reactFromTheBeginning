// ReactDOM.render here
ReactDOM.render(
  <div>
    {data.map((course) => (
      <Card key={course.course} dataCourse={course} />
    ))}
  </div>,
  document.getElementById('root'),
);
