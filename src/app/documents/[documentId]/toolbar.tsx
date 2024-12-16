

import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { LucideIcon, Undo2Icon, Redo2Icon, PrinterIcon, SpellCheckIcon, BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { useState } from "react";  // Import useState

interface ToolbarButtonProps {
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon;
}

const ToolbarButton = ({ onClick, isActive, icon: Icon }: ToolbarButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
                isActive && "bg-neutral-200/80"
            )}
        >
            <Icon className="w-4 h-4" />
        </button>
    );
};

const Toolbar = () => {
    const { editor } = useEditorStore();
    console.log("Toolbar editor:", { editor });

    // State to manage which button is active
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const sections = [
        [
            {
                label: "Undo",
                icon: Undo2Icon,
                onClick: () => {
                    editor?.chain().focus().undo().run();
                    setActiveButton("Undo");  // Set active to Undo
                },
            },
            {
                label: "Redo",
                icon: Redo2Icon,
                onClick: () => {
                    editor?.chain().focus().redo().run();
                    setActiveButton("Redo");  // Set active to Redo
                },
            },
            {
                label: "Print",
                icon: PrinterIcon,
                onClick: () => {
                    window.print();
                    setActiveButton("Print");  // Set active to Print
                },
            },
            {
                label: "Spell Check",
                icon: SpellCheckIcon,
                onClick: () => {
                    const current = editor?.view.dom.getAttribute("spellcheck");
                    editor?.view.dom.setAttribute("spellcheck", current === "false" ? "true" : "false");
                    setActiveButton("Spell Check");  // Set active to Spell Check
                },
            },
        ],
        [
            {
                label: "Bold",
                icon: BoldIcon,
                onClick: () => {
                    editor?.chain().focus().toggleBold().run(); // Toggle bold here
                    setActiveButton("Bold"); // Set active to Bold
                },
            },
            {
                label: "Italic",
                icon: ItalicIcon,
                onClick: () => {
                    editor?.chain().focus().toggleItalic().run(); // Toggle bold here
                    setActiveButton("Italic"); // Set active to Bold
                },
            },
            {
                label: "Underline",
                icon: UnderlineIcon,
                onClick: () => {
                    editor?.chain().focus().toggleUnderline().run(); // Toggle bold here
                    setActiveButton("Underline"); // Set active to Bold
                },
            },
        ],
    ];

    return (
        <div className="bg-[#899bba] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto ">

            <div className="flex gap-5">
                <div className="flex">
                    {
                        sections[0].map((item) => (
                            <ToolbarButton
                                key={item.label}
                                {...item}
                                isActive={activeButton === item.label}
                            />
                        ))
                    }
                </div>
                <div className="flex">
                    {
                        sections[1].map((item) => (
                            <ToolbarButton
                                key={item.label}
                                {...item}
                                isActive={activeButton === item.label}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="translate-x-5">
            </div>
        </div>
    );
};

export default Toolbar;


