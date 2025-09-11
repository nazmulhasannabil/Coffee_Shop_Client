import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(newCoffee);

        // Send data to server
        fetch('https://coffee-shop-server-5wsk.onrender.com/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    Add New Coffee
                </h2>
                <p className="text-center text-gray-500 text-sm mb-8">
                    Fill out the form below to add a new coffee.
                </p>

                <form onSubmit={handleAddCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter coffee name"
                            className="mt-1 block w-full py-2 shadow-sm focus:ring focus:ring-amber-300 focus:border-amber-400"
                        />
                    </div>

                    {/* Chef */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Chef</label>
                        <input
                            name="chef"
                            type="text"
                            placeholder="Enter coffee chef"
                            className="mt-1 block w-full py-2 shadow-sm focus:ring focus:ring-amber-300 focus:border-amber-400"
                        />
                    </div>

                    {/* Supplier */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Supplier</label>
                        <input
                            name="supplier"
                            type="text"
                            placeholder="Enter coffee supplier"
                            className="mt-1 block w-full py-2 shadow-sm focus:ring focus:ring-amber-300 focus:border-amber-400"
                        />
                    </div>

                    {/* Taste */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Taste</label>
                        <input
                            name="taste"
                            type="text"
                            placeholder="Enter coffee taste"
                            className="mt-1 block w-full py-2 shadow-sm focus:ring focus:ring-amber-300 focus:border-amber-400"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <input
                            name="category"
                            type="text"
                            placeholder="Enter coffee category"
                            className="mt-1 block w-full py-2 shadow-sm focus:ring focus:ring-amber-300 focus:border-amber-400"
                        />
                    </div>

                    {/* Details */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Details</label>
                        <input
                            name="details"
                            type="text"
                            placeholder="Enter coffee details"
                            className="mt-1 block w-full py-2 shadow-sm focus:ring focus:ring-amber-300 focus:border-amber-400"
                        />
                    </div>

                    {/* Photo (Full Width) */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Photo</label>
                        <input
                            name="photo"
                            type="url"
                            placeholder="Enter photo URL"
                            className="mt-1 block w-full py-2 shadow-sm focus:ring focus:ring-amber-300 focus:border-amber-400"
                        />
                    </div>

                    {/* Submit Button (Full Width) */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-amber-600 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:bg-amber-700 transition"
                        >
                            Add New Coffee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCoffee

