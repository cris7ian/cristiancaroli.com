import React from 'react'

const Personal = () => (
  <article className="row-fluid">
    <header className="span3">
      <h3>Personal Interests</h3>
    </header>
    <div className="span9">
      <h4>Film production and performing arts</h4>
      <p>
        I have worked in different multimedia projects that have taken me to Film Festivals in Sitges, San Sebastián and all over Latin America.
      </p>
      <br />

      <h4>Writing</h4>
      <p>
        I am a published author of short stories and I’m currently writing an action novel and a steampunk oddisey.
      </p>
      <br />
      <p>
        You can buy my book
        {' '}
        <i>Bajo la Sombra de los Elefantes</i>
        {' '}
        <a href="http://www.amazon.com/Bajo-Sombra-Los-Elefantes-Spanish/dp/1511523093/ref=sr_1_1?ie=UTF8&qid=1432376873&sr=8-1&keywords=bajo+la+sombra+de+los+elefantes">
          in Amazon
        </a>
        .
      </p>
      <br />
      <p>
        Also, I have my own storytelling blog
        {' '}
        <a
          href="http://www.invisiblebridg.es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Invisible Bridges
        </a>
      </p>
      <br />
      <h4>Open water diver, certified IANTD diver</h4>
      <p>Gotta love fish, water and all that stuff.</p>
      <br />
    </div>
  </article>
)

export default Personal