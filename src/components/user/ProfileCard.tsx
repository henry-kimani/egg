import ProfileIcon from "@components/user/ProfileIcon";
import SpecificHeading from '@components/headings/SpecificHeading';
import { $userInfo } from '@stores/userInfoStore';
import { useStore } from '@nanostores/preact';
import SignInSignOut from "./SignInSignOut";
import { ReactLink } from "@components/buttons/ReactLink";

interface Props {
  iconSize: 'large' | 'small';
  description?: string | undefined;
  showPargraph: boolean;
  button?: {
    buttonHref: string;
    buttonContent: string;
  };
};

export default function ProfileCard(props: Props) {

  const { iconSize, description, showPargraph, button } = props;

  const user = useStore($userInfo);

  return (
    <div class="flex">
      <div>
        <ProfileIcon
          shape='egg'
          size={iconSize}
          photo={user.photoURL}
        />
      </div>

      <div>
        <SpecificHeading heading='h3'>{ user.displayName }</SpecificHeading> 
        <div class="grid gap-4">
          { showPargraph && <div>{ user.email ? user.email : description }</div> }

          {button ? 
            <ReactLink
              href={button.buttonHref}
              size="sm"
            >
              {button.buttonContent}
            </ReactLink>
            : <SignInSignOut />
          }
        </div>
      </div> 
    </div>
  );
}
