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
	class="flex h-screen flex-col items-center justify-center bg-white px-5 font-bold text-gray-800 transition-colors duration-400 lg:px-0 dark:bg-gray-800 dark:font-normal dark:text-white"
>
	<div class="flex w-full flex-col space-y-5 lg:w-3xl">
		<h1 class="text-2xl">
			i'm aled wassell<span class="text-pink-600 dark:text-pink-400">/</span>
		</h1>
		<ul class="w-full">
			{#each links as link, last}
				<li
					class="flex w-full justify-end border-gray-800 text-2xl dark:border-white {last
						? 'border-b-0'
						: 'border-b-2'}"
				>
					<a
						href={link.href}
						target="_blank"
						class="flex w-full items-center justify-between py-5 transition-colors duration-400 hover:bg-gray-50 hover:text-emerald-600 dark:hover:bg-gray-700 dark:hover:text-emerald-500"
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

			<ul class="flex flex-row">
				<li>
					<a
						href="https://www.linkedin.com/in/aled-wassell-688bba1a/"
						class="py-2 transition-colors duration-400 hover:bg-blue-500 hover:text-white"
						target="_blank">linkedin<span class="text-pink-600 dark:text-pink-400">/</span></a
					>
				</li>
				<li>
					<a
						href="https://github.com/aledwassell"
						class="py-2 transition-colors duration-400 hover:bg-green-700 hover:text-white"
						target="_blank">github<span class="text-pink-600 dark:text-pink-400">/</span></a
					>
				</li>
			</ul>
		</section>
	</div>
</div>
