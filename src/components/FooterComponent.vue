<template>

  <footer>
    <div class="icons-footer">
      <a href="https://github.com/jlug331221" target="_blank">
        <span class="icon">
          <img src="../assets/images/GitHub.png" alt="GitHub Logo" title="My GitHub">
        </span>

        <!-- <span class="icon">
          <img src="../assets/images/email.svg" alt="Email" title="Email Me">
        </span> -->
      </a>
    </div>

    <p class="name-copywrite-footer">
      Justin Lugo | <small>&copy;</small>&nbsp;{{ new Date().getFullYear() }}
    </p>
  </footer>

</template>

<script>

export default {
  name: 'FooterComponent'
}

</script>

<style scoped lang="scss">

  footer {
    padding-bottom: 1rem;
    background-color: #312C2F;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    min-height: 8vh;

    div.icons-footer {
      display: flex;
      padding: 1rem 0 0 0;
    }

    p.name-copyright-footer {
      padding-bottom: 1rem;
    }
  }

</style>
