<template>
  <footer>
    <div class="icons-footer">
      <a href="https://github.com/jlug331221" target="_blank">
        <span class="icon">
          <i
            class="fab fa-github fa-lg"
            alt="GitHub Logo Icon"
            title="My GitHub"
          ></i>
        </span>
      </a>

      <a href="mailto:jlug331221@gmail.com" target="_blank">
        <span class="icon">
          <i
            class="far fa-envelope fa-lg"
            alt="Email Envelope Icon"
            title="Email me"
          ></i>
        </span>
      </a>

      <a
        href="https://github.com/jlug331221/personal-website/raw/master/src/assets/JLugo_CV.pdf"
        download="JLugo_CV.pdf"
      >
        <span class="icon">
          <i
            class="far fa-file-pdf fa-lg"
            alt="PDF File Icon"
            title="My CV"
          ></i>
        </span>
      </a>
    </div>

    <p class="name-copywrite-footer">
      Justin Lugo | <small>&copy;</small>2019-{{ new Date().getFullYear() }}
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped lang="scss">
footer {
  padding-bottom: 1rem;
  background-color: #312c2f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  min-height: 8vh;

  div.icons-footer {
    display: flex;
    padding: 1rem 0 0 0;

    a {
      color: whitesmoke;
      display: flex;
      padding: 0.5rem;
      width: 100%;
    }

    a:hover {
      color: #c00;
    }
  }

  p.name-copyright-footer {
    padding-bottom: 1rem;
  }
}
</style>
