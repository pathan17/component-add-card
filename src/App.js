
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './LayOut/Main';
import Shop from './Components/Shop';


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Shop></Shop>,
        },
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
