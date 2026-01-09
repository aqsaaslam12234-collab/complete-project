import { useState, useEffect } from 'react';

// UserAdd Component
function UserAdd({ onAddUser }) {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.username && formData.email) {
      onAddUser(formData);
      setFormData({ username: '', email: '' });
    }
  };

  return (
    <div className="flex justify-center px-4 mb-8">
      <div className="bg-white border border-gray-200 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold text-center mb-4">Add User</h2>
        
        <div>
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="e.g. j0hndoe"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <button 
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// UserList Component
function UserList({ users }) {
  return (
    <div className="px-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Users</h2>
        <span className="text-sm text-gray-500">{users.length} total</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div 
            key={user.id} 
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-center mb-1">{user.name}</h3>
            <p className="text-xs text-gray-500 text-center mb-3">⭐ {user.rating || 0}</p>
            <p className="text-xs text-gray-600 break-all text-center mb-1">{user.email}</p>
            <p className="text-xs text-gray-500 text-center">{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// UserContainer Component (Main Component)
export default function UserContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch users from API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  const handleAddUser = (newUser) => {
    const user = {
      id: users.length + 1,
      name: newUser.username,
      email: newUser.email,
      phone: 'N/A',
      rating: 0
    };
    setUsers([user, ...users]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <UserAdd onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
}