"use client";

import { User } from "@prisma/client";
import Container from "../Container";
import { GiDonerKebab } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";
import Button from "../Button";
import { signIn } from "next-auth/react";
import UserMenu from "./UserMenu";

interface NavbarProps {
	currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
	return (
		<div className="fixed z-10 w-full bg-white shadow-sm">
			<div className="p-4 border-b-[1px]">
				<Container>
					<div className="flex flex-row items-center justify-between gap-3 md:gap-0">
						<div className="flex flex-row items-center justify-center">
							<GiDonerKebab />
							<h1>Matse fresn</h1>
						</div>

						<UserMenu currentUser={currentUser} />
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Navbar;
