import { useInputValue } from "../hooks/useInputValue";

interface FormProps {
    onSubmit: (value: string) => void
}

export const Form = ({onSubmit}: FormProps ) => {
  const { resetValue, ...text } = useInputValue("");

  return (
    <form onSubmit={ e => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue()
    }} >
      <input {...text} />   
    </form>
  );
};
