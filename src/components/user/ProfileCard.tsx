import ProfileIcon from "@components/user/ProfileIcon";
import SignInSignOut from "./SignInSignOut";
import { ReactLink } from "@components/buttons/ReactLink";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "preact/hooks";
import { auth } from "@firebase/client";
import ProfileCardSkeleton from "@components/skeletons/ProfileCardSkeleton";

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

  const [ userData, setUserData ] = useState<User>();
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const subscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          isLoggedIn: true,
          uid: user.uid,
          displayName: user.displayName || "Guest",
          email: user.email,
          photoURL: user.photoURL
        });
      } else {
        setUserData({
          isLoggedIn: false,
          uid: "",
          displayName: "Anonymous",
          email: null,
          photoURL: null
        });
      }
    });

    setIsLoading(false);

    // Unsubscriber on unmount
    return subscriber;
  }, []);

  return (
    <>{ isLoading ?
      <ProfileCardSkeleton /> :

      <div class="flex">

        <div>
          <ProfileIcon
            shape='egg'
            size={iconSize}
            photo={userData?.photoURL}
          />
        </div>

        <div>
          <h3>
            {showPargraph ?
              userData?.displayName :
              (userData?.displayName && userData?.displayName.split(" ")[0]) 
            }
          </h3> 
          <div class="grid gap-4">
            { showPargraph && <div className="overflow-hidden text-ellipsis">{ userData?.email ? userData.email : description }</div> }

            {button ? 
              <ReactLink
                className="px-3"
                href={button.buttonHref}
                size="sm"
              >
                {button.buttonContent}
              </ReactLink>
              : <SignInSignOut />
            }
          </div>
        </div> 
      </div> }
    </>
  );
}
