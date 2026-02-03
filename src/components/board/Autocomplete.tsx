import { useState, useEffect, useRef } from "react";

interface AutocompleteProps {
    value: string;
    onChange: (value: string) => void;
    suggestions: string[];
    placeholder?: string;
    className?: string;
    autoFocus?: boolean;
    minChars?: number; // 최소 입력 글자 수
}

export function Autocomplete({
    value,
    onChange,
    suggestions,
    placeholder = "",
    className = "",
    autoFocus = false,
    minChars = 1,
}: AutocompleteProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // 입력값 변경 시 필터링
    useEffect(() => {
        if (value.length >= minChars) {
            const filtered = suggestions.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            ).slice(0, 10); // 최대 10개만 표시

            setFilteredSuggestions(filtered);

            // 입력값이 필터 결과 중 하나와 정확히 일치하면 리스트 닫기
            const exactMatch = filtered.length === 1 && filtered[0] === value;
            setIsOpen(filtered.length > 0 && !exactMatch);
        } else {
            setFilteredSuggestions([]);
            setIsOpen(false);
        }
        setHighlightedIndex(-1);
    }, [value, suggestions, minChars]);

    // 외부 클릭 감지
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (suggestion: string) => {
        onChange(suggestion);
        setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpen) return;

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setHighlightedIndex(prev =>
                    prev < filteredSuggestions.length - 1 ? prev + 1 : prev
                );
                break;
            case "ArrowUp":
                e.preventDefault();
                setHighlightedIndex(prev => (prev > 0 ? prev - 1 : -1));
                break;
            case "Enter":
                e.preventDefault();
                if (highlightedIndex >= 0) {
                    handleSelect(filteredSuggestions[highlightedIndex]);
                }
                break;
            case "Escape":
                setIsOpen(false);
                break;
        }
    };

    return (
        <div ref={wrapperRef} className="relative">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className={className}
                autoFocus={autoFocus}
            />

            {isOpen && filteredSuggestions.length > 0 && (
                <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={suggestion}
                            onClick={() => handleSelect(suggestion)}
                            className={`px-3 py-2 cursor-pointer text-sm ${index === highlightedIndex
                                ? "bg-purple-50 text-purple-700"
                                : "hover:bg-gray-50"
                                }`}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
