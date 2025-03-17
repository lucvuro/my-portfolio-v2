import { Button, Dialog, NesContainer, Text } from "@/components";
import { RHFInput } from "@/components/RHF";
import RHFTextarea from "@/components/RHF/RHFTextArea";
import { useSendContactForm } from "@/features/pages/home/hooks/form";
import { useSendContactMutation } from "@/features/pages/home/hooks/mutation";
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
    <>
      <NesContainer withTitle title="Social" isCentered>
        <Link href="https://github.com/lucvuro" target="_blank">
          <i className="nes-icon github is-medium"></i>
        </Link>
        <Link
          href="https://www.linkedin.com/in/lucvuro/"
          target="_blank"
          className="ml-5"
        >
          <i className="nes-icon linkedin is-medium"></i>
        </Link>
        <Link
          href="https://www.instagram.com/lucvuro/"
          target="_blank"
          className="ml-5"
        >
          <i className="nes-icon instagram is-medium"></i>
        </Link>
      </NesContainer>
      <NesContainer withTitle title="Contact" className="mt-10">
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
      <Dialog isOpen={openModal}>
        <Text variant="error"> Thank you for getting in touch with me. ^^</Text>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="primary" onClick={onCloseSuccessModal}>
            Close
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default Contact;
