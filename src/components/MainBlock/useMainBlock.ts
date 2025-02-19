import {useState} from "react";
import {FormDataItem} from "../../types.ts";


export const UseMainBlock = () => {
    const [activeIcon, newActiveIcon] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormDataItem[]>([
        { id: "PU", time1: "", btn1: "", time2: "", btn2: "", btn3: "", week1: "", activeBtn: "" },
        { id: "DE", time3: "", btn4: "", time4: "", btn5: "", btn6: "", week2: "", activeBtn: "" },
        { id: "DH", Dh: 0,},
        { id: "total", Total: 0,},
        { id: "RPM", RPM: 0,},
        { id: "cost", Cost: 0,},
        { id: "temp", Temp:0 },
        { id: "Required", Required: "",},
        {id: "Commodity", Commodity: "" },
    ]);
    console.log(formData);
    
    const inputChangeHandler = (id: string, field: string, value: string | number) => {
        setFormData((prev) =>
          prev.map((block) => {
              if (block.id === id) {
                  if (field in block) {
                      return { ...block, [field]: value };
                  }
              }
              return block;
          })
        );
    };
    
    const buttonClickHandler = (id: string, field: string, value: string) => {
        setFormData((prev) =>
          prev.map((block) =>
            block.id === id
              ? { ...block, [field]: value, activeBtn: field }
              : block
          )
        );
    };
    
    const formatText = () => {
        return formData
          .map((block) => {
              if (block.id.startsWith("PU")) {
                  const parts = [
                      (block as { time1: string }).time1,
                      (block as { btn1: string }).btn1,
                      (block as { time2: string }).time2,
                      (block as { btn2: string }).btn2,
                      (block as { btn3: string }).btn3,
                      (block as { week1: string }).week1,
                  ]
                    .filter(Boolean)
                    .join(" ");
                  return parts ? `${block.id} ${parts}` : "";
              }
              
              if (block.id.startsWith("DE")) {
                  const parts = [
                      (block as { time3: string }).time3,
                      (block as { btn4: string }).btn4,
                      (block as { time4: string }).time4,
                      (block as { btn5: string }).btn5,
                      (block as { btn6: string }).btn6,
                      (block as { week2: string }).week2,
                  ]
                    .filter(Boolean)
                    .join(" ");
                  return parts ? `${block.id} ${parts}` : "";
              }
              
              switch (block.id) {
                  case "DH":
                      return block.Dh ? `DH-${block.Dh}ml`.padEnd(15) : "";
                  case "total":
                      return block.Total ? `total-${block.Total}ml`.padEnd(15) : "";
                  case "RPM":
                      return block.RPM ? `${block.RPM}$RPM`.padEnd(15) : "";
                  case "cost":
                      return block.Cost ? `${block.Cost}$ cost` : "";
                  case "temp":
                      return block.Temp ? `${block.Temp} temp` : "";
                  case "Required":
                      return block.Required ? `required: ${block.Required}` : "";
                  case "Commodity":
                      return block.Commodity ? `commodity: ${block.Commodity}` : "";
                  default:
                      return "";
              }
          })
          .filter((line) => line.trim() !== "")
          .join("\n");
    };

    const updateRpmAndCopy = () => {
        setFormData((prev) =>
            prev.map((block) => {
                if (block.id === "RPM") {
                    const costObj = prev.find((b) => b.id === "cost") as { Cost: number } | undefined;
                    const totalObj = prev.find((b) => b.id === "total") as { Total: number } | undefined;

                    const Cost = costObj?.Cost ?? 0;
                    const Total = totalObj?.Total ?? 1;

                    const updatedRpm = Number((Cost / Total).toFixed(2));
                    return { ...block, RPM: updatedRpm };
                }
                return block;
            })
        );
        newActiveIcon(true);
    };
    
    const addNewBlock = (type: "PU" | "DE") => {
        setFormData((prev) => {
            const existingBlocks = prev.filter((block) => block.id.startsWith(type));
            const newId = `${type}${existingBlocks.length + 1}` as `${"PU" | "DE"}${number}`;
            
            const lastIndex = prev.map((block) => block.id.startsWith(type)).lastIndexOf(true);
            if (lastIndex === -1) return prev;
            
            const newBlock: FormDataItem =
              type === "PU"
                ? { id: newId as `PU${number}`, time1: "", btn1: "", time2: "", btn2: "", btn3: "", week1: "", activeBtn: "" }
                : { id: newId as `DE${number}`, time3: "", btn4: "", time4: "", btn5: "", btn6: "", week2: "", activeBtn: "" };
            
            const newFormData = [...prev];
            newFormData.splice(lastIndex + 1, 0, newBlock);
            
            return newFormData;
        });
    };
    
    const isPUBlock = (block: FormDataItem): block is Extract<FormDataItem, { id: `PU${number}` | "PU" }> => {
        return block.id.startsWith("PU");
    };
    
    const isDEBlock = (block: FormDataItem): block is Extract<FormDataItem, { id: `DE${number}` | "DE" }> => {
        return block.id.startsWith("DE");
    };
    
    const copyToClipboard = () => {
        const textToCopy = formatText();
        
        navigator.clipboard.writeText(textToCopy)
          .then(() => alert("Скопировано!"))
          .catch((err) => console.error("Ошибка копирования:", err));
    };

    return {
        inputChangeHandler,
        buttonClickHandler,
        formData,
        copyToClipboard,
        updateRpmAndCopy,
        activeIcon,
        addNewBlock,
        isPUBlock,
        isDEBlock,
    }
};
