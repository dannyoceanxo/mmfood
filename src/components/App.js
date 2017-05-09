import React, { Component } from 'react'

class App extends Component {
  render () {
    return <div className='main'>
      <div className='mexicanfood'>
        <h2>Mexico</h2>
        <p>Tacos- they have shells, meat, cheese, and other stuff.  Eat them.  Or don't, we don't care</p>
        <p>Burritos- like a taco but better.  Shut up, you like it</p>
        <p>Enchiladas- it just keeps getting better.  Like all the previous items but with cheese.  It's dope af</p>
      </div>
      <div className='americanfood'>
        <h2>Merica, fuck yeah</h2>
        <p>We've got wings, nerds.  Eat them up.  Options include mild, medium, hot, spicy af, and "call the cops."</p>
        <p>Sushi- But I can hear you in your whiny voice saying "Danny, that's not American."  Shut up, it's my restaurant</p>
        <p>Burger- imagine if our mayor/God king Guy Fieri himself came down from Flavortown to bless you.  It's like that</p>
        <p>Grilled cheese- it's gonna feel like a heart attack and you're gonna love it</p>
      </div>
      <div className='italianfood'>
        <h2>Italian memes</h2>
        <p>Chicken parmesan- It's all the best parts of chicken but with cheese and sauce.  Trust me</p>
        <p>Spaghetti and meatballs- if you're not familiar with this, hang your head in shame.  It's better than your grandma's.  That's right, her game is weak.  Step it up</p>
        <p>Penne vodka- I just really like it a lot</p>
      </div>
      <div className='hourlist'>
        <h1>Hours of Operation</h1>
        <p>Sunday- 11am-8pm-ish</p>
        <p>Monday- closed</p>
        <p>Tuesday- 11am-11pm</p>
        <p>Wednesday- 11am-11pm</p>
        <p>Thursday- 11am-1am</p>
        <p>Friday- 11am-4am</p>
        <p>Saturday- 11am-4am</p>
      </div>
      <div className='whereweat'>
        <h1>Where We Be At</h1>
        <p>You can find us located at 666 South Howard Avenue in Tampa, FL</p>
      </div>
    </div>
  }
}

export default App
