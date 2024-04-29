"use server";

type ActionState = {
	uuid: string;
};

export async function testAction(
	prevState: ActionState,
	name: string
): Promise<ActionState> {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return {
		uuid: crypto.randomUUID(),
	};
}
