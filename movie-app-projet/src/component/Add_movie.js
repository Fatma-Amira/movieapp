import React,{useState} from 'react'
import Modal from 'react-modal';
import '../css_component/Add_movie.css'
export default function Add_movie({addmovie}) {

    const [modalIsOpen, setmodalIsOpen] = useState(false)
    const [valueposter,setValueposter]= useState("")
    const [ValueName, setValueName] = useState("")
    const [valueDate, setvalueDate] = useState("")
    const [valueNote, setvalueNote] = useState(0)

   //butto add
    const handleSubmit = () => {
    
        addmovie(valueposter,ValueName,valueDate,valueNote);
        setmodalIsOpen(false)

    };

    //onChange input poster
    const handleChangeposter = e => {
        if (e.target.value.startsWith(' ')) {
            setValueposter("")
            alert("can't start with space")
          }
          else{setValueposter(e.target.value)
            
        }
        }
            //onChange input Name

        const handleChangeName = e => {
            if (e.target.value.startsWith(' ')) {
                setValueName("")
                alert("can't start with space")
              }
              else{
                setValueName(e.target.value)
               
            }
            }
                        //onChange input Date

            const handleChangeDate = e => {
                if (e.target.value.startsWith(' ')) {
                    setvalueDate("")
                    alert("can't start with space")
                  }
                  else{
                    setvalueDate(e.target.value)
                }
                }
                        //onChange input Note
                        const handleChangeNote = e => {
                         setvalueNote(e.target.value)
                                } 
                        return (
        <div>
        <i class="fas fa-folder-plus" onClick={()=>setmodalIsOpen(true)}></i>
          <Modal className="Modal" isOpen={modalIsOpen}>
            <label >poster:<input  type="url" onChange={handleChangeposter}/></label>
            <label >Name:<input type="text" onChange={handleChangeName}/></label>
           <label >Date de production:<input type="Date" onChange={handleChangeDate} /></label>
           <label for="note">Choose a note:</label>
           <select id="note" name="note" onChange={handleChangeNote}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               </select>
               <div className="btn-modal">
             <i class="fas fa-plus-square" onClick={handleSubmit}></i>
             <i class="fas fa-window-close"  onClick={()=>setmodalIsOpen(false)}></i>
              </div>
          </Modal>
        </div>
    )
}
