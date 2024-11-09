import { Outlet } from "react-router-dom";
import { Header } from '../Header';
import './layout.css'

export const Layout = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
