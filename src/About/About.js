import React, {Component} from 'react';

class About extends Component {
  render() { 
    return (
      <section className= "about" id="about">
          <header>
              What is Inner Engineering?
          </header>
          <main>
              <p>Inner Engineering is a technology for well-being derived from the science of Yoga. 
                 It is a comprehensive outlook to personal growth that brings about a shift in the way you perceive and experience your life, your work, and the world that you live in.</p>
              <p>We believe in a holistic approach to wellness and encourage tapping into your unique beauty in these four areas: 
               Energy-(the food we eat), Physical-(exercise/ meditation), Emotional Wellbeing and Spiritual Growth.</p>
              <p>This app provides a place for you to set goals, celebrate your progress, and find ideas for inspiration. 
                We have also included an online gratitude journal - because the more you can appreciate what you already have, the more you love yourself and the world. </p>
          </main>
      </section>
      );
    }
}
 
export default About;