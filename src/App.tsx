import Body from "./components/Body";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from 'react-redux'
import { store } from "./utils/appStore.ts"
import TaskDashboard from "./components/TaskDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage.tsx";
import PageNotFound from "./components/PageNotFound.tsx";


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/note" element={<TaskDashboard />} />
              <Route path="/signin" element={<AuthPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      <Toaster duration={3000} />


    </>
  );
}

export default App;
