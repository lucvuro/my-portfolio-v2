import type { TInputProps } from "@/components/Input";
import { Input } from "@/components/retroui/Input";
import type { TRHFProps } from "@/types/common";
import type React from "react";
import { Controller } from "react-hook-form";

export type TRHFInputProps = TRHFProps &
  Omit<TInputProps, "onChange" | "value">;

const RHFInput: React.FC<TRHFInputProps> = ({
  control,
  name,
  title,
  ...rest
}) => {
  return (
    <div className="space-y-1">
      {title && <label htmlFor={name}>{title}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <>
              <Input
                id={name}
                onChange={onChange}
                value={value}
                aria-invalid={!!error?.message}
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

export default RHFInput;
