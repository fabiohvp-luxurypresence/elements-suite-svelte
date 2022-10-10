import { SvelteComponentTyped } from 'svelte';

declare module 'svelte-file-dropzone' {
	declare const __propDef: {
		props: {
			key?: string | undefined;
		};
		events: {
			[evt: string]: CustomEvent<any>;
		};
		slots: {};
	};
	export declare type DropzoneProps = typeof __propDef.props;
	export declare type DropzoneEvents = typeof __propDef.events;
	export declare type DropzoneSlots = typeof __propDef.slots;

	export default class Dropzone extends SvelteComponentTyped<
		DropzoneProps,
		DropzoneEvents,
		DropzoneSlots
	> {}

	export {};
}
