"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className: string;
  text: string;
  size: btnSize;
};

export const SubmitButton = ({ className, text, size }: SubmitButtonProps) => {
  //code

  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      size={size}
      className={`${className} capitalize w-full`}
    >
      {pending ? (
        <>
          <Loader className="animate-spin" />
          <span>Please wait...</span>
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
};
