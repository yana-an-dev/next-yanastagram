import { User } from "@/model/user";
import Avatar from "./ui/Avatar";

type Props = {
	user: User;
};

export default function SideBar({ user: { name, username, image } }: Props) {
	return (
		<>
			<div className="flex item-center">
				{image && <Avatar image={image} size="normal" />}
				<div className="ml-4">
					<p className="font-bold">{username}</p>
					<p className="text-lg text-neutral-500 leading-4">{name}</p>
				</div>
			</div>
			<p className="text-sm text-neutral-500 mt-8">
				About Help Press API Jobs Privacy Terms Location Language
			</p>
			<p className="font-bold text-sm text-neutral-500 mt-8">
				@Copyright Yanastagram
			</p>
		</>
	);
}
