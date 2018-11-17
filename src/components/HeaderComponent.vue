<template>
  <header id=top class=hero content>
    <nav class="navigation">
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#employment">Employment</a>
    </nav>

    <figure class="image dark-tint-img">
      <img src="../assets/images/myJeep-cj7.jpg" alt="Mary Jane">
    </figure>

    <h1 class="header-name-title"><strong>Justin Lugo</strong></h1>
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
      padding-top: .7rem;
      display: flex;
      flex-direction: row;
      justify-content: center;

      font-size: .6rem;

      @media only screen and (min-width: 375px) {
        font-size: .65rem;
      }

      @media only screen and (min-width: 425px) {
        font-size: .75rem;
        margin-bottom: -1.8rem;
      }

      @media only screen and (min-width: 768px) {
        font-size: .85rem;
        margin-top: 1rem;
        margin-bottom: -3rem;
      }

      @media only screen and (min-width: 1024px) {
        font-size: 1.3rem;
        margin-bottom: -3.6rem;
      }

      a {
        color: #FFF;
        padding: 0 .5rem;

        @media only screen and (min-width: 768px) {
          padding: 0 1rem;
        }

        @media only screen and (min-width: 1024px) {
          padding: 0 3rem;
        }
      }

      a:hover {
        color: #FFF;
      }
    }

    .dark-tint-img {
      position: relative;
      float: left;
      //cursor: pointer;
      box-shadow: rgba(0, 0, 0, .2) 3px 5px 5px;
    }

    .dark-tint-img:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(5, 5, 5, .5);
      transition: all .3s linear;
    }

    h1.header-name-title {
      position: absolute;
      padding-bottom: .15rem;
      white-space: nowrap;
      transform: translate(-50%, -50%);
      text-align: center;
      text-transform: uppercase;
      border-bottom: 2px solid #FFF;

      left: 50%;
      top: 13.5%;
      letter-spacing: 1.5px;

      @media only screen and (min-width: 320px) {
        top: 20%;
        font-size: 1rem;
      }

      @media only screen and (min-width: 320px) and (min-height: 800px){
        top: 15%;
        font-size: 1rem;
      }

      @media only screen and (min-width: 375px) {
        top: 20.5% ;
        font-size: 1.2rem;
      }

      @media only screen and (min-width: 375px) and (min-height: 800px){
        top: 17.5%;
        font-size: 1.2rem;
      }

      @media only screen and (min-width: 425px) {
        top: 18.5%;
        font-size: 1.4rem;
      }

      @media only screen and (min-width: 768px) {
        top: 30%;
        font-size: 2rem;
      }

      @media only screen and (min-width: 1024px) {
        top: 40%;
        font-size: 2.25rem;
      }

      @media only screen and (min-width: 1024px) and (min-height: 1300px){
        top: 27%;
        font-size: 2.25rem;
      }

      @media only screen and (min-width: 1400px) {
        top: 50%;
        font-size: 3rem;
      }

      @media only screen and (min-width: 1600px) {
        top: 70%;
        font-size: 3.5rem;
      }

      strong {
        color: white;
      }
    }
  }
</style>
