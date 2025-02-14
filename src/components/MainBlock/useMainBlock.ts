import {useState} from "react";
import {FormDataItem} from "../../types.ts";



export const UseMainBlock = () => {
    const [formData, setFormData] = useState<FormDataItem[]>([
        { id: "PU", time1: "", btn1: "", time2: "", btn2: "", btn3: "", week1: "" },
        { id: "DE", time3: "", btn4: "", time4: "", btn5: "", btn6: "", week2: "" },
        { id: "Block3", Total: 0, Cost: 0, Dh: 0, Rpm: 0, Temp: 0 },
        { id: "Block4", Required: "", Commodity: "" }
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

    const copyToClipboard = () => {
        const textToCopy = formData
            .map((block) => {
                return Object.values(block).join("/n");
            })
            .join("\n");

        navigator.clipboard.writeText(textToCopy)
            .then(() => alert("Скопировано!"))
            .catch((err) => console.error("Ошибка копирования:", err));
    };

    const updateRpmAndCopy = () => {
        setFormData((prev) => {
            return prev.map((block) => {
                if (block.id === "Block3") {
                    const { Cost = 0, Total = 0 } = block as { Cost: number; Total: number };
                    const updatedRpm = Total > 0 ? Number((Cost / Total).toFixed(2)) : 0;

                    return { ...block, Rpm: updatedRpm };
                }
                return block;
            });
        });

        setTimeout(() => copyToClipboard(), 100);
    };

    return {
        inputChangeHandler,
        buttonClickHandler,
        formData,
        copyToClipboard,
        updateRpmAndCopy,
    }
};
