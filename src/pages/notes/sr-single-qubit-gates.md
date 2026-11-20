---
layout: ../../layouts/ArticleLayout.astro
title: "Why Are Single-Qubit Gates in Strontium Challenging?"
description: "An illustrated guide to nuclear-spin, optical-clock, and fine-structure qubits — and why long coherence does not automatically guarantee precise quantum control."
category: "Explainer"
date: "2026-11-20"
readingTime: "15 min read"
draft: false
---

*An accessible scientific guide to three strontium-qubit encodings, single-qubit gates, and the gap between long coherence and high-fidelity control.*

---

## The paradox: an excellent clock is not automatically an excellent quantum gate

Strontium (Sr) is famous in precision measurement. Certain transitions in Sr are extraordinarily narrow, making the element a leading platform for optical atomic clocks. The same properties that make Sr attractive for clocks have also made it an important candidate for neutral-atom quantum computing.

So a natural question arises: if we can measure the frequency of a Sr transition with extraordinary precision, why is it still challenging to use Sr atoms to perform extremely accurate quantum logic gates?

The short answer is that **preserving a quantum state and deliberately changing that state are different tasks**.

A clock is designed to compare an atomic frequency with a highly stable reference. A quantum processor must do something more active: it must drive an atom from one carefully chosen quantum state to another, with the right angle, phase, and timing. An atom can be very good at retaining information while the laser system that manipulates it remains imperfect.

This distinction is the key to understanding the different Sr-qubit platforms.

## 1. What does a single-qubit gate actually do?

A classical bit is either 0 or 1. A qubit can also occupy a superposition:

$$
|\psi\rangle=\alpha|0\rangle+\beta|1\rangle,
\qquad |\alpha|^2+|\beta|^2=1.
$$

The complex amplitudes $\alpha$ and $\beta$ determine the measurement probabilities and the relative phase of the state.

A useful picture is the **Bloch sphere**. A pure qubit state can be represented by an arrow pointing to a location on a sphere. A single-qubit gate rotates that arrow. For example, an $X$ gate corresponds to a half-turn about the $x$-axis; a $\pi/2$ pulse rotates the state by a quarter-turn.

For a resonantly driven two-level system with fixed drive phase, the rotation angle is

$$
\theta=\int_0^T \Omega(t)\,dt,
$$

where $\Omega(t)$ is the effective angular Rabi frequency and $T$ is the pulse duration. The laser phase sets the direction of the rotation axis in the equatorial plane of the Bloch sphere.

This immediately shows why control is demanding:

- If the laser intensity changes, $\Omega(t)$ changes and the atom may rotate by too much or too little.
- If the laser frequency is detuned from resonance, the effective rotation axis tilts and the trajectory changes.
- If the laser phase is wrong or drifts, the rotation can occur about the wrong axis.
- If other nearby states are unintentionally coupled, population can leave the intended two-state computational space. This is called **leakage**.

The atom's intrinsic coherence time does not, by itself, prevent any of these control errors.

<figure class="article-figure" id="figure-1">
  <a class="figure-link" href="/images/sr-qubits/fig1_pulse_and_rotation.png" target="_blank" rel="noopener" aria-label="Enlarge Figure 1">
    <img src="/images/sr-qubits/fig1_pulse_and_rotation.png" alt="A calibrated pulse and a pulse 15 percent stronger are connected to a 90-degree rotation and an overshoot on a Bloch-sphere slice." width="2880" height="2120" loading="lazy" decoding="async" />
  </a>
  <figcaption>Figure 1. The pulse sets the turn. For resonant driving at fixed phase, pulse area sets the rotation angle. This example rotates about the positive y axis: a calibrated quarter-turn takes the state from |0⟩ to (|0⟩ + |1⟩)/√2. Raising the pulse amplitude by 15% produces a 15% larger angle. These are calculated schematics, not experimental data.<span class="figure-hint">Click or tap the figure to enlarge.</span></figcaption>
</figure>

## 2. Three ways to encode a qubit in strontium

There is no single, universal “Sr qubit.” Researchers can encode information in different internal degrees of freedom. The choice changes both the strengths of the qubit and the experimental control problem.

