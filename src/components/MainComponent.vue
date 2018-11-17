<template>
  <main class="content main-content">
    <section id="about" class="hero is-large section about">
      <div class="container has-text-centered">
        <div class="columns is-tablet">
          <div class="column is-8 is-offset-2">
            <div class="heading">
              <h2>About Me</h2>
            </div>
            <p><span>H</span>owdy, my name is Justin! I am 29 years young and was born and raised in San Antonio, Texas. <strong>REMEMBER THE ALAMO!!!</strong> I am an only child and my birthday is in December. I was a POG in the military (USMC) for a fortnight but have been a civilian since May of 2013. I once lived in North Carolina for almost 7 years but now I live and work in Oklahoma. I love Jeeps! I specifically have a passion for the CJ-7 and have my own classic 1984. I also have a 2018 Jeep Wrangler JK.</p>
            <p>My hobbies include tinkering with my Jeep (old and new) and reading or watching anything sci-fi, history, and a tad bit of fantasy. Some of my favorites include The Expanse (books and tv series), LoTR &amp; The Hobbit (books and movies), The Kingkiller Chronicle, Out with the Old Breed: At Peleliu and Okinawa, The Count of Monte Cristo and on and on. Also, I really enjoy western films with my favorite being Tombstone.</p>
            <em><small><a href="#top">Back to top</a></small></em>
          </div>
        </div>
      </div>
    </section>

    <section id="education" class="hero is-large section education">
      <div class="container has-text-centered">
        <div class="columns is-tablet">
          <div class="column is-8 is-offset-2">
            <div class="heading">
              <h2>Education</h2>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dignissim lectus. Mauris consectetur cursus metus vitae convallis. Nam enim velit, eleifend vitae orci sit amet, facilisis mattis dui. Mauris id tellus tempor mi consequat commodo. Sed accumsan sed sem eu ultrices. Duis non arcu nulla. Suspendisse in nunc sed magna varius mollis quis et mauris. Phasellus ac lacus vulputate, iaculis metus ac, vulputate dui. Nulla at mi vitae urna pretium cursus a id diam. In maximus tristique lorem, vitae laoreet nisi semper vitae. Nam at venenatis tellus. Morbi vel lectus sit amet libero rutrum pellentesque eget sed nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
            <em><small><a href="#top">Back to top</a></small></em>
          </div>
        </div>
      </div>
    </section>

    <section id="employment" class="hero is-large section employment">
      <div class="container has-text-centered">
        <div class="columns is-tablet">
          <div class="column is-8 is-offset-2">
            <div class="heading">
              <h2>Employment</h2>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dignissim lectus. Mauris consectetur cursus metus vitae convallis. Nam enim velit, eleifend vitae orci sit amet, facilisis mattis dui. Mauris id tellus tempor mi consequat commodo. Sed accumsan sed sem eu ultrices. Duis non arcu nulla. Suspendisse in nunc sed magna varius mollis quis et mauris. Phasellus ac lacus vulputate, iaculis metus ac, vulputate dui. Nulla at mi vitae urna pretium cursus a id diam. In maximus tristique lorem, vitae laoreet nisi semper vitae. Nam at venenatis tellus. Morbi vel lectus sit amet libero rutrum pellentesque eget sed nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
            <em><small><a href="#top">Back to top</a></small></em>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MainComponent'
}
</script>

<style scoped lang="scss">
  main.main-content {
    margin-top: -1.5rem;

    h2 {
      text-align: center;
      color: white;
      font-size: .75rem;

      @media only screen and (min-width: 375px) {
        font-size: .85rem;
      }

      @media only screen and (min-width: 425px) {
        font-size: .95rem;
      }

      @media only screen and (min-width: 768px) {
        font-size: 1.35rem;
      }

      @media only screen and (min-width: 1024px) {
        font-size: 1.6rem;
      }
    }

    section {
      p {
        text-align: justify;
      }

      @media only screen and (min-width: 320px) {
        padding: 3.5rem 2rem;
      }

      @media only screen and (min-width: 425px) {
        padding: 3.5rem 3rem;
      }

      @media only screen and (min-width: 768px) {
        padding: 5.5rem 8rem;
      }

      @media only screen and (min-width: 1024px) {
        padding: 6rem .5rem;
      }

      @media only screen and (min-width: 1400px) {
        padding: 9rem;
        min-height: 70vh;
      }

      a {
        display: inline-block;
        margin-left: 1rem;
        font-weight: bolder;
        text-align: right;
      }

      em {
        small {
          font-size: .5rem;

          @media only screen and (min-width: 425px) {
            font-size: .6rem;
          }

          @media only screen and (min-width: 768px) {
            font-size: .8rem;
          }

          @media only screen and (min-width: 1024px) {
            font-size: .9rem;
          }

          @media only screen and (min-width: 1400px) {
            font-size: 1rem;
          }
        }
      }
    }

    section.about, section.employment {
      h2, p, a {
        color: #363636;
      }
    }

    section.education {
      background-color: #292E20;
      color: #FFF;

      a {
        color: #FFF;
      }
    }
  }
</style>
