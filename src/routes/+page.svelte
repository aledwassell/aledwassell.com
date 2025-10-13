<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let links = [
		{
			href: 'https://iamgomez.shop/',
			text: 'i am gomez shop',
			icon: 'logos--solidjs-icon'
		},
		{
			href: 'https://emma-birthday-invites.web.app/',
			text: "emma's birthday invites",
			icon: 'logos--solidjs-icon'
		}
	];

	let isDark = false;

	onMount(() => {
		if (!browser) return;

		const storedTheme = localStorage.getItem('theme');
		switch (storedTheme) {
			case 'dark':
				isDark = true;
				document.documentElement.classList.add('dark');
				break;
			case 'light':
				isDark = false;
				document.documentElement.classList.remove('dark');
				break;
			default:
				isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				document.documentElement.classList.toggle('dark', isDark);
		}
	});

	function toggleDarkMode() {
		isDark = !isDark;

		if (browser) {
			document.documentElement.classList.toggle('dark', isDark);
			const theme = isDark ? 'dark' : 'light';
			localStorage.setItem('theme', theme);
		}
	}
</script>

<div
	class="flex h-screen flex-col items-center justify-center bg-background px-5 font-bold text-text lg:px-0 dark:bg-background-dark dark:font-normal dark:text-text-dark"
>
	<div class="flex w-full flex-col space-y-5 lg:w-3xl">
		<h1 class="text-6xl">
			i'm<span class="text-pink-500">_</span>aled<span class="text-pink-500">_</span>wassell<span
				class="text-pink-500">/</span
			>
		</h1>
		<p class="text-xl">i'm a developer who loves to build things with code! 🚀</p>
		<ul class="w-full">
			{#each links as link, last}
				<li
					class="flex w-full justify-end border-dashed border-text text-2xl dark:border-text-dark {last
						? 'border-b-0'
						: 'border-b-2'}"
				>
					<a
						href={link.href}
						target="_blank"
						class="flex w-full items-center justify-between py-5 text-text transition-colors duration-300 hover:bg-emerald-500 hover:text-text-dark dark:text-text-dark"
					>
						{link.text}
						<span class="{link.icon} max-h-12 max-w-12"></span>
					</a>
				</li>
			{/each}
		</ul>

		<section class="flex items-center justify-between">
			<button onclick={toggleDarkMode} class="cursor-pointer" aria-label="Toggle dark mode">
				{#if isDark}
					<span class="solar--sun-bold-duotone"></span>
				{:else}
					<span class="solar--moon-stars-bold"></span>
				{/if}
			</button>

			<ul class="flex flex-row text-xl">
				<li>
					<a
						href="https://www.linkedin.com/in/aled-wassell-688bba1a/"
						class="py-2 text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-text-dark"
						target="_blank"
					>
						[linkedin]
					</a>
				</li>
				<li>
					<a
						href="https://github.com/aledwassell"
						class="py-2 text-green-500 transition-colors duration-300 hover:bg-green-500 hover:text-text-dark"
						target="_blank"
					>
						[github]
					</a>
				</li>
			</ul>
		</section>
	</div>
</div>
