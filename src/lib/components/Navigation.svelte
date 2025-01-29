<script>
  export let links = [
    { name: "Release Notes", href: "/wiki/releases" },
    { name: "Wiki", href: "/wiki" },
    { name: "Entities", href: "/wiki/entities" },
    { name: "XP", href: "/wiki/experience" }
  ];
</script>

<nav class="navbar">
  <div class="container-fluid">
    <a class="brand navbar-brand me-auto mb-2" href="/">RTR</a>
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

  .brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color-on-primary);
    text-decoration: none;
  }

  .nav-link a:hover {
    color: var(--color-secondary);
  }
</style>


