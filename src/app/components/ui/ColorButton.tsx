type Props = {
	text: string;
	onClick: () => void;
	size?: "small" | "big";
};

export default function ColorButton({ text, onClick, size = "small" }: Props) {
	return (
		<div>
			<button
				className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via via-rose-500 to-amber-300 p-2 text-white hover:opacity-50 transition-opacity ${
					size === "big" ? "p-[1rem] text-2xl" : "p-[0.15rem]"
				}`}
				onClick={onClick}
			>
				{text}
			</button>
		</div>
	);
}
