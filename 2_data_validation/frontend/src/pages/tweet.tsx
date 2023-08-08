import axios from "axios";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

let formDataValidator = z.object({
  message: z.string().min(5).max(100).includes("@"),
  private: z.boolean(),
});

type formData = z.infer<typeof formDataValidator>;

function tweet() {
  function clickHandler(data: formData) {
    console.log(data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(formDataValidator),
  });

  return (
    <>
      <h2>Tweet form</h2>
      <form onSubmit={handleSubmit(clickHandler)}>
        <label htmlFor="msg">Message</label>
        <br></br>
        <textarea id="msg" {...register("message")}></textarea>
        <br></br>
        {errors.message && <p>{errors.message.message}</p>}
        <label htmlFor="private"> Do you want to make this private?</label>
        <input type="checkbox" id="private" {...register("private")}></input>
        {errors.private && <p>{errors.private.message}</p>}
        <button>Save</button>
      </form>
    </>
  );
}

export default tweet;
