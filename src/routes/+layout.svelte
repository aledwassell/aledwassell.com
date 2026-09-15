<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import faviconSvg from '$lib/assets/favicon.svg';

	let { children } = $props();

	const title = 'Aled Wassell — Developer';
	const description =
		'Aled Wassell is a developer who loves building things with code — explore his projects and connect on GitHub or LinkedIn.';
	const url = 'https://aledwassell.dev/';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Aled Wassell" />
	<link rel="canonical" href={url} />

	<link rel="icon" href={favicon} />
	<link rel="icon" type="image/svg+xml" href={faviconSvg} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

{@render children?.()}
