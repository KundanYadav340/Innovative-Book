import React from 'react';
import brandLogo from './../../../../../images/mainImg/brand-logo.png';

const topic1 = (props) => {
  return (
    <div>
        <h3>Thermodynamics</h3><hr/>
                    <p>
                        The First Law of thermodynamics is a formulation of the law of conservation of energy, adapted for thermodynamic processes. A simple formulation is: "the total energy in a system remains constant, although it may be converted from one form to another."<br/> Another common phrasing is that "energy can neither be created nor destroyed" (in a "closed system"). While there are many subtleties and implications, which may be more precisely captured in more complex formulations, this is the essential principle of the First Law.
                        It distinguishes in principle two forms of energy transfer, heat and thermodynamic work for a system of a constant amount of matter.<br/> The law also defines the internal energy of a system, an extensive property for taking account of the balance of energies in the system.
                        The law of conservation of energy states that the total energy of any isolated system, which cannot exchange energy or matter, is constant. Energy can be transformed from one form to another, but can be neither created nor destroyed.
                        Of course, by the mass-energy equivalence principle in Einstein's famous equation, matter and energy can be converted into one another, without violating the First Law. (This is in the context of a 'rest frame', roughly: a system observed from the same frame of reference; to take relativity into account, any reference frame difference - e.g. relative motion - needs to be accounted for.)
                    </p>
                    <h4>1.1 Newton's Law of Cooling</h4>
                    <p>
                        An equivalent statement is that perpetual motion machines of the first kind are impossible; work 
                        W done by a system on its surroundings requires that the system's internal energy 
                        U decrease or be consumed, so that the amount of internal energy lost by that work must be resupplied as heat 
                        Q by an external energy source or as work by an external machine acting on the system (so that 
                        U is recovered) to make the system work continuously.<br/>
                        The ideal isolated system, of which the entire universe is an example, is often only used as a model. Many systems in practical applications require the consideration of internal chemical or nuclear reactions, as well as transfers of matter into or out of the system. For such considerations, thermodynamics also defines the concept of open systems, closed systems, and other types.
                    </p>
                    <div className='img-box'>
                        <img src={brandLogo} alt="logo" />
                        <img src={brandLogo} alt="logo" />
                    </div>
    </div>
  )
}

export default topic1;