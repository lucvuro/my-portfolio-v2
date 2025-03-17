import type { TContactPayload } from "@/services/googleService";
import GoogleService from "@/services/googleService";
import type { TGeneralMutationHook } from "@/types/common";
import { useState } from "react";

export const useSendContactMutation = (options: TGeneralMutationHook) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const mutate = async (payload: TContactPayload) => {
    setIsLoading(true);
    setError(false);
    try {
      await GoogleService.sendContactFormService(payload);
      options.onSucess?.();
    } catch (e: any) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    mutate,
  };
};
