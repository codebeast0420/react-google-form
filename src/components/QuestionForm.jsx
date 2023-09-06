import React, { useState } from "react";
import {
  AddCircleOutline,
  CheckBox,
  Close,
  CropOriginal,
  FilterNone,
  MoreVert,
  OndemandVideo,
  ShortText,
  Subject,
  TextFields,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControlLabel,
  IconButton,
  MenuItem,
  Radio,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { BsFile, BsTrash } from "react-icons/bs";
import { FcRightUp } from "react-icons/fc";
import "./questionform.css";
import axios from "axios";
import FormInstance from "../Instances/formInstance";



function QuestionForm() {
  const [name, setName] = useState(""); // State for the form name
  const [description, setDescription] = useState("");
    const [questions, setQuestions] = useState([
      {
        questionText: "Question",
        questionType: "radio",
        options: [
          { optionText: "Option 1" },
        ],
        answer:false,
        answerKey:"",
        points:0,
        open: true,
        required: false,
      },
    ]);
    const handleFormSubmit = async () => {
      try {
      console.log("first",questions)
        // Make a POST request to your backend endpoint to save the form data
        const response = await axios.post("http://localhost:8000/api/form/submitForm", {
          questions,
          name, // Pass the name state to the backend
          description, // Pass the description state to the backend
          formType: "anonymous", // Replace with the form type
        });
  
        console.log("Form data saved successfully:", response.data);
        // Do something after successful form submission, e.g., redirect to a success page.
      } catch (error) {
        console.error("Error saving form data:", error);
      }
    };
  
    function changeQuestion(text,i){
      var newQuestion =[...questions];
      newQuestion[i].questionText = text
      setQuestions(newQuestion)
 
    }
    function changeOptionValue(text,i,j){
      var optionsQuestion = [...questions]
      optionsQuestion[i].options[j].optionText = text
      setQuestions(optionsQuestion)
   
    }

    function addQuestionType(i,type){
      let qs =[...questions];
      qs[i].questionType = type
      setQuestions(qs)
    }

    function removeOption(i,j){
      var removeOptionQuestion = [...questions]
      if(removeOptionQuestion[i].options.length >1){
        removeOptionQuestion[i].options.splice(j,1)

        setQuestions(removeOptionQuestion)
      
      }
    }
    function addOption(i){
      let optionsOfQuestion = [...questions];
      if(optionsOfQuestion[i].options.length <5){
        optionsOfQuestion[i].options.push({optionText:"Option " + (optionsOfQuestion[i].options.length + 1)})
      }
      else{
        console.log("Max 5 options")
      }
      setQuestions(optionsOfQuestion)
    }
    function copyQuestion(i){
      expandCloseAll()
      let qs = [...questions]
      var newquestion = {...qs[i]}
      setQuestions([...questions,newquestion])
    }

    function deleteQuestion(i){
      let qs = [...questions]
      if(questions.length > 1){
        qs.splice(i,1)
      }
      setQuestions(qs)
    }
    function requiredQuestion(i){
      let reqQuestion = [...questions]
      reqQuestion[i].required = ! reqQuestion[i].required

      setQuestions(reqQuestion)
    }
    function addMoreQuestionField() {
      expandCloseAll()
      setQuestions([
        ...questions,
        {
          questionText: "Question",
          questionType: "radio",
          options: [{ optionText: "Option 1" }],
          open: true,
          required: false,
        }
      ]);
    }
    function expandCloseAll(){
      let qs = [...questions]
      for(let j=0;j<qs.length;j++){
        qs[j].open = false
      }
      setQuestions(qs)
    }
    function handleExpand(i){
      let qs = [...questions]
      for(let j =0;j<qs.length;j++){
        if(i ===j){
          qs[i].open =true
        }
        else{
          qs[j].open = false
        }
      }
      setQuestions(qs)
    }
    function setOptionAnswer(ans,qno){
      let Questions = [...questions]
      Questions[qno].answerKey = ans

      setQuestions(Questions)
     
    }

    function setOptionPoints(points,qno){
      let Questions = [...questions];
      Questions[qno].points = points
      setQuestions(Questions)
     
    }
    function doneAnswer(i){
      let answerOfQuestion = [...questions];
      answerOfQuestion[i].answer = !answerOfQuestion[i].answer
      setQuestions(answerOfQuestion)
      
    }
    function addAnswer(i){
      let answerOfQuestion = [...questions];
      answerOfQuestion[i].answer = !answerOfQuestion[i].answer
      setQuestions(answerOfQuestion)
      
    }
  
    // function onDragEnd(result){
    //   if(!result.destination){
    //     return
    //   }
    //   var itemgg = [...questions]
    //   const itemF = reorder(
    //     itemgg,
    //     result.source.index,
    //     result.destination.index
    //   )
    //   setQuestions(itemF)
    // }
    // const reorder = (list,startIndex,endIndex)=>{
    //   const result = Array.from(list)
    //   const [removed] = result.splice(startIndex,1)
    //   result.splice(endIndex,0,removed)
    //   return result
    // }
    

    
    function questionsUI() {
      return questions.map((ques, i) => (
        <>
        <Accordion
          key={i}
          expanded={questions[i].open}
          className={questions[i].open ? "add_border" : ""}
          onChange={()=>{handleExpand(i)}}
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            elevation={1}
            style={{ width: "100%" }}
          >
            {!questions[i].open ? (
                <div className="saved_questions">

                <Typography style={{fontSize:"15px",fontWeight:"400",letterSpacing:'.1px',lineHeight:'24px',paddingBottom:"8px"}} >
                   {i+1}.  {questions[i].questionText}
                    </Typography>   

                    {ques.options.map((op,j)=>(
                      <div key={j}>
                        <div style={{display:"flex"}}>
                          <FormControlLabel style={{marginLeft:"5px",marginBottom:"5px"}} disabled control={<input type={ques.questionType}
                          color="primary" style={{marginRight:"3px"}} required={ques.type} />} label={
                            <Typography style={{fontFamily:'Roboto,Arial,Sans-serif',
                          fontSize:'13px',
                          fontWeight:'400',
                          letterSpacing:'.2px',
                          lineHeight:'20px',
                          color:'#202124'}}>
                            {ques.options[j].optionText}
                          </Typography>
                          } />
                        </div>

                      </div>
                    ))}

                </div>
            ):""}
          </AccordionSummary>

          <div className="question_boxes">
          {!questions[i].answer ? (
           <AccordionDetails className="add_question">
            <div className="add_question_top">
              <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e)=>{changeQuestion(e.target.value, i)}}/>
              <CropOriginal style={{color:"#5f6368"}} />
              <Select className="select" style={{color:"#5f6368",fontSize:"13px"}}>
                <MenuItem id="text" value="Text" onClick={()=>{addQuestionType(i,"text")}}><Subject style={{marginRight:"10px"}}  />Paragrapg</MenuItem>
                <MenuItem id="checkbox" value="Checkbox" onClick={()=>{addQuestionType(i,"checkbox")}} ><CheckBox style={{marginRight:"10px",color:"#70757a"}} checked />Checked</MenuItem>
                <MenuItem id="radio" value="Radio" onClick={()=>{addQuestionType(i,"radio")}}><Radio style={{marginRight:"10px",color:"#70757a"}} checked />Multiple Choice</MenuItem>


              </Select>

            </div>
            {ques.options.map((op,j)=>(
                      <div className="add_question_body" key={j}>
                        {
                          (ques.questionType!=="text") ?
                          <input type={ques.questionType} style={{marginRight:"10px"}} /> :
                          <ShortText style={{marginRight:"10px"}} />
                        }
                        <div>
                          <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} onChange={(e)=>{changeOptionValue(e.target.value,i,j)}} />
                        </div>
                        <CropOriginal style={{color:"#5f6368"}} />
                        <IconButton aria-label="delete" >
                          <Close onClick={()=>{removeOption(i,j)}}/>
                        </IconButton>

                      </div>
                    ))}

                    {ques.options.length < 5 ? (
                      <div className="add_question_body">
                        <FormControlLabel disabled control={
                          (ques.questionType!== "text") ?
                          <input type={ques.questionType} color="primary" inputProps={{'aria-label':'secondary checkbox'}}
                          style={{marginLeft:"10px",marginRight:"10px"}} disabled />:
                          <ShortText style={{marginRight:"10px"}} />
                        } label={
                          <div>
                            <input type="text" className="text_input" style={{fontSize:"13px",width:"60px"}} placeholder="Add other"/>
                            <Button size="small" onClick={()=>{addOption(i)}} style={{fontSize:"13px",fontWeight:"600",textTransform:'none',color:"#4285f4"}}>Add Option</Button>
                          </div>
                        } />
                      </div>
                    ):""}


                    <div className="add_footer">
                      <div className="add_question_botton_left">
                        <Button size="small" style={{textTransform:"none",color:"#4285f4",fontSize:"13px",fontWeight:"600"}} onClick={()=>{addAnswer(i)}}>
                          <FcRightUp style={{border:"2px solid #4285f4",padding:"2px",marginRight:"8px"}}/>Answer key
                        </Button>

                      </div>
                      <div className="add_question_bottom">
                        <IconButton aria-label="Copy" onClick={()=>{copyQuestion(i)}}>
                          <FilterNone />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={()=>{deleteQuestion(i)}}>
                          <BsTrash />
                        </IconButton>
                        <span style={{color:"#5f6368",fontSize:"13px"}} onClick={()=>{requiredQuestion(i)}}>Required</span><Switch name="checkedA" color="primary" checked />
                        <IconButton >
                          <MoreVert />
                        </IconButton>

                      </div>

                    </div>
           </AccordionDetails>):(
           <AccordionDetails className="add_question">
            <div className="top_header">
              Choose correct answer
            </div>
            <div>
              <div className="question_top">
                <input type="text" className="question" placeholder="Question" value={ques.questionText} disabled/>
                <input type="number" className="points" min="0" step="1" placeholder="0" onChange={(e)=>{setOptionPoints(e.target.value,i)}}/>
              </div>
              {ques.options.map((op,j)=>(
                <div className="add_question_body" key={j} style={{marginLeft:"8px",marginBottom:"10px",marginTop:"5px"}}>
                  <div key={j}>
                    <div style={{display:"flex"}} className="">
                      <div className="form_check">
                        <label style={{fontSize:"13px"}} onClick={()=>{setOptionAnswer(ques.options[j].optionText,i)}}>
                          {(ques.questionType !=="text") ?
                          <input type={ques.questionType}
                          name={ques.questionText}

                          value="option3"
                          className="form_check_input"
                          required={ques.required}
                          style={{marginRight:"10px",marginBottom:"10px",marginTop:"5px"}}
                          />:<ShortText style={{marginLeft:"10px"}} />}

                          {ques.options[j].optionText}
                        </label>
                      </div>

                    </div>

                  </div>

                </div>
              ))}
              <div className="add_question_body">
                <Button size="small" style={{textTransform:"none",color:"#4285f4",fontSize:"13px",fontWeight:"600"}}>
                  <BsFile style={{fontSize:"20px",marginRight:"8px"}}/>Add Answer Feedback
                </Button>
              </div>
              <div className="add_question_bottom">
              <Button variant="outlined" color="primary" size="small" style={{textTransform:"none",color:"#4285f4",fontSize:"12px",fontWeight:"600",marginTop:"12px"}}
              onClick={()=>{doneAnswer(i)}}>Done</Button>
              </div>
            </div>
           </AccordionDetails>
           )}

        {!ques.answer ?(
           <div className="question_edit">
           <AddCircleOutline className="edit" onClick={addMoreQuestionField}/>
           <OndemandVideo className="edit" />
           <CropOriginal className="edit" />
           <TextFields className="edit" />
          </div>):" "} 

          </div>
          
        </Accordion>
        </>
      ));
      
    }
  
    return (
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: "black" }}
                placeholder="Untitled document"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="question_form_top_desc"
                placeholder="Form description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            
          </div>
          {/* <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided,snapshot)=>(
                <div
                {...provided.droppableProps}
                ref = {provided.innerRef}
                >
                {provided.placeholder}
                </div>
                )}
                </Droppable>
              </DragDropContext> */}
              {questionsUI()}
        
              <Button onClick={handleFormSubmit} style={{marginTop:"4px"}} variant='contained' color='primary' href='#contained-buttons'>Submit Form</Button>
        </div>
      </div>
    );
  }
  

export default QuestionForm;
