import Image from "next/image";
type Props = {
	image?: string | null;
	size?: "small" | "normal";
	highlight?: boolean;
};

export default function Avatar({
	image,
	size = "small",
	highlight = false,
}: Props) {
	return (
		<div className={getContainerStyle(size, highlight)}>
			<img
				className={`bg-white rounded-full p-[0.1rem] ${getImageSizeStyle(
					size
				)}`}
				alt="user profile"
				src={image ?? undefined}
				referrerPolicy="no-referrer"
			/>
		</div>
	);
}

function getContainerStyle(size: string, highlight: boolean): string {
	const baseStyle =
		"rounded-full flex justify-center items-center hover:opacity-50 transition-opacity";
	const highlightStyle = highlight
		? "bg-gradient-to-bl from-fuchsia-600 via via-rose-500 to-amber-300"
		: "";
	const sizeStyle = size === "small" ? "w-9 h-9" : "w-[68px] h-[68px]";
	return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
	return size === "small" ? "w-[34px] h-[34px] p-[1px]" : "w-16 h-16 p-[1px]";
}
