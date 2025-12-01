interface OrderFormProps {
  // onSubmit: ([...values]: string[]) => void;
  onSubmit: (data: { name: string; text: string }) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    const usertext = formData.get("usertext") as string;
    // onSubmit([username, usertext]);
    onSubmit({ name: username, text: usertext });
  };

  return (
    <div style={{ border: "1px solid brown", padding: "8px" }}>
      <form action={handleSubmit}>
        <input type="text" name="username" />
        <br></br>
        <br></br>
        <textarea name="usertext" />
        <br></br>
        <button style={{ margin: "8px auto" }} type="submit">
          Place order
        </button>
      </form>
    </div>
  );
}
