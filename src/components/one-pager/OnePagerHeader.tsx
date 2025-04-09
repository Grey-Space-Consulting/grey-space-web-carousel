
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface OnePagerHeaderProps {
  logoUrl: string | null;
  avatarUrl: string | null;
  onAvatarUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OnePagerHeader = ({ logoUrl, avatarUrl, onAvatarUpload }: OnePagerHeaderProps) => {
  return (
    <div className="flex justify-between items-center border-b border-border pb-4 mb-5">
      <div className="flex items-center gap-3">
        <div className="relative group w-10 h-10">
          <Avatar className="w-full h-full rounded-md overflow-hidden">
            <AvatarImage 
              src={avatarUrl || ""} 
              alt="Avatar" 
              className="object-contain" 
            />
            <AvatarFallback className="bg-primary text-white font-bold text-sm">GS</AvatarFallback>
          </Avatar>
          <label htmlFor="avatar-upload" className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/40 rounded-md flex items-center justify-center transition-opacity cursor-pointer">
            <span className="text-white text-[9px]">Change</span>
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
          <p className="text-sm text-muted-foreground">Operations Technology Consultants</p>
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
