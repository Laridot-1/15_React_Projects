const List = ({ people }) => {
  return (
    <>
      {
        people.map(({ name, id, age, image }) => {
          return <article className="person" key={id}>
            <img src={image} className="img" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        })
      }
    </>
  );
};

export default List;
