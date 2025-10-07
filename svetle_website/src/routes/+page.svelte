<script lang="ts">
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
</script>

<div class="flex dark:bg-gray-800 bg-white text-gray-800 dark:text-white flex-col items-center justify-center h-screen">
    <div class="flex flex-col items-center justify-center">
        <p class="text-2xl">i'm aled, a software developer from warwick, uk</p>
        {#each links as link}
            <a class="text-2xl p-5 dark:border-white border-gray-800 border-2" href={link.href}>{link.text}</a>
        {/each}
        <section class="flex flex-row items-center justify-center">
            
            <a href="https://www.linkedin.com/in/aledwassell">linkedin</a>
            <a href="https://github.com/aledwassell">github</a>
        </section>
    </div>
</div>