<figure class="article-figure" id="figure-2">
  <a class="figure-link" href="/images/sr-qubits/fig2_three_encodings.png" target="_blank" rel="noopener" aria-label="Enlarge Figure 2">
    <img src="/images/sr-qubits/fig2_three_encodings.png" alt="Three Sr encodings: two selected nuclear-spin projections, a ground-to-clock-state pair, and two metastable fine-structure states with the ground state outside the qubit." width="2880" height="2620" loading="lazy" decoding="async" />
  </a>
  <figcaption>Figure 2. Where are 0 and 1 stored? The nuclear-spin row shows ten projection labels within one electronic ground manifold; its horizontal arrangement is not an energy axis. Shaded regions identify the chosen qubit space. The fine-structure arrow denotes effective two-photon Raman coupling, and its ground state lies outside the qubit. Energy gaps are not to scale. The schemes follow the representative experiments in references [1–3].<span class="figure-hint">Click or tap the figure to enlarge.</span></figcaption>
</figure>

### 2.1 Nuclear-spin qubits in $^{87}\mathrm{Sr}$: storing information in the nucleus

The isotope $^{87}\mathrm{Sr}$ has nuclear spin $I=9/2$. In its electronic ground state, $^{1}S_0$, the total electronic angular momentum is $J=0$. The atom therefore has ten nuclear-spin projections:

$$
m_I=-\frac92,-\frac72,\ldots,+\frac92.
$$

A qubit can be encoded in two of these states. One experimentally demonstrated choice is

$$
|\downarrow\rangle=
|{}^{1}S_0,F=9/2,m_F=-9/2\rangle,
\qquad
|\uparrow\rangle=
|{}^{1}S_0,F=9/2,m_F=-7/2\rangle.
$$

Why use nuclear spin? In the $^{1}S_0$ ground state, the electronic angular momentum is zero. This makes the nuclear-spin degree of freedom relatively insensitive to many perturbations that strongly affect electronic states. It can therefore provide an exceptionally stable memory for quantum information.

A landmark experiment, *Assembly and coherent control of a register of nuclear spin qubits* (Nature Communications, 2022), reported an echo coherence time

$$
T_2^{\mathrm{echo}}=40\pm7\ \mathrm{s}.
$$

That is a strikingly long time for a qubit register.

But it is important not to misread this number. **An echo coherence time is not a single-qubit gate fidelity.** It measures how long phase coherence can be preserved under a particular refocusing protocol. It does not say, on its own, how accurately an arbitrary gate can be executed.

The control challenge is also quite specific. The experiment must address the selected nuclear-spin transition while avoiding unwanted transitions to the other nuclear-spin states. In the 2022 work, the qubit transition was driven by a two-photon Raman process using light coupled through the $^{3}P_1$ manifold. An additional light shift helped move a leakage transition away from resonance.

This illustrates a general trade-off: a degree of freedom that is naturally well protected can also be less directly accessible. The experiment must engineer a controllable interaction without sacrificing the stability that made the encoding attractive.

**In brief**

- **Strength:** very long-lived quantum coherence in the nuclear-spin degree of freedom.
- **Control challenge:** selectively drive the desired pair of spin states while suppressing unwanted transitions.
- **Important distinction:** long coherence is a memory property, not a direct measurement of gate fidelity.

### 2.2 Optical-clock qubits: using an ultranarrow electronic transition

A second approach uses the optical clock transition

$$
{}^{1}S_0\longleftrightarrow{}^{3}P_0.
$$

The two states can be labelled

$$
|0\rangle=|{}^{1}S_0\rangle,
\qquad
|1\rangle=|{}^{3}P_0\rangle.
$$

Unlike the nuclear-spin encoding, which uses two states within the same electronic manifold, the clock qubit uses two different electronic states.

The transition is extraordinarily narrow. In the simplest electric-dipole picture, it is forbidden by the usual selection rules. “Forbidden” does not mean impossible: it means that the transition is strongly suppressed in that approximation. In fermionic $^{87}\mathrm{Sr}$, hyperfine interactions give the clock transition a weak but usable strength. In bosonic $^{88}\mathrm{Sr}$, experiments can enable the transition using mechanisms such as magnetic-field-induced coupling.

The narrow transition is excellent for precision timekeeping because it provides a sharp frequency reference. But a quantum gate needs coherent, repeatable rotations. The experiment must control the optical laser's frequency, phase, and intensity with great care.

