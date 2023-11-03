import Tour from './Tour';
const Tours = ({ tours, removeTours }) => {
  return (
    <div>
      {
        tours.map((tour) => {
          return <Tour key={tour.id} removeTours={removeTours} {...tour} />
        })
      }
    </div>
  )
};

export default Tours;
