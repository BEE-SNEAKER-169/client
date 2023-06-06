import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppConfig } from './AppConfig';
import { Suspense } from 'react';
// import GlobalLoading from './components/loading/Loading';
import NotFound from './pages/404';
import NotAuthorized from './pages/401';
import AuthGuard from './guard/AuthGuard';
import DashBoardLayoutQuanLy from './layout/quan-ly/DashboardQuanLy';

function App() {
  return (
    <div className="App scroll-smooth md:scroll-auto">
      <BrowserRouter basename={AppConfig.routerBase}>
        <Suspense >
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/layout-guard-roles" element={<NotAuthorized />} />

            <Route path="/" element={<Navigate replace to="/quan-ly" />} />

            <Route
              path="/quan-ly"
              element={
                <AuthGuard>
                  <DashBoardLayoutQuanLy>
                    <h1>Ok men</h1>
                  </DashBoardLayoutQuanLy>
                </AuthGuard>
              }
            />
            {/* <Route
              path="/account"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Account />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/product"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Product />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/feedback"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Feedback />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/order"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Order />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/category-blog"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <CategoryBlog />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/category-product"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <CategoryProduct />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/contact"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Contact />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/banner"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Banner />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/blog"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Blog />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/login"
              element={
                <GuestGuard>
                  <Login />
                </GuestGuard>
              }
            />
            <Route
              path="/register"
              element={
                <GuestGuard>
                  <Register />
                </GuestGuard>
              }
            /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
