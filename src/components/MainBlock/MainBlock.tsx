import silver from "../../assets/silver.jpg";
import {BookmarkIcon, ClockIcon, PlusIcon, CalculatorIcon} from "@heroicons/react/24/outline";
import './MainBlock.css';
import {UseMainBlock} from "./useMainBlock.ts";

export const MainBlock = () => {
    const {
        inputChangeHandler,
        buttonClickHandler,
        formData,
        updateRpmAndCopy,
        copyToClipboard,
        activeIcon,
    } = UseMainBlock();

    return (
        <div className='main-block'>
            <div className='block-image'>
                <img className='image-silver' src={silver} alt="silver"/>
            </div>
            <div className='block-1'>
                <h2 className='main-text'>Pu</h2>
                <div className='block-pu-de'>
                    <button className='btn-plus'>
                        <PlusIcon/>
                    </button>
                    <form className='form-pu-de' name="PU">
                        <div className='input-container shadow'>
                            <ClockIcon className='icon-time'/>
                            <input className='input-time'
                                   placeholder='00:00'
                                   id='time1'
                                   type='text'
                                   name='time1'
                                   value={formData.find((block) => block.id === "PU")?.time1 || ""}
                                   onChange={(e) => inputChangeHandler("PU", "time1", e.target.value)}
                            />
                        </div>

                        <div className='btn-container shadow'>
                            <button
                                className={`btn-word ${formData.find((block) => block.id === "PU")?.activeBtn === "btn1" ? "active" : ""}`}
                                id='btn1'
                                type='button'
                                name='btn1'
                                onClick={() => buttonClickHandler("PU", "btn1", "until")}
                            >
                                until
                            </button>
                        </div>

                        <div className='input-container shadow'>
                            <ClockIcon className='icon-time'/>
                            <input className='input-time'
                                   placeholder="00:00"
                                   id='time2'
                                   type='text'
                                   name='time2'
                                   value={formData.find((block) => block.id === "PU")?.time2 || ""}
                                   onChange={(e) => inputChangeHandler("PU", "time2", e.target.value)}
                            />
                        </div>

                        <div className='btn-container shadow'>
                            <button
                                className={`btn-word ${formData.find((block) => block.id === "PU")?.activeBtn === "btn2" ? "active" : ""}`}
                                id="btn2"
                                type="button"
                                name="btn2"
                                onClick={() => buttonClickHandler("PU", "btn2", "FCFS")}
                            >
                                fcfs
                            </button>
                        </div>

                        <div className='btn-container shadow'>
                            <button
                                className={`btn-word ${formData.find((block) => block.id === "PU")?.activeBtn === "btn3" ? "active" : ""}`}
                                id="btn3"
                                type="button"
                                name="btn3"
                                onClick={() => buttonClickHandler("PU", "btn3", "appt")}
                            >
                                appt
                            </button>
                        </div>

                        <label className='week-container shadow'>
                            <select className="select-weekday"
                                    name="week1"
                                    value={formData.find((block) => block.id === "PU")?.week1 || ""}
                                    onChange={(e) => inputChangeHandler("PU", "week1", e.target.value)}
                            >
                                <option value="">Choose a day</option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                                <option value="sunday">Sunday</option>
                            </select>
                        </label>
                    </form>
                </div>
            </div>
            <div className='block-2'>
                <h2 className='main-text'>DE</h2>
                <div className='block-pu-de'>
                    <button className='btn-plus'>
                        <PlusIcon/>
                    </button>
                    <form className='form-pu-de' name="DE">

                        <div className='input-container shadow'>
                            <ClockIcon className='icon-time'/>
                            <input className='input-time'
                                   placeholder="00:00"
                                   id='time3'
                                   type='text'
                                   name='time3'
                                   value={formData.find((block) => block.id === "DE")?.time3 || ""}
                                   onChange={(e) => inputChangeHandler("DE", "time3", e.target.value)}
                            />
                        </div>

                        <div className='btn-container shadow'>
                            <button
                                className={`btn-word ${formData.find((block) => block.id === "DE")?.activeBtn === "btn4" ? "active" : ""}`}
                                id='btn4'
                                type='button'
                                name='btn4'
                                onClick={() => buttonClickHandler("DE", "btn4", "until")}
                            >
                                until
                            </button>
                        </div>

                        <div className='input-container shadow'>
                            <ClockIcon className='icon-time'/>
                            <input className='input-time'
                                   placeholder="00:00"
                                   id='time4'
                                   type='text'
                                   name='time4'
                                   value={formData.find((block) => block.id === "DE")?.time4 || ""}
                                   onChange={(e) => inputChangeHandler("DE", "time4", e.target.value)}
                            />
                        </div>

                        <div className='btn-container shadow'>
                            <button
                                className={`btn-word ${formData.find((block) => block.id === "DE")?.activeBtn === "btn5" ? "active" : ""}`}
                                id='btn5'
                                type='button'
                                name='btn5'
                                onClick={() => buttonClickHandler("DE", "btn5", "FCFS")}
                            >
                                fcfs
                            </button>
                        </div>

                        <div className='btn-container shadow'>
                            <button
                                className={`btn-word ${formData.find((block) => block.id === "DE")?.activeBtn === "btn6" ? "active" : ""}`}
                                id='btn6'
                                type='button'
                                name='btn6'
                                onClick={() => buttonClickHandler("DE", "btn6", "appt")}
                            >
                                appt
                            </button>
                        </div>

                        <div className='week-container shadow'>
                            <select className="select-weekday"
                                    name="week2"
                                    value={formData.find((block) => block.id === "DE")?.week2 || ""}
                                    onChange={(e) => inputChangeHandler("DE", "week2", e.target.value)}
                            >
                                <option value="">Choose a day</option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                                <option value="sunday">Sunday</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <div className='block-3'>
                <form>
                    <div className='form-block-3'>
                        <div className='input-group'>
                            <div className='input-container shadow'>
                                <input className='input-form-block-3'
                                       placeholder="DH"
                                       id='DH'
                                       type='number'
                                       name='DH'
                                       value={formData.find((block) => block.id === "DH")?.Dh || ""}
                                       onChange={(e) => inputChangeHandler("DH", "Dh", e.target.value)}
                                />
                            </div>
                            <div className='input-container shadow'>
                                <input className='input-form-block-3'
                                       placeholder="Rpm"
                                       id='RPM'
                                       type='number'
                                       name='RPM'
                                       value={formData.find((block) => block.id === "RPM")?.RPM || ""}
                                       onChange={(e) => inputChangeHandler("RPM", "RPM", e.target.value)}

                                />
                            </div>
                            <div className='input-container shadow'>
                                <input className='input-form-block-3'
                                       placeholder="Temp"
                                       id='temp'
                                       type='number'
                                       name='temp'
                                       value={formData.find((block) => block.id === "temp")?.Temp || ""}
                                       onChange={(e) => inputChangeHandler("temp", "Temp", e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='input-group'>
                            <div className='input-container shadow'>
                                <input className='input-form-block-3'
                                       placeholder="Total"
                                       id='total'
                                       type='number'
                                       name='total'
                                       value={formData.find((block) => block.id === "total")?.Total || ""}
                                       onChange={(e) => inputChangeHandler("total", "Total", e.target.value)}
                                />
                            </div>
                            <div className='input-container shadow'>
                                <input className='input-form-block-3'
                                       placeholder="Cost"
                                       id='cost'
                                       type='number'
                                       name='cost'
                                       value={formData.find((block) => block.id === "cost")?.Cost || ""}
                                       onChange={(e) => inputChangeHandler("cost", "Cost", e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='block-btn-calculate'>
                                <button className={`btn-calculate ${activeIcon ? 'active' : ''}`}
                                        id='btn-cost'
                                        type='button'
                                        name='btn-cost'
                                        onClick={updateRpmAndCopy}
                                >
                                    <CalculatorIcon className='calculate-icon'/>
                                </button>
                        </div>
                    </div>
                </form>


                <form>
                    <div className='form-2-block-3'>
                        <h3 className='main-text title-form-2-block-3'>Required</h3>
                        <div className='input-container shadow'>
                            <input className='input-form-2-block-3'
                                   id='Required'
                                   type='text'
                                   name='Required'
                                   value={formData.find((block) => block.id === "Required")?.Required || ""}
                                   onChange={(e) => inputChangeHandler("Required", "Required", e.target.value)}
                            />
                        </div>

                        <h3 className='main-text'>Commodity</h3>
                        <div className='input-container shadow'>
                            <input className='input-form-2-block-3'
                                   id='Commodity'
                                   type='text'
                                   name='Commodity'
                                   value={formData.find((block) => block.id === "Commodity")?.Commodity || ""}
                                   onChange={(e) => inputChangeHandler("Commodity", "Commodity", e.target.value)}
                            />
                        </div>
                    </div>
                </form>


            </div>
            <div className='block-btn-save shadow'>
                <button className='btn-save' onClick={copyToClipboard}>Save <BookmarkIcon className='btn-save-icon'/></button>
            </div>
        </div>
    );
};