A particularly useful example is the 2024 Nature paper *Universal quantum operations and ancilla-based read-out for tweezer clocks*. It demonstrated a programmable quantum processor based on $^{88}\mathrm{Sr}$ optical-clock qubits.

The paper reports two different single-qubit $\pi/2$-pulse benchmarks:

- $0.9988(2)$ for a train of pulses about a fixed $X$ axis;
- $0.9978(4)$ for a sequence using randomized rotation axes $\pm X$ and $\pm Y$.

These numbers are not contradictory. The randomized-axis sequence is designed to expose errors that can be hidden or partly refocused in a fixed-axis pulse train. The authors identify **clock-laser frequency noise** as the dominant single-qubit error source in their experiment.

The same work also reports a two-qubit CZ-gate fidelity of $0.9962(3)$, averaged over symmetric two-qubit input states. This is a two-qubit result and should not be confused with the single-qubit pulse fidelities above.

The lesson is subtle but important: an optical transition can be an outstanding frequency reference and still demand exceptionally good laser stabilization for high-fidelity quantum control.

**In brief**

- **Strength:** an ultranarrow optical transition links precision metrology and quantum information processing.
- **Control challenge:** optical phase and frequency stability, as well as control of intensity, pulse shape, and spatial uniformity.
- **Experimental lesson:** the dominant error source must be identified for the actual apparatus; in the 2024 tweezer-clock experiment, it was clock-laser frequency noise.

### 2.3 Fine-structure qubits in $^{88}\mathrm{Sr}$: encoding information in two metastable states

A third route encodes the qubit in the two metastable fine-structure states

$$
|0\rangle=|{}^{3}P_2,m_J=0\rangle,
\qquad
|1\rangle=|{}^{3}P_0\rangle.
$$

Here the bit labels follow the cited experiment. These are different from both the ground-state nuclear-spin encoding and the ground-to-clock-state encoding: both qubit states are metastable electronic states. The demonstrated single-qubit control uses two Raman lasers at 679 and 707 nm, coupled through the off-resonant 6s $^{3}S_1$ state [3].

An interesting feature is that the electronic ground state $^{1}S_0$ lies outside the qubit's computational space. That extra state can be useful for detecting leakage.

What is leakage? A qubit is meant to occupy a two-dimensional space spanned by $|0\rangle$ and $|1\rangle$. If an error transfers population to a third state, the system has left the computational space. Such an event is not simply a wrong answer of 0 or 1; it is a leakage error.

In quantum error correction, it is valuable to know when an error has occurred. A detectable loss or leakage event can sometimes be converted into an **erasure error**: an error whose location is known. Knowing where an error happened can make it easier for an error-correction protocol to handle than an undetected error.

In 2026, Tao and colleagues reported *Universal Global Gates for a Fine-Structure Qubit in Strontium-88* in Physical Review Letters. They demonstrated a gate set for the $^{3}P_0$-$^{3}P_2$ qubit and reported

$$
F_{\mathrm{1Q}}=0.993(1)
$$

for the average single-qubit Clifford fidelity **after excising detected erasure events**. Without this excision, the reported value was $0.992(1)$. The authors identified laser phase noise as a major remaining single-qubit limitation. They also reported a two-qubit gate fidelity of $0.9945(6)$ after correcting for losses during the gate operation. Their work further demonstrated state-resolved detection and mid-circuit erasure conversion using the stable ground state outside the qubit subspace. Ground-state imaging flags this particular leakage channel; it does not automatically detect every unwanted state or repair a leaked qubit [3].

The significance is not simply the numerical fidelity. This encoding offers a route to combine coherent control with leakage detection—an important ingredient for error-corrected neutral-atom processors.

**In brief**

- **Strength:** metastable states provide a useful qubit manifold, while the ground state outside it can support leakage detection and erasure conversion.
- **Control challenge:** coherently manipulate the two fine-structure states while managing unwanted coupling, leakage, and state-dependent experimental effects.
- **Broader significance:** the design considers not only how to perform gates, but also how to detect and handle errors.

## 3. Comparing the three encodings

