export default function Form() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);
    const username = formData.get("username") as string;
    console.log("Username:", username);
    console.log("target:", form.target.length);
    console.log("className:", form.children[0]);
    console.log("FormData:", formData);

    form.reset();
  };

  return (
    <div style={{ border: "1px solid brown", padding: "8px" }}>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" className="forminput" name="username" />
        <br></br>
        <button
          style={{ margin: "8px auto" }}
          type="submit"
          className="formbtn"
        >
          Submit!!!
        </button>
      </form>
    </div>
  );
}
