import type { TTextareaProps } from "@/components/Textarea";
import Textarea from "@/components/Textarea";
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
        render={({ field: { onChange, value } }) => {
          return <Textarea onChange={onChange} value={value} {...rest} />;
        }}
      />
    </div>
  );
};

export default RHFTextarea;
