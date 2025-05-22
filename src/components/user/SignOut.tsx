import SimpleButton from "@components/buttons/SimpleButton";

interface Props {
  children: string;
}

export default function SignOut({ children }: Props) {
  return (
    <form class="!m-0" action="/api/auth/signout">
      <SimpleButton>
        {children}
      </SimpleButton>
    </form>
  );
}
