import Body from "./components/Body";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from 'react-redux'
import { store } from "./utils/appStore.ts"
import TaskDashboard from "./components/TaskDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound.tsx";
import { lazy, Suspense } from "react";
import Skeleton from "./components/Skeleton.tsx";
function App() {
  const AuthPage = lazy(() => import('./components/AuthPage.tsx'));

  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<TaskDashboard />} />
              <Route path="/note" element={<TaskDashboard />} />
              <Route
                path="/signin"
                element={
                  <Suspense fallback={<Skeleton />}>
                    <AuthPage />
                  </Suspense>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      <Toaster />
    </>
  );
}

export default App;
