import {useState} from "react";
import {FormDataItem} from "../../types.ts";



export const UseMainBlock = () => {
    const [formData, setFormData] = useState<FormDataItem[]>([
        { id: "PU", time1: "", btn1: "", time2: "", btn2: "", btn3: "", week1: "" },
        { id: "DE", time3: "", btn4: "", time4: "", btn5: "", btn6: "", week2: "" },
        { id: "DH", Dh: 0,},
        { id: "total", Total: 0,},
        { id: "RPM", RPM: 0,},
        { id: "cost", Cost: 0,},
        { id: "temp", Temp:0 },
        { id: "Required", Required: "",},
        {id: "Commodity", Commodity: "" },
    ]);

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
                block.id === id ? { ...block, [field]: value } : block
            )
        );
    };

    const formatText = () => {
        return formData.map((block) => {
            switch (block.id) {
                case "PU":
                    return `PU ${block.time1} ${block.btn1} ${block.time2} ${block.btn2} ${block.week1}`.trim();
                case "DE":
                    return `DE ${block.time3} ${block.btn4} ${block.time4} ${block.btn5} ${block.week2}`.trim();
                case "DH":
                    return `DH-${block.Dh}ml`;
                case "total":
                    return `total-${block.Total}ml`;
                case "RPM":
                    return `${block.RPM}$RPM`;
                case "cost":
                    return `${block.Cost}$ cost`;
                case "temp":
                    return `${block.Temp} temp`;
                case "Required":
                    return `required: ${block.Required}`;
                case "Commodity":
                    return `commodity: ${block.Commodity}`;
                default:
                    return "";
            }
        }).join("\n");
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
    };


    return {
        inputChangeHandler,
        buttonClickHandler,
        formData,
        copyToClipboard,
        updateRpmAndCopy,
    }
};
