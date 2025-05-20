import ProfileIcon from "@components/user/ProfileIcon";
import SpecificHeading from '@components/headings/SpecificHeading';
import { $userInfo } from '@stores/userInfoStore';
import { useStore } from '@nanostores/preact';

interface Props {
  iconSize: 'large' | 'small';
  description: string | undefined;
  showPargraph: boolean;
  button: {
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

      <div class="gap-2">
        <SpecificHeading heading='h3'>{ user.displayName }</SpecificHeading> 
        <div>
          { showPargraph ? <div>{ description ? description : user.email }</div> : "" }
          <a href={button.buttonHref}>
            <button>{button.buttonContent}</button>
          </a>
        </div>
      </div> 
    </div>
  );
}
