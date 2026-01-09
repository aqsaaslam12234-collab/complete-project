const UserAddComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <h1>Ready</h1>
        <p>ContainerComponent</p>
        <hr />
        <p>Add User</p>
      </div>
      <div className="flex justify-center items-center px-4 mt-5">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-xl font-semibold text-center mb-6">Add User</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="e.g. j0hndoe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-colors">
              Add User
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserAddComponent;
