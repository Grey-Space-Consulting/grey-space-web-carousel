
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface OnePagerHeaderProps {
  logoUrl: string | null;
  avatarUrl: string | null;
  onAvatarUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OnePagerHeader = ({ logoUrl, avatarUrl, onAvatarUpload }: OnePagerHeaderProps) => {
  return (
    <div className="flex justify-between items-center border-b border-border pb-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="relative group">
          <Avatar className="w-10 h-10 rounded-md">
            <AvatarImage src={avatarUrl || ""} alt="Avatar" />
            <AvatarFallback className="bg-primary text-white font-bold">GS</AvatarFallback>
          </Avatar>
          <label htmlFor="avatar-upload" className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/40 rounded-md flex items-center justify-center transition-opacity cursor-pointer">
            <span className="text-white text-xs">Change</span>
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={onAvatarUpload}
            className="hidden"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">GREY SPACE</h1>
          <p className="text-muted-foreground">Operations Technology Consultants</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium">greyspace.co</p>
        <p className="text-sm text-muted-foreground">hudson@greyspace.co</p>
      </div>
    </div>
  );
};

export default OnePagerHeader;
