"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";
type Props = {
	providers: Record<string, ClientSafeProvider>;
	callbackUrl: string;
};

export default function SignIn({ providers, callbackUrl }: Props) {
	return (
		<>
			{Object.values(providers).map(({ name, id }) => (
				<div key={name}>
					<ColorButton
						size="big"
						key={id}
						text={"Sign in with Google"}
						onClick={() => {
							signIn(id, { callbackUrl });
						}}
					/>
				</div>
			))}
		</>
	);
}
