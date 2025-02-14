import {useState} from "react";



export const UseMainBlock = () => {
    const [formData, setFormData] = useState([
        { id: "PU", time1: "", btn1: "", time2: "", btn2: "", btn3: "", week1: "" },
        { id: "DE", time3: "", btn4: "", time4: "", btn5: "", btn6: "", week2: "" },
        { id: "Block3", input1Block3: 0, input2Block3: 0, input3Block3: 0, input4Block3: 0 },
        { id: "Block4", input1Block4: "", input2Block4: "" }
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
        // Формируем текст для копирования
        const textToCopy = formData
            .map((block) => {
                return Object.values(block).join(" | "); // Объединяем все значения через |
            })
            .join("\n"); // Разделяем блоки новой строкой

        // Копируем в буфер обмена
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert("Скопировано!"))
            .catch((err) => console.error("Ошибка копирования:", err));
    };

    return {
        inputChangeHandler,
        buttonClickHandler,
        formData,
        copyToClipboard,
    }
};
