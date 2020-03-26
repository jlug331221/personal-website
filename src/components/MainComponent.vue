<template>
  <main class="content main-content">
    <section id="about" class="hero is-large section about">
      <div class="container has-text-centered">
        <div class="columns is-tablet">
          <div class="column is-8 is-offset-2">
            <div class="heading">
              <h2><span>About Me</span></h2>
            </div>

            <p>
              <span>H</span>owdy, my name is Justin! I am {{ myAge }} years young and was born and raised
              in San Antonio, Texas. <strong>REMEMBER THE ALAMO!!!</strong> I am an only child and
              my birthday is in December. I was a POG in the military (USMC) for a fortnight but
              have been a civilian since May of 2013. I once lived in North Carolina for about 6
              years. Then I moved back to Texas, and then to Oklahoma, and now I'm back in North
              Carolina. I do love me some Jeeps! I specifically have a passion for the CJ-7 and
              used to own a classic 1984. I currently drive a 2018 Jeep Wrangler JK.
            </p>

            <p>
              My hobbies include tinkering with my Jeep and reading or watching anything related
              to sci-fi, history, and fantasy. I also love to fish and have only recently started
              to learn to play guitar thanks to my friend David. Some of my favorite books, films,
              and shows include the following: The Expanse, LoTR &amp; The Hobbit, The Kingkiller
              Chronicle, Out with the Old Breed: At Peleliu and Okinawa, The Count of Monte
              Cristo, The Forever War, and on and on... Oh, I really enjoy western films, with my
              favorite being Tombstone.
            </p>

            <p>
              My latest interest is motorsports. I enjoy all types of motor racing, but my favorite
              is Formula 1. My favorite all time driver is Fernando Alonso, but I don't really
              have a favorite driver within the current grid (maybe K Mag ??). Actually, my love
              of F1 has taken me from my beloved Texas and brought me back to North Carolina.
            </p>

            <em><small><a class="red-underline" href="#top">Back to top</a></small></em>
          </div>
        </div>
      </div>
    </section>

    <section id="education" class="hero is-large section education">
      <div class="container has-text-centered">
        <div class="columns is-tablet">
          <div class="column is-8 is-offset-2">
            <div class="heading">
              <h2><span>Education</span></h2>
            </div>

            <p>
              I started my education immediately after high school, when I attended the University
              of Texas at San Antonio. I don't really remember much of that time but I did attend
              each and every lecture.
            </p>

            <p>
              During my military service, I was stationed in North Carolina and decided to stay
              there and finish my undergraduate degree at East Carolina University.
              <strong class="white-bold">Go Pirates!!!</strong> I received my bachelor's degree in
              Computer Science and graduated in May 2016 with a 3.8 GPA.
            </p>

            <p>
              My most recent formal educational persuit sent me to Lubbock, Texas, where I
              attended Texas Tech University. <strong>Go Red Raiders!!!</strong> While there, I
              once again decided to study Computer Science and received my master's degree in May
              2018 with a final GPA of 4.0.
            </p>

            <em><small><a class="red-underline" href="#top">Back to top</a></small></em>
          </div>
        </div>

        <div class="columns is-tablet">
          <div class="column is-half">
            <figure class="image is-inline-block education-seal">
              <img src="../assets/images/texas-tech-seal.png" alt="Texas Tech Seal">
            </figure>
          </div>

          <div class="column is-half">
            <figure class="image is-inline-block education-seal">
              <img src="../assets/images/east-carolina-seal.png" alt="East Carolina Seal">
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section id="employment" class="hero is-large section employment">
      <div class="container has-text-centered">
        <div class="columns is-tablet">
          <div class="column is-8 is-offset-2">
            <div class="heading">
              <h2><span>Employment</span></h2>
            </div>

            <p>
              My first job after graduating high school (2007) was a veterinarian technician. I
              really didn't know what I wanted to do as an adult but I thought a verterinarian
              would be a good job. I did this for about two years before joining the military.
            </p>

            <p>
              I enlisted in the United States Marine Corps towards the end of May 2009. My MOS in
              the USMC was 0651 - Data Network Specialist. That might be labeled differently now
              but I think it is Cyber Network Operator. During my time, I did get the opportunity
              to deploy for one year, February 2011 through February 2012. My military service
              ended in May 2013.
            </p>

            <p>
              During my undergraduate studies at ECU (2013 - 2016), I utilized my training from the
              military and maintained a job within the student computing IT department on campus. I
              did this for about a year and a half. Then, during my final two semesters, I tutored
              Biology and was also the IT administrator for Atheletic Student Development.
            </p>

            <p>
              The summer before entering graduate school, I was a teacher for Youth Code Jam of
              San Antonio. I taught programming to elementary through high school students, with
              an emphasis on C++, Java, and the beginner coding language Scratch. I also held
              another position that summer with Austin Coding Academy, where I taught adults basic
              web development, particularly HTML and CSS.
            </p>

            <p>
              Upon arriving at Texas Tech in August 2016, I was able to get a job within the
              College of Media and Communications as a Web Application Developer. I did this for
              my first year of graduate school. During the summer leading into my final year, I was
              awarded the SMART Scholarship. This was a fully funded scholarship and excellent
              opportunity that allowed me to focus full time on my studies. Thus, my only job
              during my last two semesters at Texas Tech was to be a good student.
            </p>

            <p>
              The SMART Scholarship included a one year commitment of federal government work
              once I had graduated. This commitment sent me to Oklahoma City, Oklahoma. I held
              a position as a Computer Scientist on Tinker Air Force Base. My job was to maintain
              software for the suite of applications within the E-3 AWACS aircraft. My time there
              lasted from June 2018 through June 2019.
            </p>

            <p>
              If you have managed to read the <em>About Me</em> section above, then you'll know of
              my love of motorsport. This has led me to my current position within the Haas Formula
              1 Team. I am a Software Engineer within the Computational Fluid Dynamics department.
              I have been at this position since late June, 2019.
            </p>

            <em><small><a class="red-underline" href="#top">Back to top</a></small></em>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {

  name: 'MainComponent',

  data () {
    return {
      myAge: 0
    }
  },

  methods: {
    getAge (birthdate) {
      const yearInMilliSecs = 3.15576e+10

      return Math.floor((new Date() - new Date(birthdate).getTime()) / yearInMilliSecs)
    }
  },

  created () {
    this.myAge = this.getAge('1988-12-21')
  }

}
</script>

<style scoped lang="scss">
  main.main-content {
    margin-top: -1.5rem;

    h2 {
      overflow: hidden;
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

    h2 > span {
      position: relative;
      display: inline-block;
    }

    h2 > span:before, h2 > span:after {
      content: '';
      position: absolute;
      top: 50%;
      border-bottom: 2px solid;
      width: 592px; /* half of limiter */
      margin: 0 .6rem;
      color: #C00;
    }

    h2 > span:before {
      right: 100%;
    }

    h2 > span:after {
      left: 100%;
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

      figure.education-seal {
        height: 128px;
        width: 128px;

        @media only screen and (min-width: 1024px) {
          height: 256px;
          width: 256px;
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

      strong {
        color: #FFF;
      }
    }
  }
</style>
