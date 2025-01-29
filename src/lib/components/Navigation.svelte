<script>
  export let links = [
    { name: "Release Notes", href: "/RTR/wiki/releases" },
    { name: "Wiki", href: "/RTR/wiki" },
    { name: "Entities", href: "/RTR/wiki/entities" },
    { name: "XP", href: "/RTR/wiki/experience" }
  ];
</script>

<nav class="navbar">
  <div class="container-fluid">
    <a class="logo navbar-brand me-auto mb-2" href="/RTR">RTR</a>
    <ul class="navbar-nav">
      {#each links as { name, href }}
        <li class="nav-item"><a class="nav-link" href={href}>{name}</a></li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  nav {
    background: var(--color-primary);
    color: var(--color-on-primary);
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color-on-primary);
    text-decoration: none;
  }
</style>


