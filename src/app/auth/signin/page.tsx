import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import SignIn from "@/app/components/SignIn";

type Props = {
	searchParams: {
		callbackUrl: string;
	};
};
export default async function SignInPage({
	searchParams: { callbackUrl },
}: Props) {
	const session = await getServerSession(authOptions);
	if (session) {
		redirect("/");
	}
	const providers = (await getProviders()) ?? {};

	return (
		<section className="flex justify-center mt-24">
			<SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
		</section>
	);
}

//this signinpage is equivalent of getServerSideProps in v12. server component
