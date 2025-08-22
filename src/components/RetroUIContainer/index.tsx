import { Card } from "@/components/retroui/Card";

export type TRetroUIContainerProps = React.PropsWithChildren & {
  title?: string;
  className?: string;
  withTitle?: boolean;
};

export default function RetroUIContainer({
  title,
  className,
  withTitle,
  children,
}: TRetroUIContainerProps) {
  return (
    <Card className={className}>
      {withTitle && (
        <Card.Header>
          <Card.Title className="font-head font-bold">{title}</Card.Title>
        </Card.Header>
      )}
      <Card.Content>{children}</Card.Content>
    </Card>
  );
}
