import { useState } from "react";

export default function useForm(initial = {}) {
  const [inputs, updateImputs] = useState(initial);

  function handleChange(e) {
    updateImputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }
  function resetForm() {
    updateImputs(initial);
  }

  return [inputs, handleChange, resetForm];
}
