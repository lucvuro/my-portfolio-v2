import type { TGeneralFormHookOption } from "@/types/common";
import {
  validationSendContactForm,
  type TSendContactFormSchema,
} from "@/validation/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";

export const useSendContactForm = (
  options: TGeneralFormHookOption<TSendContactFormSchema> = {},
) => {
  const method = useForm<TSendContactFormSchema>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(validationSendContactForm),
  });

  const onSubmit: SubmitHandler<TSendContactFormSchema> = (data) => {
    console.log(data);
    options.onSubmit?.(data);
  };

  return {
    method,
    onSubmit,
  };
};
