import React, { useState, useEffect } from "react";

const AdminPackage = () => {
  const [packages, setPackages] = useState([]); // To store all packages
  const [selectedPackageId, setSelectedPackageId] = useState(null); // To store the selected package's ID
  const [pack, setPack] = useState(null); // To store the selected package's details
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all packages when component mounts
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/package`
        );
        const data = await response.json();
        setPackages(data); // Store all packages
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch packages");
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  // Fetch a specific package's details when a package is selected
  const fetchPackageDetails = async (packageId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/package/${packageId}`
      );
      const data = await response.json();
      setPack(data); // Set the selected package data
    } catch (err) {
      setError("Failed to fetch package details");
    }
  };

  // Handle selecting a package to edit
  const handleSelectPackage = (packageId) => {
    setSelectedPackageId(packageId);
    fetchPackageDetails(packageId); // Fetch the selected package details
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPack({
      ...pack,
      [name]: value,
    });
  };

  // Handle form submission to update the selected package
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPackageId) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/package/${selectedPackageId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pack),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update package");
      }

      const updatedPackage = await response.json();
      alert("Package updated successfully!");
      setPack(updatedPackage);
    } catch (err) {
      setError("Failed to update package");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-screen-lg mx-auto px-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Admin - Update Package</h1>

      {/* Package Selection */}
      <h2 className="text-xl font-semibold mb-2">Select a Package to Edit</h2>
      <ul className="mb-6">
        {packages.map((pkg) => (
          <li
            key={pkg._id}
            className={`cursor-pointer p-2 border ${
              pkg._id === selectedPackageId ? "bg-blue-100" : ""
            }`}
            onClick={() => handleSelectPackage(pkg._id)}
          >
            {pkg.title}
          </li>
        ))}
      </ul>

      {/* Form for updating selected package */}
      {pack && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Title</label>
            <input
              type="text"
              name="title"
              value={pack.title}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Description</label>
            <textarea
              name="description"
              value={pack.description}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Second Title</label>
            <input
              type="text"
              name="secondtitle"
              value={pack.secondtitle}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Services</label>
            <textarea
              name="services"
              value={pack.services.join(", ")}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "services",
                    value: e.target.value.split(", "),
                  },
                })
              }
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Banner Image URL</label>
            <input
              type="text"
              name="bannerimageUrl"
              value={pack.bannerimageUrl}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Second Image URL</label>
            <input
              type="text"
              name="secondimageUrl"
              value={pack.secondimageUrl}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Middle Paragraph</label>
            <textarea
              name="middleparagraph"
              value={pack.middleparagraph}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">
              Services Description Title
            </label>
            <input
              type="text"
              name="servicesdescriptiontitle"
              value={pack.servicesdescriptiontitle}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Services Description</label>
            <textarea
              name="servicesdescription"
              value={pack.servicesdescription.join(", ")}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "servicesdescription",
                    value: e.target.value.split(", "),
                  },
                })
              }
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Final Paragraph</label>
            <textarea
              name="finalparagraph"
              value={pack.finalparagraph}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Update Package
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminPackage;
