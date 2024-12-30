"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
  avatar: string; // Path to avatar image
  avatarName: string; // Name to display
  stepTitle: string; // Title for the step
  description: string; // Description of the card
}

export function Card({ avatar, avatarName, stepTitle, description }: CardProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1732452792153-6d244db8dc01?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover"
        )}
      >
        {/* for bg dark */}
        <div className="absolute inset-0 bg-[#0a0f34] bg-opacity-60 group-hover:bg-opacity-70 transition duration-300"></div>
        {/* for hover effect */}
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-[#436ef5] opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={avatar} // Dynamic avatar image
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {avatarName} {/* Dynamic avatar name */}
            </p>
            <p className="text-sm text-gray-400">7 min update</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {stepTitle} {/* Dynamic step title */}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {description} {/* Dynamic description */}
          </p>
        </div>
      </div>
    </div>
  );
}
