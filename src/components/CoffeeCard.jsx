import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  //Delete function
  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://coffee-shop-server-5wsk.onrender.com/coffee/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your coffee has been deleted.',
                'success'
              )
              const remaining = coffees.filter(coffe => coffe._id !==_id);
              setCoffees(remaining);
            }
          })
      }
    });
  }


  return (
    <div className="bg-base-100 shadow-md rounded-xl p-4 flex flex-col md:flex-row w-full items-center justify-between gap-4 mx-auto h-60 mb-6">

      {/* Left: Coffee Image */}
      <figure className="flex-shrink-0">
        <img
          src={photo}
          alt={name}
          className="w-28 h-32 object-contain"
        />
      </figure>

      {/* Middle: Coffee Info */}
      <div className="flex-1 space-y-1 text-left">
        <p><span className="font-semibold">Name:</span> {name}</p>
        <p><span className="font-semibold">Chef:</span> {chef}</p>
        <p><span className="font-semibold">Supplier:</span> {supplier}</p>
        <p><span className="font-semibold">Taste:</span> {taste}</p>
        <p><span className="font-semibold">Category:</span> {category}</p>
        <p><span className="font-semibold">Details:</span> {details}</p>
      </div>

      {/* Right: Buttons */}
      <div className="flex md:flex-col gap-2">
        <button className="btn btn-sm btn-outline btn-info">👁</button>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="btn btn-sm btn-outline btn-warning">✏️</button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-outline btn-error">
          🗑
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
