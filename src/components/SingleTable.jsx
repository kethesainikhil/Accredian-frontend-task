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
      program: "Product Management",
      ReferrerBonus: "7,000",
      totalAmount: "$250.00",
      RefereeBonus: "9,000",
    },
    {
      program: "Strategy & Leadership",
      ReferrerBonus: "9,000",
      totalAmount: "$150.00",
      RefereeBonus: "11,000",
    },
    {
      program: "Business Management",
      ReferrerBonus: "10,000",
      totalAmount: "$350.00",
      RefereeBonus: "10,000",
    },
    {
      program: "Fintech",
      ReferrerBonus: "10,000",
      totalAmount: "$450.00",
      RefereeBonus: "10,000",
    },
    {
      program: "Senior Management",
      ReferrerBonus: "10,000",
      totalAmount: "$550.00",
      RefereeBonus: "10,000",
    },
    {
      program: "Data Science",
      ReferrerBonus: "10,000",
      totalAmount: "$200.00",
      RefereeBonus: "10,000",
    },
    {
      program: "Digital Transformation",
      ReferrerBonus: "10,000",
      totalAmount: "$300.00",
      RefereeBonus: "10,000",
    },
    {
        program: "Business Analytics",
        ReferrerBonus: "10,000",
        totalAmount: "$300.00",
        RefereeBonus: "10,000",
      },
  ]
  
  export default function SingleTable() {
    return (
      <Table className="sm:shadow-xl">

        <TableHeader >
          <TableRow>
            <TableHead className="font-bold text-lg text-center border-r-4 flex justify-between items-center text-white">All Programs <span className="text-2xl">&gt;</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programs.map((program) => (
            <TableRow  key={program.program}>
                <TableCell className="text-sm hover:bg-blue-500 h-12 text-center border-r-4 flex justify-between items-center ">{program.program}<span className="text-2xl">&gt;</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  