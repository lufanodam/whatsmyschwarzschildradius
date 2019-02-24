import React,
{
  Component
} from 'react';

import '../styles/global.css'

class Sidebar extends Component {

render() {
  return (
    <div>
      <p>
      Sidebar<br/>
      A black hole is a celestial object whose gravitational field is strong enough to prevent light from escaping. They are formed from dead stars about twice the mass of the sun. When the star runs out of hydrogen and helium used in stellar nucleosynthesis, there is not enough thermal pressure to balance gravitational forces. When the  gravitational force overcomes thermal pressure, it is then held up by electron degeneracy pressure (this is what holds white dwarf stars in equilibrium). Electron degeneracy pressure is an outward force that arises from the Pauli Exclusion Principle. The Pauli Exclusion Principle dictates that no identical half-integer spin particles can occupy the same quantum state. Electrons, which have half integer spin, are being forced into the same quantum state by gravity. Because this cannot occur, the degenerate electrons combine with protons to form neutrons, which also have half-integer spin. Once this fermionic transition takes place, the star is now held up by neutron degeneracy pressure. If the gravity is strong enough, as for a >2.17 solar mass star (the Tolman–Oppenheimer–Volkoff limit), the neutron degeneracy pressure can be overcome by gravity. When this takes place, the neutron star forms a black hole. The black hole's mass is forced into an infinitesimal volume, creating a region of spacetime with infinite density. This region of spacetime is so stretched by the black hole that not even light can escape. This is known as the Schwarzschild radius. The easiest way, though theoretically unsound, to derive the Schwarzschild radius is to integrate the gravitational force from some theoretical radius, r, to infinity and setting this equal to the kinetic energy of a mass, m, traveling at the speed of light. This yields the result rs = 2gm/c^2
      </p>
    </div>
    );
  }
}

export default Sidebar;
