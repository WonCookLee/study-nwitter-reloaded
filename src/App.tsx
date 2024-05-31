import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Layout from "./components/layout";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAocunt from "./routes/create-aocunt";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScrean from "./components/loading-screan";
import { auth } from "./firebase";
import ProtectedRoute from "./routes/protected-route";

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

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? (
        <LoadingScrean />
      ) : (
        <RouterProvider
          router={createBrowserRouter([
            {
              path: "/",
              element: (
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              ),
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
    </Wrapper>
  );
}

export default App;
