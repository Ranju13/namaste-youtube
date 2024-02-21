import { Provider } from "react-redux";
import Body from "./component/Body";
import Header from "./component/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchVideo from "./component/WatchVideo";
import store from './utils/store';
import MainContainer from "./component/MainContainer";

function App() {
const appRouter = createBrowserRouter([{
 path:'/',
 element:<Body />,
 children:[{
    path:'/',
    element:<MainContainer />
 },
 {
  path:'/watch',
  element: <WatchVideo />
 }
]
}])

  return (
    <div>
      <Provider store={store}>
        <Header />
        <div>
          
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
