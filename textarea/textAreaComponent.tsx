"use client"
import { useRef, useState } from "react";
import useAutosizeTextArea from "@/utilis/useAutosizeTextArea";

const ShareBoxComponent = () => {
    const [value, setValue] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
  
    useAutosizeTextArea(textAreaRef.current, value);
  
    const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      const val = evt.target?.value;
      setValue(val);
    };
    return(
        <div >
          <textarea 
              id="comment" 
              maxLength={350} 
              className="w-full px-0 text-sm  dark:placeholder-gray-400" 
              placeholder="Write a comment..." required 
              onChange={handleChange}
              ref={textAreaRef}
              rows={4}
              value={value}
              />
        </div>
    )
}

export default ShareBoxComponent
