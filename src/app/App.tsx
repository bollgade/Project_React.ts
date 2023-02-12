import { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import { AboutPageAsync } from 'pages/AboutPage/AboutPage.async';
import { MainPageAsync } from 'pages/MainPage/MainPage.async';
import { classNames } from 'helpers/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

const App = () => {

	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<Link to={"/"} >Главная</Link>
			<Link to={"/about"} >О проекте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={"/about"} element={<AboutPageAsync />} />
					<Route path={"/"} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;