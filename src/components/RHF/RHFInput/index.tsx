import type { TInputProps } from "@/components/Input";
import Input from "@/components/Input";
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
    <div className="nes-field">
      {title && <label htmlFor={name}>{title}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Input
              onChange={onChange}
              value={value}
              error={!!error?.message}
              helperText={error?.message}
              {...rest}
            />
          );
        }}
      />
    </div>
  );
};

export default RHFInput;
