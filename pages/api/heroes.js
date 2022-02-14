// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Faisal Hani",
      powers: "Front-end development, React, Next, Flutter, Aws, Agile",
      rate: 100,
    },
    {
      id: 2,
      name: "MR. ROBOT",
      powers: "Coding with VIH, know Angler",
      rate: 20,
    },
    {
      id: 3,
      name: "Richard",
      powers: "Transform objects through HTTP",
      rate: 80,
    },
    {
      id: 4,
      name: "Sami",
      powers: "Project Manger",
      rate: 66,
    },
  ]);
}
