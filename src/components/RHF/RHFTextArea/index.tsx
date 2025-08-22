import { Textarea } from "@/components/retroui/Textarea";
import type { TTextareaProps } from "@/components/Textarea";
import type { TRHFProps } from "@/types/common";
import type React from "react";
import { Controller } from "react-hook-form";

export type TRHFTextareaProps = TRHFProps &
  Omit<TTextareaProps, "onChange" | "value">;

const RHFTextarea: React.FC<TRHFTextareaProps> = ({
  control,
  name,
  title,
  ...rest
}) => {
  return (
    <div className="nes-field">
      {title && <label htmlFor={name}>{title}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <>
              <Textarea
                aria-invalid={!!error?.message}
                onChange={onChange}
                value={value}
                {...rest}
              />
              {error?.message && (
                <p className="mt-1 text-sm text-red-400">{error.message}</p>
              )}
            </>
          );
        }}
      />
    </div>
  );
};

export default RHFTextarea;
