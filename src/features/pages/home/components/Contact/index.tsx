import { Button, NesContainer } from "@/components";
import { RHFInput } from "@/components/RHF";
import RHFTextarea from "@/components/RHF/RHFTextArea";
import { useSendContactForm } from "@/features/pages/home/hooks/form";

const Contact = () => {
  const { method, onSubmit } = useSendContactForm();
  return (
    <NesContainer withTitle title="Contact">
      <form
        onSubmit={method.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <RHFInput
          control={method.control}
          name="name"
          title="Name"
          placeholder="Input your name..."
        />
        <RHFInput
          control={method.control}
          name="email"
          title="Email"
          placeholder="Input your email..."
        />
        <RHFTextarea
          control={method.control}
          name="message"
          title="Message"
          placeholder="Input your message..."
        />
        <Button className="w-fit" type="submit" variant="primary">
          Send
        </Button>
      </form>
    </NesContainer>
  );
};

export default Contact;
