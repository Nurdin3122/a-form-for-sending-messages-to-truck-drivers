import './App.css'
import silver from './assets/silver.jpg';
import {PlusIcon, ClockIcon, ChevronDoubleDownIcon, BookmarkIcon} from "@heroicons/react/24/outline";

export const App = () => (
    <>

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
                    <form className='form-pu-de'>
                        <div className='input-container'>
                            <ClockIcon className='icon-time'/>
                            <input className='input-time' placeholder='00:00'/>
                        </div>
                        <div className='btn-container'>
                            <button className='btn-word'>until</button>
                        </div>
                        <div className='input-container'>
                            <ClockIcon className='icon-time'/>
                            <input className='input-time' placeholder="00:00"/>
                        </div>
                        <div className='btn-container'>
                            <button className='btn-word'>fefs</button>
                        </div>
                        <div className='btn-container'>
                            <button className='btn-word'>appt</button>
                        </div>
                        <label className='week-container'>
                            <select className="select-weekday">
                                <option value="">Choose a day</option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                                <option value="sunday">Sunday</option>
                            </select>
                            <ChevronDoubleDownIcon className='arrow-icon'/>
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
                    <form className='form-pu-de'>
                        <div className='input-container'>
                            <ClockIcon className='icon-time'/>
                            <input className='input-time' placeholder="00:00"/>
                        </div>
                        <div className='btn-container'>
                            <button className='btn-word'>until</button>
                        </div>
                        <div className='input-container'>
                            <ClockIcon className='icon-time'/>
                            <input className='input-time' placeholder="00:00"/>
                        </div>
                        <div className='btn-container'>
                            <button className='btn-word'>fefs</button>
                        </div>
                        <div className='btn-container'>
                            <button className='btn-word'>appt</button>
                        </div>
                        <div className='week-container'>
                            <select className="select-weekday">
                                <option value="">Choose a day</option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                                <option value="sunday">Sunday</option>
                            </select>
                            <ChevronDoubleDownIcon className='arrow-icon'/>
                        </div>
                    </form>
                </div>
            </div>
            <div className='block-3'>
                <form>
                    <div className='form-block-3'>
                        <div className='input-group'>
                            <div className='input-container'>
                                <input className='input-form-block-3' placeholder="Total"/>
                            </div>
                            <div className='input-container'>
                                <input className='input-form-block-3' placeholder="Cost"/>
                            </div>
                        </div>

                        <div className='input-group'>
                            <div className='input-container'>
                                <input className='input-form-block-3' placeholder="Dh"/>
                            </div>
                            <div className='input-container'>
                                <input className='input-form-block-3' placeholder="Rpm"/>
                            </div>
                        </div>

                        <div className='input-group'>
                            <div className='input-container'>
                                <input className='input-form-block-3' placeholder="Temp"/>
                            </div>
                        </div>
                    </div>
                </form>


                <form>
                    <div className='form-2-block-3'>
                        <h3 className='main-text title-form-2-block-3'>Required</h3>
                        <div className='input-container'>
                            <input className='input-form-2-block-3'/>
                        </div>

                        <h3 className='main-text'>Commodity</h3>
                        <div className='input-container'>
                            <input className='input-form-2-block-3'/>
                        </div>
                    </div>
                </form>


        </div>
            <div className='block-btn-save'>
                <button className='btn-save'>Save <BookmarkIcon className='btn-save-icon'/></button>
            </div>
        </div>

    </>
);
