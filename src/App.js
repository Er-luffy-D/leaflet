import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import Sign from "./Pages/Sign";
import Profile from "./Pages/Profile";
import Library from "./Pages/Library";
import UploadProfilePic from "./components/UploadProfilePic";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import PostYourBook from "./Pages/postYourBook";
import BookShelf from "./Pages/BookShelf";
import Filter from "./components/Filter";

function App() {
  return (
    <Provider store={appStore}>
    <RouterProvider router={appRouter} />
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Sign />,
  },
  {
    path: "/Home",
    element: <Home />,
  },{
    path:"/profile",
    element: <Profile />
  },{
    path:'/library',
    element: <Filter />
  },{
    path:'/profile',
    element: <Profile />
  },{
    path: '/postyourbook',
    element: <PostYourBook />
  },{
    path:'/bookshelf',
    element:<BookShelf />
  }
]
);

export default App;
