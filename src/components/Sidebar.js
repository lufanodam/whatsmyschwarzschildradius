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
      A black hole is a celestial object whose gravitational field is strong enough to prevent light from escaping. They are formed from dead stars about twice the mass of the sun. When the star runs out of hydrogen and helium used in stellar nucleosynthesis, there is not enough thermal pressure to balance gravitational forces. When the  gravitational force overcome thermal pressure, it then must overcome electron degeneracy pressure. Electron degeneracy pressure is an outward force that arises from the Pauli Exclusion Principle. The Pauli Exclusion Principle dictates that no two fermionic particles can occupy the same quantum state. Electrons, which are fermions, are being forced into the same quantum state by gravity. Because this cannot occur, the degenerate electrons turn into bosonic matter which can occupy same quantum states. Once this fermionic transition takes place, the protons and electrons form neutrons. Now the neutron degeneracy pressure is resisting the gravitational forces. If the gravity is strong enough, as for a >2.6 solar mass star, the neutron degeneracy pressure can be overcome. When this takes place, the neutron star forms a black hole. The black hole's mass is forced into an infinitesimal volume, creating a region in spacetime of infinite density. The spacetime around the blackhole is so stretched by the infinitely dense object that there is a radius at which not even light can escape. This radius is known as the Schwarzschild radius. It is found by setting the gravitational potential energy equal to the energy of an object travelling at the speed of light. The easiest way, though theoretically unsound, to derive the Schwarzschild radius is to integrate the gravitational force from some theoretical radius, r, to infinity and setting it equal to the kinetic energy of a mass, m, traveling at the speed of light. This yields the result rs = 2gm/c^2
      </p>
    </div>
    );
  }
}

export default Sidebar;
