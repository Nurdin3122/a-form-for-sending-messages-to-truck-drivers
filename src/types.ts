export type FormDataItem =
	| { id: "PU" | `PU${number}`; time1: string; btn1: string; time2: string; btn2: string; btn3: string; week1: string; activeBtn: string }
	| { id: "DE" | `DE${number}`; time3: string; btn4: string; time4: string; btn5: string; btn6: string; week2: string; activeBtn: string }
	| { id: "total"; Total: number }
	| { id: "cost"; Cost: number }
	| { id: "DH"; Dh: number }
	| { id: "RPM"; RPM: number }
	| { id: "temp"; Temp: number }
	| { id: "Required"; Required: string }
	| { id: "Commodity"; Commodity: string };
