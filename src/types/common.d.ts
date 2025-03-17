export type TGeneralFormHookOption<T> = {
  onSubmit?: (data: T) => void;
};

export type TRHFProps = {
  control: any;
  name: string;
  title?: string;
};

export type TGeneralMutationHook = {
  onSucess?: () => void;
};
