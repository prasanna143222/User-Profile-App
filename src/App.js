import React, { useState, useEffect } from 'react';
import UserCard from './components/UserCard/UserCard.js';
import EditUserModal from './components/EditUserModal/EditUserModal.js';
import Toast from './components/Toast/Toast.js';

const styles = `
  .advanced-app {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 40px;
    color: white;
  }

  .header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }

  .header p {
    font-size: 1.2rem;
    opacity: 0.9;
  }

  .user-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-top: 20px;
  }

  .user-card {
    background: white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .user-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  }

  .user-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
  }

  .user-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 16px;
    display: block;
    border: 4px solid #f0f0f0;
  }

  .user-name {
    font-size: 1.4rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 4px;
    text-align: center;
  }

  .user-username {
    color: #718096;
    text-align: center;
    margin-bottom: 20px;
    font-style: italic;
  }

  .user-info {
    space: 12px;
  }

  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: 0.9rem;
  }

  .info-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    flex-shrink: 0;
  }

  .info-label {
    font-weight: 600;
    color: #4a5568;
    min-width: 60px;
  }

  .info-value {
    color: #2d3748;
    word-break: break-all;
  }

  .info-value a {
    color: #667eea;
    text-decoration: none;
  }

  .info-value a:hover {
    text-decoration: underline;
  }

  .card-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid #e2e8f0;
  }

  .btn {
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .btn-like {
    background: #fed7d7;
    color: #c53030;
  }

  .btn-like.liked {
    background: #c53030;
    color: white;
  }

  .btn-edit {
    background: #bee3f8;
    color: #2b6cb0;
  }

  .btn-delete {
    background: #fbb6ce;
    color: #b83280;
  }

  .btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
  }

  .modal-content {
    background: white;
    border-radius: 16px;
    padding: 32px;
    max-width: 500px;
    width: 100%;
    max-height: 80vh;
    overflow-y: auto;
  }

  .modal-header {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 24px;
    color: #2d3748;
  }

  .form-group {
    margin-bottom: 16px;
  }

  .form-label {
    display: block;
    margin-bottom: 6px;
    font-weight: 500;
    color: #4a5568;
  }

  .form-input {
    width: 100%;
    padding: 10px 12px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s ease;
  }

  .form-input:focus {
    outline: none;
    border-color: #667eea;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .modal-actions {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    margin-top: 24px;
  }

  .btn-primary {
    background: #667eea;
    color: white;
  }

  .btn-secondary {
    background: #e2e8f0;
    color: #4a5568;
  }

  .toast {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 1001;
    animation: slideIn 0.3s ease;
  }

  .toast-success {
    background: #48bb78;
  }

  .toast-error {
    background: #f56565;
  }

  .toast-info {
    background: #4299e1;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .user-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    
    .header h1 {
      font-size: 2rem;
    }
    
    .form-row {
      grid-template-columns: 1fr;
    }
    
    .modal-content {
      padding: 20px;
    }
  }

  .spinner {
  width: 40px;
  height: 40px;

  position: relative;
  margin: 100px auto;
  }

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ffffff;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    
    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
    animation: sk-bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes sk-bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bounce {
    0%, 100% { 
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% { 
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [likedUsers, setLikedUsers] = useState(new Set());
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching users:', error);
        showToast('Failed to fetch users', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEditUser = (user) => {
    setEditingUser(user);
    setEditModalVisible(true);
  };

  const handleSaveUser = (updatedUser) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
    setEditModalVisible(false);
    setEditingUser(null);
    showToast('User updated successfully!');
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
      setLikedUsers(prev => {
        const newSet = new Set(prev);
        newSet.delete(userId);
        return newSet;
      });
      showToast('User deleted successfully');
    }
  };

  const handleToggleLike = (userId) => {
    setLikedUsers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
        showToast('Removed from favorites', 'info');
      } else {
        newSet.add(userId);
        showToast('Added to favorites');
      }
      return newSet;
    });
  };

  return (
    <div className="advanced-app">
      <style>{styles}</style>
      
      <div className="container">
        <div className="header">
          <h1>User Profiles</h1>
          <p>Meet our amazing team members</p>
        </div>
        
        {loading ? (
          <div>
            <div class="spinner">
              <div class="double-bounce1"></div>
              <div class="double-bounce2"></div>
            </div>
          </div>
        ) : (
          <div className="user-grid">
            {users.map(user => (
              <UserCard 
                key={user.id} 
                user={user}
                liked={likedUsers.has(user.id)}
                onEdit={handleEditUser}
                onDelete={handleDeleteUser}
                onToggleLike={handleToggleLike}
              />
            ))}
          </div>
        )}
        
        <EditUserModal
          visible={editModalVisible}
          user={editingUser}
          onCancel={() => {
            setEditModalVisible(false);
            setEditingUser(null);
          }}
          onSave={handleSaveUser}
        />
        
        {toast && (
          <Toast 
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
};

export default App;