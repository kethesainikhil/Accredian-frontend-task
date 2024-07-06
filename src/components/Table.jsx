import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "./ui/table"
  import cap from "../cap.png"
  const programs = [
    {
      program: "Professional Certificate Program in Product Management",
      ReferrerBonus: "7,000",
      totalAmount: "$250.00",
      RefereeBonus: "9,000",
    },
    {
      program: "PG Certificate Program in Strategic Product Management",
      ReferrerBonus: "9,000",
      totalAmount: "$150.00",
      RefereeBonus: "11,000",
    },
    {
      program: "Executive Program in Data Driven Product Management",
      ReferrerBonus: "10,000",
      totalAmount: "$350.00",
      RefereeBonus: "10,000",
    },
    {
      program: "Executive Program in Product Management and Digital Transformation",
      ReferrerBonus: "10,000",
      totalAmount: "$450.00",
      RefereeBonus: "10,000",
    },
    {
      program: "Executive Program in Product Management",
      ReferrerBonus: "10,000",
      totalAmount: "$550.00",
      RefereeBonus: "10,000",
    },
    {
      program: "Advanced Certification in Product Management",
      ReferrerBonus: "10,000",
      totalAmount: "$200.00",
      RefereeBonus: "10,000",
    },
    {
      program: "Executive Program in Product Management and Project Management",
      ReferrerBonus: "10,000",
      totalAmount: "$300.00",
      RefereeBonus: "10,000",
    },
  ]
  
  export default function TableDetails() {
    return (
      <Table className="">

        <TableHeader >
          <TableRow>
            <TableHead className="font-bold text-lg text-center border-r-4 text-blue-950">Programs</TableHead>
            <TableHead className="font-bold text-lg text-center border-r-4 text-blue-950">Referrer Bonus</TableHead>
            <TableHead className="font-bold text-lg text-center border-r-4 text-blue-950">Referee Bonus</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programs.map((program) => (
            <TableRow  key={program.program}>
              <TableCell className="font-medium flex   sm:gap-2"> <img className="hidden sm:flex" src={cap} alt="cap" /> <span>{program.program}</span></TableCell>
              <TableCell>₹ {program.ReferrerBonus}</TableCell>
              <TableCell>₹ {program.RefereeBonus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  