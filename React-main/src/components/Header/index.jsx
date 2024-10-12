import { NavLink } from "react-router-dom";
import HeaderCart from "./cart";

export default function Header() {
	return (
		<header className=" bg-base-200">
			<div className="max-w-[120rem] m-auto navbar">
				<div className="flex-1">
					<div className="navbar-center flex">
						<ul className="menu menu-horizontal px-1">
							<li><NavLink to='/'>Главная</NavLink></li>
							<li><NavLink to='/catalog'>Каталог</NavLink></li>
							<li><NavLink to='/favorite'>Избранное</NavLink></li>
						</ul>
					</div>
				</div>
				<div className="flex-none">
					<HeaderCart />
				</div>
			</div>
		</header>
	)
}
