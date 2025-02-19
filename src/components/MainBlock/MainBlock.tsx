import silver from "../../assets/silver.jpg";
import {BookmarkIcon, CalculatorIcon, ClockIcon, PlusIcon} from "@heroicons/react/24/outline";
import './MainBlock.css';
import {UseMainBlock} from "./useMainBlock.ts";

export const MainBlock = () => {
    const {
        inputChangeHandler,
        buttonClickHandler,
        formData,
        copyToClipboard,
        updateRpmAndCopy,
        activeIcon,
        addNewBlock,
        isDEBlock,
        isPUBlock,
      
    } = UseMainBlock();
    
    
    return (
        <div className='main-block'>
            <div className='block-image'>
                <img className='image-silver' src={silver} alt="silver"/>
            </div>
            <div className='block-1'>
                <h2 className='main-text'>PU</h2>
                <div className='block-form'>
                    <button className='btn-plus' onClick={() => addNewBlock('PU')}>
                        <PlusIcon/>
                    </button>
                    <div className='block-pu-de'>
                        {formData && formData.map((block) => (
                          isPUBlock(block) ? (
                            <form className='form-pu-de' name="PU" key={block.id}>
                                <div className='input-container shadow'>
                                    <ClockIcon className='icon-time'/>
                                    <input className='input-time'
                                           placeholder='00:00'
                                           id='time1'
                                           type='text'
                                           name='time1'
                                           value={block.time1 || ""}
                                           onChange={(e) => inputChangeHandler(block.id, "time1", e.target.value)}
                                    />
                                </div>
                                
                                <div className='btn-container shadow'>
                                    <button
                                      className={`btn-word ${block.activeBtn === "btn1" ? "active" : ""}`}
                                      id='btn1'
                                      type='button'
                                      name='btn1'
                                      onClick={() => buttonClickHandler(block.id, "btn1", "until")}
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
                                           value={block.time2 || ""}
                                           onChange={(e) => inputChangeHandler(block.id, "time2", e.target.value)}
                                    />
                                </div>
                                
                                
                                <div className='btn-container shadow'>
                                    <button
                                      className={`btn-word ${block.activeBtn === "btn2" ? "active" : ""}`}
                                      id="btn2"
                                      type="button"
                                      name="btn2"
                                      onClick={() => buttonClickHandler(block.id, "btn2", "FCFS")}
                                    >
                                        fcfs
                                    </button>
                                </div>
                                
                                <div className='btn-container shadow'>
                                    <button
                                      className={`btn-word ${block.activeBtn === "btn3" ? "active" : ""}`}
                                      id="btn3"
                                      type="button"
                                      name="btn3"
                                      onClick={() => buttonClickHandler(block.id, "btn3", "appt")}
                                    >
                                        appt
                                    </button>
                                </div>
                                
                                <label className='week-container shadow'>
                                    <select className="select-weekday"
                                            name="week1"
                                            value={block.week1 || ""}
                                            onChange={(e) => inputChangeHandler(block.id, "week1", e.target.value)}
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
                          ) : null
                        ))}
                    </div>
                </div>
            </div>
            
            <div className='block-2'>
                <h2 className='main-text'>DE</h2>
                <div className='block-form'>
                    <button className='btn-plus' onClick={() => addNewBlock('DE')}>
                        <PlusIcon/>
                    </button>
                    <div className='block-pu-de'>
                        {formData && formData.map((block) => (
                          isDEBlock(block) ? (
                            <form className='form-pu-de' name="DE" key={block.id}>
                                <div className='input-container shadow'>
                                    <ClockIcon className='icon-time'/>
                                    <input className='input-time'
                                           placeholder="00:00"
                                           id='time3'
                                           type='text'
                                           name='time3'
                                           value={block.time3 || ""}
                                           onChange={(e) => inputChangeHandler(block.id, "time3", e.target.value)}
                                    />
                                </div>
                                
                                <div className='btn-container shadow'>
                                    <button
                                      className={`btn-word ${block.activeBtn === "btn4" ? "active" : ""}`}
                                      id='btn4'
                                      type='button'
                                      name='btn4'
                                      onClick={() => buttonClickHandler(block.id, "btn4", "until")}
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
                                           value={block.time4 || ""}
                                           onChange={(e) => inputChangeHandler(block.id, "time4", e.target.value)}
                                    />
                                </div>
                                
                                <div className='btn-container shadow'>
                                    <button
                                      className={`btn-word ${block.activeBtn === "btn5" ? "active" : ""}`}
                                      id='btn5'
                                      type='button'
                                      name='btn5'
                                      onClick={() => buttonClickHandler(block.id, "btn5", "FCFS")}
                                    >
                                        fcfs
                                    </button>
                                </div>
                                
                                <div className='btn-container shadow'>
                                    <button
                                      className={`btn-word ${block.activeBtn === "btn6" ? "active" : ""}`}
                                      id='btn6'
                                      type='button'
                                      name='btn6'
                                      onClick={() => buttonClickHandler(block.id, "btn6", "appt")}
                                    >
                                        appt
                                    </button>
                                </div>
                                
                                <div className='week-container shadow'>
                                    <select className="select-weekday"
                                            name="week2"
                                            value={block.week2 || ""}
                                            onChange={(e) => inputChangeHandler(block.id, "week2", e.target.value)}
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
                          ) : null
                        ))}
                    </div>
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
                    <button className='btn-save' onClick={copyToClipboard}>Save <BookmarkIcon
                      className='btn-save-icon'/></button>
                </div>
            </div>
            )};