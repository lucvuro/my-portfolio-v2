import { Dialog } from "@/components";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import RetroUIContainer from "@/components/RetroUIContainer";
import { RHFInput } from "@/components/RHF";
import RHFTextarea from "@/components/RHF/RHFTextArea";
import { useSendContactForm } from "@/features/pages/home/hooks/form";
import { useSendContactMutation } from "@/features/pages/home/hooks/mutation";
import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [openModal, setIsOpenModal] = useState(false);
  const { mutate } = useSendContactMutation({
    onSucess: () => onContactSuccess(),
  });
  const { method, onSubmit } = useSendContactForm({
    onSubmit: (data) => {
      mutate(data);
    },
  });
  const onContactSuccess = () => {
    method.reset();
    setIsOpenModal(true);
  };

  const onCloseSuccessModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="flex flex-col">
      <RetroUIContainer withTitle title="Social">
        <div className="flex gap-4">
          <Link
            href="https://github.com/lucvuro"
            target="_blank"
            className="border-2 border-border p-2 shadow-sm transition-colors hover:bg-foreground hover:text-background"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lucvuro/"
            target="_blank"
            className="border-2 border-border p-2 shadow-sm transition-colors hover:bg-foreground hover:text-background"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="https://www.instagram.com/lucvuro/"
            target="_blank"
            className="border-2 border-border p-2 shadow-sm transition-colors hover:bg-foreground hover:text-background"
          >
            <Instagram size={24} />
          </Link>
        </div>
      </RetroUIContainer>
      <RetroUIContainer withTitle title="Contact" className="mt-10">
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
          <Button className="w-fit" type="submit">
            Send
          </Button>
        </form>
      </RetroUIContainer>
      <Dialog isOpen={openModal}>
        <Text> Thank you for getting in touch with me. ^^</Text>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button onClick={onCloseSuccessModal}>Close</Button>
        </div>
      </Dialog>
    </div>
  );
};

export default Contact;
