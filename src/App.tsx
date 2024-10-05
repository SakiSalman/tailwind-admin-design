import { useEffect, useState } from 'react';
import { RouterProvider} from 'react-router-dom';
import { router } from './routes/route.js'

import Loader from './common/Loader';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return <>
      {
        loading && (
          <Loader />
        )
      }
     <RouterProvider router={router} />
  </>
}

export default App;
