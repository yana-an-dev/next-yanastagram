import Image from "next/image";
type Props = { image?: string | null };

export default function Avatar({ image }: Props) {
	return (
		<div className="w-10 h-10 p-0.5 rounded-full bg-gradient-to-bl from-fuchsia-600 via via-rose-500 to-amber-300 hover:opacity-50 transition-opacity">
			<img
				className="rounded-full p-[0.1rem] w-9"
				alt="user profile"
				src={image ?? undefined}
				referrerPolicy="no-referrer"
			/>
		</div>
	);
}