| Feature | Nuclear-spin qubit | Optical-clock qubit | Fine-structure qubit |
|---|---|---|---|
| Representative isotope in the cited work | $^{87}\mathrm{Sr}$ | $^{88}\mathrm{Sr}$ | $^{88}\mathrm{Sr}$ |
| Qubit states | Two $m_F$ states in $^{1}S_0$ | $^{1}S_0$ and $^{3}P_0$ | $^{3}P_0$ and $^{3}P_2,m_J=0$ |
| Information is stored in | Nuclear spin | Two electronic states | Two metastable electronic states |
| Demonstrated headline result | $T_2^{\mathrm{echo}}=40\pm7$ s | Single-qubit $\pi/2$ benchmark $0.9978(4)$ with randomized axes | Average Clifford fidelity $0.992(1)$, or $0.993(1)$ after erasure excision |
| A central control issue | Selective nuclear-spin control | Optical frequency and phase stability | Coherent control and leakage management |
| A distinctive opportunity | Long-lived quantum memory | Connecting clocks and quantum processors | Mid-circuit leakage detection / erasure conversion |

These figures are **not a direct leaderboard**. They come from different experiments, use different benchmarking procedures, and even describe different quantities in the nuclear-spin case: a coherence time rather than a gate fidelity. A fair comparison would require matched gate definitions, benchmarking protocols, error accounting, and experimental conditions.

## 4. Why does long coherence not guarantee a high-fidelity gate?

The distinction can be understood through three layers.

### 4.1 The atom can preserve a state while the control pulse is imperfect

Suppose a qubit is initially prepared in $|0\rangle$, and the goal is to create an equal superposition. A pulse must rotate the Bloch vector through a precise angle.

If the pulse is slightly too strong or too long, the rotation is too large. If the drive is detuned, the rotation axis changes. If its phase is wrong, the operation takes place around a different axis.

These are control errors. They can occur even if the atom would otherwise preserve its state for a very long time.

### 4.2 Real lasers have noise

Several imperfections can matter:

- **Frequency noise:** changes the detuning from the atomic transition.
- **Phase noise:** makes the rotation axis uncertain.
- **Intensity noise:** changes the Rabi frequency and therefore the rotation angle.
- **Pulse-shape errors:** make the actual time-dependent drive differ from the intended waveform.
- **Spatial inhomogeneity:** atoms at different positions experience different drive strengths.

The relative importance of these effects depends on the transition, laser system, trap, pulse sequence, and benchmarking protocol. It is not scientifically sound to assume that the same error dominates every Sr experiment.

### 4.3 The atom is moving and trapped in a real environment

An atom in an optical tweezer or lattice is not perfectly motionless. Its motion can affect the light it experiences. Trap light can shift energy levels by different amounts, changing the transition frequency. Magnetic-field fluctuations can also shift states, depending on their magnetic sensitivities.

Spontaneous emission and off-resonant scattering can further reduce coherence or move population out of the computational space.

The 2024 optical-clock-qubit experiment provides a concrete example of an experiment-specific error budget. It identified clock-laser frequency noise as the dominant single-qubit error source. It also considered laser-intensity noise, pulse-shape imperfections, spatial Rabi-frequency inhomogeneity, and Raman scattering from tweezer light. After cooling the atoms close to their motional ground state, the estimated contribution from finite temperature to the clock $\pi/2$-pulse infidelity was small in that apparatus.

<figure class="article-figure" id="figure-3">
  <a class="figure-link" href="/images/sr-qubits/fig3_error_mechanisms.png" target="_blank" rel="noopener" aria-label="Enlarge Figure 3">
    <img src="/images/sr-qubits/fig3_error_mechanisms.png" alt="Concrete error mechanisms: pulse-area error causes an extra turn, frequency offset tilts the rotation axis, and scattering can transfer population outside the qubit." width="2880" height="2320" loading="lazy" decoding="async" />
  </a>
  <figcaption>Figure 3. Three ways a gate can go wrong. The panels show mechanisms, not a quantitative error budget: an incorrect angle, a detuning-induced axis tilt, and population leaving the computational space. A drive-phase error changes the axis within the equatorial plane and is distinct from the detuning tilt illustrated here. The leakage panel shows one detectable channel in the fine-structure encoding [3]. The highlighted frequency-noise conclusion applies to the 2024 clock-qubit experiment [2].<span class="figure-hint">Click or tap the figure to enlarge.</span></figcaption>
</figure>

## 5. What does a fidelity of 99.3% mean?

A reported gate fidelity of $99.3\%$ sounds very close to perfection. But the remaining error matters when many operations are chained together.

