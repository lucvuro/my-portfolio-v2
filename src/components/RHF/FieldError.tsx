import { CircleAlert } from "lucide-react";

/**
 * The palette is monochrome, so an error cannot lean on red. The icon plus the
 * heavier weight is what marks this apart from ordinary helper text.
 */
const FieldError = ({ message }: { message: string }) => (
  <p
    role="alert"
    className="mt-1 flex items-center gap-1.5 text-sm font-medium text-destructive"
  >
    <CircleAlert size={14} aria-hidden className="shrink-0" />
    {message}
  </p>
);

export default FieldError;
