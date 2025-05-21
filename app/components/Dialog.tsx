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
  title: string;
  subtitle: string;
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
    <UIDialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>
            <Typography className="text-left" variant="h3">
              {title}
              <span className="text-secondary">.</span>
            </Typography>
          </DialogTitle>
          <DialogDescription>
            <Typography className="text-left" variant="lead">
              {subtitle}
            </Typography>
          </DialogDescription>
          {inline && (
            <div className="flex gap-2">
              <Typography className="text-left font-bold pr-4" variant="inline">
                {inline}
              </Typography>
              <Typography className="text-left flex-wrap" variant="inline">
                {inline_desc}
              </Typography>
            </div>
          )}
          {inline_2 && (
            <div className="flex gap-2">
              <Typography className="text-left font-bold pr-4" variant="inline">
                {inline_2}
              </Typography>
              <Typography className="text-left flex-wrap" variant="inline">
                {inline_desc_2}
              </Typography>
            </div>
          )}
        </DialogHeader>
        {children}
      </DialogContent>
    </UIDialog>
  );
};

export default Dialog;
