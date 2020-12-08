<template>
  <header id="top" class="hero" content>
    <nav class="navigation">
      <a class="red-underline" href="#about">About</a>
      <a class="red-underline" href="#education">Education</a>
      <a class="red-underline" href="#employment">Employment</a>
    </nav>

    <div class="image-with-centered-text">
      <figure class="image dark-tint-img">
        <img src="../assets/images/myJeep-cj7.jpg" alt="Mary Jane" />
      </figure>

      <h1 class="header-name-title"><strong>Justin Lugo</strong></h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped lang="scss">
header {
  margin-top: -4rem;

  nav {
    margin-bottom: -1.5rem;
    z-index: 1;
    padding-top: 0.7rem;
    display: flex;
    flex-direction: row;
    justify-content: center;

    font-size: 0.6rem;

    @media only screen and (min-width: 375px) {
      font-size: 0.65rem;
    }

    @media only screen and (min-width: 425px) {
      font-size: 0.75rem;
      margin-bottom: -1.8rem;
    }

    @media only screen and (min-width: 768px) {
      font-size: 0.85rem;
      margin-top: 1rem;
      margin-bottom: -3rem;
    }

    @media only screen and (min-width: 1024px) {
      font-size: 1.3rem;
      margin-bottom: -3.6rem;
    }

    a {
      color: #fff;
      padding: 0 0.5rem;

      @media only screen and (min-width: 768px) {
        padding: 0 1rem;
      }

      @media only screen and (min-width: 1024px) {
        padding: 0 3rem;
      }
    }

    a:hover {
      color: #fff;
    }
  }

  .dark-tint-img {
    position: relative;
    float: left;
    //cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 3px 5px 5px;
  }

  .dark-tint-img:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(5, 5, 5, 0.5);
    transition: all 0.3s linear;
  }

  div.image-with-centered-text {
    display: flex;
    flex-direction: column;
    position: relative;

    h1.header-name-title {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 1px;

      strong {
        color: white;
      }

      @media only screen and (min-width: 768px) {
        font-size: 1.5rem;
      }

      @media only screen and (min-width: 1200px) {
        font-size: 2.5rem;
      }
    }
  }
}
</style>
