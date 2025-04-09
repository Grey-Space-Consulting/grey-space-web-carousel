
import { Button } from "@/components/ui/button";
import { FileDown, Upload } from "lucide-react";

interface OnePagerControlsProps {
  onPrint: () => void;
  onLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OnePagerControls = ({ onPrint, onLogoUpload }: OnePagerControlsProps) => {
  return (
    <div className="print:hidden mb-6 flex justify-between items-center">
      <Button variant="outline" onClick={() => window.history.back()}>
        Back
      </Button>
      <div className="flex gap-2">
        <label htmlFor="logo-upload" className="cursor-pointer">
          <div className="inline-block">
            <Button variant="outline" className="flex items-center gap-2">
              <Upload size={16} />
              Upload Logo
            </Button>
          </div>
          <input
            id="logo-upload"
            type="file"
            accept="image/*"
            onChange={onLogoUpload}
            className="hidden"
          />
        </label>
        <Button onClick={onPrint} className="flex items-center gap-2">
          <FileDown size={16} />
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default OnePagerControls;
