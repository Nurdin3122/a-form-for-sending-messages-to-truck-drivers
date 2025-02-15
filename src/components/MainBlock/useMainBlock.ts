import {useState} from "react";
import {FormDataItem} from "../../types.ts";



export const UseMainBlock = () => {
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
    const [activeIcon, newActiveIcon] = useState<boolean>(false);

    const inputChangeHandler = (id: string, field: string, value: string | number) => {
        setFormData((prev) =>
            prev.map((block) =>
                block.id === id ? { ...block, [field]: value } : block
            )
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
                switch (block.id) {
                    case "PU": {
                        const parts = [block.time1, block.btn1, block.time2, block.btn2, block.week1]
                            .filter(Boolean)
                            .join(" ");
                        return parts ? `PU ${parts}` : "";
                    }
                    case "DE": {
                        const parts = [block.time3, block.btn4, block.time4, block.btn5, block.week2]
                            .filter(Boolean)
                            .join(" ");
                        return parts ? `DE ${parts}` : "";
                    }
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

    const copyToClipboard = () => {
        const textToCopy = formatText();

        navigator.clipboard.writeText(textToCopy)
            .then(() => alert("Скопировано!"))
            .catch((err) => console.error("Ошибка копирования:", err));
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

    return {
        inputChangeHandler,
        buttonClickHandler,
        formData,
        copyToClipboard,
        updateRpmAndCopy,
        activeIcon
    }
};
