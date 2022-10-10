<script lang="ts">
	import Link from '../../Components/Link/Link.svelte';
	import Text from '../../Components/Text/Text.svelte';
	import Uploader from '../../Uploader/Uploader.svelte';
	import { elements } from '../elementsStore';

	export let content = `Urna tortor ipsum venenatis porttitor nunc id ut purus. Cursus nec quam fringilla pellentesque justo lobortis tempor. Volutpat netus velit sed congue netus tortor. Arcu enim quis lobortis.

At consectetur sit fames enim id amet nisl vulputate. Cras mi facilisis id mauris, cursus nunc turpis nunc. Nisl, amet ac gravida etiam at vel donec consequat. Aliquam et tristique lacus.`;
	export let files: HTMLInputElement[] = [];
	export let header = 'Jane Williams';
	export let image = 'https://i.ytimg.com/vi/34U8vOHEd0c/maxresdefault.jpg';
	export let link = 'https://luxurypresence.com';
	export let preview = $elements.preview;

	$: elements.setPreview(preview);
</script>

<section>
	<article>
		<div class="header">
			<Text bind:value={header} options={{ minSize: 2 }} />
		</div>
		<div class="content">
			<Text bind:value={content} />
		</div>
		<div class="link">
			<Link bind:value={link} target="_blank" />
		</div>
	</article>
	<article style="--image:url({image})">
		<Uploader bind:files />
	</article>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
	}

	article {
		width: 50%;
	}

	article * {
		margin: auto auto;
	}

	article:nth-child(1) {
		padding: 2.5% 2.5%;
	}

	article:nth-child(2) {
		background-image: var(--image);
		background-size: cover;
		flex-shrink: 0;
	}

	.content {
		margin-top: 4.5%;
		height: 60%;
		width: 90%;
	}

	.header {
		height: 30%;
		width: 90%;
		align-items: flex-end;
		text-align: left;
	}

	.link {
		margin-top: 3%;
		height: 4.5%;
		width: 90%;
	}
</style>
