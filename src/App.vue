<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <MainComponent></MainComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";

  $lato: 'Lato', sans-serif;
  $raleway: 'Raleway', sans-serif;

  #app {
    background-color: #F3F3F3;

    h1, h2, h3, h4, h5, h6 {
      font-family: $lato;
    }

    p, ul, ol, dl, blockquote, em, strong, table, tr, th, td {
      font-family: $raleway;
    }

    a.red-underline:after {
      content: '';
      display: block;
      margin: auto;
      height: 3px;
      width: 0px;
      background: transparent;
      transition: width .5s ease, background-color .5s ease;
    }

    a.red-underline:hover:after {
      width: 100%;
      background: #C00;
    }

    p {
      line-height: 1.65;
      font-size: .7rem;

      @media only screen and (min-width: 375px) {
        font-size: .75rem;
      }

      @media only screen and (min-width: 425px) {
        font-size: .8rem;
      }

      @media only screen and (min-width: 768px) {
        font-size: .85rem;
        line-height: 2;
      }

      @media only screen and (min-width: 1024px) {
        font-size: 1rem;
      }

      @media only screen and (min-width: 1400px) {
        font-size: 1.22rem;
      }
    }

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
