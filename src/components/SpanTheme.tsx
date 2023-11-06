type Props = {
  name: string | undefined;
  icon?: React.ReactNode;
};
export default function SpanTheme({ name, icon }: Props) {
  return (
    <>
      <span className="px-2">{name} theme</span>
      {icon}
    </>
  );
}
