<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    let links = [
        {
            href: "/resume",
            text: "resume"
        },
        {
            href: "/projects",
            text: "projects"
        }
    ];

    let isDark = false;

    onMount(() => {
        if(!browser) return;

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

<div class="flex dark:bg-gray-800 bg-white text-gray-800 dark:text-white flex-col items-center justify-center transition-colors duration-400 h-screen px-5 lg:px-0">


    <div class="flex flex-col lg:w-3xl w-full space-y-5">
        <h1 class="text-2xl">i'm aled wassell<span class="text-pink-600 dark:text-pink-400">/</span></h1>
        <ul class="w-full">
            {#each links as link, last}
                <li class="text-2xl dark:border-white border-gray-800 w-full flex justify-end {last ? 'border-b-0' : 'border-b-2'}">
                    <a href={link.href} target="_blank" class="hover:text-emerald-600 dark:hover:text-emerald-600 hover:bg-gray-50 dark:hover:bg-gray-700 py-5 w-full transition-colors duration-400">{link.text}</a>
                </li>
            {/each}
        </ul>

        <section class="flex items-center justify-between">
            <button
                onclick={toggleDarkMode}
                class="cursor-pointer"
                aria-label="Toggle dark mode"
            >
                {#if isDark}
                    <span class="solar--sun-bold-duotone"></span>
                {:else}
                    <span class="solar--moon-stars-bold"></span>
                {/if}
            </button>
            
            <ul class="flex flex-row">
                <li>
                    <a href="https://www.linkedin.com/in/aledwassell" class="hover:bg-blue-500 hover:text-white transition-colors duration-400" target="_blank">linkedin/</a>
                </li>
                <li>
                    <a href="https://github.com/aledwassell" class="hover:bg-green-700 hover:text-white transition-colors duration-400" target="_blank">github/</a>
                </li>
            </ul>
        </section>
    </div>
</div>