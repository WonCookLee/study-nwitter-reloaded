import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Layout from "./components/layout";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAocunt from "./routes/create-aocunt";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScrean from "./components/loading-screan";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading ? (
        <LoadingScrean />
      ) : (
        <RouterProvider
          router={createBrowserRouter([
            {
              path: "/",
              element: <Layout />,
              children: [
                {
                  path: "",
                  element: <Home />,
                },
                {
                  path: "profile",
                  element: <Profile />,
                },
              ],
            },
            {
              path: "/login",
              element: <Login />,
            },
            {
              path: "/create-acount",
              element: <CreateAocunt />,
            },
          ])}
        />
      )}
    </>
  );
}

export default App;
