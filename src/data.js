import HeroImage from "/assets/aini.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/bootstrap.png";
import Tools5 from "/assets/tools/js.png";
import Tools6 from "/assets/tools/github.png";
import Tools7 from "/assets/tools/canva.png";
import Tools8 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Javascript",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Github",
    ket: "Repository",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Canva",
    ket: "Design App",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Figma",
    ket: "Design App",
    dad: "800",
  }
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Prabumulih",
    desk: "Website Prabumulih merupakan website informasi yang menyajikan profil Kota Prabumulih, meliputi sejarah, budaya, dan informasi umum daerah.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Ni Travel",
    desk: "Ni Travel adalah website pemesanan hotel. Website ini dirancang dengan tampilan modern dan responsif untuk memberikan pengalaman pengguna yang mudah, cepat, dan nyaman.",
    tools: ["HTML", "CSS", "Javascript", "PHP", "XAMPP"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Watchlist",
    desk: "Movie Watchlist adalah website untuk mencatat dan mengelola daftar film dan serial yang ingin ditonton maupun yang sudah ditonton. Website ini menyediakan fitur tambah data, pencarian, serta pengelompokan status tontonan",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "400",
  }
];
