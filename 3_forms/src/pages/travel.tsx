import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formDataValidator = z.object({
  destination: z.string().min(2),
  hotelCategory: z.string(),
  mealOption: z.union([
    z.literal("Veg-food"),
    z.literal("Non-veg food"),
    z.literal("Vegan food"),
  ]),
  activitiesScuba: z.boolean(),
  activitiesSkyDiving: z.boolean(),
  activitiesParagliding: z.boolean(),
});

type formData = z.infer<typeof formDataValidator>;

function travel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(formDataValidator),
  });

  function clickHandler(data: formData) {
    console.log(data);
  }
  return (
    <div>
      <h1>Travel Destination</h1>
      <form className="form" onSubmit={handleSubmit(clickHandler)}>
        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          id="destination"
          {...register("destination")}
        ></input>
        {errors.destination && <p>{errors.destination.message}</p>}

        <label htmlFor="hotelCategory">Choose hotel category</label>
        <select id="hotelCategory" {...register("hotelCategory")}>
          <option>3 star</option>
          <option>4 star</option>
          <option>5 star</option>
        </select>
        {errors.hotelCategory && <p>{errors.hotelCategory.message}</p>}

        <h4>Choose meal option</h4>
        <div className="radio-group">
          <label htmlFor="veg">
            <input
              type="radio"
              id="veg"
              value="Veg-food"
              {...register("mealOption")}
            />
            Veg
          </label>
          {errors.mealOption && <p>{errors.mealOption.message}</p>}

          <label htmlFor="nonVeg">
            <input
              type="radio"
              id="nonVeg"
              value="Non-veg food"
              {...register("mealOption")}
            />
            Non-Veg
          </label>
          {errors.mealOption && <p>{errors.mealOption.message}</p>}

          <label htmlFor="vegan">
            <input
              type="radio"
              id="vegan"
              value="Vegan food"
              {...register("mealOption")}
            />{" "}
            Vegan
          </label>
          {errors.mealOption && <p>{errors.mealOption.message}</p>}
        </div>
        <h4>Select activites</h4>
        <div className="check-group">
          <input
            type="checkbox"
            id="scuba"
            {...register("activitiesScuba")}
          ></input>
          <label htmlFor="scuba">Scuba</label>
          {errors.activitiesScuba && <p>{errors.activitiesScuba.message}</p>}

          <input
            type="checkbox"
            id="skyDiving"
            {...register("activitiesSkyDiving")}
          ></input>
          <label htmlFor="skyDiving">Sky diving</label>
          {errors.activitiesSkyDiving && (
            <p>{errors.activitiesSkyDiving.message}</p>
          )}

          <input
            type="checkbox"
            id="paragliding"
            {...register("activitiesParagliding")}
          ></input>
          <label htmlFor="paragiding">Paragliding</label>
          {errors.activitiesParagliding && (
            <p>{errors.activitiesParagliding.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default travel;
