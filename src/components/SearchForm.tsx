interface SearchFormProps {
  onSubmit: (topic: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get("topic") as string;
    if (topic === "") {
      alert("Please enter search topic!");
      return;
    }
    onSubmit(topic);
  };

  return (
    <div style={{ border: "1px solid brown", padding: "8px" }}>
      <form action={handleSubmit}>
        <input type="text" name="topic" />
        <br></br>
        <button style={{ margin: "8px auto" }} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
