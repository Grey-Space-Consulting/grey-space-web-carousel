
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface OnePagerHeaderProps {
  logoUrl: string | null;
}

const OnePagerHeader = ({ logoUrl }: OnePagerHeaderProps) => {
  return (
    <div className="flex justify-between items-center border-b border-border pb-4 mb-6">
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10 rounded-md">
          <AvatarImage src={logoUrl || ""} alt="Grey Space Logo" />
          <AvatarFallback className="bg-primary text-white font-bold">GS</AvatarFallback>
        </Avatar>
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
