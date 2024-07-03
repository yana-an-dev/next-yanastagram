import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: false, // set to `false` to bypass the edge cache // 동적인 데이터를 사용할 것이므로 falses
	apiVersion: "2024-07-03", // use current date (YYYY-MM-DD) to target the latest API version
	token: process.env.SANITY_SECRET_TOKEN, // Only if you want to update content with the client
});
