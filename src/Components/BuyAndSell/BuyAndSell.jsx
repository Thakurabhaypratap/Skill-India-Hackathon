import React, { useState } from 'react';

const BuyAndSell = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [crop, setCrop] = useState('');
  const [price, setPrice] = useState('');
  const [listings, setListings] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add the new listing to the state
    setListings([...listings, { crop, price }]);
    // Reset form
    setCrop('');
    setPrice('');
    setFormVisible(false);
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Buy and Sell</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {/* For Sale Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Items For Sale</h2>
          <ul className="space-y-4">
            {listings.map((listing, index) => (
              <li key={index} className="border-b pb-4">
                <h3 className="text-xl font-medium">{listing.crop}</h3>
                <p className="font-bold text-lg">Price: ₹{listing.price} </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Wanted Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Items Wanted</h2>
          {/* Add your wanted items here */}
        </section>
      </div>

      {isFormVisible && (
        <form onSubmit={handleFormSubmit} className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Add New Listing</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="crop" className="block text-lg font-medium">Crop</label>
              <input
                id="crop"
                type="text"
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-lg font-medium">Price</label>
              <input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
              >
                Submit Listing
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="text-center mt-8">
        <button
          onClick={() => setFormVisible(!isFormVisible)}
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
        >
          {isFormVisible ? 'Cancel' : 'Add New Listing'}
        </button>
      </div>
    </div>
  );
};

export default BuyAndSell;
