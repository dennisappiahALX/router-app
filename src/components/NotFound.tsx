import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface NotFoundProps {
  onClick: () => void
}

const NotFound = ({onClick}: NotFoundProps) => {
  let navigate = useNavigate();

  return (
    <h1>NotFound- 404</h1>
  )
}

export default NotFound


// function MyComponent() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <Route path="*" element={<NotFound onClick={() => navigate('/')} />} />
//     </>
//   );
// }


//---------------------------------------------------------------------
// import { Route, useNavigate } from 'react-router-dom';
// import NotFound from './NotFound';

// function MyComponent() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (!user) {
//       navigate('/not-found');
//     }
//   }, [user, navigate]);

//   return (
//     <>
//       <Route path="/not-found" element={<NotFound onClick={() => navigate('/')} />} />
//     </>
//   );
// }