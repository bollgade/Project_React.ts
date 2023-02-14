import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [])}>
			<div className={classNames(cls.links, {}, [])}>
				<Link to={"/"} className={classNames(cls.mainLink)} >Главная</Link>
				<Link to={"/about"} >О проекте</Link>
			</div>
		</div>
	);
};