For intuition only, suppose every operation had an independent error probability $p=0.007$. The probability that none of $N$ operations experiences an error would be approximately

$$
P_{\mathrm{no\ error}}\approx(1-p)^N.
$$

Under this deliberately simplified model:

- after 100 operations, $P_{\mathrm{no\ error}}\approx 49.5\%$;
- after 500 operations, $P_{\mathrm{no\ error}}\approx 3.0\%$;
- after 1,000 operations, $P_{\mathrm{no\ error}}\approx 0.09\%$.

This is **not** a prediction of the success probability of a real quantum algorithm. Gate infidelity is not always identical to a simple independent error probability, and real circuits include different gate types, correlated noise, state preparation and measurement errors, leakage, and error correction.

<figure class="article-figure" id="figure-4">
  <a class="figure-link" href="/images/sr-qubits/fig4_error_accumulation.png" target="_blank" rel="noopener" aria-label="Enlarge Figure 4">
    <img src="/images/sr-qubits/fig4_error_accumulation.png" alt="An illustrative independent-error model with p equal to 0.007 shows the probability of zero errors decreasing as the number of operations grows." width="2880" height="2200" loading="lazy" decoding="async" />
  </a>
  <figcaption>Figure 4. A toy model of accumulation. The curve is calculated from P(no error) = (1 − 0.007)^N. At 100, 500 and 1,000 operations, the probabilities are approximately 49.5%, 2.98% and 0.089%. These are model values, not measured circuit performance or predictions obtained by treating a reported gate fidelity as a success probability.<span class="figure-hint">Click or tap the figure to enlarge.</span></figcaption>
</figure>

The calculation makes one point: small per-operation imperfections can become consequential in long circuits. That is why quantum processors need both better physical gates and error-correction protocols that can tolerate the errors that remain.

## 6. The real question is not “Which Sr qubit is best?”

The three encodings solve different parts of the problem.

- Nuclear-spin qubits offer a particularly stable degree of freedom and impressive coherence. The challenge is to control selected spin transitions without disturbing the rest of the manifold.
- Optical-clock qubits connect precision metrology with quantum information processing. Their control relies on highly coherent optical driving and careful management of laser noise.
- Fine-structure qubits offer metastable-state encoding and a useful state outside the computational space, opening a route to leakage detection and erasure conversion.

There is no single number that captures the quality of an entire atomic platform. A useful assessment must consider memory lifetime, single-qubit gates, two-qubit gates, leakage, readout, scalability, and compatibility with error correction.

The broader lesson is that **a good quantum memory and a good quantum processor are related, but they are not the same thing**. A successful processor must preserve quantum information when it should—and manipulate it precisely when asked.

That is the control challenge at the heart of Sr-based quantum computing.

---

## References

1. K. Barnes *et al.*, “Assembly and coherent control of a register of nuclear spin qubits,” *Nature Communications* **13**, 2779 (2022). [https://doi.org/10.1038/s41467-022-29977-z](https://doi.org/10.1038/s41467-022-29977-z)

2. R. Finkelstein *et al.*, “Universal quantum operations and ancilla-based read-out for tweezer clocks,” *Nature* **634**, 321–327 (2024). [https://doi.org/10.1038/s41586-024-08005-8](https://doi.org/10.1038/s41586-024-08005-8)

3. R. Tao *et al.*, “Universal Global Gates for a Fine-Structure Qubit in Strontium-88,” *Physical Review Letters* **136**, 153602 (2026). [https://doi.org/10.1103/gj3b-5ngl](https://doi.org/10.1103/gj3b-5ngl)

---

### Notes on interpreting the reported numbers

- $T_2^{\mathrm{echo}}$ is a coherence-time measurement, not a gate fidelity.
- The $0.9988(2)$ and $0.9978(4)$ values in the 2024 clock-qubit paper are two different $\pi/2$-pulse benchmarking results. The randomized-axis sequence is more sensitive to certain slow frequency variations.
- The $0.9962(3)$ value in that paper is a two-qubit CZ-gate fidelity, not a single-qubit fidelity.
- The fine-structure results are average single-qubit Clifford fidelities: $0.992(1)$ without erasure excision and $0.993(1)$ after excision. Its two-qubit result is reported after correcting for losses during the gate.
- These values should not be ranked without accounting for the different protocols, definitions, and corrections used in each experiment.
