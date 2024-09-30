import { IconButton, Typography } from '@material-tailwind/react';

export type Props = {
  title: string;
  onClose: () => void;
};
export function RightSidebarHeader({ title, onClose }: Props) {
  return (
    <div className="sticky top-0 bg-white z-[1]">
      <div className="flex items-center justify-between p-[15px] pb-[8px]">
        <Typography variant="h6" color="blue-gray" className="mr-3">
          {title}
        </Typography>

        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>

      <hr className="border-blue-gray-50" />
    </div>
  );
}
