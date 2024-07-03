import { client } from "./sanity";
type OAuthUser = {
	id: string;
	email: string;
	name: string;
	username: string;
	image?: string | null;
};

export async function addUser({ id, username, email, image }: OAuthUser) {
	return client.createIfNotExists({
		_id: id,
		_type: "user",
		username,
		email,
		image,
		following: [],
		followers: [],
		bookmarks: [],
	});
}
