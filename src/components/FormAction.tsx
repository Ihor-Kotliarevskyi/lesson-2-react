export default function FormAction() {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    console.log("Name:", username);
  };

  return (
    <div style={{ border: "1px solid brown", padding: "8px" }}>
      <form action={handleSubmit}>
        <input
          type="text"
          name="username"
          defaultValue="John Doe"
          placeholder="Your name"
        />
        <br></br>
        <button style={{ margin: "8px auto" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
