import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formDataValidator = z.object({
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
});

type formData = z.infer<typeof formDataValidator>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(formDataValidator),
  });

  function clickHandler(data: formData) {
    let p1 = data.password;
    let p2 = data.confirmPassword;

    if (p1 != p2) {
      console.log("password mistmatch");
    }else{
      console.log("done")
    }
  }

  return (
    <>
      <h1>Register a new user</h1>
      <form onSubmit={handleSubmit(clickHandler)}>
        <label htmlFor="email">Email</label>
        <br></br>
        <input type="email" id="email" {...register("email")} />
        <br></br>
        <label htmlFor="password">Password</label>
        <br></br>
        <input type="password" id="password" {...register("password")} />
        <br></br>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <br></br>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
