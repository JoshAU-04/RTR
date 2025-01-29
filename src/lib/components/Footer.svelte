<footer class="footer">
  <div class="container">
    <p>© {new Date().getFullYear()} Game Project. All rights reserved.</p>
    <a href="https://github.com" target="_blank" aria-label="GitHub">
      <i class="bi bi-github"></i>
    </a>
  </div>
</footer>

<style>
  footer {
    background: var(--color-surface);
    color: var(--color-on-surface);
    padding: 1rem 2rem;
    text-align: center;
    border-top: 1px solid var(--color-outline);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer a {
    color: var(--color-on-surface);
    text-decoration: none;
    font-size: 1.5rem;
  }

  .footer a:hover {
    color: var(--color-secondary);
  }
</style>
