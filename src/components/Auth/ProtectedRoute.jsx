import React from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from './supabaseConfig';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const [userRole, setUserRole] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchUserRole = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: user, error } = await supabase
          .from('users')
          .select('roleUser')
          .eq('user_id', session.user.id) // Используйте правильное имя столбца
          .single();

        if (error) {
          console.error('Error fetching user role:', error);
        } else {
          setUserRole(user.roleUser);
        }
      }
      setLoading(false);
    };

    fetchUserRole();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return userRole === 'admin' ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;