import React,
{
  Component
} from 'react';

import '../styles/global.css'

class Sidebar extends Component {

render() {
  return (
    <div className='sidebar'>
      <p>
      Sidebar<br/>
      A black hole is a celestial object with a gravitational field strong enough to prevent light from escaping. They are formed from dead stars about twice the mass of the sun. When a star runs out of hydrogen and helium used in stellar nucleosynthesis, there is not enough thermal pressure to balance the gravitational force inward. When the gravitational force overcomes thermal pressure, the star is then held up by electron degeneracy pressure (this is what holds white dwarf stars in hydrostatic equilibrium). Electron degeneracy pressure is an outward force that arises from the Pauli Exclusion Principle. The Pauli Exclusion Principle states that no two identical half-integer spin particles (fermions) can occupy the same quantum state. In other words, identical fermions can't occupy the same location. Electrons, which are fermions, are being pushed into the same space by gravity. The degenerate electrons must combine with protons, forming neutrons. Once this fermionic transition takes place, the star is now held up by neutron degeneracy pressure. If the gravity is strong enough, as for a >2.17 solar mass star (the Tolman–Oppenheimer–Volkoff limit), the neutron degeneracy pressure can be overcome by gravity. When this takes place, the neutron star forms a black hole. The black hole's mass is forced into an infinitesimal volume, creating a region of spacetime with infinite density. This region of spacetime is stretched by the black hole to the point that light cannot escape. This is known as the Schwarzschild radius. The easiest way, though theoretically unsound, to derive the Schwarzschild radius is to integrate the gravitational force from some theoretical radius, r, to infinity and setting this equal to the kinetic energy of a mass, m, traveling at the speed of light. This yields the result rs = 2gm/c^2.
      </p>
    </div>
    );
  }
}

export default Sidebar;
