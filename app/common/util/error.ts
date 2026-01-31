// hooks/use-server-message.ts

import { useEffect } from "react";
import { toast } from "sonner"; 

export interface FormState {
  error?: string | null;
  message?: string | null;
  [key: string]: any;
}

export const useServerMessage = (state: FormState | null) => {

  useEffect(() => {
    if (!state) return;

    if (state.error) {
      toast.error("Error", {
        description: state.error,
      });
    }

    else if (state.message) {
      toast.success("Succese", {
        description: state.message,
      });
    }
  }, [state]);
  
};

