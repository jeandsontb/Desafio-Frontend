import { TextareaHTMLAttributes } from 'react';
import { TextAreaContainer } from "./styled";

const TextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <TextAreaContainer>
      <textarea {...props}>
      </textarea>
    </TextAreaContainer>
  )
}

export default TextArea;