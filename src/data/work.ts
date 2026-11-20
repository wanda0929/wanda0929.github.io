export interface SelectedWork {
  id: string;
  title: string;
  paperTitle: string;
  type: "Preprint" | "Published paper";
  year: number;
  description: string;
  href: string;
  linkLabel: "Read the preprint" | "Read the paper";
  topic: string;
  venue?: string;
  preprintHref?: string;
}

export const selectedWork: SelectedWork[] = [
  {
    id: "rb-yb-entangling-gate",
    title: "An exchange-assisted Rb–Yb entangling gate",
    paperTitle: "An exchange-assisted entangling gate between 87Rb and 171Yb Rydberg atoms",
    type: "Preprint",
    year: 2026,
    description: "Identifies an optically accessible Rydberg exchange channel between rubidium and ytterbium atoms at zero electric field. Theoretical modeling and numerical simulations use this interaction to design an interspecies controlled-Z gate, connecting atomic structure with control in dual-species arrays.",
    href: "https://arxiv.org/abs/2609.11730",
    linkLabel: "Read the preprint",
    topic: "Dual-species Rydberg gates"
  },
  {
    id: "measurement-free-quantum-memory",
    title: "Measurement-free quantum memory",
    paperTitle: "Measurement-Free Toric-Code Memory in Array Globally Controlled Rydberg Array",
    type: "Preprint",
    year: 2026,
    description: "Proposes a toric-code quantum memory in a three-species Rydberg array using global, species-selective control. The protocol combines coherent error correction with ancilla reset, avoiding measurements during correction; numerical simulations assess memory performance under the noise model considered.",
    href: "https://arxiv.org/abs/2606.12030",
    linkLabel: "Read the preprint",
    topic: "Quantum error correction"
  },
  {
    id: "rydberg-exposure-limit",
    title: "Certifying the Rydberg-exposure limit",
    paperTitle: "Certifying the Rydberg-exposure limit of a globally driven controlled-Z gate",
    type: "Preprint",
    year: 2026,
    description: "Establishes rigorous bounds on Rydberg exposure, the time-integrated Rydberg-state population during a controlled-Z gate. Polynomial optimization certifies an unavoidable excitation cost for shared global driving, within the perfect-blockade model and at a fixed maximum Rabi frequency.",
    href: "https://arxiv.org/abs/2611.07388",
    linkLabel: "Read the preprint",
    topic: "Limits of quantum control"
  },
  {
    id: "vibefn-quantum-control",
    title: "VibeFn-QCtrl: LLM-guided quantum control",
    paperTitle: "Designing Quantum Control Protocols via Vibe-Function Reasoning with Large Language Models",
    type: "Preprint",
    year: 2026,
    description: "Introduces VibeFn-QCtrl, which combines language-model proposals for analytic control functions with numerical optimization of their parameters. The QCtrl-Bench suite evaluates the approach across sixteen tasks, covering single- and multi-qubit systems, closed and open dynamics, and calibration errors.",
    href: "https://arxiv.org/abs/2605.26021",
    linkLabel: "Read the preprint",
    topic: "Automated quantum control"
  },
  {
    id: "multiqubit-toffoli-gates",
    title: "Multiqubit Toffoli gates in 3D arrays",
    paperTitle: "Multiqubit Toffoli Gates and Optimal Geometry with Rydberg Atoms",
    type: "Published paper",
    year: 2022,
    description: "Proposes multiqubit Toffoli gates with control atoms arranged around a central target in a three-dimensional array. Evolutionary optimization shapes the geometry to enhance asymmetric Rydberg blockade, while numerical simulations evaluate gate fidelity and sensitivity to atomic position fluctuations.",
    href: "https://doi.org/10.1103/PhysRevApplied.18.034072",
    linkLabel: "Read the paper",
    topic: "Multiqubit gates & array geometry",
    venue: "Physical Review Applied 18, 034072",
    preprintHref: "https://arxiv.org/abs/2203.14302"
  },
  {
    id: "facilitated-rydberg-excitation",
    title: "Rydberg excitation beyond antiblockade",
    paperTitle: "Deterministic facilitated excitation of the weakly driven atom in heteronuclear Rydberg atom pairs beyond antiblockade",
    type: "Published paper",
    year: 2019,
    description: "A theoretical study of excitation control in heteronuclear Rydberg pairs. By tuning a strongly driven auxiliary atom, the scheme enhances excitation of a weakly driven target over a broader detuning range, without relying on conventional antiblockade compensation.",
    href: "https://opg.optica.org/josab/abstract.cfm?uri=josab-36-9-2545",
    linkLabel: "Read the paper",
    topic: "Rydberg interactions & excitation control",
    venue: "Journal of the Optical Society of America B 36(9), 2545–2551"
  },
  {
    id: "controllable-ensemble-excitation",
    title: "Controlling excitation in Rydberg ensembles",
    paperTitle: "Facilitation of controllable excitation in Rydberg atomic ensembles",
    type: "Published paper",
    year: 2023,
    description: "Studies how an excited control atom opens an additional two-photon excitation pathway in a strongly interacting Rydberg ensemble. Quantum Monte Carlo wave-function simulations examine enhanced collective excitation under strong probe driving, including the effects of temperature and control–ensemble separation.",
    href: "https://doi.org/10.1088/1674-1056/acd0a6",
    linkLabel: "Read the paper",
    topic: "Collective Rydberg excitation",
    venue: "Chinese Physics B 32(8), 083302",
    preprintHref: "https://arxiv.org/abs/2306.14756"
  }
];
