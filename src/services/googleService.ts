import { ENDPOINTS } from "@/constants/endpoints";
import { env } from "@/env";

export type TContactPayload = {
  name: string;
  email: string;
  message: string;
};

export default class GoogleService {
  static async sendContactFormService(contactForm: TContactPayload) {
    const { name, email, message } = contactForm;
    await fetch(
      `${ENDPOINTS.GOOGLE_FORM}${env.NEXT_PUBLIC_GOOGLE_FORM_ID}/formResponse?entry.270574295=${name}&entry.1814110854=${email}&entry.730345583=${message}`,
      {
        mode: "no-cors",
      },
    );
  }
}
