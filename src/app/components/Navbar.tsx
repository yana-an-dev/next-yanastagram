"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import HomeIcon from "./ui/icons/HomeIcon";
import ColorButton from "./ui/ColorButton";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "./ui/Avatar";

const menu = [
	{ href: "/", icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
	{
		href: "/search",
		icon: <SearchIcon />,
		clickedIcon: <SearchFillIcon />,
	},
	{
		href: "/new",
		icon: <NewIcon />,
		clickedIcon: <NewFillIcon />,
	},
];

export default function Navbar() {
	const pathName = usePathname();
	const { data: session } = useSession();
	const user = session?.user;

	return (
		<div className="flex justify-between items-center px-6">
			<Link href="/">
				<h1 className="text-3x font-bold">Yanastagram</h1>
			</Link>
			<nav>
				<ul className="flex gap-4 items-center p-4">
					{menu.map((item) => (
						<li key={item.href}>
							<Link href={item.href}>
								{pathName === item.href
									? item.clickedIcon
									: item.icon}
							</Link>
						</li>
					))}
					{user && (
						<li>
							<Link href={`/user/${user.username}`}>
								<Avatar
									image={user.image}
									highlight={true}
									size={"small"}
								/>
							</Link>
						</li>
					)}
					<li>
						{" "}
						{session ? (
							<ColorButton
								text="Sign Out"
								onClick={() => {
									signOut();
								}}
							/>
						) : (
							<ColorButton
								text="Sign in"
								onClick={() => {
									signIn();
								}}
							/>
						)}
					</li>
				</ul>
			</nav>
		</div>
	);
}
