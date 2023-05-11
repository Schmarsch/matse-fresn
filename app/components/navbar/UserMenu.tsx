"use client";

import { User } from "@prisma/client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { signOut,signIn } from "next-auth/react";

interface UserMenuprops {
	currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuprops> = ({ currentUser }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

    console.log(currentUser);

	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-3">
				<div className="hidden px-4 py-3 text-sm font-semibold transition rounded-full md:block">
					Wir sind alle fett
				</div>
				<div
					onClick={toggleOpen}
					onKeyDown={toggleOpen}
					className="p-4 md:py-1 md:px-2border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
				>
					<AiOutlineMenu />
					<div className="hidden md:block">
						<Avatar src={currentUser?.image} />
					</div>
				</div>
			</div>
			{isOpen && (
				<div
					className="
                        absolute 
                        rounded-xl 
                        shadow-md
                        w-[40vw]
                        md:w-3/4 
                        bg-white 
                        overflow-hidden 
                        right-0 
                        top-12 
                        text-sm
                    "
				>
					<div className="flex flex-col cursor-pointer">
						{currentUser ? (
							<>
								<MenuItem label="Logout" onClick={() => signOut()} />
							</>
						) : (
							<>
								<MenuItem label="Login" onClick={() => signIn("github")} />
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
