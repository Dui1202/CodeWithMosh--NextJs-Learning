type Props = {
  params: {
    id: number;
  };
};

export default function UserDetail({ params: { id } }: Props) {
  return <div>UserDetail {id}</div>;
}
