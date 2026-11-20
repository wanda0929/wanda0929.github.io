export interface SelectedWork {
  id: string;
  title: string;
  paperTitle: string;
  type: "Preprint";
  year: number;
  description: string;
  href: string;
  linkLabel: "Read the preprint";
  topic: string;
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
  }
];
