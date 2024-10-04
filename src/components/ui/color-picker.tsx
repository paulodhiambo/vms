import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const colors = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
    '#FFA500', '#800080', '#008000', '#000080', '#8B4513', '#FF69B4'
];

export const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="w-[120px] justify-start text-left font-normal"
                    style={{ backgroundColor: selectedColor }}
                >
                    <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: selectedColor }} />
                    {selectedColor}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
                <div className="grid grid-cols-6 gap-2">
                    {colors.map((color) => (
                        <Button
                            key={color}
                            className="w-8 h-8 rounded-full p-0"
                            style={{ backgroundColor: color }}
                            onClick={() => setSelectedColor(color)}
                        />
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default ColorPicker;
