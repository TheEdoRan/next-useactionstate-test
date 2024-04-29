"use client";

import { useActionState } from "react";
import { testAction } from "./actions";

export default function Home() {
	const [state, action] = useActionState(testAction, { uuid: "" });

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<button
				className="border px-2 py-1 rounded"
				onClick={async () => {
					console.log("STARTING TO EXECUTE ACTION");
					await action("johndoe");
					console.log("FINISHED EXECUTING ACTION");
				}}>
				Execute action
			</button>
			<pre>{JSON.stringify(state, null, 1)}</pre>
		</main>
	);
}
