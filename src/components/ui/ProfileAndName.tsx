
interface Props {
  emoji: string;
  profileName: string;
}

export default function EmojiProfile({ emoji, profileName }: Props) {
  return (
    <div className="flex gap-2">
      <Emoji emoji={emoji} />
      <ProfileName profileName={profileName} />
    </div>
  );
}

function Emoji({ emoji }: Omit<Props, 'profileName'>) {
  return (
    <span 
      className="basis-1/5 shrink grid place-items-center"
    >
      <span 
        className="text-4xl p-3 bg-[var(--sl-color-gray-6)] rounded-full border border-[var(--sl-color-gray-5)]"
      >{emoji}</span>
    </span>
  );
}

function ProfileName({ profileName }: Omit<Props, 'emoji'>) {
  return (
    <h2 className="!m-0 basis-4/5 flex items-center">{profileName}</h2>
  );
} 
