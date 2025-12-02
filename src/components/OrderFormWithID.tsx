import { useId } from "react";

interface OrderData {
  username: string;
  email: string;
  delivery: string;
  deliveryTime: string;
  restrictions: string[];
}

export default function OrderFormWithID() {
  const fieldId = useId();

  const handleOrder = (formData: FormData) => {
    const orderData: OrderData = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      delivery: formData.get("delivery") as string,
      deliveryTime: formData.get("deliveryTime") as string,
      restrictions: formData.getAll("restrictions") as string[],
    };

    console.log(orderData);
  };

  return (
    <div style={{ border: "1px solid brown", padding: "8px" }}>
      <form action={handleOrder}>
        <fieldset>
          <legend>Client info:</legend>
          <label htmlFor={`${fieldId}-username`}>Name</label>
          <br></br>
          <input type="text" name="username" id={`${fieldId}-username`} />
          <br></br>
          <label htmlFor={`${fieldId}-email`}>Email</label>
          <br></br>
          <input type="email" name="email" id={`${fieldId}-email`} />
        </fieldset>

        <fieldset>
          <legend>Delivery method:</legend>
          <label>
            <input type="radio" name="delivery" value="pickup" defaultChecked />
            Pickup
          </label>
          <br></br>
          <label>
            <input type="radio" name="delivery" value="courier" />
            Courier
          </label>
          <br></br>
          <label>
            <input type="radio" name="delivery" value="drone" />
            Drone delivery
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="restrictions" value="vegan" />
            Vegan
          </label>
          <br></br>
          <label>
            <input type="checkbox" name="restrictions" value="gluten-free" />
            Gluten-free
          </label>
          <br></br>
          <label>
            <input type="checkbox" name="restrictions" value="nut-free" />
            Nut-free
          </label>
        </fieldset>

        <fieldset>
          <legend>Preferred delivery time</legend>
          <label htmlFor={`${fieldId}-deliveryTime`}>Choose time:</label>
          <br></br>
          <select
            name="deliveryTime"
            id={`${fieldId}-deliveryTime`}
            defaultValue=""
          >
            <option value="">-- Choose delivery time --</option>
            <option value="morning">Morning (8:00-12:00)</option>
            <option value="afternoon">Afternoon (12:00-16:00)</option>
            <option value="evening">Evening (16:00-20:00)</option>
          </select>
        </fieldset>

        <button style={{ margin: "8px auto" }} type="submit">
          Place order
        </button>
      </form>
    </div>
  );
}
