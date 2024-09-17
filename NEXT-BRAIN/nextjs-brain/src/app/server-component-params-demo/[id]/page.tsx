export const serverComponentDemo = ({
  params,
}: {
  params: { id: string };
}): JSX.Element => {
  return <div>{`show me the dummy param is ${params.id}`}</div>;
};
