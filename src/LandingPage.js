import React from 'react'

function LandingPage() {
  return (
    <div> 
        <form action="" className='search'>
           <input type="search"  placeholder='Enter Movie Title' />
        </form>

        <ul className='movies'>
            <li>
<div className="movie">
    <figure>
<img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/kdPMUMJzyYAc4roD52qavX0nLIC.jpg" />
    <figcaption>
    <h2 className="movie__title">Talk to Me</h2>
    </figcaption>
    </figure>
</div>
            </li>
        </ul>
    </div>
  )
}

export default LandingPage
