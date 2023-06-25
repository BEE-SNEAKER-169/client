import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppConfig } from './AppConfig';
import { Suspense } from 'react';
// import GlobalLoading from './components/loading/Loading';
import NotFound from './pages/404';
import NotAuthorized from './pages/401';
import AuthGuard from './guard/AuthGuard';
import DashBoardLayoutQuanLy from './layout/quan-ly/DashboardQuanLy';
import QuanLyCategory from './pages/quan-ly/category/chuc-nang-1';
import QuanLyColor from "./pages/quan-ly/color";
import GusetGuard from "./guard/GuestGuard";
import { Image } from "antd";

function App() {
  return (
    <div className="App scroll-smooth md:scroll-auto font-sans">
      <BrowserRouter basename={AppConfig.routerBase}>
        <Suspense>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/layout-guard-roles" element={<NotAuthorized />} />

            <Route
              path="/"
              element={<Navigate replace to="/quan-ly/category" />}
            />

            <Route
              path="/quan-ly/category"
              element={
                <AuthGuard>
                  <DashBoardLayoutQuanLy>
                    <QuanLyCategory />
                  </DashBoardLayoutQuanLy>
                </AuthGuard>
              }
            />

            <Route
              path="/quan-ly/color"
              element={
                <GusetGuard>
                  <DashBoardLayoutQuanLy>
                    <QuanLyColor />
                  </DashBoardLayoutQuanLy>
                </GusetGuard>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
