export interface Block1 {
    time1: string;
    btn1: string;
    time2: string;
    btn2: string;
    btn3: string;
    week1: string;
}
export interface Block2 {
    time3: string;
    btn4: string;
    time4: string;
    btn5: string;
    btn6: string;
    week2: string;
}

export interface Block3 {
    input1Block3: number;
    input2Block3: number;
    input3Block3: number;
    input4Block3: number;
}

export interface Block4 {
    input1Block4: string;
    input2Block4: string;
}

export interface FormData {
    PU: Block1;
    DE: Block2;
    Block3: Block3;
    Block4: Block4;
}