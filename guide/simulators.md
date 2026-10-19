# Optics simulator guide

[README](../README.md) · [Open the simulators](https://n-kp.github.io/optics/)

These educational simulators explore waves, refraction, focusing and aberrations. Their interfaces are in Japanese. Focus is a separate simulator from Lens and uses different units and modelling assumptions.

## Downloads

| Simulator | Standalone HTML | Topics |
| --- | --- | --- |
| Wave basics v1.2 | [Source](../assets/simulators/wave-1d-v1.2.html) | Transverse and longitudinal particle motion, one-dimensional propagation, interference, and fixed- and free-end reflection |
| Wavefront v1.1 | [Source](../assets/simulators/wavefront-v1.1.html) | Point sources, reflection, slit diffraction and interference |
| Refraction v1.2 | [Source](../assets/simulators/refraction-v1.2.html) | Reflection, refraction, total internal reflection and dispersion |
| Lens v1.1 | [Source](../assets/simulators/lens-v1.1.html) | Plano-convex and plano-concave lenses, orientation, spherical and chromatic aberration, achromats |
| Focus v1.1 | [Source](../assets/simulators/lens-focus-v1.1.html) | Focusing, aberrations, intensity near the focus, FWHM and the first dark Airy ring |

Download the desired HTML file and open it in a browser. No build or local server is required. GitHub's file viewer displays the source; use the published site to operate the simulators directly.

Calculations run in JavaScript without WebGL or GPU computation. Browser hardware acceleration for rendering is separate from the calculation method.

Wavefront, Refraction and Lens load interface libraries from UNPKG and require an internet connection. Their standalone files are not guaranteed to work fully offline. Focus does not use those external interface libraries. See the [third-party notices](../THIRD_PARTY_NOTICES.md).

## Controls

### Wavefront

- Click the field to generate waves at that position. The two-, three- and four-source buttons place evenly spaced sources within a fixed region.
- Choose no reflector, a plane reflector, a narrow slit, a wide slit or a double slit.
- Display wavefronts and displacement together, wavefronts alone or displacement alone. Crests use solid lines and troughs use dotted lines.
- Wavelength ranges from 5 to 15 in simulation units, initially 10. The pause button stops and resumes the animation.
- The pointer hint appears after the cursor stops and disappears after approximately 1.5 seconds or on a click. Leaving and re-entering the field allows it to appear again.

### Refraction

- Vacuum wavelength ranges from 0.5 to 1.5 in simulation units, in steps of 0.1; the initial value is 1.0.
- The incidence angle is measured from the interface normal. Its range is 0–60°, initially 30°.
- The reference refractive index is defined at vacuum wavelength 1.0. It ranges from 1.0 to 1.6 in steps of 0.1, initially 1.5.
- Swap the vacuum and medium to examine incidence from the higher-index side.
- The representative ray and angle labels describe the beam's central direction. The total-internal-reflection label appears when that direction satisfies the corresponding condition.
- Beam width is fixed at 20% of the field width. Changing settings resets and restarts the simulation.

### Lens

- The initial lens is plano-convex. Alternatives are plano-concave and an achromat.
- Wavelength ranges from 0.4 to 0.8 in simulation units, initially 0.55.
- Beam width ranges from 6 to 20 in simulation units, initially 14. The six representative rays span the selected beam width.
- The lens-reversal control applies to every lens, including the achromat.
- Effective focal length is displayed in simulation units and varies with the lens and other settings.
- Use the mouse wheel to zoom and drag to pan when zoomed in. Panning is constrained to the field.
- Toggle representative rays and pause or resume the animation.
- Playback speed is fixed at four times the base rate. Positive displacement is coloured; negative displacement is transparent.

### Focus

For Focus's controls, physical units, numerical method and intensity scales, open its **補足** (supplementary notes) section. The units and models below apply to Wavefront, Refraction and Lens, not Focus.

## Units and colour

Simulation units are defined separately for each of the three wave simulators. The same number does not represent the same length across them.

| Simulator | Length scale |
| --- | --- |
| Wavefront | One wavelength unit is 1% of the field width before zooming. Settings of 5–15 correspond to 5–15% of that width. |
| Refraction | One vacuum-wavelength unit is 3% of the field width. Settings of 0.5–1.5 correspond to 1.5–4.5% of that width. |
| Lens | One length unit is 1% of the field width before zooming. Wavelength, beam width and effective focal length share this scale. |

Wavelength-dependent colours indicate relative changes from shorter to longer wavelengths. They are not calibrated to the visible spectrum or to nanometres. Each simulation uses monochromatic light; changing the wavelength allows comparisons.

Shading visualises scalar-field displacement, not optical intensity directly. A non-linear transformation is used for display, but display clipping is not fed back into the calculated wave field.

## Models and limitations

### Wavefront: two-dimensional scalar wave equation

A finite-difference method calculates wave propagation. Point sources oscillate for a finite duration, with reflection at barriers and diffraction or interference around openings and edges. A damping region surrounds the field. The reflector has a zero normal derivative boundary condition; it is not an exact electromagnetic model of a metallic mirror.

Reflections at the outer boundary are reduced rather than eliminated. Numerical dispersion and directional effects from the grid remain.

### Refraction: a finite-width beam at a plane interface

A finite-width Gaussian beam is decomposed into plane-wave components. Reflected and transmitted components are combined using a scalar angular-spectrum model. Each parameter setting produces a steady-state complex field whose phase changes with time for the animation. The transient journey of a newly generated wave to the interface is not simulated.

Dispersion uses an educational linear model. For displayed vacuum wavelength `L` and reference refractive index `n_ref`:

```text
n(L) = 1 + (n_ref - 1) × [1 + 0.15 × (1 - L)]
```

The vacuum index is always 1. This is not measured dispersion data for real glass, and polarisation-dependent reflectance is not modelled. A finite beam contains a range of angles, so the central-ray total-internal-reflection label does not necessarily describe every component's propagation or decay.

### Lens: ray tracing combined with wave propagation

Rays are traced through spherical or plane interfaces using Snell's law. Optical path length determines the phase of the outgoing field, which is then propagated using an FFT-based scalar angular-spectrum method. Singlets have two interfaces; the cemented achromat has three.

The achromat's dispersion is adjusted to match paraxial focal positions at simulation wavelengths 0.49 and 0.66. Its shape is chosen to reduce spherical aberration. This does not eliminate chromatic or spherical aberration at every wavelength or beam width. Reversing a lens reverses the surface and glass order and the signs of the curvatures.

The model excludes the internal glass wave field, multiple interface reflections and polarisation. It is a two-dimensional educational model, not a quantitative predictor of a real lens's three-dimensional point-spread function or spot diameter. Diffraction and the display scale may make differences between singlet and achromat spot sizes appear small.

## Development and feedback

The HTML files contain their styles and simulation JavaScript. ChatGPT assisted with code generation and revision. See the [changelog](../CHANGELOG.md) for release notes.

When reporting a problem, include the simulator name and version, browser and device, parameter settings and steps to reproduce it.

## Licence

Copyright © 2026 n-kp. The author's simulator code and this guide are provided under the [MIT Licence](../LICENSE), without warranty. Each simulator includes the licence text; external libraries retain their own notices and licences. See [third-party notices](../THIRD_PARTY_NOTICES.md).
