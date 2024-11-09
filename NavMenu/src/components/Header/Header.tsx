import { NavLink } from "react-router-dom"
import './header.css'

export const Header = () => {
  const setActive = ({isActive}: { isActive: boolean }) => isActive? 'menu__item menu__item-active' : 'menu__item';

  return (
    <header className="menu">
      <NavLink className={setActive} to="/">Главная</NavLink>
      <NavLink className={setActive} to="/drift">Дрифт-такси</NavLink>
      <NavLink className={setActive} to="/timeattack">Time Attack</NavLink>
      <NavLink className={setActive} to="/forza">Forza Karting</NavLink>
    </header>
  )
}