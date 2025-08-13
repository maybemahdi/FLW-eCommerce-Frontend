export interface EarningData {
  month: string;
  monthFull: string;
  earning: number;
}
const earningData: EarningData[] = [
  { month: "Jan", monthFull: "January", earning: 95000 },
  { month: "Feb", monthFull: "February", earning: 112000 },
  { month: "Mar", monthFull: "March", earning: 85000 },
  { month: "Apr", monthFull: "April", earning: 73000 },
  { month: "May", monthFull: "May", earning: 89000 },
  { month: "Jun", monthFull: "June", earning: 114000 },
  { month: "Jul", monthFull: "July", earning: 78000 },
  { month: "Aug", monthFull: "August", earning: 96000 },
  { month: "Sep", monthFull: "September", earning: 81000 },
  { month: "Oct", monthFull: "October", earning: 52000 },
  { month: "Nov", monthFull: "November", earning: 93000 },
  { month: "Dec", monthFull: "December", earning: 87000 },
];

export default earningData;
