import {
  Dialog as UIDialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Typography } from "@/components/ui/typography";
const Dialog = ({
  trigger,
  title,
  subtitle,
  children,
  className,
  open,
  onOpenChange,
  inline,
  inline_desc,
  inline_2,
  inline_desc_2,
}: {
  trigger?: React.ReactElement;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  inline?: string;
  inline_desc?: string;
  inline_2?: string;
  inline_desc_2?: string;
}) => {
  return (
    <UIDialog open={open} onOpenChange={onOpenChange} >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle className="text-left">
            {title && (
              <Typography variant="h1" className="text-[36px] leading-[1.25]">{title}<span className="text-secondary">.</span></Typography>
            )}
          </DialogTitle>
          <DialogDescription className="text-left">
            {subtitle && (
              <Typography variant="lead">{subtitle}</Typography>
            )}
          </DialogDescription>
          {(inline || inline_2) && (
            <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 mb-2">
              {inline && (
                <>
                  <Typography className="text-start text-[12px] font-bold pr-0 sm:pr-4" variant="inline">
                    {inline}
                  </Typography>
                  <Typography className="text-left flex-wrap" variant="inline" className="text-[12px] opacity-80">
                    {inline_desc}
                  </Typography>
                </>
              )}
              {inline_2 && (
                <>
                  <Typography className="text-start text-[12px] font-bold pr-0 sm:pr-4" variant="inline">
                    {inline_2}
                  </Typography>
                  <Typography className="text-left flex-wrap" variant="inline" className="text-[12px] opacity-80">
                    {inline_desc_2}
                  </Typography>
                </>
              )}
            </div>
          )}
        </DialogHeader>
        {children}
      </DialogContent>
    </UIDialog>
  );
};

export default Dialog;
